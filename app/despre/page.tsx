import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, Target, Users, Search, ArrowRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function DespreNoi() {
  const diferentiatori = [
    { 
      title: "1. Analiză strategică înainte de ofertare", 
      desc: "Nu acceptăm proiecte fără evaluare prealabilă de risc. Optimizăm proiectul înainte de depunere." 
    },
    { 
      title: "2. Dublu filtru de verificare internă", 
      desc: "Fiecare document major este verificat în două etape separate pentru eroare zero." 
    },
    { 
      title: "3. Expertiză reală în accesare și SEAP", 
      desc: "Nu doar teorie, deținem experiență practică în proiecte și proceduri de achiziții publice complexe." 
    },
    { 
      title: "4. Orientare către audit", 
      desc: "Structurăm proiectele ca și cum ar fi verificate de la început. Achizițiile respectă strict legislația în vigoare." 
    },
    { 
      title: "5. Management integrat", 
      desc: "Finanțare + achiziții + implementare. Un singur flux coerent. Nu concurăm pe preț, concurăm pe siguranță." 
    },
    { 
      title: "6. Abordare predictivă a riscurilor", 
      desc: "Identificăm vulnerabilitățile și riscurile înainte ca ele să apară și să devină probleme administrative." 
    },
    { 
      title: "7. Comunicare transparentă și directă", 
      desc: "Fără promisiuni nerealiste. Fără supraestimări artificiale. Parteneriat bazat pe adevăr." 
    }
  ];

  const pasi = [
    { 
      nr: "01", 
      titlu: "Analiză & Eligibilitate", 
      desc: "Definim obiectivul și verificăm încadrarea în apel / cerințe / proceduri și cadrul legal aplicabil." 
    },
    { 
      nr: "02", 
      titlu: "Plan & Structurare", 
      desc: "Stabilim activități, buget, calendar și documente; pentru achiziții, definim procedura (SEAP)." 
    },
    { 
      nr: "03", 
      titlu: "Implementare", 
      desc: "Gestionăm depunerea, clarificările și publicarea/derularea procedurii cu monitorizare de conformitate." 
    },
    { 
      nr: "04", 
      titlu: "Închidere & Raportare", 
      desc: "Raportare tehnică/financiară, recepții și arhivare; pregătim pașii pentru monitorizare." 
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            De ce să alegi Fine Solutions Professional?
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-blue-600 pl-6 py-2 inline-block text-left bg-white shadow-sm">
            "Construim proiecte solide. Implementăm fără vulnerabilități. Livrăm rezultate măsurabile."
          </p>
        </div>
      </section>

      {/* Intro Section - Extins cu noul text */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="text-slate-700 space-y-6 text-lg leading-relaxed">
          <p className="font-semibold text-blue-700 uppercase tracking-wider text-sm">Despre Noi</p>
          <p>
            Într-un domeniu în care o eroare procedurală poate însemna pierderea finanțării sau aplicarea de corecții financiare, alegerea consultantului potrivit face diferența dintre succes și blocaj administrativ.
          </p>
          <p>
            Combinăm experiența în domeniul fondurilor structurale și achizițiilor publice cu o abordare personalizată pentru fiecare client. Construim un parteneriat transparent și eficient: vă sprijinim în elaborarea documentației (plan de afaceri, cereri de finanțare, documentații achiziții, analiză cost-beneficiu), apoi gestionăm procesul de depunere și parcursul verificărilor la autoritățile competente.
          </p>
          <p>
            Ne diferențiem prin expertiză multidisciplinară, monitorizare legislativă permanentă și colaborare strânsă, astfel încât clientul nostru să aibă un consultant dedicat și o comunicare clară pe tot parcursul colaborării.
          </p>
        </div>
        
        <div className="bg-[#002B5B] p-10 rounded-[2rem] text-white shadow-2xl relative overflow-hidden sticky top-8">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <ShieldCheck className="text-blue-400" /> Atuurile noastre:
          </h3>
          <ul className="space-y-4">
            {[
              'Experiență reală în accesare fonduri și SEAP', 
              'Înțelegere a controalelor instituționale', 
              'Metodologie proprie orientată pe audit', 
              'Abordare strategică preventivă',
              'Protecția totală a beneficiarului'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4">
                <CheckCircle2 size={20} className="text-blue-400 flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Diferentiatori - Grid actualizat cu 7 puncte */}
      <section className="py-24 bg-white px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Avantajul nostru</h2>
            <h3 className="text-3xl font-bold text-slate-900">Diferențiatori Competitivi</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferentiatori.map((item, idx) => (
              <div key={idx} className={`p-8 border-t-4 border-blue-600 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 ${idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <h4 className="font-bold text-lg text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proces (4 Pași) - Design îmbunătățit */}
      <section className="py-24 bg-[#002B5B] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-4">Procesul de colaborare</h2>
            <p className="text-blue-200">Etapele drumului tău de la idee la succes implementat</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Linie de fundal pentru pasi pe desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-500/20 -translate-y-12"></div>
            
            {pasi.map((pas, idx) => (
              <div key={idx} className="relative group">
                <div className="text-6xl font-black text-blue-400/20 mb-4 group-hover:text-blue-400/40 transition-colors">
                  {pas.nr}
                </div>
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="font-bold">{idx + 1}</span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-white">{pas.titlu}</h4>
                <p className="text-blue-100/80 leading-relaxed text-sm">{pas.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center px-6">
        <div className="max-w-3xl mx-auto bg-slate-50 p-12 rounded-[3rem] border border-slate-200 shadow-sm">
          <h3 className="text-3xl font-bold mb-4 text-slate-900">Ești gata să începem proiectul tău?</h3>
          <p className="text-slate-600 mb-10 text-lg">Oferim consultanță dedicată și siguranță procedurală pentru succesul tău.</p>
          <Link 
            href="/contact"
            className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 hover:shadow-xl transition-all inline-flex items-center gap-2"
          >
            Contactează un consultant <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}