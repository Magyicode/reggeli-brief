Reggeli Brief – készítsd el a MAI napi adást (DATE = a mai dátum, YYYY-MM-DD, Budapest). Projekt: /Users/magyarpeter/Claude/reggeli-brief.
Ha docs/episodes/DATE/audio.mp3 már létezik, állj meg. Kövesd pontosan a pipeline/ROUTINE.md-t (olvasd be először).

Időablak: kedd–péntek: előző nap 06:00-tól ma reggelig; hétfő: péntek 18:00-tól hétfő reggelig (humanoid/kvantum: 3 napos ablak is jó).

A felhasználó kérése: a legfontosabb hírek, NAGYOBB TECH-FÓKUSZ, humanoid robotika külön rovatban (`humanoid`), startup-ökoszisztéma külön rovatban
(`startup`, globális + EU/CEE/magyar), emellett világpolitika, kvantum, politika, pályázatok; mindig EU, Kína, Magyarország, USA.

Lépések:
1. Indíts 8 párhuzamos general-purpose kutató ügynököt egy üzenetben a ROUTINE.md táblázata szerint; mentsd a jelentéseket pipeline/research/DATE/ alá.
2. Írd meg a docs/episodes/DATE/episode.json-t (35–50 hír, mindegyik pontos URL-lel; sections sorrend: piacok, tech, humanoid, startup, kvantum,
   magyarorszag, eu, usa, kina, vilag, palyazatok) és a script.json-t (Noémi+Tamás, 1900–2100 szó, felolvasásra írva, kitalált tény nélkül).
   Minta: docs/episodes/2026-10-26/.
3. `.venv/bin/python pipeline/build_episode.py DATE` — ha 13,5 percnél rövidebb vagy 16,5-nél hosszabb, igazítsd a szöveget és generáld újra.
4. `python3 pipeline/build_artifact.py`, majd Artifact publish a ROUTINE.md 4a pontja szerint
   (url: https://claude.ai/artifact/9JdpEASFYcadpm14CamXUr, root: /Users/magyarpeter/Claude/reggeli-brief, files: a szkript kimenete, icon nélkül).
5. PushNotification a felhasználónak a nap címével és a linkkel.

Ha bármi elakad, akkor is publikáld, ami kész (az írott változat hang nélkül is jó), és a push-értesítésben írd meg a hibát.
