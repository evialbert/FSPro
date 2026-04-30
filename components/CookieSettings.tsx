"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function CookieSettings() {
  const handleOpenSettings = () => {
    if (typeof window !== "undefined") {
      // Această funcție resetează consimțământul (necesită implementarea logicii tale de cookies)
      localStorage.removeItem("cookie-consent");
      window.location.reload();
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[100]">
      <button
        onClick={handleOpenSettings}
        className="group relative flex items-center bg-white/40 backdrop-blur-2xl border border-emerald-100/50 p-3 rounded-2xl shadow-[0_8px_32px_0_rgba(16,185,129,0.15)] hover:bg-white/60 transition-all duration-300 hover:scale-105"
        aria-label="Setări Cookies"
      >
        {/* Iconița cu gradient Emerald */}
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 p-2 rounded-xl text-white shadow-lg">
          <ShieldCheck size={20} />
        </div>
        
        {/* Text care apare la hover */}
        <span className="ml-3 text-[10px] font-bold text-emerald-800 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Privacy Center
        </span>
      </button>
    </div>
  );
}