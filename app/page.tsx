// app/page.tsx
import type { Metadata } from 'next';
import FloatingContact from "@/components/FloatingContact";
import CookieSettings from "@/components/CookieSettings";
import GuaranteesSection from "@/components/GuaranteesSection";
import ConsultantProfile from "@/components/ConsultantProfile";

// Configurare Metadata pentru SEO
export const metadata: Metadata = {
  title: 'Fine Solutions Professional | Expert Strateg în Fonduri Europene și Achiziții Publice',
  description: 'Specialist în structurarea și protejarea investițiilor publice și europene. Partenerul tău pentru succesul proiectelor.',
};

// Configurare Viewport
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-blue-950 overflow-x-hidden">
      
      {/* 1. HERO SECTION - Ajustată pentru mobil (text adaptiv) */}
      <section className="px-6 py-20 md:py-32 text-center bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-8 text-blue-950 leading-tight md:leading-[0.95] break-words max-w-5xl mx-auto">
          TRANSFORMĂM IDEILE TALE <br className="hidden md:block" />
          <span className="text-blue-600">ÎN PROIECTE CÂȘTIGĂTOARE</span>
        </h1>
        <p className="text-base md:text-xl text-blue-800/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          Fine Solutions Professional – Expert Strateg în structurarea și protejarea investițiilor publice și europene, 
          cu expertiză reală în achiziții publice și management de proiect.
        </p>
        <a 
          href="#contact" 
          className="bg-blue-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 transition-all hover:scale-105 inline-block shadow-lg shadow-blue-200"
        >
          Solicită ofertă
        </a>
      </section>

      {/* 2. INTRO & STATEMENT */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl leading-relaxed text-blue-900 mb-12">
            Bine ați venit la Fine Solutions Professional – partenerul dvs. în transformarea ideilor în proiecte 
            implementate corect și eficient. Oferim suport end-to-end, indiferent dacă sunteți la primul demers 
            de finanțare sau aveți nevoie de consultanță recurentă.
          </p>
          
          <div className="p-10 bg-blue-50/50 rounded-3xl border border-blue-100 shadow-sm">
            <h3 className="font-bold text-blue-950 mb-4 text-lg tracking-wide uppercase">Statement de business:</h3>
            <p className="text-blue-800 italic text-lg leading-relaxed">
              "Transformăm provocările birocratice în oportunități reale de creștere. Maximizăm controlul total 
              al riscului în proiectele finanțate din fonduri europene și achiziții publice."
            </p>
          </div>
        </div>
      </section>

      {/* 3. GARANȚII */}
      <GuaranteesSection />

      {/* 4. PROFIL CONSULTANT (Poza Color & Titlu actualizat) */}
      <ConsultantProfile />

      {/* 5. FORMULAR CONTACT */}
      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-blue-50 border border-blue-100">
          <h2 className="text-3xl font-black text-blue-950 mb-6 tracking-tight">Solicită evaluare eligibilitate</h2>
          <p className="text-blue-700 mb-8">
            Completează formularul și revenim cu un plan de lucru și o ofertă adaptată obiectivului tău.
          </p>
          
          <form className="space-y-4">
            <input type="text" placeholder="Nume și prenume" className="w-full p-4 rounded-xl border border-blue-100 bg-blue-50/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all" />
            <input type="email" placeholder="Email" className="w-full p-4 rounded-xl border border-blue-100 bg-blue-50/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all" />
            <input type="tel" placeholder="Telefon" className="w-full p-4 rounded-xl border border-blue-100 bg-blue-50/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all" />
            
            <select className="w-full p-4 rounded-xl border border-blue-100 bg-blue-50/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all text-blue-800">
                <option>Serviciu de interes</option>
                <option>Fonduri Europene</option>
                <option>Achiziții Publice</option>
                <option>Consultantă Recurentă</option>
            </select>
            
            <textarea placeholder="Scrie pe scurt: obiectiv, termen, context" className="w-full p-4 rounded-xl border border-blue-100 bg-blue-50/50 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"></textarea>
            
            <button className="w-full bg-blue-900 text-white p-4 rounded-xl font-bold hover:bg-blue-800 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-blue-200">
              Trimite solicitarea
            </button>
            <p className="text-xs text-blue-400 text-center pt-2">Datele tale sunt confidențiale.</p>
          </form>
        </div>
      </section>

      {/* Componente Globale */}
      <FloatingContact />
      <CookieSettings />
    </main>
  );
}