// components/ConsultantSection.tsx
import React from 'react';
import Image from 'next/image';

export default function ConsultantSection() {
  return (
    <section className="py-20 bg-blue-50/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Imaginea */}
          <div className="relative group">
            {/* Element decorativ în spate */}
            <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 opacity-10 transition-transform group-hover:rotate-6"></div>
            
            <Image 
              src="/claudiu.jpg" 
              alt="Claudiu - Consultant Fonduri Europene" 
              width={600} 
              height={750} 
              className="relative z-10 rounded-2xl shadow-2xl object-cover w-full aspect-[4/5]"
              priority // Prioritizează încărcarea pozei
            />
          </div>

          {/* Textul - Autoritate și Încredere */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full font-bold text-sm tracking-wide uppercase">
              Partener Strategic
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-blue-950 leading-tight">
              Salut, sunt Claudiu.
            </h2>
            
            <p className="text-lg text-blue-900/70 leading-relaxed">
              Fondurile europene și investițiile publice necesită mai mult decât simplă documentație; necesită o viziune clară și o strategie riguroasă. Cu experiența mea, transform ideile tale în proiecte eligibile, protejându-ți în același timp investiția.
            </p>

            <ul className="space-y-3">
              {[
                "Expertiză în accesare fonduri nerambursabile",
                "Structurare proiecte complexe",
                "Protejarea investițiilor publice și private"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-blue-950 font-medium">
                  <span className="text-blue-600">✓</span> {item}
                </li>
              ))}
            </ul>
            
            <div className="pt-6">
              <a 
                href="#contact" 
                className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-900/20 active:scale-95"
              >
                Programează o consultanță gratuită
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}