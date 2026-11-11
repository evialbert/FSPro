"use client"; // Permite funcționalitatea interactivă și resetarea consimțământului

import React from 'react';
import { Cookie, Info, ShieldCheck } from 'lucide-react';

export default function CookiePolicy() {
  // Funcția care resetează consimțământul (șterge cheile și reîncarcă pagina)
  const handleResetCookies = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("fsp-consent");
      localStorage.removeItem("fsp-consent-at");
      localStorage.removeItem("cookie-consent"); // Compatibilitate cu versiunea anterioară
      window.location.reload();
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-24 selection:bg-blue-100">
      {/* Titlu */}
      <div className="mb-12 border-b border-blue-100 pb-8">
        <div className="flex items-center gap-3 mb-4 text-blue-500">
          <Cookie className="h-6 w-6 text-blue-600" />
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-500">Document Legal</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight mb-4">
          Politica privind modulele cookie
        </h1>
        <p className="text-sm text-slate-400 font-medium">Versiune revizuită – Noiembrie 2026</p>
      </div>

      {/* Conținut text */}
      <div className="text-slate-700 space-y-10 text-base md:text-lg leading-relaxed">
        
        {/* Preambul / Operator */}
        <section className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
          <div className="flex gap-4">
            <Info className="h-6 w-6 text-blue-500 shrink-0 mt-1" />
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-slate-800">Preambul și operatorul de date</h2>
              <p className="text-slate-600 text-sm md:text-base">
                Prezenta politică reglementează utilizarea modulelor cookie și a tehnologiilor similare (de exemplu, stocarea locală a browserului – <code className="bg-white px-1.5 py-0.5 rounded text-xs border border-blue-100 font-mono">localStorage</code>) pe website-ul <strong className="text-slate-800">www.finesolutionspro.ro</strong> și informează utilizatorii cu privire la prelucrarea datelor cu caracter personal asociate, în conformitate cu legislația națională și europeană în vigoare.
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
                  J2024000792123 | C.U.I. 49574499
                </div>
                <div className="bg-white p-3 rounded-xl border border-blue-100">
                  <strong className="block text-slate-900 font-semibold mb-1">Contact Date Personale:</strong>
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
            <li><strong>Legea nr. 506/2004</strong> privind prelucrarea datelor cu caracter personal și protecția vieții private în sectorul comunicațiilor electronice;</li>
            <li><strong>Regulamentul (UE) 2016/679</strong> (Regulamentul general privind protecția datelor – GDPR);</li>
            <li>Jurisprudența CJUE (cauza C-673/17 Planet49) privind consimțământul activ.</li>
          </ul>
        </section>

        {/* 2. Ce este un cookie */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-800">2. Ce este un cookie</h2>
          <p className="text-slate-600 text-sm md:text-base">
            Un cookie este un fișier de mici dimensiuni, format din litere și cifre, stocat pe echipamentul utilizatorului. Tehnologiile similare, precum stocarea locală (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono">localStorage</code>), funcționează pe același principiu. Cookie-urile nu conțin viruși și nu pot accesa informațiile de pe dispozitivul dumneavoastră.
          </p>
        </section>

        {/* 3 & 4. Categorii */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">3 & 4. Categorii și scopuri</h2>
          <div className="grid gap-4 mt-2">
            <div className="p-5 border border-slate-200 rounded-xl bg-white space-y-2 shadow-sm">
              <span className="inline-block bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
                Obligatoriu
              </span>
              <h3 className="font-bold text-slate-800 text-base">Strict necesare</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Indispensabile funcționării website-ului și reținerii opțiunii privind cookie-urile (Temei: art. 4 alin. 6 din Legea nr. 506/2004 și interesul legitim). Nu pot fi dezactivate.
              </p>
            </div>

            <div className="p-5 border border-blue-100 rounded-xl bg-blue-50/30 space-y-2 shadow-sm">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
                Opțional
              </span>
              <h3 className="font-bold text-blue-900 text-base">De analiză și performanță (Google Analytics 4)</h3>
              <p className="text-blue-950/70 text-sm leading-relaxed">
                Măsoară traficul prin date pseudonimizate. Se activează exclusiv după exprimarea consimțământului (Temei: art. 6 alin. 1 lit. a GDPR).
              </p>
            </div>

            <div className="p-5 border border-slate-200 rounded-xl bg-white space-y-2 shadow-sm">
              <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
                Fără cookie-uri
              </span>
              <h3 className="font-bold text-slate-800 text-base">Statistici fără cookie-uri (Cloudflare Web Analytics)</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Măsoară vizitele fără a plasa cookie-uri pe dispozitiv, având la bază interesul legitim al operatorului.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Tabel cookie-uri */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">5. Lista modulelor cookie</h2>
          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                  <th className="p-3 font-bold">Denumire</th>
                  <th className="p-3 font-bold">Furnizor</th>
                  <th className="p-3 font-bold">Durată</th>
                  <th className="p-3 font-bold">Scop</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-600">
                <tr>
                  <td className="p-3 font-mono text-xs font-semibold text-blue-600">fsp-consent</td>
                  <td className="p-3">Propriu (localStorage)</td>
                  <td className="p-3">12 luni</td>
                  <td className="p-3">Reține opțiunea cookie-urilor</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs font-semibold text-blue-600">fsp-consent-at</td>
                  <td className="p-3">Propriu (localStorage)</td>
                  <td className="p-3">12 luni</td>
                  <td className="p-3">Reține data opțiunii</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs font-semibold text-blue-600">_ga</td>
                  <td className="p-3">Google Analytics</td>
                  <td className="p-3">2 ani</td>
                  <td className="p-3">Distinge vizitatorii unici</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs font-semibold text-blue-600">_ga_&lt;ID&gt;</td>
                  <td className="p-3">Google Analytics</td>
                  <td className="p-3">2 ani</td>
                  <td className="p-3">Păstrează starea sesiunii</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs font-semibold text-slate-500">—</td>
                  <td className="p-3">Cloudflare Web Analytics</td>
                  <td className="p-3">—</td>
                  <td className="p-3">Analitică fără cookie-uri</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 6 & 7. Transferuri și Durata */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">6 & 7. Transferuri și Păstrarea datelor</h2>
          <p className="text-slate-600 text-sm md:text-base">
            Datele pot fi transferate către SUA în baza cadrului <em>EU-U.S. Data Privacy Framework</em> (Google Ireland, Cloudflare). Găzduirea este asigurată de Hosterion S.R.L. (România). Opțiunea dumneavoastră privind cookie-urile este salvată timp de 12 luni.
          </p>
        </section>

        {/* Gestionarea consimțământului & Butonul de Reset */}
        <section className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            8. Gestionarea și retragerea consimțământului
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Vă puteți modifica sau retrage oricând opțiunea exprimată apăsând butonul de mai jos pentru a reafișa bannerul:
          </p>
          
          <div className="pt-2">
            <button
              type="button"
              onClick={handleResetCookies}
              className="inline-flex items-center gap-2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <ShieldCheck className="h-4 w-4" />
              Schimbă Setările Cookies
            </button>
          </div>
        </section>

        {/* Drepturi și Contact */}
        <section className="space-y-3 pt-6 border-t border-blue-100">
          <h2 className="text-2xl font-bold text-slate-800">9 & 10. Drepturi și Contact</h2>
          <p className="text-slate-600 text-sm md:text-base">
            Beneficiați de drepturile prevăzute de GDPR (acces, rectificare, ștergere, portabilitate, opoziție). Pentru orice solicitare, ne puteți contacta la:
            <a href="mailto:protectiadatelor@finesolutionspro.ro" className="text-blue-600 underline font-bold ml-1 hover:text-blue-800 transition-colors">
              protectiadatelor@finesolutionspro.ro
            </a>. De asemenea, puteți depune plângere la <strong className="text-slate-800">ANSPDCP</strong> (www.dataprotection.ro).
          </p>
        </section>

      </div>
    </main>
  );
}