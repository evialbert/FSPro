"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, Target, Lightbulb, ArrowRight, ShieldCheck, Laptop } from "lucide-react";

export default function Portofoliu() {
  const expertizaLinii = [
    {
      titlu: "Garanția de eligibilitate strategică",
      desc: "Eligibilitatea nu este un formular bifat. Este fundamentul întregului proiect. Analizăm în profunzime structura organizațională, capacitatea financiară, istoricul juridic și obiectivele investiționale pentru a valida conformitatea cu cerințele programului de finanțare.",
      icon: <ShieldCheck className="text-blue-500" />,
      tag: "Validare Proiect",
      bife: [
        "Analiză completă înainte de depunere",
        "Identificarea riscurilor de respingere",
        "Optimizarea structurii proiectului",
        "Verificare internă multi-nivel"
      ],
      rezultat: "Rezultatul: depuneri solide, fără improvizații."
    },
    {
      titlu: "Garanția de conformitate integrală",
      desc: "Controlăm fiecare etapă: documentație, achiziții publice, implementare, raportare și pregătire pentru audit.",
      icon: <ShieldCheck className="text-green-500" />,
      tag: "Conformitate Audit",
      bife: [
        "Conformitate cu legislația națională și europeană",
        "Proceduri de achiziții structurate corect",
        "Documentație auditabilă",
        "Trasabilitate completă"
      ],
      rezultat: "Rezultatul: reducerea riscului de corecții financiare și sancțiuni."
    },
    {
      titlu: "Garanția de protecție a investiției",
      desc: "Structurăm proiectele astfel încât utilizarea fondurilor să fie eficientă, predictibilă și sustenabilă.",
      icon: <ShieldCheck className="text-yellow-500" />,
      tag: "Siguranță Financiară",
      bife: [
        "Mecanisme contractuale de protecție",
        "Control financiar riguros",
        "Planificare bugetară realistă",
        "Management al riscului investițional"
      ],
      rezultat: "Rezultatul: capital protejat și resurse utilizate strategic."
    },
    {
      titlu: "Garanția de performanță și raport de succes",
      desc: "Nu livrăm doar documentație — livrăm rezultate.",
      icon: <ShieldCheck className="text-purple-500" />,
      tag: "Performanță & Succes",
      bife: [
        "Definire KPI relevanți",
        "Monitorizare continuă",
        "Măsuri corective rapide",
        "Aliniere la obiectivele finanțatorului"
      ],
      rezultat: "Rezultatul: proiecte implementate cu succes și indicatori îndepliniți."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Expertiză & Viziune</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Pregătim Următoarea Generație de Proiecte de Succes
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Deși suntem o echipă tânără sub acest brand, consultanții noștri aduc ani de experiență în analiza tehnică și financiară a fondurilor europene.
          </p>
        </div>
      </section>

      {/* Sectiunea "De ce sa ne alegi pe noi" (In loc de proiecte vechi) */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Cum garantăm calitatea?</h2>
            <div className="space-y-4">
              {[
                "Analiză de eligibilitate gratuită înainte de semnarea contractului.",
                "Echipă dedicată pentru monitorizarea zilnică a SEAP și a ghidurilor noi.",
                "Rapoarte periodice de progres pentru fiecare etapă a scrierii.",
                "Colaborări cu experți tehnici pentru soluții verzi și digitale."
              ].map((text, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <Lightbulb size={48} className="mb-6 text-blue-200" />
              <h3 className="text-2xl font-bold mb-4">Abordarea Noastră</h3>
              <p className="text-blue-100 mb-6">
                În 2026, nu mai este suficient doar să depui un dosar. Proiectul trebuie să fie sustenabil, digital și să respecte principiul DNSH (Do No Significant Harm). Noi ne ocupăm de toate aceste detalii.
              </p>
              <Link href="/contact" className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-all">
                <span>Discută un proiect</span>
                <ArrowRight size={18} />
              </Link>
            </div>
            {/* Background Decor */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 rounded-full opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Liniile de Finantare pe care sunteti experti */}
      <section className="bg-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Garanțiile Noastre</h2>
            <p className="text-slate-400">Reducem riscurile și securizăm finanțarea prin pilonii noștri de performanță.</p>
          </div>

          {/* Am schimbat grid-cols-3 in grid-cols-2 pentru ecrane mari deoarece sunt 4 carduri acum, aratand mult mai simetric */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertizaLinii.map((item, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors flex flex-col justify-between">
                <div>
                  <div className="mb-6">{item.icon}</div>
                  <div className="inline-block px-3 py-1 bg-blue-900/30 text-blue-400 text-xs font-bold rounded-full mb-4">
                    {item.tag}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.titlu}</h3>
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed">{item.desc}</p>
                  
                  {/* Afisarea punctelor cu bifa */}
                  <div className="space-y-2 mb-6">
                    {item.bife.map((bifa, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-sm text-slate-300">
                        <span className="text-blue-400 font-bold select-none">✔</span>
                        <span>{bifa}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Textul de rezultat de la finalul fiecarui card */}
                <div className="mt-4 pt-4 border-t border-slate-700 text-sm font-semibold text-blue-400">
                  {item.rezultat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 text-center">
        <Target size={48} className="mx-auto mb-6 text-blue-600" />
        <h2 className="text-3xl font-bold mb-4">Începe transformarea afacerii tale</h2>
        <p className="text-slate-600 mb-10 max-w-xl mx-auto">
          Chiar dacă ești la primul tău proiect european, te ghidăm pas cu pas pentru a minimiza riscurile și a maximiza șansele de aprobare.
        </p>
        <Link href="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 shadow-xl transition-all">
          Vreau o analiză de eligibilitate
        </Link>
      </section>
    </div>
  );
}