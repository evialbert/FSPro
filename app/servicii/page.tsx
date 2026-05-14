"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  CheckCircle2, 
  Laptop, 
  Megaphone, 
  Calendar, 
  GraduationCap, 
  FileText, 
  ShieldCheck,
  Search,
  Settings
} from "lucide-react";

export default function Servicii() {
  const beneficii = [
    "Analiză de eligibilitate",
    "Suport SEAP / SICAP",
    "Management Proiect",
    "Conformitate Audit"
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* --- HEADER PAGINA --- */}
      <section className="bg-slate-900 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Servicii Profesionale
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Expertiză completă pentru succesul proiectelor tale: de la finanțări nerambursabile 
            și achiziții publice, până la management strategic și formare profesională.
          </p>
        </div>
      </section>

      {/* --- SERVICII PRINCIPALE (CARDS CU IMAGINI) --- */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Card 1: Finanțări Nerambursabile */}
          <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 transition-all hover:shadow-2xl flex flex-col">
            <div className="h-80 overflow-hidden relative">
              <img 
                src="/fonduri.jpg" 
                alt="Finanțări nerambursabile" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold text-white">Finanțări Nerambursabile</h3>
              </div>
            </div>
            <div className="p-10 flex-grow flex flex-col">
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Beneficiați de suport complet, de la identificarea oportunităților până la închiderea proiectului, cu accent pe conformitate și rezultate.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {[
                  "Analiză de eligibilitate",
                  "Elaborare cereri finanțare",
                  "Depunere documentații",
                  "Organizare operațională",
                  "Monitorizare financiară",
                  "Asistență conformitate"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-700 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6 border-t border-slate-50">
                <p className="text-sm text-slate-500 mb-4 italic">Vrei să verificăm eligibilitatea și să îți propunem apelul potrivit?</p>
                <Link href="/contact" className="inline-flex items-center space-x-2 text-blue-600 font-bold text-lg hover:translate-x-2 transition-all">
                  <span>Solicită ofertă</span>
                  <ChevronRight size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Achiziții Publice (SEAP) */}
          <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 transition-all hover:shadow-2xl flex flex-col">
            <div className="h-80 overflow-hidden relative">
              <img 
                src="/achizitii.jpg" 
                alt="Achiziții publice SEAP" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold text-white">Achiziții Publice (SEAP)</h3>
              </div>
            </div>
            <div className="p-10 flex-grow flex flex-col">
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Simplificăm fiecare etapă a unei proceduri, de la selecția procedurii până la semnarea și implementarea contractului.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {[
                  "Evaluare procedură",
                  "Caiete de sarcini",
                  "Întocmire DUAE",
                  "Propunere tehnică & financiară",
                  "Optimizare strategie preț",
                  "Suport în contestare"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-700 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6 border-t border-slate-50">
                <p className="text-sm text-slate-500 mb-4 italic">Ai o procedură în pregătire sau o ofertă de depus?</p>
                <Link href="/contact" className="inline-flex items-center space-x-2 text-blue-600 font-bold text-lg hover:translate-x-2 transition-all">
                  <span>Solicită ofertă</span>
                  <ChevronRight size={20} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTIUNEA ORIZONTALA: PUBLICITATE & ABONAMENTE --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Anunțuri & Publicitate */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-200">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Megaphone size={30} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Anunțuri & Publicitate</h3>
              <p className="text-slate-600 mb-6">Creștem vizibilitatea proiectelor și ofertelor prin prezență media, cu raportare clară și optimizare continuă.</p>
              <div className="space-y-4 mb-8">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <span className="font-bold block text-slate-900">Servicii Publicitate</span>
                  <p className="text-sm text-slate-500">Publicare comunicate presă, mass media online și publicitate online.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <span className="font-bold block text-slate-900">Anunțuri Imobile / Terenuri</span>
                  <p className="text-sm text-slate-500">Publicare în Monitorul Oficial al României și presă scrisă.</p>
                </div>
              </div>
              <Link href="/contact" className="text-blue-600 font-bold hover:underline inline-flex items-center">
                Vrei un serviciu personalizat? Solicită ofertă <ChevronRight size={16} />
              </Link>
            </div>

            {/* Abonamente Lunare */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-200">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Calendar size={30} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Abonamente Lunare</h3>
              <p className="text-slate-600 mb-6">Pachete flexibile pentru suport permanent și intervenții rapide, adaptate ritmului de lucru al organizației.</p>
              <ul className="space-y-3 mb-8">
                {["Consultanță continuă dedicată", "Suport rapid email & telefon", "Revizuire progres periodică", "Actualizări legislative active"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-700 text-sm">
                    <CheckCircle2 size={16} className="text-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="text-blue-600 font-bold hover:underline inline-flex items-center">
                Află pachetul potrivit <ChevronRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* --- CURSURI (IN DEZVOLTARE) --- */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                În Curând
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Cursuri & Formare</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Lansăm programe educaționale pentru profesioniști, axate pe practică, metodologii riguroase și studii de caz reale.
              </p>
              <div className="grid gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg text-blue-400"><GraduationCap size={24} /></div>
                  <div>
                    <h4 className="text-white font-bold">Expert Achiziții Publice</h4>
                    <p className="text-slate-500 text-sm">Legislație, proceduri de atribuire și bune practici în SEAP.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg text-blue-400"><FileText size={24} /></div>
                  <div>
                    <h4 className="text-white font-bold">Expert Accesare Fonduri</h4>
                    <p className="text-slate-500 text-sm">Cereri de finanțare și management de proiect integrat.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center">
              <h3 className="text-xl font-bold text-white mb-4">Vrei să fii primul care află?</h3>
              <p className="text-slate-400 mb-8">Înscrie-te pe lista de așteptare și te anunțăm când deschidem înscrierile.</p>
              <Link href="/contact" className="block w-full bg-white text-slate-900 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                Mă interesează cursurile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Pregătit să transformăm ideile tale în realitate?</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {beneficii.map((b, i) => (
              <div key={i} className="bg-blue-50 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                <ShieldCheck size={16} />
                <span>{b}</span>
              </div>
            ))}
          </div>
          <Link href="/contact" className="bg-blue-600 text-white px-12 py-5 rounded-full font-extrabold text-xl hover:bg-blue-700 shadow-2xl transition-all inline-block hover:scale-105 active:scale-95">
            Solicită Consultanță Acum
          </Link>
        </div>
      </section>
    </div>
  );
}