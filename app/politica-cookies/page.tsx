"use client";

import React from 'react';
import { Cookie, Info, ShieldCheck } from 'lucide-react';

export default function CookiePolicy() {
  const handleResetCookies = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("fsp-consent");
      localStorage.removeItem("fsp-consent-at");
      localStorage.removeItem("cookie-consent");
      window.location.reload();
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-24 selection:bg-blue-100">
      {/* Antet document */}
      <div className="mb-12 border-b border-blue-100 pb-8">
        <div className="flex items-center gap-3 mb-4 text-blue-500">
          <Cookie className="h-6 w-6 text-blue-600" />
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-500">Document Legal</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight mb-4 uppercase">
          POLITICA DE UTILIZARE A MODULELOR COOKIE
        </h1>
        <p className="text-sm text-slate-400 font-medium">Versiune revizuită – Noiembrie 2026</p>
      </div>

      <div className="text-slate-700 space-y-10 text-base md:text-lg leading-relaxed">
        
        {/* Preambul și operatorul de date */}
        <section className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex gap-4">
            <Info className="h-6 w-6 text-blue-500 shrink-0 mt-1" />
            <div className="space-y-3 w-full">
              <h2 className="text-xl font-bold text-slate-800">Preambul și operatorul de date</h2>
              <p className="text-slate-600 text-sm md:text-base">
                Prezenta politică reglementează utilizarea modulelor cookie și a tehnologiilor similare (de exemplu, stocarea locală a browserului – <code>localStorage</code>) pe website-ul <strong className="text-slate-800">www.finesolutionspro.ro</strong> și informează utilizatorii cu privire la prelucrarea datelor cu caracter personal asociate, în conformitate cu legislația națională și europeană în vigoare.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-sm text-slate-700">
                <div className="bg-white p-3 rounded-xl border border-blue-100">
                  <strong className="block text-slate-900 font-semibold mb-1">Operator:</strong>
                  FINE SOLUTIONS PROFESSIONAL S.R.L.
                </div>
                <div className="bg-white p-3 rounded-xl border border-blue-100">
                  <strong className="block text-slate-900 font-semibold mb-1">Sediu social:</strong>
                  Cluj-Napoca, Str. Ciocanului, Nr. 15B, Ap. 2, Județul Cluj
                </div>
                <div className="bg-white p-3 rounded-xl border border-blue-100">
                  <strong className="block text-slate-900 font-semibold mb-1">Identificare:</strong>
                  Nr. de ordine în Registrul Comerțului J2024000792123, C.U.I. 49574499
                </div>
                <div className="bg-white p-3 rounded-xl border border-blue-100">
                  <strong className="block text-slate-900 font-semibold mb-1">Contact protecția datelor:</strong>
                  <a href="mailto:protectiadatelor@finesolutionspro.ro" className="text-blue-600 underline font-medium">protectiadatelor@finesolutionspro.ro</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 1. Cadrul legal */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">1. Cadrul legal</h2>
          <p className="text-slate-600 text-sm md:text-base">
            Prezenta politică se aplică tuturor utilizatorilor website-ului și are la bază:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm md:text-base">
            <li>Legea nr. 506/2004 privind prelucrarea datelor cu caracter personal și protecția vieții private în sectorul comunicațiilor electronice, care transpune Directiva 2002/58/CE (Directiva ePrivacy), cu modificările aduse prin Directiva 2009/136/CE;</li>
            <li>Regulamentul (UE) 2016/679 (Regulamentul general privind protecția datelor – GDPR);</li>
            <li>Jurisprudența Curții de Justiție a Uniunii Europene, în special hotărârea din 1 octombrie 2019 în cauza C-673/17 (Planet49), potrivit căreia consimțământul pentru cookie-uri trebuie exprimat printr-o acțiune activă, fiind invalid consimțământul prin căsuțe bifate în prealabil.</li>
          </ul>
          <p className="text-slate-600 text-sm md:text-base">
            Potrivit art. 4 alin. (5) din Legea nr. 506/2004, stocarea de informații sau accesul la informațiile stocate în echipamentul terminal al utilizatorului sunt permise numai cu acordul acestuia, după ce a primit informații clare și complete. Excepție fac, potrivit art. 4 alin. (6), cookie-urile strict necesare pentru furnizarea serviciului solicitat expres de utilizator, pentru care acordul nu este necesar.
          </p>
        </section>

        {/* 2. Ce este un cookie */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-800">2. Ce este un cookie</h2>
          <p className="text-slate-600 text-sm md:text-base">
            Un cookie este un fișier de mici dimensiuni, format din litere și cifre, stocat pe computerul, telefonul mobil sau alt echipament de pe care utilizatorul accesează internetul. Cookie-ul este plasat prin solicitarea transmisă de un server web către browser (de exemplu Chrome, Firefox, Safari, Edge). Cookie-urile nu conțin programe informatice, viruși sau programe de tip spyware și nu pot accesa informațiile de pe dispozitivul utilizatorului.
          </p>
          <p className="text-slate-600 text-sm md:text-base">
            Tehnologiile similare, precum stocarea locală a browserului (localStorage), funcționează pe același principiu și sunt supuse acelorași reguli.
          </p>
        </section>

        {/* 3. Categorii de cookie-uri după durată */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-800">3. Categorii de cookie-uri după durată</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm md:text-base">
            <li><strong>Cookie-uri de sesiune</strong> – stocate temporar și șterse la închiderea browserului.</li>
            <li><strong>Cookie-uri persistente</strong> – rămân stocate pe dispozitiv pe durata indicată în tabelul de la secțiunea 5 sau până la ștergerea lor de către utilizator.</li>
          </ul>
          <p className="text-slate-600 text-sm md:text-base">
            Cookie-urile pot fi plasate de website-ul nostru (cookie-uri proprii) sau de furnizori terți ale căror servicii sunt integrate în site (cookie-uri terțe). Website-ul nostru utilizează exclusiv cookie-urile și tehnologiile enumerate în secțiunea 5; nu utilizează cookie-uri de publicitate sau de targetare și nu integrează conținut video de la terți.
          </p>
        </section>

        {/* 4. Categorii de cookie-uri după scop */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">4. Categorii de cookie-uri după scop</h2>
          
          <div className="grid gap-4 mt-2">
            <div className="p-5 border border-slate-200 rounded-xl bg-white space-y-2 shadow-sm">
              <span className="inline-block bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
                Obligatoriu
              </span>
              <h3 className="font-bold text-slate-800 text-base">4.1. Strict necesare</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Sunt indispensabile funcționării website-ului și reținerii opțiunii dumneavoastră privind cookie-urile. Temei: art. 4 alin. (6) din Legea nr. 506/2004 (nu necesită consimțământ); pentru eventualele date personale asociate, interesul legitim al operatorului de a asigura funcționarea și securitatea site-ului – art. 6 alin. (1) lit. f) GDPR. Nu pot fi dezactivate din banner, deoarece site-ul nu poate funcționa corect fără ele.
              </p>
            </div>

            <div className="p-5 border border-blue-100 rounded-xl bg-blue-50/30 space-y-2 shadow-sm">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
                Opțional
              </span>
              <h3 className="font-bold text-blue-900 text-base">4.2. De analiză și performanță</h3>
              <p className="text-blue-950/70 text-sm leading-relaxed">
                Ne permit să măsurăm numărul de vizitatori, paginile vizitate și sursele de trafic, pentru îmbunătățirea website-ului. Folosim în acest scop Google Analytics 4. Datele sunt pseudonimizate (cookie-ul conține un identificator aleatoriu, nu numele sau datele dumneavoastră de contact), iar Google Analytics 4 nu stochează adresa IP completă.
              </p>
              <p className="text-blue-950/70 text-sm leading-relaxed">
                Temei: consimțământul dumneavoastră – art. 4 alin. (5) din Legea nr. 506/2004 și art. 6 alin. (1) lit. a) GDPR. Aceste cookie-uri se activează numai după ce apăsați „Accept” în banner. Până atunci, Google Analytics funcționează în modul de consimțământ (Consent Mode), fără plasarea de cookie-uri de analiză.
              </p>
            </div>

            <div className="p-5 border border-slate-200 rounded-xl bg-white space-y-2 shadow-sm">
              <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
                Fără cookie-uri
              </span>
              <h3 className="font-bold text-slate-800 text-base">4.3. Statistici fără cookie-uri</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Folosim și Cloudflare Web Analytics, care măsoară numărul de vizitatori și paginile afișate fără a plasa cookie-uri și fără a crea profiluri ale utilizatorilor. Pentru acest serviciu nu este necesar consimțământul privind cookie-urile; prelucrarea datelor tehnice ale vizitei (de exemplu, adresa IP, tipul browserului) are la bază interesul legitim al operatorului de a cunoaște utilizarea site-ului – art. 6 alin. (1) lit. f) GDPR.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Lista modulelor cookie */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">5. Lista modulelor cookie și a tehnologiilor similare utilizate</h2>
          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                  <th className="p-3 font-bold">Denumire</th>
                  <th className="p-3 font-bold">Furnizor</th>
                  <th className="p-3 font-bold">Durată</th>
                  <th className="p-3 font-bold">Categorie / Scop</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-600">
                <tr>
                  <td className="p-3 font-mono text-xs font-semibold text-blue-600">fsp-consent</td>
                  <td className="p-3">finesolutionspro.ro (propriu, localStorage)</td>
                  <td className="p-3">12 luni</td>
                  <td className="p-3">Strict necesar – reține opțiunea dumneavoastră privind cookie-urile</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs font-semibold text-blue-600">fsp-consent-at</td>
                  <td className="p-3">finesolutionspro.ro (propriu, localStorage)</td>
                  <td className="p-3">12 luni</td>
                  <td className="p-3">Strict necesar – reține data opțiunii, pentru reafișarea banner-ului după 12 luni</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs font-semibold text-blue-600">_ga</td>
                  <td className="p-3">Google Ireland Ltd. (Google Analytics)</td>
                  <td className="p-3">2 ani</td>
                  <td className="p-3">Analiză – distinge vizitatorii unici</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs font-semibold text-blue-600">_ga_&lt;ID&gt;</td>
                  <td className="p-3">Google Ireland Ltd. (Google Analytics)</td>
                  <td className="p-3">2 ani</td>
                  <td className="p-3">Analiză – păstrează starea sesiunii</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs font-semibold text-slate-500">—</td>
                  <td className="p-3">Cloudflare, Inc. (Web Analytics)</td>
                  <td className="p-3">—</td>
                  <td className="p-3">Nu plasează cookie-uri</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. Destinatari și transferuri */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">6. Destinatari și transferuri în afara Spațiului Economic European</h2>
          <p className="text-slate-600 text-sm md:text-base">
            Datele colectate prin instrumentele de mai sus sunt prelucrate, în calitate de persoane împuternicite, de Google Ireland Limited (Google Analytics) și Cloudflare, Inc. (Cloudflare Web Analytics). Website-ul este găzduit de Hosterion S.R.L. (România), care prelucrează datele tehnice ale accesării site-ului (de exemplu, jurnalele serverului) în calitate de persoană împuternicită.
          </p>
          <p className="text-slate-600 text-sm md:text-base">
            Unele date pot fi transferate către Statele Unite ale Americii, către Google LLC și Cloudflare, Inc. Transferul se realizează în baza Deciziei de punere în aplicare (UE) 2023/1795 a Comisiei Europene privind caracterul adecvat al nivelului de protecție asigurat în cadrul EU-U.S. Data Privacy Framework, la care furnizorii menționați au aderat, și/sau a clauzelor contractuale standard aprobate de Comisia Europeană.
          </p>
        </section>

        {/* 7. Durata de păstrare a datelor */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">7. Durata de păstrare a datelor</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm md:text-base">
            <li>Durata de stocare a cookie-urilor pe dispozitiv este cea indicată în tabelul de la secțiunea 5.</li>
            <li>Datele statistice detaliate din Google Analytics sunt păstrate 14 luni, după care sunt șterse automat; rapoartele agregate pot fi păstrate fără limită, întrucât nu permit identificarea utilizatorilor.</li>
            <li>Opțiunea dumneavoastră privind cookie-urile este păstrată 12 luni, după care banner-ul vă este afișat din nou.</li>
          </ul>
        </section>

        {/* 8. Gestionarea și retragerea consimțământului */}
        <section className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            8. Gestionarea și retragerea consimțământului
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Vă puteți modifica sau retrage oricând consimțământul, la fel de simplu cum l-ați acordat, prin linkul „Setări cookie-uri” din subsolul fiecărei pagini sau prin butonul de mai jos. La retragerea consimțământului, cookie-urile Google Analytics sunt șterse de pe dispozitiv, iar colectarea datelor de analiză încetează. Retragerea consimțământului nu afectează legalitatea prelucrării efectuate înainte de retragere.
          </p>
          <p className="text-slate-600 text-sm md:text-base">
            Puteți, de asemenea, să blocați sau să ștergeți cookie-urile din setările browserului (de regulă, în meniul „Setări” → „Confidențialitate și securitate”). Blocarea tuturor cookie-urilor poate afecta funcționarea unor website-uri.
          </p>
          
          <div className="pt-2">
            <button
              type="button"
              onClick={handleResetCookies}
              className="inline-flex items-center gap-2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <ShieldCheck className="h-4 w-4" />
              Resetare Setări Cookie-uri
            </button>
          </div>
        </section>

        {/* 9. Drepturile dumneavoastră */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-800">9. Drepturile dumneavoastră</h2>
          <p className="text-slate-600 text-sm md:text-base">
            În calitate de persoană vizată, beneficiați, în condițiile art. 15–22 GDPR, de dreptul de acces, de rectificare, de ștergere („dreptul de a fi uitat”), de restricționare a prelucrării, de portabilitate a datelor, de opoziție față de prelucrările întemeiate pe interesul legitim, precum și de dreptul de a vă retrage oricând consimțământul.
          </p>
          <p className="text-slate-600 text-sm md:text-base">
            Pentru exercitarea acestor drepturi sau pentru orice întrebare privind prelucrarea datelor prin intermediul modulelor cookie, ne puteți contacta la{' '}
            <a href="mailto:protectiadatelor@finesolutionspro.ro" className="text-blue-600 underline font-bold hover:text-blue-800 transition-colors">
              protectiadatelor@finesolutionspro.ro
            </a>.
          </p>
          <p className="text-slate-600 text-sm md:text-base">
            Aveți, de asemenea, dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP) –{' '}
            <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-bold hover:text-blue-800 transition-colors">
              www.dataprotection.ro
            </a>.
          </p>
        </section>

        {/* 10. Actualizarea politicii */}
        <section className="space-y-3 pt-6 border-t border-blue-100">
          <h2 className="text-2xl font-bold text-slate-800">10. Actualizarea politicii</h2>
          <p className="text-slate-600 text-sm md:text-base">
            Prezenta politică poate fi actualizată ori de câte ori se modifică instrumentele utilizate pe website sau cadrul legal aplicabil. Versiunea în vigoare este cea publicată pe această pagină, cu data indicată la început.
          </p>
        </section>

      </div>
    </main>
  );
}