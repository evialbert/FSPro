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
  // Matrice nouă de servicii/portofoliu strategic axată pe soluții concrete
  const serviciiPortofoliu = [
    {
      titlu: "Elaborare Documentații Complexe",
      desc: "Scrierea integrală a cererilor de finanțare, planurilor de afaceri, analizelor cost-beneficiu și a studiilor de oportunitate pentru linii de finanțare diverse.",
      icon: <FileText className="text-blue-600" size={24} />,
      tag: "Scriere Proiecte"
    },
    {
      titlu: "Management Integrat de Proiect",
      desc: "Asistență tehnică și financiară pe tot parcursul implementării: elaborare de notificări, acte adiționale, cereri de plată, rambursare și monitorizare indicatori.",
      icon: <Layers className="text-blue-600" size={24} />,
      tag: "Implementare"
    },
    {
      titlu: "Consultanță Achiziții Publice (SEAP)",
      desc: "Structurarea procedurilor de atribuire de la zero: definire strategii, realizare documentații de atribuire, răspunsuri la clarificări și managementul dosarului în SEAP.",
      icon: <Briefcase className="text-blue-600" size={24} />,
      tag: "Proceduri SEAP"
    },
    {
      titlu: "Analiză de Risc și Optimizare",
      desc: "Evaluarea prealabilă a ideii de business în raport cu ghidurile condițiilor specifice pentru a asigura o rată maximă de succes la depunere.",
      icon: <TrendingUp className="text-blue-600" size={24} />,
      tag: "Strategie"
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-700 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Expertiză & Viziune</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6 leading-tight">
            Pregătim Următoarea Generație de Proiecte de Succes
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Deși suntem o echipă tânără sub acest brand, consultanții noștri aduc ani de experiență în analiza tehnică și financiară a fondurilor europene.
          </p>
        </div>
      </section>

      {/* Secțiunea: Calitate & Abordare */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900 tracking-tight">Cum garantăm calitatea?</h2>
            <div className="space-y-4">
              {[
                "Analiză de eligibilitate gratuită înainte de semnarea contractului.",
                "Echipă dedicată pentru monitorizarea zilnică a SEAP și a ghidurilor noi.",
                "Rapoarte periodice de progres pentru fiecare etapă a scrierii.",
                "Colaborări cu experți tehnici pentru soluții verzi și digitale."
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
              <h3 className="text-2xl font-bold mb-4">Abordarea Noastră</h3>
              <p className="text-blue-100 mb-8 text-base leading-relaxed">
                În 2026, nu mai este suficient doar să depui un dosar. Proiectul trebuie să fie sustenabil, digital și să respecte principiul DNSH (Do No Significant Harm). Noi ne ocupăm de toate aceste detalii.
              </p>
              <Link href="/contact" className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-50 hover:shadow-lg transition-all">
                <span>Discută un proiect</span>
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
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Ce Oferim</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">Portofoliu de Soluții Structurale</h2>
            <p className="text-slate-600 max-w-xl mx-auto text-base">Asigurăm un spectru complet de servicii pentru companii și instituții publice dornice să acceseze fonduri nerambursabile.</p>
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
          <h2 className="text-3xl font-bold mb-4 text-slate-900 tracking-tight">Începe transformarea afacerii tale</h2>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto text-base leading-relaxed">
            Chiar dacă ești la primul tău proiect european, te ghidăm pas cu pas pentru a minimiza riscurile și a maximiza șansele de aprobare.
          </p>
          <Link href="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 shadow-lg hover:shadow-blue-600/20 transition-all inline-block">
            Vreau o analiză de eligibilitate
          </Link>
        </div>
      </section>
    </div>
  );
}