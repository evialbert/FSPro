"use client"; // Adăugat pentru a permite funcționarea butonului de resetare din pagină

import React from 'react';
import { Cookie, Info, ShieldCheck } from 'lucide-react';

export default function CookiePolicy() {
  // Funcția care resetează consimțământul și permite re-afișarea bannerului
  const handleResetCookies = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cookie-consent");
      window.location.reload();
    }
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-24 selection:bg-blue-100">
      {/* Titlu */}
      <div className="mb-12 border-b border-blue-100 pb-8">
        <div className="flex items-center gap-3 mb-4 text-blue-500">
          <Cookie className="h-6 w-6 text-blue-600" />
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-500">Document Legal</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight mb-4">
          Politica privind cookie-urile
        </h1>
        <p className="text-sm text-slate-400 font-medium">Ultima actualizare: Mai 2026</p>
      </div>

      {/* Conținut text */}
      <div className="text-slate-700 space-y-10 text-base md:text-lg leading-relaxed">
        
        {/* Introducere cu fundal albastru foarte deschis deschis */}
        <section className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex gap-4">
            <Info className="h-6 w-6 text-blue-500 shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">Introducere</h2>
              <p className="text-slate-600 text-sm md:text-base">
                Fine Solutions Professional utilizează module cookie pentru a asigura funcționarea optimă a site-ului nostru și pentru a înțelege modul în care interacționați cu acesta. Această politică explică ce sunt cookie-urile, cum le folosim și care sunt opțiunile dumneavoastră.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            Ce sunt cookie-urile?
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Cookie-urile sunt fișiere text de mici dimensiuni stocate pe dispozitivul dumneavoastră (calculator, tabletă sau telefon mobil) atunci când accesați un site web. Acestea permit site-ului să „rețină” acțiunile sau preferințele dumneavoastră (cum ar fi autentificarea, limba sau alte preferințe de afișare) pe o perioadă de timp.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">Cum utilizăm cookie-urile</h2>
          <p className="text-slate-600 text-sm md:text-base">Utilizăm două categorii principale de module cookie pe site-ul nostru:</p>
          
          <div className="grid gap-4 mt-2">
            {/* Casetă Cookie-uri Esențiale */}
            <div className="p-5 border border-slate-200 rounded-xl bg-white space-y-2 shadow-sm">
              <span className="inline-block bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
                Obligatoriu
              </span>
              <h3 className="font-bold text-slate-800 text-base">Cookie-uri esențiale</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Sunt necesare pentru funcționarea de bază a site-ului web. Acestea asigură securitatea platformei și vă permit să navigați corect. Fără ele, site-ul nu poate rula în condiții optime, motiv pentru care nu pot fi dezactivate.
              </p>
            </div>

            {/* Casetă Cookie-uri Analitice - accentuată cu tentă albastră */}
            <div className="p-5 border border-blue-100 rounded-xl bg-blue-50/30 space-y-2 shadow-sm">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
                Opțional
              </span>
              <h3 className="font-bold text-blue-900 text-base">Cookie-uri de performanță (Analitice)</h3>
              <p className="text-blue-950/70 text-sm leading-relaxed">
                Ne ajută să colectăm informații complet anonime despre modul în care utilizatorii folosesc site-ul nostru (de exemplu, ce pagini sunt cele mai accesate). Aceste date ne permit exclusiv să îmbunătățim structura și performanța site-ului.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            Controlul cookie-urilor
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Aveți dreptul de a decide dacă acceptați sau refuzați cookie-urile neesențiale. Puteți schimba oricând setările browserului dumneavoastră sau puteți folosi butonul de mai jos pentru a reseta preferințele exprimate pe site-ul nostru:
          </p>
          
          {/* Buton integrat de resetare pe loc - Stilizat în nuanțe de albastru profesional */}
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

        {/* Secțiunea de contact */}
        <section className="space-y-3 pt-6 border-t border-blue-100">
          <h2 className="text-2xl font-bold text-slate-800">Contact</h2>
          <p className="text-slate-600 text-sm md:text-base">
            Dacă aveți întrebări sau nelămuriri suplimentare cu privire la modul în care utilizăm modulele cookie, ne puteți contacta în scris la adresa de e-mail:
            <a href="mailto:contact@finesolutionspro.ro" className="text-blue-600 underline font-bold ml-1 hover:text-blue-800 transition-colors">
              contact@finesolutionspro.ro
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}