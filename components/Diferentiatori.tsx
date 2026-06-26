"use client";

import React from 'react';
import { Sparkles, Shield, Zap, Target, Users } from 'lucide-react';

const diferentiatori = [
  {
    id: 1,
    icon: <Zap className="h-6 w-6 text-blue-600" />,
    titlu: "Viteză de Execuție",
    descriere: "Răspundem solicitărilor în timp record, asigurând continuitatea afacerii tale fără timpi morți."
  },
  {
    id: 2,
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    titlu: "Siguranță Garantată",
    descriere: "Măsuri stricte de confidențialitate și protocoale de securitate aliniate la standardele europene."
  },
  {
    id: 3,
    icon: <Target className="h-6 w-6 text-blue-600" />,
    titlu: "Soluții Personalizate",
    descriere: "Nu credem în șabloane. Fiecare flux de lucru este adaptat specificului și obiectivelor tale."
  },
  {
    id: 4,
    icon: <Users className="h-6 w-6 text-blue-600" />,
    titlu: "Echipă de Experți",
    descriere: "Profesioniști certificați cu experiență solidă în optimizarea proceselor operaționale."
  }
];

export default function Diferentiatori() {
  return (
    <section className="bg-slate-50 py-20 border-y border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Antet Secțiune */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            De ce noi?
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
            Diferențiatorii Noștri Competitivi
          </h2>
        </div>

        {/* Varianta DESKTOP: Grid fix standard (De la ecran mediu 'md' în sus) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {diferentiatori.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
            >
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl w-fit mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 tracking-tight">{item.titlu}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.descriere}</p>
            </div>
          ))}
        </div>

        {/* Varianta MOBILE: Glisare fluidă nativă, fără butoane și fără blocaje la scroll */}
        {/* Adăugăm padding negativ pe margini pentru ca cardurile să treacă elegant până în marginea ecranului la glisare */}
        <div className="block md:hidden -mx-4 px-4">
          <div className="flex gap-4 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none scroll-smooth">
            {diferentiatori.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm min-w-[85vw] sm:min-w-[320px] snap-center flex flex-col justify-between first:ml-4 last:mr-4"
              >
                <div>
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl w-fit mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 tracking-tight">
                    {item.titlu}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.descriere}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sugestie vizuală subtilă: text discret sub carusel */}
          <div className="text-center text-xs font-medium text-slate-400 tracking-wide mt-2">
            ‹ Glisează stânga / dreapta ›
          </div>
        </div>

      </div>
    </section>
  );
}