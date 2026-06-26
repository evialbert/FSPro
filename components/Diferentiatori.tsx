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
    <section className="bg-slate-50 py-20 border-y border-slate-100 block w-full clear-both">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Antet Secțiune - Albastru Brand */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            De ce noi?
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
            Diferențiatorii Noștri Competitivi
          </h2>
        </div>

        {/* Varianta DESKTOP: Grid fix cu 4 coloane stabile */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {diferentiatori.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
            >
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl w-fit mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 tracking-tight">{item.titlu}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.descriere}</p>
            </div>
          ))}
        </div>

        {/* Varianta MOBILE: Carusel cu glisare pur mecanică și fluidă */}
        <div className="block md:hidden">
          <div 
            className="w-full flex gap-4 overflow-x-auto overflow-y-hidden py-4" 
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {diferentiatori.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm min-w-[280px] w-[280px] shrink-0"
              >
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
            ))}
          </div>
          
          <div className="text-center text-xs font-medium text-slate-400 mt-4">
            ‹ Glisează stânga / dreapta ›
          </div>
        </div>

      </div>
    </section>
  );
}