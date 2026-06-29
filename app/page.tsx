"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Shield, Zap, Target, Users, ChevronLeft, ChevronRight } from 'lucide-react';

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
    descriere: "Profesioniști certificați cu expertiență solidă în optimizarea proceselor operaționale."
  }
];

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === diferentiatori.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? diferentiatori.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. SECTIUNEA CU POZA CONSULTANTULUI */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-lg bg-slate-100">
            <Image
              src="/consultant.jpg"
              alt="Consultantul tău dedicat"
              fill
              priority
              className="object-cover"
              sizes="(max-w-768px) 100vw, 50vw"
            />
          </div>
          <div>
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm block mb-2">
              Consultantul tău de încredere
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              Optimizăm procese, <br />
              <span className="text-blue-600">garantăm rezultate.</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Suntem aici să preluăm complexitatea operațională pentru ca tu să te poți concentra exclusiv pe creșterea business-ului tău.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SECTIUNEA DIFERENTIATORI CU CULORILE ALBASTRE ORIGINALE */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Antet albastru original */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              De ce noi?
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
              Diferențiatorii Noștri Competitivi
            </h2>
          </div>

          {/* AFISARE DESKTOP: Grid-ul original fix */}
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

          {/* AFISARE MOBIL: Caruselul original cu butoane stânga/dreapta (Fără glisare/swipe) */}
          <div className="block md:hidden relative max-w-sm mx-auto px-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm min-h-[220px]">
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl w-fit mb-4">
                {diferentiatori[currentIndex].icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 tracking-tight">
                {diferentiatori[currentIndex].titlu}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {diferentiatori[currentIndex].descriere}
              </p>
            </div>

            {/* Butoanele de control originale */}
            <div className="flex justify-center gap-4 mt-6">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full border border-slate-200 bg-white shadow-sm text-slate-600 hover:bg-slate-50 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full border border-slate-200 bg-white shadow-sm text-slate-600 hover:bg-slate-50 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}