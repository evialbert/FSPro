"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function CookieSettings() {
  const handleOpenSettings = () => {
    if (typeof window !== "undefined") {
      // Logica de resetare a consimțământului
      localStorage.removeItem("cookie-consent");
      window.location.reload();
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[100]">
      <button
        onClick={handleOpenSettings}
        className="group relative flex items-center bg-white/60 backdrop-blur-xl border border-stone-100 p-3 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:bg-stone-50 transition-all duration-300 hover:scale-105"
        aria-label="Setări Cookies"
      >
        {/* Gradient Măsliniu-Pudrat (Stone) - Autoritate subtilă */}
        <div className="bg-gradient-to-br from-stone-600 to-stone-800 p-2 rounded-xl text-white shadow-md">
          <ShieldCheck size={20} />
        </div>
        
        {/* Text cu ton neutru, discret */}
        <span className="ml-3 text-[10px] font-bold text-stone-700 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Privacy Center
        </span>
      </button>
    </div>
  );
}