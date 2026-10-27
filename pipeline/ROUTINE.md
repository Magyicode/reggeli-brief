# Reggeli Brief – napi rutin (ütemezett Claude-ügynök)

Ez a fájl az ütemezett ügynök utasítása. Hétköznap 05:30-kor (Europe/Budapest) fut, a repó gyökerében.
Cél: 07:00-ra kész legyen a napi adás a PWA-ban.

## 0. Időablak
- Kedd–péntek: az előző nap 06:00-tól ma reggelig megjelent hírek.
- Hétfő: péntek 18:00-tól hétfő reggelig (hétvége).
- `DATE` = a mai dátum (YYYY-MM-DD, Budapest szerint). Ha `docs/episodes/DATE/script.json` már létezik, állj meg.

## Szerkesztési fókusz (a felhasználó kérése, 2026-10-26)
- **Erős tech-fókusz**: a hírek és a podcast-idő kb. fele tech, AI, humanoid robotika és startupok.
- **Humanoid robotika** minden adásban (Tesla Optimus, Figure, Agility, Apptronik, 1X, Boston Dynamics, Unitree, UBTech, AgiBot, Xpeng, Sanctuary; finanszírozás, gyártási volumen, ipari bevezetések, kínai verseny, alkatrész-ellátási lánc).
- **Startup-ökoszisztéma** minden adásban: nagy körök, exitek, VC-trendek, akcelerátorok globálisan + EU/CEE/magyar startupok (pl. Shapr3D, Bitrise, Commsignia, AImotive, Turbine, Hiventures, Lightyear-portfóliók, Startup Hungary, Hungarian Startup University Program).
- Továbbra is: világpolitika, kvantum, politika, pályázatok; mindig EU, Kína, Magyarország, USA.
- **Pályázatok (felhasználói kérés, 2026-10-27)**: különösen figyelj a kezdő startupoknak és ötletekre (ötletfázis, pre-seed) érkező támogatásokra, kiemelten a magyarokra. A rovat elején a magyar korai fázisú lehetőségek álljanak; ha nincs új, a még nyitott, közeli határidejűeket hozd. Minden tételnél: kinek szól (fázis: ötlet / pre-seed / induló cég), mennyi pénz, milyen formában (vissza nem térítendő, hitel, tőke, díj, mentorálás), határidő, és mennyire egyszerű beadni. A podcastban is kapjon a rovat legalább ~90 másodpercet.

## 1. Kutatás – 8 párhuzamos kutató ügynök
Indíts EGYSZERRE 8 `general-purpose` ügynököt (Agent tool, egy üzenetben). Mindegyik kapja meg az időablakot, a célközönséget
(„egy kezdő vállalkozó és egy gazdasági szakember, aki látni akarja a világ összefüggéseit”) és ezeket a szabályokat:
- csak olyan hír, amit ténylegesen megtalált, pontos URL-lel és megjelenési dátummal; semmit nem talál ki;
- fizetős cikknél csak a címre/leadre támaszkodik, és ezt jelzi;
- tételenként: Cím (magyarul) · Mi történt (2–4 mondat, konkrét számokkal) · Miért fontos · Forrás: outlet + pontos URL + dátum;
- a végén: „Lehetséges összefüggések” és „Lehetőségek” (kockázattal).

| # | Rovat (`section` id) | Fő források |
|---|---|---|
| 1 | Magyarország + EU gazdaság/politika (`magyarorszag`, `eu`) | portfolio.hu, hvg.hu, telex.hu/g7, penzcentrum.hu, forbes.hu, mnb.hu, hu.euronews.com, politico.eu, spiegel.de |
| 2 | Globális makró és piacok (`piacok`) – pénteki/előző napi zárás, olaj, arany, dollár, hozamok, BTC, a hét naptára | reuters.com, bloomberg.com/europe, ft.com, wsj.com, economist.com, marketwatch.com, finance.yahoo.com, nytimes.com, bbc.com |
| 3 | Tech és AI (`tech`) – modellek, termékek, Big Tech, chipek, AI-szabályozás; 8–12 tétel | techcrunch.com, theinformation.com, bigtechnology.com, stratechery.com, wired.com, forbes.com, theverge.com, arstechnica.com, techmeme.com |
| 7 | Humanoid robotika és fizikai AI (`humanoid`); 4–7 tétel, 3 napos ablak is jó | therobotreport.com, ieee spectrum robotics, techcrunch.com/robotics, humanoidsdaily.com, electrek.co, scmp.com tech, reuters.com |
| 8 | Startup-ökoszisztéma (`startup`) – globális körök/exitek + EU/CEE/magyar startupok; 6–9 tétel | techcrunch.com, news.crunchbase.com, sifted.eu, eu-startups.com, tech.eu, forbes.hu, portfolio.hu, hvg.hu, telex.hu |
| 4 | Kvantum és deep tech (`kvantum`) – szélesebb, 3–4 napos ablak is jó | quantumcomputingreport.com/news/, thequantuminsider.com/category/daily/ |
| 5 | Pályázatok, finanszírozás (`palyazatok`) – **elsőként kezdő startupoknak és ötletfázisú projekteknek szóló, kiemelten MAGYAR lehetőségek** (pre-seed/ötlet-támogatás, inkubátor- és akcelerátorprogramok, kockázati tőke első körök, egyetemi startup-programok, fiatal vállalkozói és induló kkv-támogatások, pitch-versenyek díjakkal), utána EU-s/nemzetközi felhívások; nyitott felhívások, határidők a következő ~8 hétben; 6–10 tétel | palyazat.gov.hu, NKFIH (nkfih.gov.hu), Hiventures, MFB, MVA/HIPA, Startup Hungary, Hungarian Startup University Program (HSUP), egyetemi inkubátorok (BME, ELTE, Corvinus, SZTE, DE), akcelerátorok és pitch-versenyek, forbes.hu, portfolio.hu, penzcentrum.hu; EU: EIC, EIT, Horizon Europe, Digital Europe, ec.europa.eu funding & tenders |
| 6 | Kína, USA, EU, világpolitika (`kina`, `usa`, `eu`, `vilag`) | reuters.com, bbc.com, ft.com, economist.com, nytimes.com, politico.eu, spiegel.de, scmp.com, caixinglobal.com |

Mentsd a 6 jelentést: `pipeline/research/DATE/<rovat>.md` (a későbbi ellenőrizhetőségért).

## 2. Szerkesztés – főszerkesztő (te magad)
Profi gazdasági és üzleti elemzőként dolgozz. Szűrd ki az ismétlődést, ellenőrizd, hogy minden tételnek van URL-je és dátuma,
és keresd az összefüggéseket a rovatok között (energia → infláció → jegybankok → forint; AI-capex → chipek → áram; Kína → EU-vámok → magyar gyárak).
Fókusz: tech, AI, világpolitika, kvantum, politika, pályázatok; mindig érintsd az EU-t, Kínát, Magyarországot és az USA-t.

### 2a. `docs/episodes/DATE/episode.json` (az írott, részletes változat)
```json
{
 "date": "DATE",
 "title": "Rövid, ütős cím (max ~70 karakter)",
 "coverage": "Lefedett időszak, pl. 2026. okt. 23. (péntek este) – okt. 26. (hétfő reggel)",
 "headline": "1–2 mondatos összefoglaló: a nap fő története és miért számít",
 "markets": [{"label": "EUR/HUF", "value": "367,4", "change": "+0,25%"}],
 "sections": [
  {"id": "piacok|magyarorszag|eu|usa|kina|vilag|tech|kvantum|palyazatok", "title": "Rovatcím",
   "items": [{"title": "…", "body": "3–5 mondat, konkrét számokkal", "why": "1–2 mondat",
              "sources": [{"name": "Portfolio", "url": "https://…", "date": "okt. 26."}]}]}
 ],
 "connections": [{"title": "…", "body": "…"}],
 "opportunities": [{"title": "…", "body": "…", "risk": "…"}],
 "calendar": [{"when": "Szerda", "what": "Fed kamatdöntés"}]
}
```
- Összesen 30–45 hír, rovatonként 3–6. Minden hírnél legalább 1 forrás pontos URL-lel.
- `markets`: csak a jelentésekben szereplő számok.

### 2b. `docs/episodes/DATE/script.json` (a podcast szövege, ~15 perc)
Két műsorvezető: **Noémi** (`noemi`, vezeti a műsort) és **Tamás** (`tamas`, elemző). Természetes, élőbeszédszerű magyar párbeszéd.
- Összesen **1900–2100 szó** (≈15 perc). Szegmensenként 40–160 szó.
- Szerkezet és `section`/`chapter`: Bevezető (intro) → Piacok (röviden) → Tech & AI → Humanoid robotika (`humanoid`) → Startup-ökoszisztéma (`startup`) → Kvantum → Magyarország → EU → USA → Kína → Világpolitika → Pályázatok → Összefüggések (`osszefugges`) → Lehetőségek (`lehetoseg`) → Zárás (`zaras`).
- Szóköltség: tech + humanoid + startup + kvantum ≈ 45–50%; a `sections` tömb is ebben a sorrendben legyen.
- Felolvasásra írj: a számokat szóval vagy egyszerű alakban („három egész kilenc tized százalék”, „367 forint”), rövidítéseket bontsd ki első előforduláskor, kerüld a zárójeleket és URL-eket. A forrásokat névvel említsd („a Portfolio szerint”).
- A zárásban mondd el, hogy a pontos forráslinkek az appban vannak, és hogy ez nem befektetési tanácsadás.

## 3. Ellenőrzés
- `python3 -c "import json;json.load(open('docs/episodes/DATE/episode.json'));json.load(open('docs/episodes/DATE/script.json'))"`
- Szószám ellenőrzés a script.json-ra (1900–2100).

## 4a. Publikálás claude.ai Artifactként (jelenlegi, helyi mód – amíg nincs GitHub)
1. `.venv/bin/python pipeline/build_episode.py DATE` (hang + fejezetek + index.json; ~15 perc legyen)
2. `python3 pipeline/build_artifact.py` → kiírja a `files` térképet
3. Artifact tool publish: `file_path` = `/Users/magyarpeter/Claude/reggeli-brief/artifact/index.html`,
   `url` = `https://claude.ai/artifact/9JdpEASFYcadpm14CamXUr`, `root` = `/Users/magyarpeter/Claude/reggeli-brief`,
   `files` = a 2. lépés kimenete (az új nap episode.json + audio.mp3 fájljaival együtt). Ne adj `icon`-t.
4. PushNotification: a nap címe + „kész”.

## 4b. Publikálás GitHubra (ha már van repó)
```
git add docs/episodes/DATE pipeline/research/DATE
git commit -m "episode: DATE"
git push origin main
```
A push elindítja a „Build episode audio” GitHub Actiont: legenerálja az `audio.mp3`-at (edge-tts, Noémi + Tamás hang),
a fejezetjelölőket és az animációs burkológörbét, frissíti az `index.json`-t, majd a GitHub Pages kiszolgálja.
