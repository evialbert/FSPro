import React from 'react';
import { 
  FileSearch, 
  Settings, 
  Megaphone, 
  CalendarClock, 
  BookOpen,
  CheckCircle 
} from 'lucide-react';
import ContactForm from '@/components/ContactForm'; // Presupunem că l-ai salvat anterior

const ServiceSection = ({ id, title, intro, items, icon: Icon, ctaText }: any) => (
  <section id={id} className="py-20 border-b border-slate-100 last:border-0 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
      <div>
        <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
          <Icon size={28} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">{intro}</p>
        
        <ul className="grid sm:grid-cols-1 gap-4 mb-8">
          {items.map((item: string, idx: number) => (
            <li key={idx} className="flex items-start gap-3 text-slate-700">
              <CheckCircle size={18} className="text-blue-600 mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
          {ctaText} <span>→</span>
        </button>
      </div>
      
      {/* Box decorativ / Imagine mockup pentru fiecare serviciu */}
      <div className="bg-slate-50 rounded-3xl p-8 flex items-center justify-center border border-slate-100 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full opacity-50"></div>
        <div className="text-center">
            <p className="text-slate-400 text-sm font-mono uppercase tracking-widest mb-2">Livrabil principal</p>
            <p className="text-xl font-bold text-[#003366]">Conformitate 100%</p>
            <div className="mt-6 h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
);

export default function Servicii() {
  return (
    <div className="bg-white">
      {/* Header Pagina Servicii */}
      <section className="bg-[#003366] py-24 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Servicii Profesionale</h1>
        <p className="max-w-2xl mx-auto text-blue-100 text-lg">
          Oferim servicii structurate, cu livrabile clare și comunicare constantă pentru proiectele tale de investiții.
        </p>
      </section>

      {/* Navigare rapidă (Anchor Menus) */}
      <div className="sticky top-20 bg-white/90 backdrop-blur-md border-b border-slate-200 z-40 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-8 py-4 text-sm font-bold text-slate-600">
          <a href="#finantari" className="hover:text-blue-600 transition-colors">Finanțări</a>
          <a href="#achizitii" className="hover:text-blue-600 transition-colors">Achiziții SEAP</a>
          <a href="#publicitate" className="hover:text-blue-600 transition-colors">Publicitate</a>
          <a href="#abonamente" className="hover:text-blue-600 transition-colors">Abonamente</a>
          <a href="#cursuri" className="hover:text-blue-600 transition-colors">Cursuri</a>
        </div>
      </div>

      {/* Secțiuni Servicii */}
      <ServiceSection 
        id="finantari"
        icon={FileSearch}
        title="Finanțări nerambursabile & Management"
        intro="Beneficiați de suport complet, de la identificarea oportunităților până la închiderea proiectului, cu accent pe conformitate și rezultate."
        items={[
          "Analiză de eligibilitate și identificarea apelurilor potrivite",
          "Elaborarea și depunerea cererilor de finanțare (buget, plan lucru)",
          "Suport în semnarea contractului și depunerea documentelor",
          "Monitorizare financiară și raportare periodică tehnică",
          "Audit intern și asistență în vederea conformității"
        ]}
        ctaText="Vrei să verificăm eligibilitatea?"
      />

      <ServiceSection 
        id="achizitii"
        icon={Settings}
        title="Achiziții Publice & Management SEAP"
        intro="Simplificăm fiecare etapă a unei proceduri, de la selecția strategiei până la semnarea și implementarea contractului."
        items={[
          "Evaluarea procedurii și alegerea traseului optim",
          "Pregătire documentație și caiete de sarcini",
          "Organizare și coordonare proceduri în SEAP",
          "Întocmire documentație participare (DUAE, Propuneri)",
          "Asistență la contractare, evaluare și eventuale contestări"
        ]}
        ctaText="Ai o procedură în pregătire?"
      />

      <ServiceSection 
        id="publicitate"
        icon={Megaphone}
        title="Anunțuri & Publicitate"
        intro="Creștem vizibilitatea proiectelor și ofertelor prin prezență media, cu raportare clară și optimizare continuă."
        items={[
          "Publicare articol / comunicat de presă în mass-media online",
          "Servicii de publicitate online targetată",
          "Anunțuri închirieri terenuri/imobile în Monitorul Oficial",
          "Publicitate în presa scrisă locală sau națională"
        ]}
        ctaText="Solicită un serviciu personalizat"
      />

      <ServiceSection 
        id="abonamente"
        icon={CalendarClock}
        title="Abonamente Lunare"
        intro="Pachete flexibile pentru suport permanent și intervenții rapide, adaptate ritmului de lucru al organizației dvs."
        items={[
          "Consultanță continuă – acces la expertiză dedicată",
          "Suport rapid prin email și telefon (intervenție prioritară)",
          "Revizuire și analiză periodică a progresului strategiei",
          "Actualizări legislative și sesiuni de coaching (pachete Premium)"
        ]}
        ctaText="Alege ritmul proiectelor tale"
      />

      <ServiceSection 
        id="cursuri"
        icon={BookOpen}
        title="Cursuri de Specializare (În dezvoltare)"
        intro="În curând lansăm programe pentru profesioniști, axate pe practică, metodologii și studii de caz reale."
        items={[
          "Expert achiziții publice – legislație și bune practici SEAP",
          "Expert accesare fonduri structurale – management de proiect",
          "Workshop-uri intensive pe raportări tehnice și financiare"
        ]}
        ctaText="Anunță-mă când se deschid înscrierile"
      />

      {/* Formular de contact final */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366]">Ești gata să lucrăm împreună?</h2>
            <p className="text-slate-600 mt-4">Completează formularul și revenim cu un plan de lucru adaptat.</p>
        </div>
        <div className="max-w-3xl mx-auto">
            <ContactForm />
        </div>
      </section>
    </div>
  );
}

