import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Star, FileText, CheckCircle2 } from "lucide-react";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-100/30 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white shadow-sm border border-slate-100 text-[#003366] text-sm font-bold mb-8">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span>Expertiză în Achiziții Publice & SEAP</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tight text-slate-900 leading-[0.95] mb-8">
            Transformăm ideile în <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Succes Garantat.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mb-12">
            Gestionăm birocrația și securizăm investițiile prin management de proiect riguros. Punem bazele finanțărilor tale europene.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="group bg-[#003366] text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-2 hover:bg-blue-600 transition-all shadow-2xl active:scale-95">
              Solicită Ofertă
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- BENTO SERVICES --- */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
              <ShieldCheck size={40} className="text-blue-600 mb-8" />
              <h3 className="text-3xl font-black mb-4 text-[#003366]">Management Achiziții</h3>
              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                Suport tehnic complet pentru SEAP. De la documentație la contractare finală, asigurăm conformitatea juridică a fiecărui pas.
              </p>
            </div>
            <div className="bg-blue-600 p-10 rounded-[2.5rem] text-white flex flex-col justify-between">
              <Zap size={40} className="fill-white/20" />
              <div>
                <h3 className="text-2xl font-black mb-2">Finanțări</h3>
                <p className="text-blue-100">Fonduri nerambursabile structurate pentru creștere sustenabilă.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
  