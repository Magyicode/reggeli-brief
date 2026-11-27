# Kvantum és deep tech (`kvantum`) – 2026. november 27.

Időablak: 2026. nov. 23. – nov. 27. reggel. A tegnap már szerepelt témák kimaradtak (EU Kvantumtörvény, IQM–Korea, Jülich, DOE 12 m$, IonQ DARPA).

---

## 1. **10 másodperc alatt lefordítható a 2048 bites RSA feltöréséhez szükséges Shor-program – a Classiq fordítóprogramja**

**Mi történt:** Az izraeli Classiq frissítette a Qmod nevű kvantumprogramozási nyelvét és fordítóját (compiler). A cég szerint a Shor-algoritmus perióduskereső magja egy 2048 bites, RSA-méretű egész számra **10 másodpercnél rövidebb idő alatt** lefordítható kvantumáramkörré. A trükk az, hogy a fordító nem „lapítja ki” a ciklusokat és a feltételeket, ezért a fordítási idő nagyjából független az operandus méretétől. Ugyanaz a lefordított program több Shor-futtatásnál is újrahasználható.

**Miért fontos:** Ez **nem** az RSA feltörése. Csak a szoftveres előkészítés lett gyors, a futtatáshoz továbbra is hibatűrő kvantumgép kell, ilyen pedig még nincs. A cikk nem közöl qubit- vagy kapuszámot. Az üzenet mégis az, hogy a szoftveres eszközök már készen állnak arra a pillanatra, amikor megjön a hardver. Ez erősíti az érvet a posztkvantum-kriptográfiára (PQC) való átállás mellett.

**Forrás:** Quantum Computing Report, https://quantumcomputingreport.com/classiq-updates-qmod-compiler-to-synthesize-2048-bit-shors-algorithm-in-under-10-seconds/ (2026. nov. 25.)

---

## 2. **Felvásárlással lép be a kiberbiztonsági piacra egy kanadai kvantumcég: a Quantum eMotion megvette a Plurilockot**

**Mi történt:** A kanadai Quantum eMotion (QeM) kvantumalapú véletlenszám-generátorokat fejleszt. A cég lezárta a Plurilock Security kiberbiztonsági vállalat felvásárlását. A QCR szerint az ügylet értéke **32 millió kanadai dollár (kb. 22,5 millió USD)**. Minden Plurilock-részvényért **0,084 C$ készpénzt és 0,0763 QeM-részvényt** fizetnek. A Plurilock ügyfelei közszféra- és magánszereplők Kanadában, az USA-ban és a NATO-ban. A részvényesek **99,58%-a** megszavazta az ügyletet nov. 18-án, a bíróság nov. 20-án adta ki a jóváhagyást. A Plurilock nagyjából nov. 26-án kerül le a TSX Venture tőzsdéről.

**Miért fontos:** Ezen a piacon a kvantumtechnológiából most a „kvantumbiztos” biztonság hoz pénzt, nem a számítás. A kis kvantumcégek kész ügyfélkört és bevételt vásárolnak, mert a saját technológiájuk egyedül még nem eladható tömegesen. Hasonló konszolidáció a PQC- és QKD-szegmensben is várható.

**Forrás:**
- Quantum Computing Report, https://quantumcomputingreport.com/quantum-emotion-completes-c32-million-22-5-million-usd-acquisition-of-cybersecurity-provider-plurilock-security/ (2026. nov. 25.)
- The Quantum Insider, https://thequantuminsider.com/2026/11/26/quantum-emotion-completes-acquisition-plurilock-security/ (2026. nov. 26.)

*Megjegyzés: a TQI cikke nem közöl összértéket, a 32 millió C$ a QCR-től származik.*

---

## 3. **Riverlane-jelentés: a hibajavítás kikerült a laborból, már mérnöki iparág – 2,5 milliárd dollár támogatás 2021 óta**

**Mi történt:** A brit Riverlane és a Nature Research Intelligence közzétette harmadik éves kvantumhibajavítási (QEC) jelentését. A főbb számok:
- A szakcikkek száma évi **36,4%-kal** nőtt 2021 és 2025 között.
- A QEC-szabadalmi családok száma **27-ről (2021) 169-re (2025)** emelkedett. A Microsoft, a Google és a Riverlane együtt 94-et birtokol.
- 2021 óta kb. **2,5 milliárd dollár** kutatási támogatás érkezett. Ebből az USA 1,17 milliárdot, az EU/Belgium 435,6 milliót adott.
- Az USA 24,4%-kal vezet a publikációkban, Kína 14,3%-kal a második.
- A jelentés idéz egy becslést (Oratomic), amely szerint az RSA-2048 feltöréséhez akár **10 000 fizikai qubit** is elég lehet.
- A 2027-es fő szűk keresztmetszetek a teljes gépre kiterjedő valós idejű dekódolás és a rendszerintegráció.

**Miért fontos:** A verseny súlypontja a fizikáról a rendszermérnökségre és a szoftverre (dekóderek, vezérlés) helyeződik át. Ez olyan terület, ahol kisebb cégek és országok is versenyképesek lehetnek. A 10 000 qubites RSA-becslés sokkal alacsonyabb a korábbi, milliós nagyságrendű becsléseknél. Ez újabb érv a PQC-átállás sürgetésére.

**Forrás:** Quantum Computing Report, https://quantumcomputingreport.com/riverlane-and-nature-research-intelligence-release-2026-quantum-error-correction-report-highlighting-shift-to-full-stack-engineering/ (2026. nov. 25.)

---

## 4. **Az SAP vállalatirányítási szoftveréből már kvantumgépre lehet feladatot küldeni – teherautó-rakodás a planqc-vel**

**Mi történt:** A német SAP és a müncheni planqc (semleges atomos kvantumgépek) kibővítette együttműködését. A felek bemutattak egy felhőinterfészt, amely az SAP vállalati rendszerét a kvantumhardverhez köti. Az első feladat egy italszállító teherautó rakodásának optimalizálása volt, kapacitás-, kirakodási oldal- és hűtési korlátokkal. Ez egy úgynevezett bin-packing probléma. Egyelőre csak **szimulátoron** futott, valódi hardveren **2027-től** tesztelnek. Az SAP saját „Quantum Agents”-eket fejleszt, és kvantumcsapatot nyit Münchenben. A cég arra számít, hogy az évtized vége előtt alkalmazásai szempontjából releváns teljesítményűek lesznek a kvantumgépek.

**Miért fontos:** Ha a kvantumszámítás az SAP-on keresztül érkezik, a cégeknek nem kell kvantumszakértőt felvenniük, elég egy szolgáltatást bekapcsolniuk. A logisztika és az ellátási lánc lehet az első gyakorlati terep. Fontos fenntartás: azt még nem bizonyították, hogy a kvantumos megoldás jobb a klasszikusnál. A cikk pénzügyi számokat sem közöl.

**Forrás:** The Quantum Insider, https://thequantuminsider.com/2026/11/26/sap-and-planqc-expand-quantum-computing-partnership-plan-hardware-tests-in-2027/ (2026. nov. 26.)

---

## 5. **Gyárban, sorozatban gyártott fúziós reaktorokra gyűjtött 6,6 millió eurót egy müncheni startup, a Starforge**

**Mi történt:** A 2026 márciusában alapított Starforge **6,6 millió eurós pre-seed** (legkorábbi fázisú) befektetést kapott. A kört az AENU és a First Momentum Ventures vezette, mellettük beszállt az Auxxo, a Kvanted, a Silicon Roundabout Ventures, az UnternehmerTUM és az Arcas. A cég kompakt, gömbtokamak típusú reaktorokat tervez. Az első, „Unit One” nevű modell **200–300 MW** villamos teljesítményű lenne, szerelhető szupravezető mágnesekkel és **40+ éves** élettartammal. A kereskedelmi működést a **2030-as évek közepére** célozzák. A pénzből 24 hónap alatt bővítik a csapatot, befejezik a koncepciótervet, és első európai vevői kötelezettségvállalásokat szereznek. Az alapító-vezérigazgató, Ana Koller korábban a Commonwealth Fusion Systemsnél, az MIT-n és a Max Planck Plazmafizikai Intézetben dolgozott.

**Miért fontos:** Az üzleti modell újdonsága a „reaktor mint gyártott termék”: egyedi óriásprojektek helyett sorozatgyártás. München a Proxima Fusion (411 millió eurós rekordkör) után európai fúziós klaszterré válik. Fenntartás: egy pre-seed kör csak papírterveket finanszíroz. A fúzió általános kockázata nagy, a több tucat finanszírozott startup közül kevés juthat el a hálózatig.

**Forrás:**
- The Next Web, https://thenextweb.com/news/starforge-fusion-pre-seed-funding (2026. nov. 26.)
- WOWTALE, https://en.wowtale.net/2026/11/27/236177/ (2026. nov. 27.)

---

## Lehetséges összefüggések

- **A kvantumfenyegetés közelebb került.** Egyszerre jelent meg három jel: a 2048 bites Shor-program 10 másodperc alatt lefordítható (Classiq), a Riverlane-jelentés idézte becslés szerint az RSA-2048-hoz akár 10 000 fizikai qubit is elég lehet, és kvantumbiztos kiberbiztonsági felvásárlás történt (QeM–Plurilock). Ezek együtt azt mutatják, hogy a piac a feltörés valós dátumánál korábban kezdi beárazni a PQC-átállást. Ez rímel a tegnapi EU Kvantumtörvény kötelező PQC-előírására.
- **A kvantumtechnológia beköltözik a megszokott infrastruktúrába.** Az SAP a vállalatirányítási rendszerből, az Equal1–NVIDIA–Dell páros pedig szabványos adatközponti rackből (1,6 kW-os rack-be szerelhető gép GPU-k mellett, SC26, nov. 25.) teszi elérhetővé a kvantumgépet. Forrás: https://quantumcomputingreport.com/equal1-nvidia-and-dell-technologies-demonstrate-real-time-hybrid-quantum-classical-rack-integration-at-sc26/ (2026. nov. 25.). A kvantumszámítás így nem külön termékként terjed, hanem a meglévő felhő- és szoftverplatformokon keresztül.
- **Németország lett Európa deep tech központja.** München ad otthont a planqc-nek, a Proxima Fusionnek és a Starforge-nak, Jülich pedig a tegnap említett szilíciumos kvantumgépnek. Az új uniós Sovereign Tech Equity Fund (50 milliárd euró) várhatóan az ilyen klaszterekbe áramlik.
- **Magyar szál:** az időablakban nem találtam új magyar kvantumhírt (Wigner, HUN-REN, nemzeti program). A Wigner legutóbbi releváns eseménye az ipar és az akadémia kapcsolatát építő AIME26 rendezvény volt nov. 12–13-án, ez kívül esik az ablakon.

## Lehetőségek (kockázattal)

1. **PQC-felmérés KKV-knak.** Szolgáltatás, amely felméri, hol használ egy cég RSA- vagy ECC-titkosítást, és átállási tervet készít. A szabályozói nyomás (EU, NATO-beszállítói láncok) keresletet teremt.
   *Kockázat:* a nagy biztonsági cégek és felhőszolgáltatók termékbe építik az átállást, így önálló szolgáltatásként gyorsan elértéktelenedhet.
2. **Optimalizálási tanácsadás a logisztikában.** A rakodási és útvonal-tervezési feladatokat már most érdemes klasszikus, illetve hibrid (kvantum-inspirált) módszerekkel megoldani. Akinek ma tiszta adatai és jól megfogalmazott problémái vannak, az az elsők között tud majd kvantumos szolgáltatásra (pl. SAP-on át) váltani.
   *Kockázat:* a kvantumos előny nem bizonyított, ezért az ügyfélnek a klasszikus megtakarítást kell eladni, nem a „kvantum” címkét.
3. **Beszállítói lánc a fúziós iparnak.** Szupravezető mágnesek, vákuumtechnika, precíziós megmunkálás és mérnöki szolgáltatások. Magyar–német ipari kapcsolatokon keresztül elérhetők a müncheni fúziós startupok.
   *Kockázat:* hosszú, 2030-as évek közepéig tartó időtáv, kis kezdeti volumen, és nagy az esélye, hogy egyes startupok elfogynak a pénzből.
4. **Befektetői oldalon:** a kvantumbiztonsági cégek konszolidációja (QeM-típusú felvásárlások) valószínűleg folytatódik.
   *Kockázat:* a kvantumrészvények árfolyama nagyon ingadozó, és a kis kapitalizációjú, részvénnyel fizető felvásárlók hígítják a meglévő részvényesek tulajdonát.
