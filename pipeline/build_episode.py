"""Turn an episode's script.json into audio.mp3 + chapters + speech envelope, and update the episode index.

Usage: python pipeline/build_episode.py 2026-10-26

Inputs  (docs/episodes/<date>/):
  episode.json  – written content (sections, sources, ...) without audio fields
  script.json   – {"segments": [{"speaker": "noemi"|"tamas", "section": "<id>", "chapter": "<title>", "text": "..."}]}
Outputs:
  audio.mp3, and episode.json gets duration / chapters / envelope; docs/episodes/index.json updated.
"""
import asyncio
import io
import json
import sys
from pathlib import Path

import edge_tts
from mutagen.mp3 import MP3

ROOT = Path(__file__).resolve().parent.parent
EPISODES = ROOT / "docs" / "episodes"
VOICES = {"noemi": "hu-HU-NoemiNeural", "tamas": "hu-HU-TamasNeural"}
RATE = "+6%"
ENV_HZ = 10
TICK = 10_000_000  # edge-tts offsets are in 100 ns units


async def synth(text, voice):
    """Return (mp3 bytes, [(start_s, end_s), ...] word timings)."""
    com = edge_tts.Communicate(text, voice, rate=RATE, boundary="WordBoundary")
    buf, words = io.BytesIO(), []
    async for chunk in com.stream():
        if chunk["type"] == "audio":
            buf.write(chunk["data"])
        elif chunk["type"] == "WordBoundary":
            s = chunk["offset"] / TICK
            words.append((s, s + chunk["duration"] / TICK))
    return buf.getvalue(), words


async def synth_retry(text, voice, tries=4):
    for i in range(tries):
        try:
            return await synth(text, voice)
        except Exception as e:  # network hiccups
            if i == tries - 1:
                raise
            print(f"  retry ({e})")
            await asyncio.sleep(2 + i * 3)


async def main(date):
    d = EPISODES / date
    script = json.loads((d / "script.json").read_text("utf-8"))
    if isinstance(script, list):  # tolerate a bare segment list
        script = {"segments": script}
    ep = json.loads((d / "episode.json").read_text("utf-8"))

    out = io.BytesIO()
    t = 0.0
    chapters, envelope = [], []
    sem = asyncio.Semaphore(4)

    async def job(seg):
        async with sem:
            return await synth_retry(seg["text"], VOICES[seg.get("speaker", "noemi")])

    results = await asyncio.gather(*(job(s) for s in script["segments"]))

    for seg, (mp3, words) in zip(script["segments"], results):
        dur = MP3(io.BytesIO(mp3)).info.length
        if seg.get("chapter") and (not chapters or chapters[-1]["title"] != seg["chapter"]):
            chapters.append({"t": round(t, 1), "title": seg["chapter"], "section": seg.get("section", "intro")})
        # 10 Hz envelope: 1 while a word is being spoken, softened into 0-9 digits
        n = int(round(dur * ENV_HZ))
        seg_env = [0.0] * n
        for ws, we in words:
            for k in range(int(ws * ENV_HZ), min(n, int(we * ENV_HZ) + 1)):
                seg_env[k] = 1.0
        envelope.extend(seg_env)
        out.write(mp3)
        t += dur

    # smooth + quantize
    sm, prev = [], 0.0
    for v in envelope:
        prev = prev * 0.55 + v * 0.45
        sm.append(str(min(9, int(prev * 9 + 0.5))))

    (d / "audio.mp3").write_bytes(out.getvalue())
    ep.update({"audio": "audio.mp3", "duration": round(t, 1), "chapters": chapters, "envelope": "".join(sm)})
    (d / "episode.json").write_text(json.dumps(ep, ensure_ascii=False, indent=1), "utf-8")

    idx_path = EPISODES / "index.json"
    idx = json.loads(idx_path.read_text("utf-8")) if idx_path.exists() else {"episodes": []}
    idx["episodes"] = [e for e in idx["episodes"] if e["date"] != date]
    idx["episodes"].append({"date": date, "title": ep["title"], "headline": ep.get("headline", ""), "duration": round(t, 1)})
    idx["episodes"].sort(key=lambda e: e["date"], reverse=True)
    idx_path.write_text(json.dumps(idx, ensure_ascii=False, indent=1), "utf-8")

    words = sum(len(s["text"].split()) for s in script["segments"])
    print(f"{date}: {len(script['segments'])} segments, {words} words, {t/60:.1f} min, {len(chapters)} chapters")


if __name__ == "__main__":
    asyncio.run(main(sys.argv[1]))
