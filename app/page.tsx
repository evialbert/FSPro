export const metadata = {
  title: 'Consultanță Achiziții Publice SEAP | Fine Solutions',
  description: 'Suport complet pentru proceduri de atribuire, caiete de sarcini și ofertare în SEAP. Evităm corecțiile financiare.',
};
import React from 'react';
import { ShieldCheck, BarChart3, Briefcase, Bell, GraduationCap } from 'lucide-react';

// Tipuri pentru Servicii
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => (
  <div className={`p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all ${className}`}>
    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-blue-700 uppercase bg-blue-100 rounded-full">
              Fine Solutions Professional
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Transformăm ideile tale în <span className="text-blue-600">proiecte câștigătoare!</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Specialist în structurarea și protejarea investițiilor publice și europene, cu expertiză reală în achiziții publice.
            </p>
            <button className="bg-[#003366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-colors shadow-lg">
              Solicită ofertă
            </button>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-slate-100">
              <p className="italic text-slate-500 text-lg underline decoration-blue-200">
                "Transformăm provocările birocratice în oportunități reale de creștere."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Services */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Servicii Profesionale</h2>
            <p className="text-slate-500 mt-4">Soluții end-to-end pentru succesul investiției tale</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Primul card e mai mare (Span 2 coloane) */}
            <ServiceCard 
              className="md:col-span-2 bg-gradient-to-br from-blue-50 to-white"
              icon={<BarChart3 size={24} />}
              title="Finanțări nerambursabile"
              description="Analiză de eligibilitate, selecție apel, elaborare și depunere cerere de finanțare, suport la implementare și raportare conform standardelor UE."
            />
            <ServiceCard 
              icon={<ShieldCheck size={24} />}
              title="Achiziții Publice (SEAP)"
              description="Documentație de atribuire, caiete de sarcini și suport complet în SEAP pentru proceduri fără vulnerabilități."
            />
            <ServiceCard 
              icon={<Bell size={24} />}
              title="Anunțuri & Publicitate"
              description="Creștem vizibilitatea proiectelor prin comunicate de presă și anunțuri în Monitorul Oficial."
            />
            <ServiceCard 
              icon={<Briefcase size={24} />}
              title="Abonamente Lunare"
              description="Consultanță recurentă și suport rapid pentru organizații care au nevoie de asistență permanentă."
            />
            <ServiceCard 
              icon={<GraduationCap size={24} />}
              title="Cursuri (În curs)"
              description="Programe de specializare pentru experți în achiziții și fonduri structurale."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
