"use client";

import React from "react";
import { ShieldCheck, Settings2 } from "lucide-react";

export default function CookieSettings() {
  // Funcția care resetează consimțământul și permite re-afișarea bannerului
  const handleOpenSettings = () => {
    if (typeof window !== "undefined") {
      // Ștergem alegerea din localStorage
      localStorage.removeItem("cookie-consent");
      // Reîncărcăm pagina pentru a declanșa logica din CookieBanner
      window.location.reload();
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[9999]">
      <button
        onClick={handleOpenSettings}
        className="group flex items-center bg-white/70 backdrop-blur-md border border-slate-200 p-1.5 rounded-full shadow-lg hover:shadow-xl hover:bg-slate-900 transition-all duration-500 ease-in-out"
        aria-label="Setări Cookies"
      >
        {/* Iconița cu fundal animat */}
        <div className="bg-blue-600 p-2 rounded-full text-white shadow-inner group-hover:rotate-[360deg] transition-transform duration-700">
          <ShieldCheck size={18} strokeWidth={2.5} />
        </div>

        {/* Text care apare la hover pe desktop / Vizibil pe mobil */}
        <div className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out">
          <span className="px-3 text-[10px] font-black text-slate-700 group-hover:text-white whitespace-nowrap tracking-widest uppercase">
            Cookie Settings
          </span>
        </div>

        {/* Indicator vizual secundar (Settings icon) */}
        <div className="pr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Settings2 size={12} className="text-blue-400 animate-spin-slow" />
        </div>
      </button>

      {/* Stil pentru animația lentă a iconiței de setări */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}