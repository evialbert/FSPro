import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, Target, Users, Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DespreNoi() {
  const diferentiatori = [
    { title: "Analiză strategică", desc: "Nu acceptăm proiecte fără evaluare prealabilă de risc. Optimizăm totul înainte de depunere." },
    { title: "Dublu filtru intern", desc: "Fiecare document major este verificat în două etape separate pentru eroare zero." },
    { title: "Expertiză reală", desc: "Nu doar teorie. Deținem experiență practică în proiecte și proceduri SEAP complexe." },
    { title: "Orientare către audit", desc: "Structurăm proiectele ca și cum ar fi verificate de la început pentru a rezista controalelor." },
    { title: "Management integrat", desc: "Finanțare + achiziții + implementare. Un singur flux coerent, fără fragmentare." },
    { title: "Abordare predictivă", desc: "Identificăm vulnerabilitățile înainte ca ele să devină probleme administrative." }
  ];

  const pasi = [
    { nr: "01", titlu: "Analiză & Eligibilitate", desc: "Definim obiectivul și verificăm încadrarea în apel și cadrul legal." },
    { nr: "02", titlu: "Plan & Structurare", desc: "Stabilim activități, buget și definim procedura de achiziție (SEAP)." },
    { nr: "03", titlu: "Implementare", desc: "Gestionăm depunerea, clarificările și derularea procedurii cu monitorizare." },
    { nr: "04", titlu: "Închidere & Raportare", desc: "Raportare tehnică/financiară, recepții și pregătirea monitorizării." }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-fineBlue mb-6 leading-tight">
            De ce să alegi Fine Solutions Professional?
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-blue-600 pl-6 py-2 inline-block text-left">
            "Construim proiecte solide. Implementăm fără vulnerabilități. Livrăm rezultate măsurabile."
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-slate-700 space-y-6 text-lg">
          <p>
            Într-un domeniu în care o eroare procedurală poate însemna pierderea finanțării sau aplicarea de corecții financiare, alegerea consultantului potrivit face diferența dintre succes și blocaj administrativ.
          </p>
          <p>
            Combinăm experiența în domeniul fondurilor structurale și achizițiilor publice cu o abordare personalizată, oferind protecție totală beneficiarului.
          </p>
        </div>
        <div className="bg-fineBlue p-10 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
          <h3 className="text-2xl font-bold mb-6">Atuurile noastre:</h3>
          <ul className="space-y-4">
            {['Experiență reală în SEAP', 'Înțelegere a controalelor instituționale', 'Metodologie proprie orientată pe audit', 'Protecția totală a beneficiarului'].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4">
                <CheckCircle2 size={24} className="text-blue-400 flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Diferentiatori */}
      <section className="py-24 bg-white px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-900 uppercase tracking-widest text-sm">Diferențiatori Competitivi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {diferentiatori.map((item, idx) => (
              <div key={idx} className="p-8 border-l-4 border-blue-600 bg-slate-50 hover:bg-blue-50 hover:shadow-md transition-all duration-300">
                <h4 className="font-bold text-xl text-fineBlue mb-3">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proces (Steps) */}
      <section className="py-24 bg-fineBlue text-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-20">Procesul de colaborare</h2>
          <div className="grid md:grid-cols-4 gap-12">
            {pasi.map((pas, idx) => (
              <div key={idx} className="relative group">
                <div className="text-7xl font-black text-blue-400/10 mb-6 group-hover:text-blue-400/30 transition-colors">
                  {pas.nr}
                </div>
                <h4 className="text-xl font-bold mb-4">{pas.titlu}</h4>
                <p className="text-blue-100/80 leading-relaxed">{pas.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <h3 className="text-3xl font-bold mb-8 text-fineBlue">Ești gata să începem proiectul tău?</h3>
        <Link 
          href="/contact"
          className="bg-fineBlue text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-blue-900 hover:shadow-xl transition-all inline-block"
        >
          Contactează un consultant
        </Link>
      </section>
    </div>
  );
}