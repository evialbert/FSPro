"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificăm dacă utilizatorul a făcut deja o alegere
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (status: "accepted" | "rejected") => {
    localStorage.setItem("cookie-consent", status);
    setIsVisible(false);
    // Aici poți activa sau opri scripturile de tracking (ex: Google Analytics)
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[100] md:left-auto md:right-8 md:max-w-md animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl rounded-2xl p-6">
        <div className="flex items-start space-x-4">
          <div className="bg-blue-100 p-2 rounded-lg">
            <span className="text-xl">🍪</span>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-tight">
              Controlul Confidențialității
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Folosim cookie-uri pentru a îmbunătăți experiența pe Fine Solutions Pro. 
              Unele sunt esențiale, altele ne ajută să analizăm traficul.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col space-y-2">
          <div className="flex space-x-2">
            <button
              onClick={() => handleConsent("accepted")}
              className="flex-1 bg-blue-600 text-white text-xs font-bold py-3 rounded-xl hover:bg-blue-700 transition-all"
            >
              ACCEPTĂ TOT
            </button>
            <button
              onClick={() => handleConsent("rejected")}
              className="flex-1 bg-slate-100 text-slate-700 text-xs font-bold py-3 rounded-xl hover:bg-slate-200 transition-all"
            >
              REFUZĂ
            </button>
          </div>
          
          <Link 
            href="/politica-cookie" 
            className="text-[10px] text-center text-slate-400 hover:text-blue-600 font-medium underline transition-colors"
          >
            Vezi Detalii & Setări Personalizate
          </Link>
        </div>
      </div>
    </div>
  );
}