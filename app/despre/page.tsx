"use client";

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  ExternalLink 
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function DespreNoi() {
  // Matricea cu oportunitățile și programele de finanțare solicitate
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

  const diferentiatori = [
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
      desc: "Identificăm vulnerabilitățile și riscurile înainte ca ele să apară și să devină probleme administrative." 
    },
    { 
      title: "7. Comunicare transparentă și directă", 
      desc: "Fără promisiuni nerealiste. Fără supraestimări artificiale. Parteneriat bazat pe adevăr." 
    }
  ];

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

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= diferentiatori.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? diferentiatori.length - 1 : prev - 1));
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(diferentiatori[(currentIndex + i) % diferentiatori.length]);
    }
    return items;
  };

  return (
    <div className="bg-stone-50 text-stone-700 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-24 bg-white px-6 border-b border-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-6 leading-tight"
          >
            De ce să alegi Fine Solutions Professional?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-stone-600 leading-relaxed italic border-l-4 border-stone-500 pl-6 py-2 inline-block text-left bg-stone-50/50 rounded-r-lg shadow-sm"
          >
            &ldquo;Construim proiecte solide. Implementăm fără vulnerabilități. Livrăm rezultate măsurabile.&ldquo;
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
          className="space-y-6 text-lg leading-relaxed text-stone-600"
        >
          <p className="font-bold text-stone-800 uppercase tracking-widest text-xs">Despre Noi</p>
          <p className="text-stone-800 font-medium text-xl">
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
          className="bg-stone-700 p-10 rounded-2xl text-stone-50 shadow-xl relative overflow-hidden md:sticky md:top-8"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
            <ShieldCheck className="text-stone-300" /> Atuurile noastre sunt:
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
                <CheckCircle2 size={18} className="text-stone-300 mt-1 flex-shrink-0" />
                <span className="font-medium text-stone-200 text-base">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* SECȚIUNE NOUĂ: Programe de Finanțare în Portofoliu */}
      <section className="py-24 bg-white px-6 border-y border-stone-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-stone-500 font-bold uppercase tracking-widest text-xs mb-2">Arii de Expertiză</p>
            <h3 className="text-3xl font-bold text-stone-900">Programe de Finanțare din Portofoliu</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categoriiFinantare.map((prog, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-stone-50 p-8 rounded-xl border border-stone-100 flex flex-col justify-between hover:border-stone-300 transition-colors"
              >
                <div>
                  <h4 className="text-lg font-bold text-stone-900 mb-3 flex items-start gap-2">
                    <span className="w-1.5 h-6 bg-stone-500 rounded-full inline-block mt-0.5 flex-shrink-0"></span>
                    {prog.titlu}
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {prog.desc}
                  </p>
                </div>
                {prog.link !== "#" && (
                  <div className="border-t border-stone-200/60 pt-4">
                    <a 
                      href={prog.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-stone-700 hover:text-stone-900 font-semibold inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded border border-stone-200 shadow-sm hover:shadow transition-all"
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

      {/* --- CARUSEL: Diferențiatori Competitivi --- */}
      <section className="py-24 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-stone-500 font-bold uppercase tracking-widest text-xs mb-2">De ce noi?</p>
              <h3 className="text-3xl font-bold text-stone-900">Diferențiatori Competitivi</h3>
            </div>
            <div className="flex gap-3 mt-6 md:mt-0">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-stone-200 bg-white flex items-center justify-center text-stone-700 hover:bg-stone-700 hover:text-white hover:border-stone-700 transition-all shadow-sm"
                aria-label="Anteriorul"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-stone-200 bg-white flex items-center justify-center text-stone-700 hover:bg-stone-700 hover:text-white hover:border-stone-700 transition-all shadow-sm"
                aria-label="Următorul"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {getVisibleItems().map((item, index) => (
                  <motion.div
                    key={`${item.title}-${index}`}
                    layout
                    initial={{ opacity: 0, scale: 0.9, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: -30 }}
                    transition={{ duration: 0.4 }}
                    className="p-8 border-t-4 border-stone-500 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between h-full"
                  >
                    <div>
                      <h4 className="font-bold text-lg text-stone-900 mb-3">{item.title}</h4>
                      <p className="text-stone-600 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {diferentiatori.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${currentIndex === idx ? 'w-8 bg-stone-600' : 'w-2 bg-stone-300'}`}
                aria-label={`Mergi la slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Procesul (4 Pași) */}
      <section className="py-24 bg-stone-700 text-stone-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-3 text-white">Procesul de colaborare (4 pași)</h2>
            <p className="text-stone-400 uppercase tracking-widest text-xs">O metodologie predictivă și transparentă</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {pasi.map((pas, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-stone-800/40 p-6 rounded-xl border border-stone-600/30 group hover:border-stone-500/50 transition-colors relative"
              >
                <div className="text-6xl font-black text-stone-600/20 mb-4 group-hover:text-stone-400/20 transition-colors">
                  {pas.nr}
                </div>
                <h4 className="text-lg font-bold mb-3 text-white">{pas.titlu}</h4>
                <p className="text-stone-300 leading-relaxed text-sm">{pas.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center px-6 bg-white border-t border-stone-100">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-stone-50 p-12 rounded-2xl border border-stone-200/60"
        >
          <h3 className="text-2xl font-bold mb-3 text-stone-900">Ești gata să începem proiectul tău?</h3>
          <p className="text-stone-600 mb-8 text-base">Vă asigurăm un management integrat, un singur flux coerent și siguranță procedurală totală.</p>
          <Link 
            href="/contact"
            className="bg-stone-700 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-stone-800 hover:shadow-lg transition-all inline-flex items-center gap-2"
          >
            Contactează un consultant <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}