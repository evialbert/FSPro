import React from 'react';

export const metadata = {
  title: 'Politica de Utilizare Cookie-uri | FINE SOLUTIONS PROFESSIONAL S.R.L.',
  description: 'Politica privind modulele cookie aplicabilă utilizatorilor website-ului FINE SOLUTIONS PROFESSIONAL S.R.L. în conformitate cu GDPR și ePrivacy.',
};

export default function PoliticaCookies() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-slate-700">
      <div className="max-w-4xl mx-auto bg-white shadow-md border border-slate-100 rounded-xl overflow-hidden">
        
        {/* Header / Banner Albastru */}
        <div className="bg-blue-900 text-white p-8 sm:p-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {"POLITICA DE UTILIZARE MODULE COOKIE"}
          </h1>
          <p className="text-blue-200 text-sm sm:text-base">
            {"Versiunea actualizată la zi: Anul 2026 (Aliniată ePrivacy și GDPR)"}
          </p>
        </div>

        {/* Conținutul Principal */}
        <div className="p-8 sm:p-10 space-y-8">
          
          {/* Caseta Companie / Operator - Accent Albastru */}
          <div className="bg-blue-50/50 border-l-4 border-blue-600 p-6 rounded-r-lg space-y-3">
            <h2 className="text-sm font-semibold text-blue-900 uppercase tracking-wide">
              {"Preambul & Operator de date"}
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              {"Prezenta politică reglementează utilizarea modulelor cookie și a tehnologiilor similare pe website-ul nostru și stabilește temeiul legal pentru prelucrarea datelor cu caracter personal în conformitate cu legislația națională și europeană în vigoare."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm pt-2 border-t border-blue-100">
              <div className="font-bold text-slate-600">{"Operator:"}</div>
              <div className="sm:col-span-2 font-medium text-slate-900">{"FINE SOLUTIONS PROFESSIONAL S.R.L."}</div>
              
              <div className="font-bold text-slate-600">{"Sediu Social:"}</div>
              <div className="sm:col-span-2 text-slate-800">{"Cluj-Napoca, Str. CIOCANULUI, Nr. 15B, Ap. 2, Județul CLUJ"}</div>
              
              <div className="font-bold text-slate-600">{"Identificare:"}</div>
              <div className="sm:col-span-2 text-slate-800">{"Înregistrată la Registrul Comerțului: J12/792/2024, C.U.I. 49574499"}</div>
              
              <div className="font-bold text-slate-600">{"Contact Date:"}</div>
              <div className="sm:col-span-2 text-blue-700 font-semibold">{"protectiadatelor@finesolutions.ro"}</div>
            </div>
          </div>

          {/* Sectiunea 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-blue-900 border-b border-slate-100 pb-2">
              {"1. Introducere și context legal (Actualizat 2026)"}
            </h2>
            <p className="text-justify leading-relaxed">
              {"Prezenta Politică privind modulele cookie se aplică tuturor utilizatorilor acestui website operat de "}
              <strong>{"FINE SOLUTIONS PROFESSIONAL S.R.L."}</strong>
              {" Informațiile prezentate în continuare au scopul de a aduce la cunoștința utilizatorilor detalii clare despre plasarea, utilizarea și administrarea cookie-urilor în contextul navigării pe paginile noastre web."}
            </p>
            <p className="text-justify leading-relaxed">
              {"În conformitate cu reglementările stricte aplicabile în anul 2026 (Directiva ePrivacy consolidată, Regulamentul General privind Protecția Datelor - GDPR și jurisprudența europeană recentă), plasarea modulelor cookie non-esențiale este strict condiționată de obținerea "}
              <strong>{"consimțământului prealabil, explicit, liber exprimat și informat"}</strong>
              {" al utilizatorului, manifestat prin acțiuni afirmative clare în bannerul de cookies."}
            </p>
          </section>

          {/* Sectiunea 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-blue-900 border-b border-slate-100 pb-2">
              {"2. Ce este un \"cookie\"?"}
            </h2>
            <p className="text-justify leading-relaxed">
              {"Un \"Internet Cookie\" (termen cunoscut și sub denumirea de \"browser cookie\" sau \"HTTP cookie\") este un fișier de mici dimensiuni, format din litere și numere, care va fi stocat pe computerul, terminalul mobil sau pe alte echipamente ale unui utilizator de pe care se accesează internetul."}
            </p>
            <p className="text-justify leading-relaxed">
              {"Cookie-ul este instalat prin solicitarea emisă de către un web-server unui browser (ex: Chrome, Firefox, Safari) și este complet \"pasiv\" – nu conține programe software, viruși sau spyware și nu poate accesa informațiile de pe hard drive-ul utilizatorului. Tehnic, doar webserverul care a trimis cookie-ul îl poate accesa din nou când utilizatorul revine pe site."}
            </p>
          </section>

          {/* Sectiunea 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-blue-900 border-b border-slate-100 pb-2">
              {"3. Categorii majore de cookie-uri"}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-justify">
              <li>
                <strong>{"Cookie-uri de sesiune:"}</strong>
                {" Stocate temporar în dosarul de cookie-uri al browser-ului până când utilizatorul părăsește website-ul sau închide fereastra browser-ului."}
              </li>
              <li>
                <strong>{"Cookie-uri persistente:"}</strong>
                {" Rămân stocate pe dispozitiv pentru o durată de viață preconfigurată. Ele includ și cookie-urile plasate de alte site-uri, cunoscute sub numele de "}
                <em>{"\"third party cookies\""}</em>
                {" (cookie-uri plasate de terți)."}
              </li>
            </ul>
          </section>

          {/* Sectiunea 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-blue-900 border-b border-slate-100 pb-2">
              {"4. Clasificarea cookie-urilor după funcționalitate și esențialitate"}
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-blue-900 text-base">{"4.1. Cookie-uri Strict Necesare (Esențiale)"}</h3>
                <p className="text-justify text-sm mt-1 leading-relaxed">
                  {"Sunt indispensabile pentru buna funcționare a site-ului, securitatea sesiunilor și reținerea opțiunilor de bază (cum ar fi coșul sau starea autentificării)."}
                </p>
                <div className="mt-2 text-xs bg-amber-50 border border-amber-200 text-amber-900 p-3 rounded-lg">
                  <strong>{"Temei juridic:"}</strong>
                  {" Prelucrarea se bazează pe "}
                  <strong>{"interesul legitim"}</strong>
                  {" (Art. 6 (1) (f) GDPR). Acestea nu pot fi dezactivate deoarece site-ul nu poate rula corect în lipsa lor."}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-blue-900 text-base">{"4.2. Cookie-uri de Analiză și Performanță (Non-esențiale)"}</h3>
                <p className="text-justify text-sm mt-1 leading-relaxed">
                  {"Colectează informații agregate și anonime despre modul în care utilizatorii interacționează cu paginile noastre (ex. Google Analytics). Ne ajută exclusiv la îmbunătățirea tehnică a platformei."}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-900 text-base">{"4.3. Cookie-uri de Targetare și Publicitate (Non-esențiale)"}</h3>
                <p className="text-justify text-sm mt-1 leading-relaxed">
                  {"Sunt folosite pentru a crea profiluri de interese și a vă afișa reclame relevante pe alte site-uri partenere (ex. rețele publicitare, YouTube integrat)."}
                </p>
                <div className="mt-2 text-xs bg-blue-50 border border-blue-100 text-blue-900 p-3 rounded-lg">
                  <strong>{"Notă consimțământ:"}</strong>
                  {" Modulele non-esențiale (analitice și publicitare) se încarcă pe dispozitiv "}
                  <strong>{"DOAR după acordul dumneavoastră explicit"}</strong>
                  {" (Art. 6 (1) (a) GDPR)."}
                </div>
              </div>
            </div>
          </section>

          {/* Sectiunea 5 - Tabelul de Cookies cu design Albastru */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-blue-900 border-b border-slate-100 pb-2">
              {"5. Centralizatorul modulelor cookie utilizate de website"}
            </h2>
            <p className="text-sm text-slate-600">
              {"Mai jos sunt listate în mod transparent modulele cookie specifice pe care website-ul nostru le poate utiliza (inclusiv cele provenite de la terți integrați precum YouTube):"}
            </p>
            <div className="overflow-x-auto border border-blue-100 rounded-lg shadow-sm">
              <table className="min-w-full divide-y divide-blue-100 text-sm">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-blue-950">{"Denumire Cookie"}</th>
                    <th className="px-4 py-3 text-left font-semibold text-blue-950">{"Furnizor / Domeniu"}</th>
                    <th className="px-4 py-3 text-left font-semibold text-blue-950">{"Durată de viață"}</th>
                    <th className="px-4 py-3 text-left font-semibold text-blue-950">{"Tip / Scop"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {[
                    { name: 'IDE', domain: 'doubleclick.net (Terț)', scope: 'Publicitate / Targetare', life: '1 an' },
                    { name: 'test_cookie', domain: 'doubleclick.net (Terț)', scope: 'Verificare suport cookies', life: '1 zi' },
                    { name: 'VISITOR_INFO1_LIVE', domain: 'youtube.com (Terț)', scope: 'Analiză lățime bandă video', life: '179 zile' },
                    { name: 'YSC', domain: 'youtube.com (Terț)', scope: 'Urmărire vizualizări video', life: 'Sesiune' },
                    { name: 'innertube::nextId', domain: 'youtube.com (Terț)', scope: 'Funcțional / Preferințe HTML5', life: 'Persistent' },
                    { name: 'innertube::requests', domain: 'youtube.com (Terț)', scope: 'Funcțional / Înregistrare interacțiuni', life: 'Persistent' },
                    { name: 'yt-remote-connected-devices', domain: 'youtube.com (Terț)', scope: 'Detectare dispozitive rețea', life: 'Persistent' },
                    { name: 'yt-remote-device-id', domain: 'youtube.com (Terț)', scope: 'Stocare ID dispozitiv redare', life: 'Persistent' },
                    { name: 'yt-remote-session-app', domain: 'youtube.com (Terț)', scope: 'Sincronizare sesiune video', life: 'Sesiune' },
                  ].map((cookie, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="px-4 py-3 font-mono font-bold text-blue-700">{cookie.name}</td>
                      <td className="px-4 py-3 text-slate-600">{cookie.domain}</td>
                      <td className="px-4 py-3 text-slate-600">{cookie.life}</td>
                      <td className="px-4 py-3 text-slate-600">{cookie.scope}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Sectiunea 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-blue-900 border-b border-slate-100 pb-2">
              {"6. Gestionarea, controlul și oprirea modulelor cookie"}
            </h2>
            <p className="text-justify leading-relaxed">
              {"Utilizatorii își pot modifica opțiunile privind modulele cookie în orice moment direct din bannerul / centrul de setări integrat pe site-ul nostru, având posibilitatea de a-și retrage consimțământul la fel de ușor cum l-au oferit."}
            </p>
            <p className="text-justify leading-relaxed">
              {"Alternativ, dezactivarea completă din setările browser-ului dumneavoastră (Chrome, Firefox, Safari, Edge) poate afecta navigarea pe anumite site-uri mari. Setările se găsesc de regulă în meniul „Opțiuni” sau „Preferințe -> Confidențialitate”."}
            </p>
          </section>

          {/* Sectiunea 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-blue-900 border-b border-slate-100 pb-2">
              {"7. Drepturile dumneavoastră și informații de contact"}
            </h2>
            <p className="text-justify leading-relaxed">
              {"În calitate de persoană vizată conform GDPR, beneficiați de dreptul de acces, rectificare, ștergere („de a fi uitat”), restricționarea prelucrării, portabilitatea datelor și retragerea consimțământului. De asemenea, aveți dreptul de a depune o plângere la Autoritatea Națională de Supraveghere (ANSPDCP)."}
            </p>
            <p className="text-justify leading-relaxed">
              {"Pentru orice fel de solicitări sau neclarități metodologice cu privire la prelucrarea datelor dumneavoastră prin intermediul modulelor cookie de către operatorul "}
              <strong>{"FINE SOLUTIONS PROFESSIONAL S.R.L."}</strong>
              {", vă rugăm să ne contactați direct la adresa de e-mail: "}
              <span className="font-semibold text-blue-900 border-b border-blue-200">
                {"protectiadatelor@finesolutions.ro"}
              </span>
              {"."}
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}