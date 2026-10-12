"use client";

import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Garantii() {
  const garantii = [
    {
      title: "1. Angajamentul și standardul privind eligibilitatea",
      intro: "Verificăm eligibilitatea înainte de a începe elaborarea proiectului.",
      desc: "Nu redactăm o cerere de finanțare fără o analiză prealabilă a solicitantului și fără verificarea conformității cu cerințele programului.",
      bullets: [
        "Analizăm informațiile și documentele primite înainte de depunere",
        "Identificăm riscurile de respingere sau de declarare ca neeligibil",
        "Optimizăm structura proiectului după verificarea internă"
      ],
      result: "Rezultat: cereri de finanțare fundamentate, construite pe verificări, nu pe presupuneri."
    },
    {
      title: "2. Angajamentul și standardul privind conformitatea",
      intro: "Pregătim achizițiile și documentele proiectului ținând seama de verificările efectuate de OI/AM și de organismele de control, audit sau ANAP.",
      desc: "Scopul nostru este de a reduce vulnerabilitățile administrative ale beneficiarului.",
      bullets: [
        "Verificăm conformitatea cu legislația națională și europeană aplicabilă",
        "Structurăm corect procedurile de achiziție",
        "Asigurăm trasabilitatea documentelor, în vederea auditului"
      ],
      result: "Rezultat: reducerea riscului de corecții financiare, sancțiuni și contestații."
    },
    {
      title: "3. Angajamentul și standardul privind protecția investiției",
      intro: "Structurăm proiectele astfel încât utilizarea fondurilor să fie eficientă, previzibilă și sustenabilă.",
      desc: "Încă din faza de fundamentare, beneficiarul cunoaște valoarea cofinanțării proprii și etapele estimate de rambursare, pe baza termenelor din contractul de finanțare.",
      bullets: [
        "Clauze contractuale care protejează interesele beneficiarului",
        "Control financiar riguros, prin urmărirea cheltuielilor față de bugetul aprobat",
        "Planificare bugetară realistă, corelată cu fluxul de numerar",
        "Managementul riscurilor pe toată durata proiectului"
      ],
      result: "Rezultat: protejarea capitalului și a resurselor utilizate."
    },
    {
      title: "4. Angajamentul și standardul privind performanța și raportarea",
      intro: "Nu livrăm doar documentație, ci urmărim rezultatele.",
      desc: "Monitorizăm indicatorii pe toată durata proiectului, semnalăm din timp riscul de neîndeplinire și propunem măsuri corective. Atingerea indicatorilor depinde de beneficiar, care răspunde de implementarea efectivă.",
      bullets: [
        "Definirea indicatorilor relevanți (KPI)",
        "Monitorizare pe toată perioada contractuală",
        "Propunerea de măsuri corective",
        "Alinierea activităților la obiectivele proiectului"
      ],
      result: "Rezultat: proiecte implementate coerent, cu indicatori urmăriți și riscuri semnalate din timp."
    }
  ];

  return (
    <section id="garantii" className="py-24 bg-white px-6 border-b border-stone-200/60 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Antet Secțiune */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block py-1 px-4 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-widest uppercase border border-blue-100"
          >
            Siguranță Procedurală
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-stone-900 mt-4 tracking-tight"
          >
            STANDARDELE NOASTRE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-stone-600 text-base md:text-lg mt-4 leading-relaxed"
          >
            Angajamentele și standardele noastre descriu modul în care lucrăm și riscurile pe care le reducem pentru a maximiza rezultatul. Nu garantăm decizia de finanțare, care aparține autorității de management, și nici atingerea indicatorilor, care depinde de modul în care beneficiarul implementează proiectul.
          </motion.p>

          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-blue-600 mx-auto mt-6 rounded-full origin-center"
          />
        </div>

        {/* Grid-ul celor 4 Garanții */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {garantii.map((garantie, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-stone-50 rounded-[2rem] border border-stone-200/60 p-8 lg:p-10 shadow-sm hover:shadow-xl hover:bg-white hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Titlu și Iconiță */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                    <ShieldCheck size={26} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-stone-900 tracking-tight pt-1">
                    {garantie.title}
                  </h3>
                </div>

                {/* Introducere boldată și descriere */}
                <div className="space-y-3">
                  <p className="text-stone-800 font-semibold text-base leading-relaxed">
                    {garantie.intro}
                  </p>
                  <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                    {garantie.desc}
                  </p>
                </div>

                {/* Bullets cu bife */}
                <ul className="space-y-3 pt-2">
                  {garantie.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm md:text-base text-stone-700">
                      <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Caseta Rezultat de la bază */}
              <div className="mt-8 pt-4 border-t border-stone-200/80 text-blue-700 font-bold text-sm tracking-wide uppercase">
                {garantie.result}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}