"use client";

import React, { useState } from 'react';
import { 
  FileSearch, 
  Settings, 
  Megaphone, 
  CalendarClock, 
  BookOpen,
  CheckCircle, 
  ArrowRight, 
  ChevronDown, 
  HelpCircle 
} from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

// --- 1. COMPONENTA PENTRU ÎNTREBĂRI FRECVENTE (FAQ) ---
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-800'}`}>
          {question}
        </span>
        <ChevronDown 
          className={`text-blue-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          size={20}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-slate-600 leading-relaxed pl-4 border-l-2 border-blue-600/30 italic">
          {answer}
        </p>
      </div>
    </div>
  );
};

// --- 2. COMPONENTA PENTRU SECȚIUNILE DE SERVICII ---
const ServiceSection = ({ id, title, intro, items, icon: Icon, ctaText }: any) => (
  <section id={id} className="py-24 border-b border-slate-100 last:border-0 scroll-mt-32">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
      <div className="order-2 lg:order-1">
        <div className="w-16 h-16 bg-[#003366] text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-900/10">
          <Icon size={32} />
        </div>
        <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">{title}</h2>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">{intro}</p>
        
        <ul className="space-y-4 mb-10">
          {items.map((item: string, idx: number) => (
            <li key={idx} className="flex items-start gap-4 text-slate-700 text-lg">
              <CheckCircle size={22} className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          href="#contact-form-section" 
          className="group inline-flex items-center gap-2 text-[#003366] font-black text-lg hover:gap-4 transition-all underline decoration-blue-200 underline-offset-8 hover:decoration-blue-600"
        >
          {ctaText} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      
      <div className="order-1 lg:order-2 bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 flex flex-col items-center justify-center text-center group transition-all hover:bg-white hover:shadow-2xl">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-inner mb-6">
           <Icon size={40} className="text-[#003366]/10 group-hover:text-[#003366] transition-colors duration-500" />
        </div>
        <p className="text-slate-400 text-xs font-mono uppercase tracking-[0.2em] mb-3 font-bold">Standard Pro</p>
        <p className="text-2xl font-black text-[#003366]">CONFORMITATE 100%</p>
        <div className="mt-8 h-1.5 w-32 bg-blue-600 rounded-full scale-x-75 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>
    </div>
  </section>
);

// --- 3. PAGINA PRINCIPALĂ ---
export default function ServiciiPage() {
  const faqs = [
    { 
      question: "Cât durează procesul de obținere a unei finanțări?", 
      answer: "Timpul variază în funcție de complexitatea apelului. Pregătirea documentației durează de obicei 2-4 săptămâni, iar evaluarea de către autorități între 3 și 9 luni." 
    },
    { 
      question: "Cum se stabilește costul serviciilor de consultanță?", 
      answer: "Structura noastră este transparentă: un onorariu fix pentru pregătirea documentației și un comision de succes aplicat doar la semnarea contractului de finanțare." 
    },
    { 
      question: "Oferiți asistență în cazul controalelor post-implementare?", 
      answer: "Absolut. Toate proiectele noastre sunt structurate pentru a rezista auditurilor pe toată perioada de durabilitate obligatorie (de obicei 5 ani)." 
    },
    { 
      question: "Mă puteți ajuta cu înregistrarea în SEAP/SICAP?", 
      answer: "Da, oferim suport complet pentru înregistrare, recuperarea certificatelor digitale și configurarea catalogului de produse/servicii în platformă." 
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-[#003366] py-32 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 pattern-grid opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight italic">Servicii Profesionale</h1>
          <p className="max-w-2xl mx-auto text-blue-100 text-xl leading-relaxed opacity-90">
            Soluții integrate de consultanță pentru finanțări, achiziții și management de proiect.
          </p>
        </div>
      </section>

      {/* Navigare Sticky (Ancore) */}
      <nav className="sticky top-20 bg-white/95 backdrop-blur-md border-b border-slate-200 z-40 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-10 py-5 text-xs font-black uppercase tracking-widest text-slate-500">
          {[
            { n: 'Finanțări', h: '#finantari' },
            { n: 'Achiziții SEAP', h: '#achizitii' },
            { n: 'Publicitate', h: '#publicitate' },
            { n: 'Abonamente', h: '#abonamente' },
            { n: 'Cursuri', h: '#cursuri' }
          ].map((item) => (
            <Link key={item.h} href={item.h} className="hover:text-blue-600 transition-all">{item.n}</Link>
          ))}
        </div>
      </nav>

      {/* Secțiuni Servicii */}
      <ServiceSection 
        id="finantari"
        icon={FileSearch}
        title="Finanțări & Management"
        intro="Transformăm ideile de investiții în realitate prin accesarea fondurilor nerambursabile potrivite."
        items={["Analiză de eligibilitate gratuită", "Scriere cerere de finanțare", "Managementul implementării", "Asistență în relația cu autoritățile"]}
        ctaText="Vreau o evaluare de eligibilitate"
      />

      <ServiceSection 
        id="achizitii"
        icon={Settings}
        title="Achiziții Publice & SEAP"
        intro="Navigăm cu precizie prin complexitatea legislației achizițiilor publice pentru rezultate sigure."
        items={["Pregătire documentație (Caiete de sarcini)", "Organizare proceduri în SEAP", "Întocmire oferte (DUAE/Tehnic)", "Asistență la contractare"]}
        ctaText="Consultă un expert SEAP"
      />

      <ServiceSection 
        id="publicitate"
        icon={Megaphone}
        title="Anunțuri & Publicitate"
        intro="Asigurăm vizibilitatea obligatorie a proiectelor conform manualelor de identitate vizuală."
        items={["Comunicare media online", "Anunțuri în Monitorul Oficial", "Panouri și autocolante obligatorii"]}
        ctaText="Solicită oferta de publicitate"
      />

      <ServiceSection 
        id="abonamente"
        icon={CalendarClock}
        title="Abonamente Lunare"
        intro="Parteneriat strategic pe termen lung pentru suport administrativ și legislativ continuu."
        items={["Acces prioritar la consultant", "Monitorizare apeluri noi", "Suport tehnic 24/48h"]}
        ctaText="Alege pachetul de suport"
      />

      <ServiceSection 
        id="cursuri"
        icon={BookOpen}
        title="Cursuri de Specializare"
        intro="În dezvoltare: Programe de training practice pentru managementul proiectelor și achiziții."
        items={["Workshop-uri SEAP", "Management de proiect practic", "Instruire legislație specifică"]}
        ctaText="Anunță-mă când încep înscrierile"
      />

      {/* Secțiune FAQ */}
      <section className="py-24 bg-white px-6 border-t border-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-4">
            <HelpCircle className="text-blue-600" size={24} />
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#003366]">Întrebări Frecvente</h2>
          </div>
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12 tracking-tight">Claritate în colaborare</h3>
          
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-inner">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Formularul de la final */}
      <section id="contact-form-section" className="py-32 bg-slate-50 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black text-[#003366] mb-4">Ești gata să începem?</h2>
          <p className="text-xl text-slate-600">Revenim cu un plan de acțiune în cel mai scurt timp.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}