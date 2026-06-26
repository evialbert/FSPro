"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Diferentiatori() {
  const listatDiferentiatori = [
    { 
      title: "1. Analiză strategică înainte de ofertare", 
      desc: "Nu acceptăm proiecte fără evaluare prealabilă de risc. Optimizăm proiectul înainte de depunere." 
    },
    { 
      title: "2. Dublu filtru de verificare internă", 
      desc: "Fiecare document major este verificat în două etape separate pentru eroare zero." 
    },
    { 
      title: "3. Expertiză reală în accesare și SEAP", 
      desc: "Nu doar teorie, deținem experiență practică în proiecte și proceduri de achiziții publice complexe." 
    },
    { 
      title: "4. Orientare către audit", 
      desc: "Structurăm proiectele ca și cum ar fi verificate de la început. Proiectele sunt construite pentru a rezista controalelor, iar achizițiile respectă strict legislația în vigoare." 
    },
    { 
      title: "5. Management integrat", 
      desc: "Finanțare + achiziții + implementare. Un singur flux coerent. Nu concurăm pe preț, concurăm pe siguranță." 
    },
    { 
      title: "6. Abordare predictivă a riscurilor", 
      desc: "Identificăm vulnerabilitățile și riscurilor înainte ca ele să apară și să devină probleme administrative." 
    },
    { 
      title: "7. Comunicare transparentă și directă", 
      desc: "Fără promisiuni nerealiste. Fără supraestimări artificiale. Parteneriat bazat pe adevăr." 
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= listatDiferentiatori.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? listatDiferentiatori.length - 1 : prev - 1));
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(listatDiferentiatori[(currentIndex + i) % listatDiferentiatori.length]);
    }
    return items;
  };

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">De ce noi?</p>
            <h3 className="text-3xl font-bold text-slate-900">Diferențiatori Competitivi</h3>
          </div>
          <div className="flex gap-3 mt-6 md:mt-0">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
              aria-label="Anteriorul"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
              aria-label="Următorul"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden py-4 touch-pan-y">
          
          {/* DESKTOP VIEW */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {getVisibleItems().map((item, index) => (
                <motion.div
                  key={`desktop-${item.title}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9, x: 30 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -30 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 border-t-4 border-blue-600 bg-slate-50/60 rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between h-full"
                >
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 mb-3">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* MOBILE VIEW */}
          <div className="md:hidden overflow-x-auto scrollbar-none">
            <motion.div 
              drag="x"
              dragConstraints={{ 
                right: 0, 
                left: typeof window !== 'undefined' ? -((listatDiferentiatori.length * 296) - window.innerWidth + 48) : -1000 
              }}
              whileTap={{ cursor: "grabbing" }}
              className="flex gap-4 cursor-grab"
              style={{ width: `${listatDiferentiatori.length * 296}px` }}
            >
              {listatDiferentiatori.map((item, idx) => (
                <div
                  key={`mobile-${idx}`}
                  className="w-[280px] p-8 border-t-4 border-blue-600 bg-slate-50/60 rounded-xl shadow-md flex flex-col justify-between flex-shrink-0 select-none"
                >
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 mb-3">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

        <div className="flex justify-center gap-2 mt-8">
          {listatDiferentiatori.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${currentIndex === idx ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300'}`}
              aria-label={`Mergi la slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}