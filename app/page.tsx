"use client";

import React from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  ExternalLink 
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Diferentiatori from '@/components/Diferentiatori';

export default function DespreNoi() {
  // Matricea completă cu toate oportunitățile și programele de finanțare
  const categoriiFinantare = [
    {
      titlu: "Programe Naționale din Bugetul de Stat",
      desc: "Sisteme fotovoltaice, stații de reîncărcare, Femeia Antreprenor, START-UP NATION, împăduriri, creșterea competitivității, investiții, gestionare deșeuri, cultură, mass media, educație, ACCES, restaurare monumente, școli, construcții, IMM PLUS, sectorul vitivinicol, investiții în industria prelucrătoare, produse industriale etc.",
      link: "https://oportunitati-ue.gov.ro/programe-de-finantare/programe-nationale/"
    },
    {
      titlu: "Planul Național de Redresare și Reziliență (PNRR)",
      desc: "Managementul complet și consultanță dedicată pentru toate apelurile active din cadrul PNRR, acoperind reformele și pilonii structurali de investiții.",
      link: "https://oportunitati-ue.gov.ro/programe-de-finantare/planul-national-de-redresare-si-rezilienta/"
    },
    {
      titlu: "Programe în Gestiune Partajată (MIPE & Instituții)",
      desc: "Programe regionale, sănătate, dezvoltare rurală, acvacultură și pescuit, promovare produse agricole, transport, dezvoltare durabilă și tranziție justă, incluziune și demnitate socială, capacitate administrativă, educație și ocupare etc.",
      link: "https://oportunitati-ue.gov.ro/programe-de-finantare/programe-gestiune-partajata/"
    },
    {
      titlu: "Sesiuni Investiții FEADR (AFIR)",
      desc: "Sesiuni active pentru depunerea proiectelor de investiții: exploatații agricole, procesare agricolă, pomicultură, scheme de energie verde, exploatații forestiere și dezvoltare rurală.",
      link: "https://www.afir.ro/instrumente/sesiuni/sesiuni-primire-proiecte/#"
    },
    {
      titlu: "Alte Finanțări și Instrumente Financiare",
      desc: "Subvenții naționale dedicate, instrumente financiare administrative complexe, granturi SEE și norvegiene, precum și alte tipuri de finanțări.",
      link: "https://oportunitati-ue.gov.ro/programe-de-finantare/alte-finantari-si-instrumente-financiare/"
    },
    {
      titlu: "Instrumente Regionale (Regiunea Nord-Vest)",
      desc: "Finanțări specifice adresate proiectelor și investițiilor implementate local în județele Bihor, Bistrița-Năsăud, Cluj, Maramureș, Satu Mare și Sălaj.",
      link: "#"
    }
  ];

  // Matricea pentru cei 4 pași de colaborare
  const pasi = [
    { 
      nr: "01", 
      titlu: "Analiză & Eligibilitate", 
      desc: "Definim obiectivul și verificăm încadrarea în apel / cerințe / proceduri și cadrul legal aplicabil." 
    },
    { 
      nr: "02", 
      titlu: "Plan & Structurare", 
      desc: "Stabilim activități, buget, calendar și documente; pentru achiziții, definim procedura (SEAP)." 
    },
    { 
      nr: "03", 
      titlu: "Implementare", 
      desc: "Gestionăm depunerea, clarificările și publicarea/derularea procedurii cu monitorizare de conformitate." 
    },
    { 
      nr: "04", 
      titlu: "Închidere & Raportare", 
      desc: "Raportare tehnică/financiară, recepții și arhivare; pregătim pașii pentru monitorizare." 
    }
  ];

  return (
    <div className="bg-white text-slate-700 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-24 bg-slate-50 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight"
          >
            De ce să alegi Fine Solutions Professional?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-blue-600 pl-6 py-2 inline-block text-left bg-white rounded-r-lg shadow-sm"
          >
            „Construim proiecte solide. Implementăm fără vulnerabilități. Livrăm rezultate măsurabile.”
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6 text-lg leading-relaxed text-slate-600"
        >
          <p className="font-semibold text-blue-600 uppercase tracking-wider text-sm">Despre Noi</p>
          <p className="text-slate-900 font-medium text-xl">
            Într-un domeniu în care o eroare procedurală poate însemna pierderea finanțării sau aplicarea de corecții financiare, alegerea consultantului potrivit face diferența dintre succes și blocaj administrativ.
          </p>
          <p>
            Combinăm experiența în domeniul fondurilor structurale și achizițiilor publice cu o abordare personalizată pentru fiecare client. Construim un parteneriat transparent și eficient: vă sprijinim în elaborarea documentației (plan de afaceri, cereri de finanțare, documentații achiziții, analiză cost-beneficiu), apoi gestionăm procesul de depunere și parcursul verificărilor la autoritățile competente.
          </p>
          <p>
            Ne diferențiem prin expertiză multidisciplinară, monitorizare legislativă permanentă și colaborare strânsă, astfel încât clientul nostru să aibă un consultant dedicat și o comunicare clară pe tot parcursul colaborării.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-[#002B5B] p-10 rounded-2xl text-white shadow-xl relative overflow-hidden md:sticky md:top-8"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
            <ShieldCheck className="text-blue-400" /> Atuurile noastre sunt:
          </h3>
          <ul className="space-y-4">
            {[
              'Experiență reală în accesare fonduri europene și realizare achiziții publice (proceduri de atribuire)', 
              'Înțelegere a controalelor instituționale', 
              'Metodologie proprie', 
              'Abordare orientată pe audit',
              'Protecția beneficiarului'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="font-medium text-slate-100 text-base">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* PROG FINANȚARE: Portofoliu */}
      <section className="py-24 bg-slate-50 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Arii de Expertiză</p>
            <h3 className="text-3xl font-bold text-slate-900">Programe de Finanțare din Portofoliu</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categoriiFinantare.map((prog, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white p-8 rounded-xl border border-slate-200 flex flex-col justify-between hover:border-blue-400 transition-colors shadow-sm"
              >
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-2">
                    <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block mt-0.5 flex-shrink-0"></span>
                    {prog.titlu}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {prog.desc}
                  </p>
                </div>
                {prog.link !== "#" && (
                  <div className="border-t border-slate-100 pt-4">
                    <a 
                      href={prog.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded border border-slate-200 shadow-sm hover:shadow transition-all"
                    >
                      Consultă Oportunitatea Oficială <ExternalLink size={12} />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Secțiunea Diferențiatori - Importată din components/Diferentiatori.tsx */}
      <Diferentiatori />

      {/* Procesul (4 Pași) */}
      <section className="py-24 bg-[#002B5B] text-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-3 text-white">Procesul de colaborare (4 pași)</h2>
            <p className="text-blue-200 uppercase tracking-widest text-xs">O metodologie predictivă și transparentă</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {pasi.map((pas, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-blue-950/40 p-6 rounded-xl border border-blue-500/20 group hover:border-blue-400/40 transition-colors relative"
              >
                <div className="text-6xl font-black text-blue-400/10 mb-4 group-hover:text-blue-400/20 transition-colors">
                  {pas.nr}
                </div>
                <h4 className="text-lg font-bold mb-3 text-white">{pas.titlu}</h4>
                <p className="text-slate-200 leading-relaxed text-sm">{pas.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center px-6 bg-white border-t border-slate-100">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-slate-50 p-12 rounded-2xl border border-slate-200"
        >
          <h3 className="text-2xl font-bold mb-3 text-slate-900">Ești gata să începem proiectul tău?</h3>
          <p className="text-slate-600 mb-8 text-base">Vă asigurăm un management integrat, un singur flux coerent și siguranță procedurală totală.</p>
          <Link 
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-blue-700 hover:shadow-lg transition-all inline-flex items-center gap-2"
          >
            Contactează un consultant <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}