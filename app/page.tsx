import ConsultantProfile from "@/components/ConsultantProfile";
import TrustSection from "@/components/TrustSection";
import { ArrowRight, CheckCircle, Target, Zap } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO SECTION - Albastru Pastel (Calm, Încredere) */}
      <section className="bg-blue-50 text-blue-950 py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-blue-100 text-blue-700 font-bold px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-6 border border-blue-200">
            Consultanță Fonduri Europene 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
            TRANSFORMĂ IDEILE <br />
            <span className="text-emerald-700">ÎN FINANȚĂRI DE SUCCES</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-900/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Expertiză completă în accesarea fondurilor nerambursabile și managementul achizițiilor publice. 
            Soluții strategice pentru digitalizarea și scalarea afacerii tale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-200">
              Solicită Consultanță <ArrowRight size={20} />
            </Link>
            <Link href="/servicii" className="bg-white hover:bg-slate-50 text-blue-900 font-bold py-4 px-8 rounded-full transition-all border border-blue-100">
              Vezi Servicii
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TRUST SECTION - Verde Măsliniu (Autoritate) */}
      <TrustSection />

      {/* 3. SERVICII PREVIEW - Curat, Minimalist */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-blue-950 tracking-tighter mb-4">Servicii de Elită</h2>
          <p className="text-blue-900/60">Soluții adaptate nevoilor tale de business.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Target className="text-emerald-600" />, title: "Fonduri Europene", desc: "Suport cap-coadă pentru accesarea și implementarea finanțărilor PNRR și a programelor operaționale." },
            { icon: <Zap className="text-emerald-600" />, title: "Digitalizare", desc: "Transformare digitală accelerată și optimizarea proceselor interne prin tehnologii moderne." },
            { icon: <CheckCircle className="text-emerald-600" />, title: "Achiziții Publice", desc: "Consultantă expertă pentru participarea la licitații SEAP/SICAP și asistență juridică." },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl border border-blue-50 hover:border-emerald-200 transition-all hover:shadow-xl shadow-sm">
              <div className="mb-6 p-3 bg-emerald-50 rounded-xl inline-block">{item.icon}</div>
              <h3 className="text-xl font-bold text-blue-950 mb-4">{item.title}</h3>
              <p className="text-blue-900/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CONSULTANT PROFILE */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <ConsultantProfile />
      </section>

      {/* 5. CTA FINAL - Olive Green (Conversie) */}
      <section className="py-20 px-6 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter">Pregătit să începi un proiect de succes?</h2>
          <p className="text-emerald-100 mb-10 text-lg">Contactează-ne astăzi pentru o evaluare preliminară gratuită a eligibilității firmei tale.</p>
          <Link href="/contact" className="bg-white text-emerald-700 font-bold py-4 px-10 rounded-full hover:bg-emerald-50 transition-all shadow-xl">
            Programează o discuție
          </Link>
        </div>
      </section>

    </main>
  );
}