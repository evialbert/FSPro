import React from 'react';

export default function ConsultantSection() {
  return (
    <section id="consultant" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Imaginea - asigură-te că fișierul este în folderul /public */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200">
          <img 
            src="/claudiu.jpg" 
            alt="Claudiu - Consultant Fonduri Europene" 
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Textul - Conținut profesionist și prietenos */}
        <div className="space-y-6">
          <span className="text-stone-500 font-semibold uppercase tracking-widest text-sm">
            Expertiză & Parteneriat
          </span>
          
          <h2 className="text-4xl font-bold text-stone-900 leading-tight">
            Claudiu, partenerul tău în atragerea fondurilor europene.
          </h2>
          
          <div className="text-stone-700 space-y-4 text-lg">
            <p>
              Navigarea prin labirintul birocratic al fondurilor europene necesită mai mult decât cunoștințe tehnice; necesită o strategie clară și un partener de încredere.
            </p>
            <p>
              Scopul meu este să transform complexitatea reglementărilor în oportunități concrete pentru afacerea ta. Abordez fiecare proiect cu seriozitatea și rigoarea pe care le impune acest domeniu, menținând în același timp o comunicare deschisă și transparentă cu tine.
            </p>
          </div>

          <a 
            href="#contact" 
            className="inline-block bg-stone-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-stone-700 transition-colors"
          >
            Hai să discutăm despre proiectul tău
          </a>
        </div>
      </div>
    </section>
  );
}