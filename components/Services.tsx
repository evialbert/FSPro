// components/Services.tsx
import React from 'react';
import { Lightbulb, FileText, BarChart3 } from 'lucide-react';

const services = [
  {
    title: "Analiză și Strategie",
    description: "Identificăm oportunitatea perfectă. Analizăm profilul afacerii tale și filtrăm sursele de finanțare care au cea mai mare rată de succes.",
    icon: <Lightbulb className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Elaborare Documentație",
    description: "Scriem proiectul cap-coadă. Ne ocupăm de fiecare detaliu tehnic, de la cererea de finanțare până la planul de afaceri, pentru un dosar impecabil.",
    icon: <FileText className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Management Implementare",
    description: "Monitorizare până la final. Gestionăm toate etapele și raportările necesare, ca tu să te poți concentra pe creșterea afacerii tale.",
    icon: <BarChart3 className="w-8 h-8 text-blue-600" />
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white" id="servicii">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Secțiune */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-4">
            Serviciile noastre de consultanță
          </h2>
          <p className="text-blue-800/70 max-w-2xl mx-auto text-lg">
            De la prima idee până la implementarea finală, suntem alături de tine pentru a transforma birocrația în succes.
          </p>
        </div>

        {/* Grid Servicii */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-4">{service.title}</h3>
              <p className="text-blue-800/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}