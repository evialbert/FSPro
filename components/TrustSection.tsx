export default function TrustSection() {
  const stats = [
    { label: "Proiecte Finalizate", value: "250+" },
    { label: "Fonduri Atragere", value: "€45M+" },
    { label: "Rată Succes", value: "98%" },
    { label: "Ani Experiență", value: "10+" },
  ];

  return (
    <section className="py-16 bg-emerald-50 border-y border-emerald-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center group">
            {/* Valoarea statistică - Verde măsliniu închis */}
            <div className="text-4xl md:text-5xl font-black text-emerald-900 mb-2 transition-all group-hover:scale-105">
              {stat.value}
            </div>
            
            {/* Eticheta - Verde măsliniu mai deschis */}
            <div className="text-[10px] md:text-xs font-bold text-emerald-700 uppercase tracking-widest">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}