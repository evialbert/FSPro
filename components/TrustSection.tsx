import React from "react";

export default function TrustSection() {
  const stats = [
    { label: "Proiecte Finalizate", value: "250+" },
    { label: "Fonduri Atragere", value: "€45M+" },
    { label: "Rată Succes", value: "98%" },
    { label: "Ani Experiență", value: "10+" },
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-4xl font-black text-slate-900 mb-2">
              {stat.value}
            </div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}