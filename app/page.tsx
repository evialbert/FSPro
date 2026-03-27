import React from 'react';
import { ShieldCheck, BarChart3, Briefcase, Bell, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Tipuri pentru Servicii
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => (
  <div className={`p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${className}`}>
    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-700 uppercase bg-blue-100 rounded-full">
              Fine Solutions Professional
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Transformăm ideile tale în <br />
              <span className="text-blue-600">proiecte câștigătoare!</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Specialist în structurarea și protejarea investițiilor publice și europene, cu expertiză reală în achiziții publice și management de proiect.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="bg-[#003366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-all shadow-lg hover:shadow-blue-900/20 flex items-center gap-2"
              >
                Solicită ofertă <ArrowRight size={20} />
              </Link>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white p-10 rounded-2xl shadow-2xl border border-slate-100">
              <p className="italic text-slate-600 text-xl font-medium leading-relaxed underline decoration-blue-200 decoration-4 underline-offset-8">
                "Transformăm provocările birocratice în oportunități reale de creștere pentru afacerea ta."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-1 bg-blue-600 rounded-full"></div>
                <span className="text-sm font-bold text-[#003366] uppercase tracking-wider">Echipa FSP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Services */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Servicii Profesionale</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-500 text-lg">Soluții end-to-end pentru succesul investiției tale</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              className="md:col-span-2 bg-gradient-to-br from-blue-50/50 to-white border-blue-100"
              icon={<BarChart3 size={28} />}
              title="Finanțări nerambursabile"
              description="Analiză de eligibilitate, selecție apel, elaborare și depunere cerere de finanțare. Oferim suport complet la implementare și raportare conform standardelor UE pentru a asigura succesul proiectului tău."
            />
            <ServiceCard 
              icon={<ShieldCheck size={28} />}
              title="Achiziții Publice (SEAP)"
              description="Documentație de atribuire, caiete de sarcini și suport complet în SEAP pentru proceduri transparente și fără vulnerabilități legislative."
            />
            <ServiceCard 
              icon={<Bell size={28} />}
              title="Anunțuri & Publicitate"
              description="Creștem vizibilitatea proiectelor prin comunicate de presă profesionale și anunțuri obligatorii în Monitorul Oficial."
            />
            <ServiceCard 
              icon={<Briefcase size={28} />}
              title="Abonamente Lunare"
              description="Consultanță recurentă și suport rapid pentru organizații care au nevoie de asistență permanentă în managementul proiectelor."
            />
            <ServiceCard 
              icon={<GraduationCap size={28} />}
              title="Cursuri & Training"
              description="Programe de specializare pentru experți în achiziții și fonduri structurale. Dezvoltăm competențe practice pentru succesul echipei tale."
            />
          </div>
        </div>
      </section>
    </main>
  );
}