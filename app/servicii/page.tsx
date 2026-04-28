"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  CheckCircle2, 
  Laptop, 
  Leaf, 
  Gavel, 
  FileText, 
  BarChart, 
  ShieldCheck 
} from "lucide-react";

export default function Servicii() {
  const beneficii = [
    "Analiză de eligibilitate în 24 de ore",
    "Monitorizare constantă apeluri 2026",
    "Suport tehnic pentru depunere SEAP",
    "Rată de succes ridicată"
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* --- HEADER PAGINA --- */}
      <section className="bg-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Servicii de Consultanță</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Oferim expertiză completă pentru accesarea fondurilor nerambursabile și gestionarea achizițiilor publice, adaptate cerințelor pieței din 2026.
          </p>
        </div>
      </section>

      {/* --- SERVICII PRINCIPALE (CU POZELE TALE) --- */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Card 1: Fonduri Europene */}
          <div className="group bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 transition-all hover:shadow-2xl">
            <div className="h-72 overflow-hidden relative">
              <img 
                src="/fonduri.jpg" 
                alt="Consultanță Fonduri Europene" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">PNRR & Fonduri UE</span>
              </div>
            </div>
            <div className="p-10">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Fonduri Nerambursabile</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                De la identificarea liniei de finanțare potrivite până la implementarea proiectului, vă ghidăm prin hățișul birocratic pentru a obține capitalul necesar dezvoltării.
              </p>
              <ul className="space-y-3 mb-8">
                {["Digitalizare IMM", "Energie Verde (Fotovoltaice)", "Linii de Producție"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-700 font-medium">
                    <CheckCircle2 size={18} className="text-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center space-x-2 text-blue-600 font-bold text-lg hover:translate-x-2 transition-all">
                <span>Cere o evaluare</span>
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>

          {/* Card 2: Achiziții Publice */}
          <div className="group bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 transition-all hover:shadow-2xl">
            <div className="h-72 overflow-hidden relative">
              <img 
                src="/achizitii.jpg" 
                alt="Consultanță Achiziții Publice SEAP" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">SEAP / SICAP</span>
              </div>
            </div>
            <div className="p-10">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Achiziții Publice</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Asigurăm suport tehnic și juridic pentru participarea la licitații publice. Maximizăm șansele de câștig prin pregătirea riguroasă a ofertelor în platforma SEAP.
              </p>
              <ul className="space-y-3 mb-8">
                {["Pregătire DUAE", "Analiză Caiet Sarcini", "Răspuns Clarificări"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-700 font-medium">
                    <CheckCircle2 size={18} className="text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center space-x-2 text-blue-600 font-bold text-lg hover:translate-x-2 transition-all">
                <span>Detalii colaborare</span>
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* --- ALTE SERVICII (ICONS) --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 italic">Expertiză adițională</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <FileText size={30}/>, title: "Planuri Afaceri", desc: "Strategii viabile pentru bănci sau investitori." },
              { icon: <BarChart size={30}/>, title: "Analiză Cost", desc: "Optimizarea cheltuielilor în proiecte." },
              { icon: <ShieldCheck size={30}/>, title: "Audit Proiect", desc: "Verificare conformitate post-implementare." },
              { icon: <Laptop size={30}/>, title: "Strategii AI", desc: "Implementare AI pentru eficiență sporită." }
            ].map((s, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="text-blue-600 mb-4 flex justify-center">{s.icon}</div>
                <h4 className="font-bold text-slate-900 mb-2">{s.title}</h4>
                <p className="text-slate-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ești gata să îți finanțezi ideile?</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {beneficii.map((b, i) => (
              <div key={i} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                <CheckCircle2 size={16} />
                <span>{b}</span>
              </div>
            ))}
          </div>
          <Link href="/contact" className="bg-blue-600 text-white px-12 py-5 rounded-full font-extrabold text-xl hover:bg-blue-700 shadow-2xl transition-all">
            Solicită Consultanță Acum
          </Link>
        </div>
      </section>
    </div>
  );
}