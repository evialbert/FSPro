import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Star, LayoutGrid, MousePointer2 } from "lucide-react";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      
      {/* --- FUNDAL DECORATIV (Glow Effects) --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-blue-50/60 rounded-full blur-[100px]" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          {/* Badge Stilizat */}
          <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-bold mb-10 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Consultantă Specializată 2026
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tight text-slate-900 leading-[0.95] mb-8">
            Expertiză care <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Inspiră Încredere.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 leading-relaxed mb-12">
            Structurăm proiecte complexe și securizăm finanțări europene prin soluții de 
            <strong> management de proiect </strong> de ultimă generație.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link 
              href="/contact" 
              className="group bg-cyan-500 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-2 hover:bg-[#003366] transition-all shadow-xl shadow-cyan-200 active:scale-95"
            >
              Cere o Ofertă
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link 
              href="/servicii" 
              className="px-10 py-5 rounded-2xl font-bold text-lg text-slate-700 border border-slate-200 hover:bg-slate-50 transition-all"
            >
              Vezi Servicii
            </Link>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID STILIZAT --- */}
      <section className="py-20 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card Principal - Light Cyan */}
            <div className="md:col-span-2 bg-gradient-to-br from-white to-cyan-50/30 p-10 md:p-14 rounded-[3rem] border border-cyan-100 shadow-sm group hover:shadow-md transition-all text-left">
              <div className="bg-cyan-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-cyan-200">
                <ShieldCheck size={30} />
              </div>
              <h3 className="text-3xl font-black mb-4 text-slate-900">Achiziții Publice</h3>
              <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
                Monitorizare SEAP și suport tehnic complet. Reducem riscurile juridice 
                și maximizăm șansele de câștig în orice licitație.
              </p>
            </div>

            {/* Card Albastru Intens pentru contrast */}
            <div className="bg-[#003366] p-10 rounded-[3rem] text-white flex flex-col justify-between hover:scale-[1.02] transition-transform shadow-2xl shadow-blue-900/20 text-left">
              <Zap size={40} className="text-cyan-400 fill-cyan-400/20" />
              <div>
                <h3 className="text-2xl font-black mb-2">Fonduri UE</h3>
                <p className="text-blue-100 opacity-80">Accesăm resurse pentru creșterea afacerii tale.</p>
              </div>
            </div>

            {/* Card Info - Minimalist */}
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:border-cyan-200 transition-all">
              <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center text-cyan-600 mb-6 group-hover:bg-cyan-50 transition-colors">
                <LayoutGrid size={28} />
              </div>
              <h4 className="font-black text-xl text-slate-900 mb-2">Management</h4>
              <p className="text-slate-500 text-sm">Organizare riguroasă pentru rezultate predictibile.</p>
            </div>

            <div className="md:col-span-2 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-8 text-left">
               <div className="bg-cyan-50 p-6 rounded-3xl">
                  <MousePointer2 size={32} className="text-cyan-600" />
               </div>
               <div>
                  <h3 className="text-2xl font-black text-slate-900">Strategie Personalizată</h3>
                  <p className="text-slate-500 italic">"Transformăm birocrația în succes palpabil."</p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER SIMPLU --- */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-400 text-sm font-medium">
          © 2026 Fine Solutions Professional. Toate drepturile rezervate.
        </div>
      </footer>
    </main>
  );
}