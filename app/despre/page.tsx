import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, Target, Users, Search } from 'lucide-react';

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
      {/* Hero Section Despre */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-[#003366] mb-6">De ce să alegi Fine Solutions Professional?</h1>
          <p className="text-xl text-slate-600 leading-relaxed italic">
            "Construim proiecte solide. Implementăm fără vulnerabilități. Livrăm rezultate măsurabile."
          </p>
        </div>
      </section>

      {/* Intro Contextual */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-slate-700 space-y-4">
          <p>
            Într-un domeniu în care o eroare procedurală poate însemna pierderea finanțării sau aplicarea de corecții financiare, alegerea consultantului potrivit face diferența dintre succes și blocaj administrativ.
          </p>
          <p>
            Combinăm experiența în domeniul fondurilor structurale și achizițiilor publice cu o abordare personalizată. Ne diferențiem prin expertiză multidisciplinară și monitorizare legislativă permanentă.
</p>
        </div>
        <div className="bg-blue-600 p-8 rounded-2xl text-white shadow-xl">
          <h3 className="text-xl font-bold mb-4">Atuurile noastre:</h3>
          <ul className="space-y-3">
            {['Experiență reală în SEAP', 'Înțelegere a controalelor instituționale', 'Metodologie proprie orientată pe audit', 'Protecția totală a beneficiarului'].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-blue-200" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Diferentiatori Grid */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Diferențiatori Competitivi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {diferentiatori.map((item, idx) => (
              <div key={idx} className="p-6 border-l-4 border-blue-600 bg-slate-50 hover:bg-blue-50 transition-colors">
                <h4 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procesul de Colaborare (4 Pași) */}
      <section className="py-20 bg-[#003366] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Procesul de colaborare</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {pasi.map((pas, idx) => (
              <div key={idx} className="relative group">
                <div className="text-5xl font-black text-blue-400/20 mb-4 group-hover:text-blue-400 transition-colors">
                  {pas.nr}
                </div>
                <h4 className="text-xl font-bold mb-2">{pas.titlu}</h4>
                <p className="text-blue-100 text-sm">{pas.desc}</p>
                {idx < 3 && <div className="hidden md:block absolute top-8 -right-4 text-blue-400">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 text-center">
        <h3 className="text-2xl font-bold mb-6">Ești gata să începem proiectul tău?</h3>
        <button className="bg-[#003366] text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
          Contactează un consultant
        </button>
      </section>
    </div>
  );
}
