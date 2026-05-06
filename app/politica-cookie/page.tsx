import React from 'react';

export default function CookiePolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      {/* Titlu */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tight mb-6">
          Politica privind cookie-urile
        </h1>
        <p className="text-stone-500">Ultima actualizare: Mai 2026</p>
      </div>

      <div className="prose prose-stone prose-lg max-w-none text-stone-700 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Introducere</h2>
          <p>
            Fine Solutions Professional utilizează module cookie pentru a asigura funcționarea optimă a site-ului nostru și pentru a înțelege modul în care interacționați cu acesta. Această politică explică ce sunt cookie-urile, cum le folosim și care sunt opțiunile dumneavoastră.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Ce sunt cookie-urile?</h2>
          <p>
            Cookie-urile sunt fișiere text de mici dimensiuni stocate pe dispozitivul dumneavoastră atunci când accesați un site web. Acestea permit site-ului să „rețină” acțiunile sau preferințele dumneavoastră pe o perioadă de timp.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Cum utilizăm cookie-urile</h2>
          <p className="mb-4">Utilizăm două categorii principale:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Cookie-uri esențiale:</strong> Sunt necesare pentru funcționarea de bază a site-ului (de exemplu, pentru a reține consimțământul dumneavoastră privind cookie-urile). Nu pot fi dezactivate.
            </li>
            <li>
              <strong>Cookie-uri de performanță (Analitice):</strong> Ne ajută să colectăm informații anonime despre cum este utilizat site-ul (de exemplu, paginile cele mai vizitate), permițându-ne să îmbunătățim experiența utilizatorilor.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Controlul cookie-urilor</h2>
          <p>
            Aveți dreptul de a decide dacă acceptați sau refuzați cookie-urile neesențiale. Puteți gestiona preferințele direct din browserul dumneavoastră (setările de confidențialitate) sau prin bannerul de consimțământ afișat pe site-ul nostru.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Contact</h2>
          <p>
            Dacă aveți întrebări suplimentare despre modul în care folosim cookie-urile, ne puteți contacta oricând la adresa: 
            <a href="mailto:contact@finesolutionspro.ro" className="text-stone-900 underline font-semibold ml-1">
              contact@finesolutionspro.ro
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}