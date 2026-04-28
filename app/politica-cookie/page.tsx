import React from "react";
import Link from "next/link";

export default function PoliticaCookie() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-slate-800">
      <h1 className="text-4xl font-black mb-8 tracking-tighter">Politică privind Fișierele Cookie</h1>
      
      <section className="space-y-6 text-slate-600 leading-relaxed">
        <p>Prezenta Politică explică modul în care <strong>Fine Solutions Pro</strong> utilizează cookie-urile pentru a asigura funcționarea corectă a site-ului și pentru a analiza traficul, în conformitate cu GDPR și Legea nr. 506/2004.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8">1. Ce sunt cookie-urile?</h2>
        <p>Sunt fișiere de mici dimensiuni, stocate pe dispozitivul dvs., care ne permit să vă recunoaștem la următoarea vizită pentru a vă oferi o experiență personalizată.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8">2. Tipuri de cookie-uri utilizate</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Strict Necesare:</strong> Esențiale pentru navigare (nu necesită acord).</li>
          <li><strong>Analitice:</strong> Ne ajută să înțelegem cum interacționați cu site-ul (ex: Google Analytics).</li>
          <li><strong>Marketing:</strong> Utilizate pentru a vă afișa reclame relevante.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 mt-8">3. Retragerea Consimțământului</h2>
        <p>În conformitate cu reglementările din 2026, puteți folosi butonul <strong>"Revisit Consent"</strong> din subsolul paginii pentru a reseta preferințele dvs. în orice moment.</p>
      </section>

      <div className="mt-12">
        <Link href="/" className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition-all">
          Înapoi la Acasă
        </Link>
      </div>
    </div>
  );
}