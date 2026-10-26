# Reggeli Brief

Telefonra telepíthető PWA: hétköznap reggelente kb. 15 perces, kétszereplős magyar podcast és részletes írott hírösszefoglaló
gazdaság, tech/AI, kvantum, világpolitika (EU, Kína, USA, Magyarország) és pályázatok témában. Minden hírnél ott a forráslink.

## Felépítés
- `docs/` – a PWA (GitHub Pages innen szolgálja ki): `index.html`, `app.js` (lejátszó, fejezetek, rovatok), `orb.js` (three.js
  hangra reagáló részecskegömb, hírenként egy „műhold”), `sw.js` (offline cache), `episodes/<dátum>/` (episode.json, script.json, audio.mp3).
- `pipeline/ROUTINE.md` – a napi ütemezett Claude-ügynök utasítása (6 párhuzamos kutató ügynök + főszerkesztő).
- `pipeline/build_episode.py` – script.json → audio.mp3 (edge-tts, hu-HU Noémi + Tamás), fejezetek, animációs burkológörbe, index.json.
- `.github/workflows/build-audio.yml` – push után legenerálja a hangot és visszacommitolja.

## Napi folyamat
1. 05:30 (hétköznap) – ütemezett Claude-ügynök: 6 kutató ügynök párhuzamosan → szerkesztés → `episode.json` + `script.json` → push.
2. GitHub Action: hang generálása → commit.
3. GitHub Pages frissül; az app induláskor a legfrissebb adást tölti be.

## Helyi futtatás
```
python3 -m venv .venv && .venv/bin/pip install -r pipeline/requirements.txt
.venv/bin/python pipeline/build_episode.py 2026-10-26
cd docs && python3 -m http.server 8080
```
