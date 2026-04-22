import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Star, 
  MousePointer2, 
  CheckCircle2, 
  TrendingUp, 
  FileText 
} from "lucide-react";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      
      {/* --- 1. HERO SECTION (ULTRA-MODERN) --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
        {/* Background Mesh Gradient - Efecte vizuale de fundal */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-100/30 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Badge Animată */}
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white shadow-sm border border-slate-100 text-[#003366] text-sm font-bold mb-8 animate-fade-in">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span>Partenerul tău strategic în 2026</span>
          </div>

          {/* Titlu Gigant cu Gradient */}
          <h1 className="text-5xl md:text-8xl font-black tracking-tight text-slate-900 leading-[0.95] mb-8">
            Transformăm ideile în <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Proiecte de Succes.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mb-12">
            Expertiză de elită în <strong>achiziții publice (SEAP)</strong> și <strong>fonduri europene</strong>. 
            Eliminăm birocrația și securizăm investițiile tale.
          </p>

          {/* Butoane de Acțiune */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="group bg-[#003366] text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-2 hover:bg-blue-600 transition-all shadow-2xl shadow-blue-900/20 active:scale-95"
            >
              Începe Acum
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link 
              href="/servicii" 
              className="px-10 py-5 rounded-2xl font-bold text-lg text-slate-700 border border-slate-200 hover:bg-slate-50 hover:shadow-md transition-all"
            >
              Vezi Serviciile
            </Link>
          </div>
        </div>
      </section>

      {/* --- 2. SERVICII (BENTO GRID LAYOUT) --- */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black text-[#003366] mb-4 text-balance">
              Soluții End-to-End pentru Investiția Ta
            </h2>
            <p className="text-slate-500 font-medium text-lg italic">
              "Transformăm provocările birocratice în oportunități reale de creștere."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card Mare - Achiziții Publice */}
            <div className="md:col-span-2 bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-3xl font-black mb-4 text-[#003366]">Achiziții Publice & SEAP</h3>
              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                Gestionăm integral procesul de ofertare și monitorizare a licitațiilor. 
                Oferim siguranță juridică deplină și expertiză tehnică pentru succesul dosarului tău.
              </p>
              <TrendingUp className="absolute bottom-[-20px] right-[-20px] w-40 h-40 text-slate-50 opacity-50 -rotate-12" />
            </div>

            {/* Card Colorat - Finanțări */}
            <div className="bg-blue-600 p-8 md:p-10 rounded-[2.5rem] text-white flex flex-col justify-between hover:scale-[1.02] transition-transform shadow-xl shadow-blue-200">
              <Zap size={48} className="fill-white/20 mb-12" />
              <div>
                <h3 className="text-2xl font-black mb-2 text-white">Finanțări Nerambursabile</h3>
                <p className="text-blue-100 mb-6">Structurăm strategii pentru fonduri europene cu rată mare de aprobare.</p>
                <div className="w-12 h-1 bg-white/30 rounded-full" />
              </div>
            </div>

            {/* Card Consultanță */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-blue-200 transition-all flex flex-col">
              <div className="bg-slate-100 w-14 h-14 rounded-2xl flex items-center justify-center text-[#003366] mb-8">
                <FileText size={28} />
              </div>
              <h3 className="text-xl font-black mb-4 text-[#003366]">Consultanță Abonament</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                Suport continuu pentru companii și autorități contractante care vor eficiență maximă.
              </p>
              <div className="mt-auto flex items-center gap-2 text-blue-600 font-bold text-sm">
                Află mai multe <ArrowRight size={16} />
              </div>
            </div>

            {/* Card Statistică/Incredere */}
            <div className="bg-[#003366] p-8 md:p-10 rounded-[2.5rem] text-white md:col-span-2 flex flex-col md:flex-row items-center gap-8 shadow-inner">
               <div className="flex-1">
                  <h3 className="text-2xl font-black mb-2">De ce FSPRO?</h3>
                  <p className="text-blue-100/80">
                    Suntem specialiști în protejarea investițiilor prin management de proiect riguros și conformitate legislativă 100%.
                  </p>
               </div>
               <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                  <div className="bg-white/10 p-4 rounded-2xl text-center backdrop-blur-sm">
                    <div className="text-2xl font-black text-blue-400">100%</div>
                    <div className="text-