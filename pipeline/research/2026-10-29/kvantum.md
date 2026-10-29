# KVANTUM ÉS DEEP TECH (`kvantum`) – kutatási jelentés
**Időablak:** 2026. okt. 26–28. (okt. 29-ről még nem találtam anyagot.) **Elsődleges források:** Quantum Computing Report, The Quantum Insider, Ynetnews.

---

### 1. Az Intel kb. 2,3 milliárd dollárért megveszi az izraeli Classiq kvantumszoftver-céget
**Mi történt:** Az Intel október 26-án végleges megállapodást kötött a Classiq Technologies felvásárlásáról. A cég kvantumprogramok összeállítására és optimalizálására fejleszt platformot. Az Intel nem közölt vételárat. A Calcalistra hivatkozó Ynet szerint a vételár kb. 2,3 milliárd dollár, készpénzben és Intel-részvényben. Ez a Classiq 2025-ös, 600–700 millió dolláros értékelésének több mint háromszorosa. A cégnek kb. 150 munkatársa és 100 millió dollár alatti éves bevétele van, ügyfelei között a BMW, a Rolls-Royce, a HSBC és a Citi. A három alapító fejenként 80–100 millió dollárt kaphat, a dolgozók együtt kb. 10%-ban tulajdonosok (ez kb. 230 millió dollár). A zárás 2027 első felében várható, hatósági jóváhagyás után.
**Miért fontos:** Ez lehet minden idők legnagyobb kvantumos felvásárlása. Az eddigi rekord az IonQ 2025-ös, kb. 1 milliárd dolláros Oxford Ionics-vétele volt. Az Intel a saját spin-qubit gyártását most szoftverrel egészíti ki, és a CPU, GPU és ASIC mellé kvantumprocesszort (QPU) is kínálna. Lip-Bu Tan vezérigazgató a Classiq magánbefektetője, de a hírek szerint nem vett részt a tárgyalásokon. A Classiq a felvásárlási ajánlat előtt SPAC-os tőzsdei bevezetést fontolgatott.
**Források:**
- The Quantum Insider, 2026. okt. 26. (az Intel közleménye alapján): https://thequantuminsider.com/2026/10/26/intel-to-acquire-classiq-to-create-a-full-stack-quantum-computing-platform/
- Ynetnews: https://www.ynetnews.com/business/article/rkd8qnanme – a cikk nem tüntet fel dátumot, a jelek szerint okt. 26.
- The Quantum Insider, okt. 28. (a jogi tanácsadó Hogan Lovells Cadwalader közleménye): https://thequantuminsider.com/2026/10/28/hogan-lovells-cadwalader-advises-intel-in-pending-acquisition-of-classiq-technologies/

### 2. A NIST véglegesítette a poszt-kvantum titkosításra való átállás menetrendjét (IR 8547)
**Mi történt:** Kiadták a NIST IR 8547 dokumentum végleges változatát. Eszerint a kvantumszámítógéppel feltörhető nyilvános kulcsú algoritmusokat (RSA, ECDSA, ECDH stb.) 2030 után elavultnak tekintik, 2035. december 31. után pedig tiltják. A szövetségi kiemelt rendszereknek a kulcscserét 2030. dec. 31-ig, a digitális aláírást 2031. dec. 31-ig kell kvantumbiztosra cserélniük. A TLS 1.3 használata 2030. január 2-tól kötelező. Az alapértelmezett kulcscsere-algoritmus az ML-KEM-768. Aláírásra az ML-DSA és az SLH-DSA használható.
**Miért fontos:** Ezzel kőbe vésett határidő lett a titkosítási rendszerek cseréjéből. Az amerikai szövetségi beszállítók és a globális bankok, telekomcégek ehhez fognak igazodni. Magyar és EU-s cégeknél is jönni fog a megfelelési nyomás, ez tanácsadói és szoftverpiacot jelent.
**Forrás:** Quantum Computing Report, 2026. okt. 27.: https://quantumcomputingreport.com/nist-releases-final-ir-8547-establishing-definitive-post-quantum-cryptography-transition-timeline-and-deprecation-schedules/

### 3. Az IBM méteres kábelekkel kötött össze két 120 qubites chipet
**Mi történt:** Az IBM négy darab 80 cm-es, kriogén hőmérsékleten működő összeköttetéssel („L-coupler”) kapcsolt össze két 120 qubites Nighthawk processzort. Az egyik chipről a másikra átvitt kvantumállapot átlagosan 99,00%-os pontossággal érkezett meg (a legjobb kapcsolaton 99,29%-kal). A két chip közötti kétqubites műveletek pontossága viszont csak 94,75% volt átlagosan, szemben a chipen belüli kb. 99,5%-kal. A kapcsolatok három lehűtési–felmelegítési ciklust is romlás nélkül bírtak. Az eredmény egyelőre arXiv-preprint, nem lektorált publikáció.
**Miért fontos:** Ez a 2029-re tervezett, hibatűrő Starling gép moduláris építésének alapja. A gyenge pont a chipek közötti műveletek alacsonyabb pontossága. Az IBM szerint ez 99% fölé vihető, de ez még csak előrejelzés.
**Forrás:** Quantum Computing Report, 2026. okt. 27.: https://quantumcomputingreport.com/ibm-unveils-meter-scale-superconducting-l-couplers-connecting-dual-120-qubit-processors-with-99-state-transfer-fidelity/

### 4. A PsiQuantum MI-adatközpontoknak is kínálja a kvantumgépéhez fejlesztett optikai kapcsolót
**Mi történt:** A PsiQuantum bemutatott egy 8×8-as optikai kapcsolót, amely a kvantumgépeihez kifejlesztett szilícium-fotonikai platformra épül. Jellemzői: 1,2 dB jelveszteség, 40 dB elválasztás a csatornák között, 3 ms alatti átkapcsolás. Az eszközből már mintapéldányokat kapnak a potenciális vállalati ügyfelek. A formális termékvonalakat „a következő hónapokban” jelentik be.
**Miért fontos:** Klasszikus „melléktermékből bevétel” stratégia. A kvantumcég már a hibatűrő kvantumgép elkészülte előtt pénzt keresne a fellendülő MI-infrastruktúra piacán. Más deep tech cégeknek is minta lehet erre.
**Források:**
- Quantum Computing Report, 2026. okt. 28.: https://quantumcomputingreport.com/psiquantum-unveils-8x8-optical-circuit-switch-demonstration-vehicle-derived-from-silicon-photonics-quantum-architecture/
- The Quantum Insider, okt. 28.: https://thequantuminsider.com/2026/10/28/psiquantum-optical-circuit-switch-ai-data-centers/

### 5. A Quantinuum és a GE Vernova kvantumgéppel kutatja a magas hőmérsékletű szupravezetést
**Mi történt:** A két cég közös kutatásba kezdett: a Quantinuum Helios gépén szimulálják a 2D Fermi–Hubbard-modellt. A Helios kétqubites műveleteinek pontossága 99,9% fölötti. A célpiacok: kompakt szél- és hajógenerátorok, nagy kapacitású szupravezető kábelek (a cikk szerint akár ötszörös áramerősséggel) és zárlati áramkorlátozók.
**Miért fontos:** Egy nagy energetikai cég konkrét ipari kérdéssel fordul kvantumgéphez, ez kapcsolja össze az energiaátmenetet és a kvantumot. Kereskedelmi eredmény évekig nem várható.
**Forrás:** Quantum Computing Report, 2026. okt. 27.: https://quantumcomputingreport.com/quantinuum-and-ge-vernova-target-high-temperature-superconductivity-using-helios-trapped-ion-hardware/

### 6. Kisebb finanszírozások: QuantrolOx (12 millió euró, uniós EIC Fund-társfinanszírozással), IonQ (7,5 millió dollár az amerikai légierőtől), D-Wave–LG CNS
**Mi történt:**
- **QuantrolOx:** a finn székhelyű oxfordi spinoff 12 millió eurós Series A2 kört zárt. A kört az IW Capital vezette, az EU-s EIC Fund társbefektetőként szállt be. A cég eddig összesen kb. 28 millió eurót vont be, és irodát nyit a kaliforniai Berkeley-ben.
- **IonQ:** 7,5 millió dolláros második szakaszt kapott az amerikai légierő kutatólaboratóriumától (AFRL) a New York állambeli Rome-ban épülő kvantumhálózatára. Ez egy 21,1 millió dolláros keretszerződés része.
- **D-Wave–LG CNS:** nem kötelező érvényű szándéknyilatkozatot (MOU) írtak alá vállalati optimalizálási feladatokra (gyártásütemezés, logisztika, telekom) Dél-Koreában. Pénzügyi vállalást nem hoztak nyilvánosságra.

**Miért fontos:** A QuantrolOx példája azt mutatja, hogy az EIC Fund korai fázisú deep tech cégekbe is befektet, ez magyar alapítóknak is releváns csatorna. A D-Wave-megállapodás egyelőre csak szándéknyilatkozat, nem bevétel.
**Források:**
- Quantum Computing Report, okt. 27. (QuantrolOx): https://quantumcomputingreport.com/quantrolox-raises-e12-million-13-36-million-usd-series-a2-to-scale-automated-quantum-control-software-and-u-s-operations/
- Quantum Computing Report, okt. 27. (IonQ): https://quantumcomputingreport.com/ionq-secures-7-5-million-phase-2-afrl-allocation-to-expand-rome-ny-quantum-network-with-free-space-optics-and-frequency-conversion/
- Quantum Computing Report, okt. 28. (D-Wave–LG CNS): https://quantumcomputingreport.com/lg-cns-and-d-wave-partner-to-evaluate-quantum-annealing-for-enterprise-combinatorial-optimization/

**Tartalék hírek** (csak címszinten láttam, nem ellenőriztem részletesen):
- Az Egyesült Királyság kvantumtechnológiai ütemterve az űrszektornak, okt. 28.
- A Nord Quantique 10 millió dolláros szerződéshosszabbítása a DARPA-tól, okt. 28.
- Az IDEMIA és a KT kvantumbiztos SIM-kártyái a dél-koreai hadseregnek, okt. 26.

Ezek mind a Quantum Computing Report hírlistáján szerepelnek: https://quantumcomputingreport.com/news/

---

### Nem találtam
- Kvantumos részvények (IONQ, RGTI, QBTS) ezen a héten: nincs friss árfolyamhír. A keresés csak júniusi és régebbi cikkeket hozott, ezért árfolyamadatot nem közlök.
- Fúziós energia: az ablakban nem találtam friss hírt.
- Reuters-cikket ezekről a témákról nem ellenőriztem.

---

## Lehetséges összefüggések
- **Átrendeződik a piac a nagy chipgyártók körül.** Az Intel–Classiq üzlet és az IBM moduláris chipösszekötése ugyanazt mutatja: a félvezető-óriások a kvantumot a meglévő termékcsaládjuk (CPU, GPU, QPU) részeként, vertikálisan építik. A tisztán kvantumos cégekre (IonQ, Rigetti, D-Wave) ez felvásárlási, de versenynyomást is jelent.
- **A szoftvercégek többet érnek, mint gondolnánk.** Egy 150 fős szoftvercégért a 2025-ös értékelés háromszorosát fizetik. Ez újraárazhatja a kvantumszoftveres startupokat, például a QuantrolOxot és a Q-CTRL-t.
- **A kvantum és az MI fizikai infrastruktúrája összeér.** A PsiQuantum optikai kapcsolója jól mutatja, hogy a kvantumcégek az MI-adatközpontokból próbálnak most bevételt szerezni. Ez az MI-beruházási ciklus sorsától is függővé teszi őket.
- **Ez a hét a titkosítás cseréjének határidejét hozta, nem a kvantumgépek áttörését.** A NIST 2030/2035-ös határideje ma kézzelfogható költség, a kvantumszámítógép maga még évekre van. A kvantumbiztos titkosítás (PQC) piaca tehát hamarabb termel bevételt, mint maga a kvantumszámítás.

## Lehetőségek (kockázattal)
1. **Átállási tanácsadás és leltár kkv-knak.** A cél annak felmérése, hol használnak RSA-t vagy ECC-t a rendszereikben, és az átállás ütemezése a NIST-határidőkhöz. *Kockázat:* EU-s kötelező szabály még nincs, ezért lassú lehet a kereslet, és a nagy integrátorok gyorsan elvihetik a piacot.
2. **Kvantum- vagy deep tech-szoftver startup EIC-finanszírozással.** A QuantrolOx-modell (egyetemi spinoff, EIC Fund mint társbefektető) magyar csapatoknak is megismételhető. *Kockázat:* hosszú idő a bevételig, kevés hazai szakember, az EIC-pályázatok sikeraránya alacsony.
3. **Befektetőknek: felvásárlási célpontok.** A szoftver- és vezérlőréteg cégei (pl. Classiq-típusú vállalatok) vonzóvá váltak. *Kockázat:* a szektor rendkívül volatilis; 2025 végén egyes kvantumrészvények 65%-ot is estek a csúcsukról. Az Intel–Classiq zárása 2027 első feléig bizonytalan, és a hatósági jóváhagyás is kérdéses.
4. **Ipari optimalizálási pilotprojektek** (logisztika, ütemezés) felhőben elérhető kvantumgépekkel, a D-Wave–LG CNS mintájára. *Kockázat:* a megállapodás csak szándéknyilatkozat, és nem bizonyított, hogy ezeken a feladatokon a kvantumgép jobb a klasszikus optimalizálásnál.
