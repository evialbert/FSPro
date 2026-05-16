"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full py-20 md:py-28 px-6 bg-blue-950 border-b border-blue-900">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* --- ANTET HERO (Titlu & Subtitlu) --- */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Etichetă autoritate */}
          <span className="inline-block py-1 px-4 rounded-full bg-blue-900 text-blue-100 text-xs font-semibold tracking-widest uppercase">
            Consultanță și Strategie
          </span>

          {/* Titlu Impactant */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Transformăm ideile tale în <br />
            <span className="text-blue-400">proiecte câștigătoare!</span>
          </h1>

          {/* Subtitlu */}
          <p className="text-lg md:text-xl font-medium text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
            Fine Solutions Professional – Specialist în structurarea și protejarea investițiilor 
            publice și europene, cu expertiză reală în achiziții publice.
          </p>

          {/* Buton de acțiune vizibil permanent (Albastru aprins pentru contrast) */}
          <div className="pt-4">
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-950/50"
            >
              Solicită ofertă <ArrowRight size={20} />
            </a>
          </div>
        </div>

        {/* --- CORP HERO (Intro, Statement & Beneficii) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-blue-900 items-start">
          
          {/* Coloana Stângă: Intro & Statement */}
          <div className="lg:col-span-7 space-y-6 text-blue-100/80 text-base md:text-lg leading-relaxed text-left">
            <p>
              Bine ați venit la <strong>Fine Solutions Professional</strong> – partenerul dvs. în transformarea ideilor în proiecte 
              implementate corect și eficient. Oferim suport end-to-end, indiferent dacă 
              sunteți la primul demers de finanțare sau aveți nevoie de consultanță 
              recurentă, prin abonamente lunare.
            </p>
            <p>
              Lucrăm cu instituții publice, companii și persoane fizice pentru identificarea apelurilor potrivite, 
              analiza eligibilității, elaborarea și depunerea cererilor de finanțare, precum 
              și pentru management financiar și raportare conform cerințelor finanțatorilor 
              și standardelor UE. În zona de achiziții publice, oferim suport complet, 
              inclusiv pentru proceduri derulate în SEAP.
            </p>
            
            {/* Statement Evidențiat */}
            <div className="p-6 bg-blue-900/60 border-l-4 border-blue-500 rounded-r-2xl shadow-sm italic text-blue-50 font-medium">
              "Transformăm provocările birocratice în oportunități reale de creștere. Maximizăm controlul 
              total al riscului în proiectele finanțate din fonduri europene și achiziții publice."
            </div>
          </div>

          {/* Coloana Dreaptă: Beneficii */}
          <div className="lg:col-span-5 bg-blue-900/40 p-8 rounded-[2rem] border border-blue-900 shadow-sm space-y-6 text-left">
            <h3 className="text-xl font-bold text-white tracking-tight">
              De ce să lucrăm împreună:
            </h3>
            <ul className="space-y-4">
              {[
                "Analiză rapidă și obiectivă a nevoilor dvs.",
                "Strategie integrată pentru fiecare proiect / procedură",
                "Asistență permanentă, de la idee până la raportarea finală"
              ].map((beneficiu, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-400 shrink-0 mt-1" size={20} />
                  <span className="text-blue-100 font-medium text-sm md:text-base">
                    {beneficiu}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
        
      </div>
    </section>
  );
}