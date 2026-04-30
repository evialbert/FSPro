// components/GuaranteesSection.tsx
import { ShieldCheck, Target, CheckCircle, TrendingUp } from "lucide-react";

export default function GuaranteesSection() {
  const guarantees = [
    {
      title: "Garanția de eligibilitate strategică",
      desc: "Analizăm structura organizațională, capacitatea financiară și istoricul juridic pentru a valida conformitatea.",
      icon: <Target className="w-8 h-8 text-stone-600" />
    },
    {
      title: "Garanția de conformitate integrală",
      desc: "Controlăm fiecare etapă: documentație, achiziții publice și pregătire pentru audit.",
      icon: <ShieldCheck className="w-8 h-8 text-stone-600" />
    },
    {
      title: "Garanția de protecție a investiției",
      desc: "Structurăm proiectele pentru eficiență, predictibilitate și utilizare strategică a resurselor.",
      icon: <CheckCircle className="w-8 h-8 text-stone-600" />
    },
    {
      title: "Garanția de performanță",
      desc: "Nu livrăm doar documentație — livrăm rezultate, cu monitorizare continuă și KPI relevanți.",
      icon: <TrendingUp className="w-8 h-8 text-stone-600" />
    }
  ];

  return (
    <section className="py-20 bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-12 text-center tracking-tight">
          Garanții oferite
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {guarantees.map((g, i) => (
            <div 
              key={i} 
              className="group p-8 bg-white border border-stone-100 rounded-3xl hover:border-stone-200 transition-all duration-300 hover:shadow-lg hover:shadow-stone-100"
            >
              <div className="mb-6 p-3 bg-stone-50 rounded-2xl w-fit group-hover:bg-stone-100 transition-colors">
                {g.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">{g.title}</h3>
              <p className="text-stone-600 leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}