"use client";

import React from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  Target, 
  Lightbulb, 
  ArrowRight, 
  FileText, 
  Layers, 
  TrendingUp, 
  Briefcase 
} from "lucide-react";

export default function Portofoliu() {
  // Matrice de servicii/portofoliu strategic actualizată cu noile descrieri
  const serviciiPortofoliu = [
    {
      titlu: "Documentații complexe",
      desc: "Redactarea cererilor de finanțare, a planurilor de afaceri, a analizelor cost-beneficiu și a studiilor de oportunitate, în funcție de cerințele fiecărui program de finanțare.",
      icon: <FileText className="text-blue-600" size={24} />,
      tag: "Elaborarea proiectelor"
    },
    {
      titlu: "Management integrat de proiect",
      desc: "Asistență tehnică și financiară pe toată durata implementării: notificări, acte adiționale, cereri de plată și de rambursare, monitorizarea indicatorilor.",
      icon: <Layers className="text-blue-600" size={24} />,
      tag: "Implementare"
    },
    {
      titlu: "Consultanță pentru autorități și ofertanți",
      desc: "Structurarea procedurilor de atribuire, de la strategia de contractare și documentația de atribuire până la răspunsurile la clarificări și gestionarea dosarului achiziției; pentru ofertanți, pregătirea ofertei și a documentelor de calificare.",
      icon: <Briefcase className="text-blue-600" size={24} />,
      tag: "Achiziții publice (SEAP)"
    },
    {
      titlu: "Analiză de risc și fundamentare",
      desc: "Evaluarea prealabilă a ideii de proiect în raport cu ghidul solicitantului și condițiile specifice ale apelului, pentru a reduce riscul de neeligibilitate sau de respingere la evaluare.",
      icon: <TrendingUp className="text-blue-600" size={24} />,
      tag: "Strategie"
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-700 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Expertiză și viziune</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6 leading-tight">
            Pregătim următoarea generație de proiecte de succes
          </h1>
          <div className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto space-y-4 text-left md:text-center">
            <p>
              Consultantul coordonator are o experiență reală de 16 ani în achiziții publice pentru produse, servicii și lucrări (proceduri de atribuire: licitații deschise, proceduri simplificate, negocieri fără publicare; achiziții directe, consultarea pieței și anunțuri publicitare în SEAP, contestații la CNSC); experiență de 4 ani în accesare și implementare proiecte din fonduri europene și experiență de 8 ani în logistică.
            </p>
            <div className="pt-2">
              <p className="font-semibold text-slate-900 mb-2 text-center md:text-center">Certificări și cursuri finalizate:</p>
              <ul className="list-disc list-inside space-y-1 text-base text-slate-600 max-w-xl mx-auto text-left inline-block">
                <li>Formator (2016)</li>
                <li>Expert achiziții publice (2018)</li>
                <li>Expert accesare fonduri structurale și de coeziune europene (2020)</li>
                <li>Etică, integritate și anticorupție (2023)</li>
                <li>Managementul proiectelor și programelor (2024)</li>
                <li>Planificarea, programarea, bugetarea resurselor (2025)</li>
                <li>Etică și integritate în sistemul de sănătate (2025)</li>
                <li>Managementul serviciilor de sănătate (2025)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Secțiunea: Calitate & Abordare */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900 tracking-tight">Cum asigurăm calitatea</h2>
            <div className="space-y-4">
              {[
                "Analiza preliminară a eligibilității, înainte de semnarea contractului de prestări servicii",
                "Monitorizarea zilnică a SEAP, a ghidurilor noi și a modificărilor legislative",
                "Rapoarte periodice de progres pe fiecare etapă de elaborare a documentației",
                "Colaborare cu experți tehnici pentru componentele de mediu, digitalizare sau alte domenii"
              ].map((text, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700 font-medium text-base">{text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-blue-600 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <Lightbulb size={48} className="mb-6 text-blue-200" />
              <h3 className="text-2xl font-bold mb-4">Abordarea noastră</h3>
              <p className="text-blue-100 mb-8 text-base leading-relaxed">
                În 2026, depunerea unui dosar complet nu mai este suficientă. Proiectele trebuie să demonstreze sustenabilitate, contribuție la tranziția digitală, conformitatea cu principiul DNSH („Do No Significant Harm”) și alte cerințe specifice, iar cheltuielile și achizițiile aferente trebuie să reziste verificărilor și auditului. Integrăm aceste cerințe în fiecare etapă, de la fundamentare până la închiderea proiectului.
              </p>
              <Link href="/contact" className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-50 hover:shadow-lg transition-all">
                <span>Discutați un proiect</span>
                <ArrowRight size={18} />
              </Link>
            </div>
            {/* Background Decor */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 rounded-full opacity-40"></div>
          </div>
        </div>
      </section>

      {/* Secțiunea Portofoliu de Servicii și Direcții */}
      <section className="bg-slate-50 py-24 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Ce oferim</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">Portofoliu de servicii pentru finanțări nerambursabile</h2>
            <p className="text-slate-600 max-w-xl mx-auto text-base">Oferim un spectru complet de servicii pentru companii și instituții publice care doresc să acceseze fonduri nerambursabile sau servicii specifice achizițiilor publice.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviciiPortofoliu.map((item, i) => (
              <div 
                key={i} 
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-400 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-blue-50 rounded-xl">{item.icon}</div>
                    <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full tracking-wide">
                      {item.tag}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.titlu}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 text-center px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <Target size={48} className="mx-auto mb-6 text-blue-600" />
          <h2 className="text-3xl font-bold mb-4 text-slate-900 tracking-tight">Începeți transformarea afacerii dumneavoastră</h2>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto text-base leading-relaxed">
            Chiar dacă este primul dumneavoastră proiect cu finanțare europeană sau prima procedură de achiziție, vă ghidăm pas cu pas, pentru a reduce riscurile și a crește calitatea dosarului depus.
          </p>
          <Link href="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 shadow-lg hover:shadow-blue-600/20 transition-all inline-block">
            Solicitați o analiză de eligibilitate
          </Link>
        </div>
      </section>
    </div>
  );
}