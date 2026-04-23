import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Star, 
  LayoutGrid, 
  MousePointer2, 
  Menu,
  ChevronRight
} from "lucide-react";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white font-sans text-slate-900">
      
      {/* --- 1. NAVBAR MODERN (Floating Glassmorphism) --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
        <div className="w-full max-w-5xl bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg shadow-blue-900/5 rounded-3xl px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-cyan-500 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Zap size={20} className="text-white fill-white" />
            </div>
            <span className="font-black text-xl tracking-tighter text-[#003366]">
              FS<span className="text-cyan-500">PRO</span>
            </span>
          </Link>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
            <Link href="/" className="hover:text-cyan-500 transition-colors">Acasă</Link>
            <Link href="/servicii" className="hover:text-cyan-500 transition-colors">Servicii</Link>
            <Link href="/despre" className="hover:text-cyan-500 transition-colors">Despre</Link>
          </div>

          {/* Buton Contact Navbar */}
          <Link 
            href="/contact" 
            className="bg-[#003366] text-white px-5 py-2.5 rounded-2xl text-sm font-bold hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-200 transition-all active:scale-95"
          >
            Cere Ofertă
          </Link>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-slate-900">
            <Menu size={24} />
          </div>
        </div>
      </nav>

      {/* --- FUNDAL DECORATIV --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px]" />
      </div>

      {/* --- 2. HERO SECTION --- */}
      <section className="relative pt-44 pb-20 md:pt-56 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          {/* Badge cu efect de puls */}
          <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs md:text-sm font-black mb-10 tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Partener Strategic de Business
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tight text-slate-900 leading-[0.95] mb-8">
            Expertiză care <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Transformă Viitorul.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 leading-relaxed mb-12">
            Fine Solutions Professional: Structurăm idei, gestionăm SEAP și securizăm finanțări europene pentru afacerea ta.
          </p>

          {/* Butoane Hero "Drăguțe" */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link 
              href="/contact" 
              className="group relative overflow-hidden bg-[#003366] text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-2 transition-all hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] active:scale-95"
            >
              <span className="relative z-10">Începe Proiectul</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <Link 
              href="/servicii" 
              className="group px-10 py-5 rounded-2xl font-bold text-lg text-slate-700 border-2 border-slate-100 hover:border-cyan-200 hover:bg-cyan-50/30 transition-all flex items-center gap-2"
            >
              Vezi Servicii
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform text-cyan-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- 3. BENTO GRID SERVICII --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card Principal */}
            <div className="md:col-span-2 bg-gradient-to-br from-white to-cyan-50/20 p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-sm group hover:border-cyan-200 transition-all relative overflow-hidden text-left">
              <div className="bg-cyan-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-cyan-100">
                <ShieldCheck size={30} />
              </div>
              <h3 className="text-3xl font-black mb-4 text-[#003366]">Management Achiziții</h3>
              <p className="text-slate-500 text-lg leading-relaxed max-w-lg">
                Oferim consultanță completă pentru SEAP și achiziții publice. 
                Siguranță procedurală și succes garantat.
              </p>
            </div>

            {/* Card Mic Colorat */}
            <div className="bg-cyan-500 p-10 rounded-[3rem] text-white flex flex-col justify-between shadow-xl shadow-cyan-100 hover:-translate-y-2 transition-transform text-left">
              <Zap size={40} className="fill-white/20" />
              <div>
                <h3 className="text-2xl font-black mb-2 italic">Fonduri UE</h3>
                <p className="text-white/80 font-medium text-sm tracking-wide">Transformăm birocrația în resurse reale pentru creștere.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center text-slate-400 text-sm border-t border-slate-50">
        <p>© 2026 Fine Solutions Professional • Excellence in Consulting</p>
      </footer>
    </main>
  );
}