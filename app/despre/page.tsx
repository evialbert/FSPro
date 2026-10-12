"use client";

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink 
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function DespreNoi() {
  // Matricea cu oportunitățile și programele de finanțare (NESCHIMBATĂ)
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
      link: "https://regionordvest.ro/"
    }
  ];

  const diferentiatori = [
    { 
      title: "1. Analiză strategică înainte de ofertare", 
      desc: "Nu preluăm un proiect fără o evaluare prealabilă a riscurilor. Verificăm eligibilitatea, maturitatea proiectului și capacitatea de implementare, iar apoi optimizăm dosarul înainte de depunere." 
    },
    { 
      title: "2. Dublă verificare internă", 
      desc: "Fiecare document major trece prin două etape distincte de verificare, realizate de persoane diferite, pentru a reduce la minimum riscul de erori și de neconformități." 
    },
    { 
      title: "3. Experiență practică în accesarea fondurilor și în SEAP", 
      desc: "Ne bazăm pe experiență aplicată, nu doar pe cunoaștere teoretică, în proiecte cu finanțare europeană și proceduri de achiziție publică de complexitate ridicată derulate prin SEAP." 
    },
    { 
      title: "4. Orientare către audit", 
      desc: "Construim fiecare proiect ca și cum ar fi verificat din prima zi. Documentația este structurată pentru a rezista controalelor, iar achizițiile respectă riguros legislația aplicabilă." 
    },
    { 
      title: "5. Management integrat", 
      desc: "Finanțare, achiziții și implementare, într-un singur flux coerent. Nu concurăm pe preț, ci pe siguranța și predictibilitatea rezultatului." 
    },
    { 
      title: "6. Abordare preventivă a riscurilor", 
      desc: "Identificăm vulnerabilitățile și riscurile din timp, înainte ca ele să genereze probleme administrative, corecții financiare sau contestații." 
    },
    { 
      title: "7. Comunicare transparentă", 
      desc: "Nu facem promisiuni nerealiste și nu supraestimăm șansele de succes. Colaborarea se bazează pe informații corecte și pe asumarea realistă a riscurilor." 
    }
  ];

  const pasi = [
    { 
      nr: "01", 
      titlu: "Analiză, eligibilitate și fundamentare", 
      desc: "Definim obiectivul și verificăm încadrarea proiectului în apelul de finanțare, în condițiile de eligibilitate și în cerințele Ghidului Solicitantului. În paralel, evaluăm de la început implicațiile achizițiilor necesare implementării: estimăm valorile, identificăm procedurile aplicabile potrivit legislației naționale în achiziții publice și verificăm coerența dintre bugetul proiectului și valorile estimate ale achizițiilor." 
    },
    { 
      nr: "02", 
      titlu: "Planificare, buget și pregătirea achizițiilor", 
      desc: "Structurăm activitățile, bugetul, calendarul și documentele cererii de finanțare. Elaborăm planul/programul de achiziții corelat cu graficul de implementare, stabilim procedurile de atribuire și pregătim documentațiile aferente (fișa de date, caiet de sarcini, criterii de calificare și atribuire, proiectul de contract, formulare, strategia de contractare), astfel încât cerințele de achiziție să fie compatibile cu eligibilitatea cheltuielilor." 
    },
    { 
      nr: "03", 
      titlu: "Depunere, contractare și derularea procedurilor de achiziție", 
      desc: "Coordonăm depunerea cererii de finanțare, răspundem la solicitările de clarificări și susținem etapa de contractare. După semnarea contractului de finanțare, putem derula procedurile de achiziție prin SEAP: publicare, clarificări, evaluarea ofertelor, atribuire și, la nevoie, gestionarea contestațiilor, cu verificarea permanentă a conformității față de contractul de finanțare și legislația aplicabilă." 
    },
    { 
      nr: "04", 
      titlu: "Implementare, raportare și închidere", 
      desc: "Monitorizăm executarea contractelor de achiziție, sprijinim recepțiile și întocmim cererile de plată/rambursare și rapoartele tehnice și financiare. Constituim dosarul complet al proiectului și al achizițiilor, pregătit pentru verificări și audit, și asigurăm pregătirea etapelor de monitorizare ulterioară (durabilitate)." 
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
            &bdquo;Proiecte bine fundamentate. Implementare conformă. Rezultate măsurabile.&ldquo;
          </motion.p>
        </div>
      </section>

      {/* Intro Section - Despre Noi & Atuuri */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6 text-lg leading-relaxed text-slate-600"
        >
          <p className="font-semibold text-blue-600 uppercase tracking-wider text-sm">Despre noi</p>
          <p className="text-slate-900 font-medium text-xl">
            Fine Solutions Professional oferă consultanță în accesarea fondurilor europene și în achizițiile publice, pe baza unei documentații riguroase și a unei aplicări corecte a cadrului legislativ și procedural.
          </p>
          <p>
            Vă însoțim de la fundamentarea proiectului până la finalizarea implementării, astfel încât fiecare etapă să fie conformă și verificabilă.
          </p>
          
          <div className="pt-4 space-y-4">
            <h4 className="font-bold text-slate-900 text-lg">Trei motive pentru a ne alege</h4>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-900 text-base">1. Fundamentare solidă</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Analizăm eligibilitatea, pregătim documentația și structurăm cererea de finanțare sau dosarul de achiziție în raport cu ghidul solicitantului, legislația aplicabilă și cerințele autorității de management sau ale autorității contractante.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-base">2. Implementare conformă</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Monitorizăm respectarea contractului de finanțare și a procedurilor aplicabile, identificăm din timp riscurile de neconformitate și propunem măsuri corective, pentru a reduce expunerea la corecții financiare și la contestații.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-base">3. Rezultate măsurabile</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Urmărim indicatorii de realizare și de rezultat asumați și raportăm periodic stadiul proiectului, astfel încât să aveți o imagine clară asupra progresului și a obiectivelor atinse.
                </p>
              </div>
            </div>
          </div>
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
              'Experiența reală de 4 ani în accesare și implementare proiecte din fonduri europene și de 16 ani în achiziții publice pentru produse, servicii și lucrări (proceduri de atribuire: licitații deschise, proceduri simplificate, negocieri fără publicare; achiziții directe, consultarea pieței și anunțuri publicitare în SEAP)', 
              'Înțelegere a controalelor instituționale', 
              'Metodologie proprie', 
              'Abordare orientată pe audit cu reducerea riscurilor',
              'Protecția beneficiarului'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="font-medium text-slate-100 text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* PROG FINANȚARE: Portofoliu (NESCHIMBAT) */}
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

      {/* --- CARUSEL: Diferențiatori Competitivi --- */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">De ce noi?</p>
              <h3 className="text-3xl font-bold text-slate-900">Diferențiatori competitivi</h3>
            </div>
            
            {/* Săgeți Navigație Desktop */}
            <div className="hidden md:flex gap-3 mt-6 md:mt-0">
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

          {/* Varianta DESKTOP */}
          <div className="hidden md:block overflow-hidden py-4">
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
          </div>

          {/* Varianta MOBILE */}
          <div className="block md:hidden">
            <div 
              className="w-full flex gap-4 overflow-x-auto overflow-y-hidden py-4 snap-x snap-mandatory" 
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {diferentiatori.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-8 border-t-4 border-blue-600 bg-slate-50/60 rounded-xl shadow-md min-w-[280px] w-[280px] shrink-0 snap-center flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 mb-3">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center text-xs font-medium text-slate-400 mt-4">
              ‹ Glisează stânga / dreapta ›
            </div>
          </div>

          {/* Dots Indicator Desktop */}
          <div className="hidden md:flex justify-center gap-2 mt-8">
            {diferentiatori.map((_, idx) => (
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

      {/* Procesul (4 Pași) */}
      <section className="py-24 bg-[#002B5B] text-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-white">Procesul de colaborare în 4 pași</h2>
            <p className="text-blue-200 text-sm leading-relaxed">
              Un flux integrat: de la fundamentarea proiectului la achiziția publică și închiderea contractului de finanțare
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {pasi.map((pas, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-blue-950/40 p-6 rounded-xl border border-blue-500/20 group hover:border-blue-400/40 transition-colors relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-6xl font-black text-blue-400/10 mb-4 group-hover:text-blue-400/20 transition-colors">
                    {pas.nr}
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-white">{pas.titlu}</h4>
                  <p className="text-slate-200 leading-relaxed text-sm">{pas.desc}</p>
                </div>
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