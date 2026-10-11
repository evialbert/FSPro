"use client";

import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Garantii() {
  const garantii = [
    {
      title: "1. Garanția de eligibilitate strategică",
      intro: "Eligibilitatea nu este un formular bifat. Este fundamentul întregului proiect.",
      desc: "Analizăm în profunzime structura organizațională, capacitatea financiară, istoricul juridic și obiectivele investiționale pentru a valida conformitatea cu cerințele programului de finanțare.",
      bullets: [
        "Analiză completă înainte de depunere",
        "Identificarea riscurilor de respingere",
        "Optimizarea structurii proiectului",
        "Verificare internă multi-nivel"
      ],
      result: "Rezultatul: depuneri solide, fără improvizații."
    },
    {
      title: "2. Garanția de conformitate integrală",
      intro: "Controlăm fiecare etapă: documentație, achiziții publice, implementare, raportare și pregătire pentru audit.",
      desc: "Ne asigurăm că absolut fiecare pas respectă normele rigide, eliminând vulnerabilitățile administrative din fața organismelor de control.",
      bullets: [
        "Conformitate cu legislația națională și europeană",
        "Proceduri de achiziții structurate corect",
        "Documentație auditabilă",
        "Trasabilitate completă"
      ],
      result: "Rezultatul: reducerea riscului de corecții financiare și sancțiuni."
    },
    {
      title: "3. Garanția de protecție a investiției",
      intro: "Structurăm proiectele astfel încât utilizarea fondurilor să fie eficientă, predictibilă și sustenabilă.",
      desc: " Protejăm capitalul propriu implicat și maximizăm randamentul fiecărui euro atras prin monitorizarea strictă a fluxului de numerar.",
      bullets: [
        "Mecanisme contractuale de protecție",
        "Control financiar riguros",
        "Planificare bugetară realistă",
        "Management al riscului investițional"
      ],
      result: "Rezultatul: capital protejat și resurse utilizate strategic."
    },
    {
      title: "4. Garanția de performanță și raport de succes",
      intro: "Nu livrăm doar documentație — livrăm rezultate.",
      desc: "Urmărim atingerea indicatorilor asumați prin contractul de finanțare, oferind siguranță pe termen lung chiar și în faza de monitorizare post-implementare.",
      bullets: [
        "Definire KPI relevanți",
        "Monitorizare continuă",
        "Măsuri corective rapide",
        "Aliniere la obiectivele finanțatorului"
      ],
      result: "Rezultatul: proiecte implementate cu succes și indicatori îndepliniți."
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
            GARANȚII OFERITE
          </motion.h2>
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