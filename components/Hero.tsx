// components/ConsultantSection.tsx
import React from 'react';
import Image from 'next/image';

export default function ConsultantSection() {
  return (
    <section className="py-20 bg-blue-50/30">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Imaginea */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 opacity-10"></div>
          <Image 
            src="/claudiu.jpg" 
            alt="Claudiu - Consultant Fonduri Europene" 
            width={600} 
            height={750} 
            className="relative z-10 rounded-2xl shadow-2xl object-cover w-full aspect-[4/5]"
          />
        </div>

        {/* Text */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-black text-blue-950 leading-tight">
            Salut, sunt Claudiu.
          </h2>
          <p className="text-lg text-blue-900/70 leading-relaxed">
            În spatele fiecărui proiect de succes stă o strategie bine definită. Nu sunt doar consultantul tău, sunt partenerul care se asigură că investiția ta primește finanțarea meritată.
          </p>
          <p className="text-lg text-blue-900/70 leading-relaxed">
            Am observat că mulți antreprenori renunță din cauza birocrației. Misiunea mea este să elimin această barieră, structurând ideile tale pentru a îndeplini toate criteriile de eligibilitate.
          </p>
          
          <div className="pt-4">
            <a 
              href="#contact" 
              className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-900/20"
            >
              Programează o discuție
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}