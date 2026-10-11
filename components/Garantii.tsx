"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full py-20 md:py-28 px-6 bg-stone-50 border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* --- ANTET HERO (Titlu & Subtitlu) --- */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Etichetă autoritate */}
          <span className="inline-block py-1 px-4 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-widest uppercase border border-blue-100">
            Consultanță și Strategie
          </span>

          {/* Titlu Impactant cu text albastru */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-900 leading-[1.1]">
            Transformăm ideile tale în <br />
            <span className="text-blue-600">proiecte câștigătoare!</span>
          </h1>

          {/* Subtitlu */}
          <p className="text-lg md:text-xl font-medium text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Fine Solutions Professional – Specialist în structurarea și protejarea investițiilor 
            publice și europene, cu expertiză reală în achiziții publice.
          </p>

          {/* Buton de acțiune vizibil permanent (Albastru Brand) */}
          <div className="pt-4">
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-[#002B5B] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-900/10"
            >
              Solicită ofertă <ArrowRight size={20} />
            </a>
          </div>
        </div>

        {/* --- CORP HERO (Intro, Statement & Garanții) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-stone-200 items-start">
          
          {/* Coloana Stângă: Intro & Statement */}
          <div className="lg:col-span-7 space-y-6 text-stone-600 text-base md:text-lg leading-relaxed text-left">
            <p>
              Bine ați venit la <strong className="text-stone-900">Fine Solutions Professional</strong> – partenerul dvs. în transformarea ideilor în proiecte 
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
            <div className="p-6 bg-blue-50/50 border-l-4 border-blue-600 rounded-r-2xl shadow-sm italic text-blue-950 font-medium">
              "Transformăm provocările birocratice în oportunități reale de creștere. Maximizăm controlul riscului în proiectele finanțate din fonduri europene și achiziții publice."
            </div>
          </div>

          {/* Coloana Dreaptă: Angajamente și standarde (Textul tău nou) */}
          <div className="lg:col-span-5 bg-white p-8 rounded-[2rem] border border-stone-200 shadow-sm space-y-6 text-left">
            <p className="text-stone-700 text-sm md:text-base leading-relaxed">
              Angajamentele și standardele noastre descriu modul în care lucrăm și riscurile pe care le reducem pentru a maximiza rezultatul. Nu garantăm decizia de finanțare, care aparține autorității de management, și nici atingerea indicatorilor, care depinde de modul în care beneficiarul implementează proiectul.
            </p>

            <div className="space-y-6 text-stone-700 text-sm md:text-base">
              <div>
                <h4 className="font-bold text-stone-900 mb-1">1. Angajamentul și standardul privind eligibilitatea</h4>
                <p className="mb-2 text-stone-600 text-xs md:text-sm">
                  Verificăm eligibilitatea înainte de a începe elaborarea proiectului. Nu redactăm o cerere de finanțare fără o analiză prealabilă a solicitantului și fără verificarea conformității cu cerințele programului.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-stone-600 text-xs md:text-sm mb-2">
                  <li>Analizăm informațiile și documentele primite înainte de depunere</li>
                  <li>Identificăm riscurile de respingere sau de declarare ca neeligibil</li>
                  <li>Optimizăm structura proiectului după verificarea internă</li>
                </ul>
                <p className="font-semibold text-stone-800 text-xs md:text-sm">
                  Rezultat: cereri de finanțare fundamentate, construite pe verificări, nu pe presupuneri.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 mb-1">2. Angajamentul și standardul privind conformitatea</h4>
                <p className="mb-2 text-stone-600 text-xs md:text-sm">
                  Pregătim achizițiile și documentele proiectului ținând seama de verificările efectuate de OI/AM și de organismele de control, audit sau ANAP, pentru a reduce vulnerabilitățile administrative ale beneficiarului.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-stone-600 text-xs md:text-sm mb-2">
                  <li>Verificăm conformitatea cu legislația națională și europeană aplicabilă</li>
                  <li>Structurăm corect procedurile de achiziție</li>
                  <li>Asigurăm trasabilitatea documentelor, în vederea auditului</li>
                </ul>
                <p className="font-semibold text-stone-800 text-xs md:text-sm">
                  Rezultat: reducerea riscului de corecții financiare, sancțiuni și contestații.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 mb-1">3. Angajamentul și standardul privind protecția investiției</h4>
                <p className="mb-2 text-stone-600 text-xs md:text-sm">
                  Structurăm proiectele astfel încât utilizarea fondurilor să fie eficientă, previzibilă și sustenabilă. Încă din faza de fundamentare, beneficiarul cunoaște valoarea cofinanțării proprii și etapele estimate de rambursare, pe baza termenelor din contractul de finanțare.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-stone-600 text-xs md:text-sm mb-2">
                  <li>Clauze contractuale care protejează interesele beneficiarului</li>
                  <li>Control financiar riguros, prin urmărirea cheltuielilor față de bugetul aprobat</li>
                  <li>Planificare bugetară realistă, corelată cu fluxul de numerar</li>
                  <li>Managementul riscurilor pe toată durata proiectului</li>
                </ul>
                <p className="font-semibold text-stone-800 text-xs md:text-sm">
                  Rezultat: protejarea capitalului și a resurselor utilizate.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 mb-1">4. Angajamentul și standardul privind performanța și raportarea</h4>
                <p className="mb-2 text-stone-600 text-xs md:text-sm">
                  Nu livrăm doar documentație, ci urmărim rezultatele. Monitorizăm indicatorii pe toată durata proiectului, semnalăm din timp riscul de neîndeplinire și propunem măsuri corective. Atingerea indicatorilor depinde de beneficiar, care răspunde de implementarea efectivă.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-stone-600 text-xs md:text-sm mb-2">
                  <li>Definirea indicatorilor relevanți (KPI)</li>
                  <li>Monitorizare pe toată perioada contractuală</li>
                  <li>Propunerea de măsuri corective</li>
                  <li>Alinierea activităților la obiectivele proiectului</li>
                </ul>
                <p className="font-semibold text-stone-800 text-xs md:text-sm">
                  Rezultat: proiecte implementate coerent, cu indicatori urmăriți și riscuri semnalate din timp.
                </p>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}