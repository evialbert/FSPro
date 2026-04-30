"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function CookieSettings() {
  const handleOpenSettings = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cookie-consent");
      window.location.reload();
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[100]">
      <button
        onClick={handleOpenSettings}
        className="group relative flex items-center bg-white/10 backdrop-blur-2xl border border-white/20 p-3 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:bg-white/20 transition-all duration-300 hover:scale-105"
        aria-label="Setări Cookies"
      >
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-xl text-white shadow-lg">
          <ShieldCheck size={20} />
        </div>
        <span className="ml-3 text-[10px] font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Privacy Center
        </span>
      </button>
    </div>
  );
}