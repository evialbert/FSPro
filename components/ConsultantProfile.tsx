"use client";

import Image from "next/image";

export default function ConsultantProfile() {
  return (
    <section className="bg-white p-8 md:p-12 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-10">
      
      {/* Containerul Părinte: 
        Este esențial să aibă 'relative', o lățime/înălțime definită (w-48, h-48)
        și 'overflow-hidden' pentru a decupa poza perfect.
      */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl shrink-0">
        <Image 
          src="/claudiu-consultant.jpg" 
          alt="Claudiu - Consultant Senior"
          fill
          priority
          sizes="(max-width: 768px) 192px, 256px"
          className="object-cover"
        />
      </div>
      
      {/* Detalii Consultant */}
      <div className="space-y-4">
        <h3 className="text-4xl font-black text-slate-900 tracking-tighter">Claudiu</h3>
        <p className="text-blue-600 font-bold uppercase text-sm tracking-widest">
          Consultant Senior Fonduri Europene
        </p>
        <p className="text-slate-600 max-w-lg leading-relaxed text-lg">
          Expertiză de peste 10 ani în atragerea finanțărilor nerambursabile și managementul proiectelor complexe. 
          Abordarea mea se bazează pe rigoare, strategie și rezultate măsurabile.
        </p>
      </div>
    </section>
  );
}