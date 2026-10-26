"""Build the claude.ai Artifact variant of the PWA into artifact/index.html (no SW, no download link).

The Artifact publish then maps docs/ files next to it (see pipeline/ROUTINE.md)."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
src = (ROOT / "docs" / "index.html").read_text("utf-8")
body = re.search(r"<body>(.*)</body>", src, re.S).group(1)
body = re.sub(r'\s*<a id="dl"[^>]*>.*?</a>', "", body)
body = re.sub(r'\s*<p id="installHint".*?</p>', "", body, flags=re.S)
out = ROOT / "artifact"
out.mkdir(exist_ok=True)
(out / "index.html").write_text(
    '<title>Reggeli Brief</title>\n<meta name="theme-color" content="#070b14">\n'
    '<link rel="stylesheet" href="styles.css">\n' + body.strip() + "\n", "utf-8")

# file map for the publish call
files = {p: f"docs/{p}" for p in ["styles.css", "app.js", "orb.js", "vendor/three.module.min.js",
                                  "icons/icon-512.png", "episodes/index.json"]}
for ep in json.loads((ROOT / "docs/episodes/index.json").read_text("utf-8"))["episodes"]:
    for f in ["episode.json", "audio.mp3"]:
        files[f"episodes/{ep['date']}/{f}"] = f"docs/episodes/{ep['date']}/{f}"
print(json.dumps(files, indent=1))
