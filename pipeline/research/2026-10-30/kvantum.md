# Kvantum és deep tech (`kvantum`): kutatási jelentés
Időablak: 2026. október 26. és október 30. 12:00 között (Budapest). Összeállítva: 2026. október 30.
Források: quantumcomputingreport.com/news/, thequantuminsider.com/category/daily/. Fizetős (Reuters, FT) cikkre nem támaszkodtam. Fúzióról és új anyagokról az időablakban nem találtam ellenőrizhető hírt.

---

## 1. Az Alice & Bob szerint 22 593 qubit elég az RSA-2048 feltöréséhez
**Mi történt:** A francia Alice & Bob új becslése szerint hibatűrő, „macskaqubites” szupravezető gépen kb. 22 593 fizikai qubit és 3,14 nap futásidő kellene az RSA-2048 feltöréséhez (Shor-algoritmussal). A 256 bites elliptikus görbés kriptográfiához kb. 29 588 qubit és 61,8 perc kellene. Ez kb. 40-szer kevesebb fizikai qubit, mint a Google (Craig Gidney) 2025-ös, kb. 1 millió qubites becslése, és kevesebb mint fele a cég saját, 2023-as 49 649 qubites becslésének. A cég szerint a hardver fejlődése és a csökkenő erőforrásigény a 2030-as évek elején érhet össze. Ez elméleti becslés, nem bemutatott támadás.
**Miért fontos:** Gyorsan csökken a qubitszám, amely a mai titkosítás feltöréséhez kell, így közelebb kerül a „Q-nap”. A „most begyűjtöm, később visszafejtem” típusú támadás már ma kockázat a hosszú életű adatoknál.
**Forrás:** The Quantum Insider, https://thequantuminsider.com/2026/10/29/alice-bob-22593-qubits-break-rsa-2048/ (2026. 10. 29.)

## 2. A NIST véglegesítette a poszt-kvantum átállás menetrendjét (IR 8547)
**Mi történt:** Az amerikai szabványügyi intézet (NIST) kiadta a végleges IR 8547 dokumentumot. Eszerint a szövetségi kiemelt rendszereknek 2030. december 31-ig kell átállniuk poszt-kvantum kulcscserére, digitális aláírásnál pedig 2031. december 31-ig. Az RSA, a DH/ECDH, az ECDSA és az EdDSA 2031 és 2035 között elavult (deprecated) státuszú, 2035. december 31-től pedig tiltott. Az AES-128/192/256, a SHA-2/SHA-3 és az Ascon továbbra is engedélyezett.
**Miért fontos:** Ez a gyakorlatban a globális iparági határidő: a bankok, a felhőszolgáltatók és a beszállítói láncok követni fogják. Az 1. ponttal együtt nézve jól látszik, hogy a fenyegetés és a szabályozás egy irányba mutat.
**Forrás:** Quantum Computing Report, https://quantumcomputingreport.com/nist-releases-final-ir-8547-establishing-definitive-post-quantum-cryptography-transition-timeline-and-deprecation-schedules/ (2026. 10. 27.)

## 3. Az IBM méteres kábelekkel kötött össze két 120 qubites processzort
**Mi történt:** Az IBM négy darab, kb. 80 cm-es kriogén „L-couplerrel” kötött össze két 120 qubites Nighthawk R1 processzort. A chipek közötti állapotátvitel átlagos hűsége 99,00% volt (a legjobb kapcsolaton 99,29%). A távoli CZ-kapuk átlagos hűsége 94,75% volt, ami még elmarad a chipen belüli kb. 99,5%-tól. A kapcsolatok három teljes lehűtési ciklust is romlás nélkül bírtak. Az IBM szerint továbbfejlesztéssel 99% fölötti távoli kapuhűség érhető el.
**Miért fontos:** Ez a 2029-re tervezett, hibatűrő Starling gép fizikai „gerince”: a moduláris felépítés teszi lehetővé, hogy a kvantumgépek egyetlen chip méreténél nagyobbra nőjenek.
**Forrás:** Quantum Computing Report, https://quantumcomputingreport.com/ibm-unveils-meter-scale-superconducting-l-couplers-connecting-dual-120-qubit-processors-with-99-state-transfer-fidelity/ (2026. 10. 27.)

## 4. Az IQM mind az 54 qubitjét összefonta egy chipen
**Mi történt:** A finn IQM felhőből elérhető Emerald processzorán mind az 54 qubitet egyszerre összefonta (GHZ-állapot). A hűség 0,516 volt kiolvasási hibakorrekcióval, ami meghaladja a valódi összefonódást jelző 0,5-ös küszöböt; 40 qubitnél korrekció nélkül 0,515. Korábban kb. 30 qubit volt megbízhatóan használható egy algoritmusban. Az IQM szerint egy év kalibrációs munkával akár 50%-kal csökkentették a műveleti hibákat.
**Miért fontos:** Európai szereplő mutatott teljes chipes összefonódást, ami a hardver érettségének mércéje. Az 5. ponttal együtt jelzi, hogy az EU-s kvantumökoszisztéma nem csak kutatás.
**Forrás:** The Quantum Insider, https://thequantuminsider.com/2026/10/29/iqm-full-chip-entanglement-54-qubit-processor/ (2026. 10. 29.)

## 5. Finanszírozás: a QuantrolOx 12 millió eurót, a Nord Quantique 10 millió dollárt kapott
**Mi történt:** A finn székhelyű, oxfordi spinoff QuantrolOx 12 millió eurós (kb. 13,4 millió dolláros) Series A2 kört zárt. A kört a brit IW Capital vezette, az EU-s EIC Fund társbefektetőként szállt be, így a cég összes forrása kb. 28 millió euró. A pénzt a Quantum EDGE kvantumprocesszor-automatizáló szoftver terjesztésére és az amerikai (berkeley-i) terjeszkedésre fordítja. A kanadai Nord Quantique 10 millió dolláros hosszabbítást kapott a DARPA Quantum Benchmarking Initiative (QBI) programjának B szakaszában. A program azt vizsgálja, mely architektúrák érhetnek el 2033-ig hasznos méretet.
**Miért fontos:** A tőke egyre inkább a „lapát és csákány” rétegbe (vezérlés, kalibráció) és a hibajavítást olcsóbbá tevő architektúrákba áramlik. Az állami szereplők (EIC, DARPA) kockázatmegosztó szerepe kulcsfontosságú.
**Források:**
- Quantum Computing Report, https://quantumcomputingreport.com/quantrolox-raises-e12-million-13-36-million-usd-series-a2-to-scale-automated-quantum-control-software-and-u-s-operations/ (2026. 10. 27.)
- The Quantum Insider, https://thequantuminsider.com/2026/10/29/nord-quantique-10-million-darpa-funding-extension/ (2026. 10. 29.)

## 6. Új anyagok: a Quantinuum és a GE Vernova a magas hőmérsékletű szupravezetést kutatja
**Mi történt:** A Quantinuum és a GE Vernova kutatóközpontja (ARC) közös kutatásba kezdett. A Quantinuum Helios gépén (99,9% feletti kétqubites kapuhűség) a 2D Fermi–Hubbard-modellt szimulálják, hogy megértsék a magas hőmérsékletű, 77 K fölött működő szupravezetés mechanizmusát. Az ipari célpontok a kompakt szél- és hajógenerátorok, a hagyományos vezetékeknél akár ötször nagyobb áramot vivő átviteli kábelek és a zárlatiáram-korlátozók. Pénzügyi feltételeket és ütemtervet nem közöltek.
**Miért fontos:** Ez a kvantumszámítás egyik első kézzelfogható ipari alkalmazási iránya, az anyagtudomány. Közvetlen kapcsolata van az energetikával, a hálózatbővítéssel és az MI-adatközpontok áramigényével.
**Forrás:** Quantum Computing Report, https://quantumcomputingreport.com/quantinuum-and-ge-vernova-target-high-temperature-superconductivity-using-helios-trapped-ion-hardware/ (2026. 10. 27.)

---

## Lehetséges összefüggések
- **A fenyegetés és a szabályozás egyszerre gyorsul:** az Alice & Bob becslése szerint a 2030-as évek elején válhat valós veszéllyé a kvantumgépes kódtörés, a NIST pedig 2030 és 2035 közé teszi a kemény határidőket. A két idővonal szinte fedi egymást, ezért a PQC-átállás már nem „jövőbeli” informatikai projekt.
- **Moduláris skálázás és olcsóbb hibajavítás:** az IBM chipek közötti kapcsolatai, a Nord Quantique bozonikus hibajavítása és az Alice & Bob macskaqubitjei ugyanazt a szűk keresztmetszetet támadják: a hibatűréshez szükséges qubitszámot. Ha ez csökken, a menetrendek előrébb jöhetnek.
- **Energetika és kvantum:** a GE Vernova szupravezető-kutatása (és a forrásban szereplő E.ON–Qoro, illetve EPB–IonQ hálózatoptimalizálási projektek) azt mutatja, hogy az energiaszektor az egyik első fizetőképes felhasználó. Ez összekapcsolódik az MI miatti áramigény-robbanással.
- **Európa versenyben marad:** az IQM és a QuantrolOx (Finnország, EIC-tőke) és a Pasqal (Franciaország) aktív, de a növekedési tőkéért és a piacért sokszor az USA-ba kell menniük. A QuantrolOx berkeley-i irodája is ezt mutatja.

## Lehetőségek (kockázattal)
- **PQC-tanácsadás és -migráció kkv-knak:** a NIST-határidők a beszállítói láncokon keresztül a magyar kkv-kat is elérik (bankok, multik beszállítói, egészségügy). Lehetőség: titkosítási leltár (crypto inventory), auditcsomagok, migrációs szolgáltatás. *Kockázat:* az EU-s határidők és követelmények eltérhetnek az amerikaiaktól, a kereslet lassan indulhat, és a nagy integrátorok gyorsan bepozícionálhatnak.
- **„Lapát és csákány” réteg:** a kvantumprocesszorok vezérlése, kalibrációja és szoftveres automatizálása (QuantrolOx, Pelagic Systems) tőkét vonz, és kevesebb hardverkockázattal jár. *Kockázat:* kicsi, töredezett piac, amelynek a sorsa a néhány nagy hardvergyártótól függ.
- **Befektetői oldal:** a kvantumrészvények (IonQ, Rigetti, D-Wave) erős hírfolyam mellett is volatilisek. Biztosabb lehet a közvetett kitettség (kriptográfiai, kiberbiztonsági, energetikai szereplők). *Kockázat:* a hype-ciklus megfordulása; a bejelentések nagy része még becslés vagy kutatási eredmény, nem bevétel.
- **EU-s és állami források:** az EIC Fund és a DARPA-típusú programok kockázatot osztanak meg. Magyar kutatócsoportok és startupok számára az EIC Accelerator és a Horizon kvantumpályázatai elérhetők. *Kockázat:* hosszú átfutás és erős nemzetközi verseny.
