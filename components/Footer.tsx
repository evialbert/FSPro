"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  // Funcția de resetare a consimțământului (Cerință legală 2026)
  const handleRevisit = () => {
    if (typeof window !== "undefined") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      }
      alert("Preferințele tale de confidențialitate au fost resetate.");
      window.location.reload();
    }
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-4">
            <span className="text-xl font-black tracking-tighter uppercase">
              Fine Solutions <span className="text-blue-500">Pro</span>
            </span>
            <p className="text-slate-400 text-sm leading-relaxed">
              Expertiză de elită în managementul proiectelor cu finanțare europeană și asistență tehnică pentru achiziții publice.
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-bold text-sm uppercase tracking-widest text-blue-500">Companie</h4>
            <Link href="/despre" className="text-slate-400 hover:text-white text-sm transition-colors">Despre Noi</Link>
            <Link href="/servicii" className="text-slate-400 hover:text-white text-sm transition-colors">Servicii</Link>
            <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-bold text-sm uppercase tracking-widest text-blue-500">Legal</h4>
            <Link href="/politica-cookie" className="text-slate-400 hover:text-white text-sm transition-colors font-medium">Politică Fișiere Cookie</Link>
            <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors font-medium">Confidențialitate (GDPR)</Link>
            
            <div className="pt-2">
              <button 
                onClick={handleRevisit}
                className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 rounded-lg text-[10px] font-bold transition-all border border-slate-700 uppercase tracking-tighter"
              >
                ⚙️ Revisit Consent
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Fine Solutions Pro. Toate drepturile rezervate.
          </p>
          <div className="text-[10px] text-slate-500 font-bold tracking-widest">
            RO-EU GDPR COMPLIANT
          </div>
        </div>
      </div>
    </footer>
  );
}