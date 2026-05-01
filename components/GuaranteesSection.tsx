import { ShieldCheck, Target, CheckCircle, TrendingUp } from "lucide-react";

export default function GuaranteesSection() {
  const guarantees = [
    {
      title: "Eligibilitate Strategică",
      desc: "Analizăm riguros structura organizațională și istoricul juridic pentru a garanta succesul aplicării.",
      icon: <Target className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Conformitate Integrală",
      desc: "Controlăm fiecare etapă: documentație, achiziții publice și standarde SEAP, eliminând riscurile.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Protecția Investiției",
      desc: "Structurăm proiectele pentru eficiență maximă, predictibilitate și utilizare strategică a resurselor.",
      icon: <CheckCircle className="w-8 h-8 text-green-600" />
    },
    {
      title: "Performanță Monitorizată",
      desc: "Nu livrăm doar documentație, ci rezultate măsurabile prin KPI relevanți și monitorizare activă.",
      icon: <TrendingUp className="w-8 h-8 text-green-600" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-blue-950 mb-16 text-center tracking-tight">
          Garanții Premium
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((g, i) => (
            <div 
              key={i} 
              className="group p-8 bg-blue-50/30 border border-blue-100 rounded-3xl hover:bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Container Icon - Efect de ridicare la hover */}
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm border border-blue-100 group-hover:scale-110 transition-transform">
                {g.icon}
              </div>
              
              <h3 className="text-xl font-bold text-blue-950 mb-3">{g.title}</h3>
              <p className="text-blue-900/70 leading-relaxed text-sm">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}