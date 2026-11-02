# Kvantum és deep tech – kutatási jelentés (2026. november 2., hétfő)

Időablak: 2026. okt. 29. – nov. 2. reggel. A két fő forrás (Quantum Computing Report, The Quantum Insider) legfrissebb tételei okt. 31-i dátumúak, nov. 1–2-ről nem találtam új hírt. Az EU Quantum Act-ről szóló hír okt. 28-i, tehát egy nappal korábbi az ablaknál, de a téma miatt bent hagytam (jelölve).

---

## 1. **A Foxconn a világ legnagyobb kvantumszámítógép-gyártója akar lenni, saját technológia nélkül**

**Mi történt:** Young Liu, a Foxconn (Hon Hai) elnöke a CNBC-nek adott interjúban azt mondta, hogy a cég bérgyártóként szeretne a világ legnagyobb kvantumszámítógép-gyártójává válni, vagyis más cégek technológiáját gyártaná. Szerinte a kvantumszámítás még legalább két évre van a kereskedelmi életképességtől. A kvantumgépeket a CPU-k és GPU-k mellé kerülő, speciális számításokra szolgáló gyorsítóként írta le. Költségpéldaként azt hozta, hogy a hűtéshez szükséges kábel már rövid darabon is 1000 dollárnál többe kerülhet. Partnert, ügyfelet vagy beruházási összeget nem nevezett meg.

**Miért fontos:** Az iPhone- és AI-szervergyártás óriása is beszáll, ami azt jelzi, hogy a kvantumipar a laborból a gyártás és a beszállítói lánc szakaszába lép. Ahogy a félvezetőiparban, itt is szétválhat a tervezés és a gyártás. Kisebb cégeknek ez azt jelenti, hogy nem kell saját gyárat építeniük. A Foxconn bejelentése egyelőre szándéknyilatkozat, konkrét szerződés nélkül.

**Forrás:** The Quantum Insider – https://thequantuminsider.com/2026/10/30/foxconn-aims-to-become-worlds-largest-quantum-computer-manufacturer/ – 2026. okt. 30. (CNBC-interjú alapján)

---

## 2. **Alice & Bob: kb. 23 ezer „macska-qubit” elég lehet az RSA-2048 feltöréséhez**

**Mi történt:** A francia Alice & Bob az Inria, a CEA és az Edinburgh-i Egyetem kutatóival közös preprintben (IACR ePrint 2026/2665) azt becsülte meg, mekkora gép kellene a Shor-algoritmus futtatásához. Kiegyensúlyozott konfigurációban 22 593 fizikai macska-qubittel 3,14 nap alatt lehetne faktorizálni az RSA-2048-at. Párhuzamosított változatban ehhez 610 530 qubit és 1,25 óra kellene. A szerzők szerint ez kb. 40-szer kisebb igény, mint a vezető transzmon alapú becslések, és a saját 2023-as becslésüknek (49 649 qubit) is kevesebb mint a fele. A Bitcoin-féle ECDLP-256 kulcsok feltöréséhez legfeljebb 29 588 qubit és 61,8 perc kellene. Ez **erőforrásbecslés, nem hardveres demonstráció**, és optimista feltevésekre épül (pl. 1 μs-os hibajavítási ciklus).

**Miért fontos:** A titkosítás feltöréséhez szükséges gépméret becslései évről évre csökkennek, ezért a kvantumbiztos kriptográfiára (PQC) való átállás határideje egyre sürgetőbb. A Bitcoinnál a valós idejű tranzakció-eltérítés továbbra sem reális, mert a futásidő hosszabb a kb. 10 perces blokkidőnél. Az alvó vagy újrahasznált címek viszont idővel kockázatossá válhatnak. A NIST és a brit NCSC útmutatója szerint a kritikus infrastruktúrának 2035-ig kell átállnia.

**Forrás:** Quantum Computing Report – https://quantumcomputingreport.com/alice-bob-demonstrates-end-to-end-shors-algorithm-compilation-requiring-23000-cat-qubits-to-break-rsa-2048/ – 2026. okt. 30.

---

## 3. **Az IBM kereskedelmi forgalomba hozta a kvantumbiztos átállást automatizáló szoftvercsomagját, az IDEMIA pedig PQC-s bankkártya-tanúsítványt kapott**

**Mi történt:** Az IBM a TechXchange konferencián piacra dobta az **IBM Quantum Safe** csomagot, a NIST végleges átállási ütemtervével (NIST IR 8547) egy időben. Három modulból áll. Az Explorer átvizsgálja a forráskódot és kriptográfiai anyagjegyzéket (CBOM) készít, a Cryptography Manager leltárba veszi a titkosítási eszközöket, a Proxy pedig a régi rendszereket köti össze a kvantumbiztos kliensekkel. Az IBM a saját CIO-szervezetén is lefuttatta az eszközt: 5815 tárolóban több mint 47 millió kódsort vizsgált át, és több mint 3900 kriptográfiai problémát talált. Árat nem közöltek. Ugyanebben az időszakban az **IDEMIA Secure Transactions** az iparágban elsőként kapott EMVCo-tanúsítványt egy PQC-t (NIST ML-KEM, ML-DSA) használó bankkártya-platformra. A kártyák 3–5 évig vannak forgalomban. A fő kihívás az, hogy a nagyobb kulcsok mellett is tartani kell a 300–500 ms-os érintéses fizetési időt.

**Miért fontos:** A kvantumbiztonság a mainstream vállalati IT-ba és a pénzforgalomba is beért, és már kész termékek vannak a polcon. Ha az IBM egy nagyvállalat saját kódjában közel 4000 hibát talált, akkor egy átlagos cégnél is lesz bőven tennivaló. Ebből szolgáltatási piac (audit, migráció) épül. Az amerikai szövetségi átállási határidők 2030-tól kötelezőek.

**Forrás:**
- Quantum Computing Report – https://quantumcomputingreport.com/ibm-launches-unified-quantum-safe-software-suite-to-automate-enterprise-pqc-migration/ – 2026. okt. 31.
- Quantum Computing Report – https://quantumcomputingreport.com/idemia-secure-transactions-achieves-industry-first-emvco-certification-for-post-quantum-payment-cards/ – 2026. okt. 30. (az IDEMIA saját közleményének URL-je 2026-10-29-es dátumot tartalmaz)

---

## 4. **EU Quantum Act: kiszorulhatnak az állami tenderekből az EU-n kívülről irányított kvantumbeszállítók** *(okt. 28., az ablak előtti nap; fizetős)*

**Mi történt:** Az MLex egy kiszivárgott tervezetre hivatkozva azt írja, hogy az Európai Bizottság **november 18-án** tervezi bemutatni a Quantum Act javaslatát. A tervezet szerint az EU-n kívülről irányított kvantumbeszállítók kizárhatók lennének a közbeszerzésekből. A szerződések az EU-s irányítású cégekhez, illetve a viszonossági megállapodásokkal jóváhagyott vállalatokhoz kerülnének. A kritikus ágazatok állami vevőinek kvantumbiztos titkosítást is elő kellene írni. A tervezet még változhat. A november 18-i dátumot csak ez az egy forrás állítja, hivatalos megerősítést nem találtam. Az MLex szeptemberi cikke szerint a javaslat 2027-re is csúszhat.

**Miért fontos:** Ez lehet az EU első kifejezetten iparpolitikai kvantumtörvénye, „Buy European” elemmel. Az európai (köztük magyar) kvantum- és kiberbiztonsági cégeknek védett piacot adhat, az amerikai szereplőket (IBM, IonQ stb.) viszont hátrányosan érintheti. A PQC-előírás közvetlen keresletet teremt az állami és kritikus infrastruktúra-szektorban.

**Forrás:** MLex (fizetős, csak a címre és a leadre támaszkodtam) – https://www.mlex.com/mlex/articles/2543650/quantum-suppliers-may-face-eu-public-contract-restrictions-under-draft-quantum-act – 2026. okt. 28.

---

## 5. **Nagy-Britannia: a technológia megvan, a kockázatvállalás és a tőke hiányzik**

**Mi történt:** A londoni City Quantum & AI Summitről (okt. 7., Mansion House) szóló beszámoló szerint az előadók a brit deep tech fő szűk keresztmetszetének az intézményi kockázatvállalást és a tőkét tartják. Admiral Sir Tony Radakin szerint egy 200 millió fontnál nagyobb védelmi projekt üzleti terve átlagosan több mint 1000 napig tart, mire szerződés lesz belőle. Stephen Welton, a British Business Bank elnöke elmondta, hogy a bank 100 millió fontot vállalt az Oxford Quantum Circuits 260 millió fontos C-sorozatából (júniusban zárult). A bank emellett legfeljebb 150 millió fontot tenne a Playground Global új, brit fókuszú alapjába, és napirenden van egy 1 milliárd fontnál nagyobb UK Scale-up Fund is.

**Miért fontos:** Jó mintát ad arra, hogyan horgonyozhat le az állami fejlesztési bank egy hazai deep-tech céget, és hogyan húzhat be magánbefektetőket. Hasonló szerepet a magyar kontextusban az állami kockázati tőke és a fejlesztési bankok tölthetnének be. Közben azt is mutatja, hogy a lassú állami beszerzés a legjobb technológiát is megfojthatja.

**Forrás:** The Quantum Insider – https://thequantuminsider.com/2026/10/30/speakers-point-to-risk-appetite-and-capital-as-uk-deep-tech-bottlenecks-at-city-quantum-ai-summit/ – 2026. okt. 30.

---

## 6. **IQM: mind az 54 qubit összefonódott a felhőből elérhető Emerald processzoron**

**Mi történt:** A finn IQM (Nasdaq: IQMX) mind az 54 transzmon qubitet egyszerre összefonta (GHZ-állapot) a felhőből elérhető Emerald processzorán. A felhasználók korábban kb. 30 qubites partíciókkal dolgoztak. Az 54 qubites eredmény hibacsökkentéssel 0,516-os fidelitást ért el, ami épp csak haladja meg a valódi összefonódáshoz szükséges 0,500-as küszöböt. A 40 qubites eredmény hibacsökkentés nélkül 0,515 lett. Az ütemező fordító és a dinamikus lecsatolás együtt akár 50%-kal csökkentette a hibaarányt.

**Miért fontos:** Egy európai, már tőzsdén jegyzett hardvercég halad a skálázásban. A szűk, kb. 0,016-os ráhagyás viszont jól mutatja, mennyire törékenyek még a nagy, mély áramkörök. Ez összhangban van a Foxconn-elnök „még legalább két év” becslésével.

**Forrás:** Quantum Computing Report – https://quantumcomputingreport.com/iqm-verifies-full-chip-entanglement-across-54-qubit-emerald-superconducting-processor/ – 2026. okt. 30.

---

## Lehetséges összefüggések

- **A PQC-átállás a hét fő témája.** Az Alice & Bob becslése szerint a feltöréshez kisebb gép is elég lehet, közben megjelentek a kész eszközök (IBM Quantum Safe, IDEMIA-kártya), az EU pedig PQC-kötelezettséget írna elő a közbeszerzésben. A fenyegetés becsült ideje közeledik, a megoldások már piacon vannak, és a szabályozás is erre mutat.
- **A kvantumipar a gyártási szakaszba lép.** A Foxconn bérgyártói ambíciója és a Wolfspeed kvantumcélú, átlátszó szilícium-karbid hordozója (QCR/TQI, okt. 30.) azt mutatja, hogy kezd kialakulni a beszállítói lánc.
- **Iparpolitika mindkét oldalon.** Az EU Quantum Act „Buy European” eleme mellett az USA-ban a National Quantum Initiative újraengedélyezését a 2027-es védelmi költségvetési törvénybe (NDAA) tolnák be. Az ipari koalíció, köztük az AWS, az IBM, a Microsoft és az IonQ, még idén elfogadtatná (TQI, okt. 30.: https://thequantuminsider.com/2026/10/30/quantum-industry-coalition-highlights-funding-priorities-for-the-national-quantum-initiative-reauthorization-act/). A kvantum egyre inkább szuverenitási és védelmi kérdés.
- **A tőke a szűk keresztmetszet.** A brit példa (BBB, OQC) szerint az állami horgonybefektető kulcsszerepet játszik. Ez a magyar programok és alapok számára is releváns.
- **Kínai és magyar hír:** az időablakban nem találtam ellenőrizhető, friss kínai kvantumhírt, és a magyar kvantumprogramról sem.

## Lehetőségek (kockázattal)

1. **PQC-felmérés és -migráció kkv-knak és pénzügyi cégeknek.** Ilyen lehet a kriptográfiai leltár (CBOM) elkészítése vagy a „harvest now, decrypt later” kockázat felmérése. Az EU-s közbeszerzési előírás és a 2030–2035-ös határidők keresletet teremtenek.
   *Kockázat:* a nagy szereplők (IBM) automatizált eszközei lenyomhatják az árakat. A szakértelemhiány miatt nehéz hitelesnek tűnni, és a szabályozás csúszhat (Quantum Act → 2027).
2. **Pozicionálás EU-s irányítású beszállítóként.** Ha a Quantum Act tervezete változatlanul átmegy, az európai tulajdonú kvantum- és kiberbiztonsági startupok versenyelőnyt kapnak az állami tendereken.
   *Kockázat:* a tervezet szövege kiszivárgott és változhat, a forrás fizetős és egyetlen. A viszonossági megállapodások az amerikai versenytársakat is beengedhetik.
3. **Beszállítói lánc és alkatrészek** (kriogenika, kábelezés, mikrohullámú elektronika, anyagok). A Foxconn-példa és az 1000 dolláros kábel jól mutatja, hogy a „csákány és lapát” szegmensben valós árrés van.
   *Kockázat:* a kereskedelmi áttörés legalább két év múlva várható, a kereslet kicsi és ciklikus, a hardveres piacra lépés pedig tőkeigényes.
4. **Befektetőknek: óvatosság a hardveres hype-pal.** Az IQM eredménye is épp csak meghaladja a küszöböt. A PQC-szoftver és -szolgáltatás közelebbi bevételt ígér, mint a hibatűrő kvantumgépek.
   *Kockázat:* a kvantumrészvények volatilisak, és az erőforrásbecslések optimista feltevéseken alapulnak.
