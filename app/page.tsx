"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  Globe, 
  ChevronRight,
  Star
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Partea Stângă: Text și CTA */}
            <div className="lg:w-1/2 text-left">
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-8 animate-fade-in">
                <Zap size={16} className="fill-current" />
                <span>Consultanță Fonduri Europene 2026</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
                Finanțăm <span className="text-blue-600">Succesul</span> Afacerii Tale.
              </h1>
              
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Fine Solutions Pro transformă complexitatea fondurilor nerambursabile în oportunități reale de creștere. Expertiză locală, viziune europeană.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/contact" className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center space-x-3 shadow-xl shadow-blue-200">
                  <span>Începe un Proiect</span>
                  <ArrowRight size={22} />
                </Link>
                <Link href="/servicii" className="border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition-all text-center">
                  Vezi Serviciile
                </Link>
              </div>

              {/* Trust markers sub butoane */}
              <div className="mt-10 flex items-center space-x-6 text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <span className="text-sm font-medium">Analiză Gratuită</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <span className="text-sm font-medium">Suport SEAP/SICAP</span>
                </div>
              </div>
            </div>
            
            {/* Partea Dreaptă: POZA TA (Bărbatul la cravată) */}
            <div className="lg:w-1/2 relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Decor fundal poza */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full -z-10 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-slate-100 rounded-full -z-10"></div>
                
                {/* Container Poza */}
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-slate-100 transform lg:rotate-2 transition-transform hover:rotate-0 duration-500">
                  <img 
                    src="/consultant.jpg" 
                    alt="Consultant Fine Solutions Pro" 
                    className="w-full h-[550px] object-cover"
                  />
                  {/* Overlay gradient peste poza */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  
                  {/* Text pe poza */}
                  <div className="absolute bottom-8 left-8 text-white">
                    <div className="flex space-x-1 mb-2">
                      {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <p className="text-2xl font-bold">Albert</p>
                    <p className="text-blue-300 text-sm font-medium">Expert Consultanță Fonduri</p>
                  </div>
                </div>

                {/* Card mic "Floating" peste poza */}
                <div className="absolute -right-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl hidden md:block animate-bounce-slow">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <BarChart3 className="text-green-600" size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Rată de Succes</p>
                      <p className="text-xl font-bold text-slate-900">94%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SERVICES SHORT SECTION --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Expertiză care produce rezultate</h2>
              <p className="text-slate-600 text-lg">De la digitalizare la achiziții publice, suntem alături de tine în fiecare etapă a finanțării.</p>
            </div>
            <Link href="/servicii" className="text-blue-600 font-bold flex items-center hover:underline mt-4 md:mt-0">
              Vezi toate serviciile <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Digitalizare IMM", 
                desc: "Pregătim dosarul pentru granturi de tehnologizare și soluții software avansate.", 
                icon: <BarChart3 className="text-blue-600" size={32} /> 
              },
              { 
                title: "Achiziții Publice", 
                desc: "Consultanță de specialitate pentru câștigarea licitațiilor prin SEAP/SICAP.", 
                icon: <ShieldCheck className="text-blue-600" size={32} /> 
              },
              { 
                title: "Energie Verde", 
                desc: "Finanțări pentru panouri fotovoltaice și sustenabilitate industrială.", 
                icon: <Globe className="text-blue-600" size={32} /> 
              }
            ].map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="mb-6 p-4 bg-blue-50 rounded-2xl inline-block text-blue-600">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Gata să obții finanțarea de care ai nevoie?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Nu lăsa oportunitățile anului 2026 să treacă pe lângă tine. Hai să discutăm despre eligibilitatea firmei tale.
            </p>
            <Link href="/contact" className="bg-white text-blue-600 px-12 py-5 rounded-full font-extrabold text-xl hover:bg-slate-50 transition-all inline-block shadow-lg">
              Solicită Evaluare Gratuită
            </Link>
          </div>
          {/* Cercuri decorative fundal */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full opacity-50"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-blue-700 rounded-full opacity-50"></div>
        </div>
      </section>
    </div>
  );
}