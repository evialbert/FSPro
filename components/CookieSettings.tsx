"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Settings2, X } from "lucide-react";

interface CookiePreferences {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
}

export default function CookieSettings() {
  // Starea pentru deschiderea modalului/pop-up-ului de setări
  const [isOpen, setIsOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Starea pentru opțiunile de cookie-uri
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Întotdeauna obligatoriu
    preferences: false,
    statistics: false,
    marketing: false,
  });

  // Încărcăm setările salvate din localStorage la deschiderea panoului
  useEffect(() => {
    const savedCookies = localStorage.getItem("cookie-consent");
    if (savedCookies) {
      try {
        const parsed = JSON.parse(savedCookies);
        setPreferences({
          necessary: true,
          preferences: typeof parsed === "object" ? !!parsed.preferences : false,
          statistics: typeof parsed === "object" ? !!parsed.statistics : false,
          marketing: typeof parsed === "object" ? !!parsed.marketing : false,
        });
      } catch (e) {
        console.error("Eroare la citirea setărilor cookie", e);
      }
    }
  }, [isOpen]);

  // Schimbarea stării bifelor la click
  const handleCheckboxChange = (key: keyof CookiePreferences) => {
    if (key === "necessary") return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Salvare modificări ("Schimbați consimțământul dumneavoastră")
  const handleSaveConsent = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cookie-consent", JSON.stringify(preferences));
      
      // Declanșăm un eveniment custom pentru ca eventualul banner principal sau scripturi să afle instant
      window.dispatchEvent(new Event("cookie-consent-updated"));
      
      setIsSaved(true);
      setTimeout(() => {
        setIsSaved(false);
        setIsOpen(false);
      }, 1200);
    }
  };

  // Retragere completă consimțământ (se opresc toate în afară de cele necesare)
  const handleWithdrawConsent = () => {
    if (typeof window !== "undefined") {
      const resetPreferences = {
        necessary: true,
        preferences: false,
        statistics: false,
        marketing: false,
      };
      setPreferences(resetPreferences);
      localStorage.setItem("cookie-consent", JSON.stringify(resetPreferences));
      
      window.dispatchEvent(new Event("cookie-consent-updated"));
      
      setIsSaved(true);
      setTimeout(() => {
        setIsSaved(false);
        setIsOpen(false);
      }, 1200);
    }
  };

  return (
    <>
      {/* 1. Bula ta discretă din colț (neschimbată, cu toate animațiile ei) */}
      <div className="fixed bottom-6 left-6 z-[9998]">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center bg-white/70 backdrop-blur-md border border-slate-200 p-1.5 rounded-full shadow-lg hover:shadow-xl hover:bg-slate-900 transition-all duration-500 ease-in-out"
          aria-label="Setări Cookies"
        >
          <div className="bg-blue-600 p-2 rounded-full text-white shadow-inner group-hover:rotate-[360deg] transition-transform duration-700">
            <ShieldCheck size={18} strokeWidth={2.5} />
          </div>

          <div className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out">
            <span className="px-3 text-[10px] font-black text-slate-700 group-hover:text-white whitespace-nowrap tracking-widest uppercase">
              Cookie Settings
            </span>
          </div>

          <div className="pr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <Settings2 size={12} className="text-blue-400 animate-spin-slow" />
          </div>
        </button>
      </div>

      {/* 2. Pop-up Panou Setări Module Cookie */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
          {/* Fundal pentru închidere la click în exterior */}
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

          {/* Corpul Panoului */}
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 overflow-hidden transform transition-all">
            
            {/* Buton Închidere X */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              aria-label="Închide"
            >
              <X size={18} />
            </button>

            {/* Antet Structură */}
            <h2 className="text-xl font-bold text-slate-900 mb-1">Setări module cookie</h2>
            <p className="text-xs text-slate-400 mb-5">Starea dumneavoastră actuală</p>

            {/* Listă Categorii Module Cookie */}
            <div className="space-y-3 mb-6">
              
              {/* Necesare */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 select-none">
                <div>
                  <span className="font-semibold block text-sm text-slate-800">Necesare</span>
                  <span className="text-[11px] text-slate-400 block max-w-[320px]">Esențiale pentru funcționarea și securitatea site-ului dumneavoastră.</span>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="w-4 h-4 accent-blue-600 cursor-not-allowed opacity-60"
                />
              </div>

              {/* Preferințe */}
              <div 
                onClick={() => handleCheckboxChange("preferences")}
                className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer select-none"
              >
                <div>
                  <span className="font-semibold block text-sm text-slate-800">Preferinţe</span>
                  <span className="text-[11px] text-slate-500 block max-w-[320px]">Permit site-ului să își amintească alegerile pe care le faceți (ex: limba utilizată).</span>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.preferences}
                  onChange={() => {}} // Gestionat de containerul părinte
                  className="w-4 h-4 accent-blue-600 cursor-pointer"
                />
              </div>

              {/* Statistici */}
              <div 
                onClick={() => handleCheckboxChange("statistics")}
                className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer select-none"
              >
                <div>
                  <span className="font-semibold block text-sm text-slate-800">Statistici</span>
                  <span className="text-[11px] text-slate-500 block max-w-[320px]">Ne ajută să înțelegem modul în care interacționați cu site-ul prin colectarea de date anonime.</span>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.statistics}
                  onChange={() => {}}
                  className="w-4 h-4 accent-blue-600 cursor-pointer"
                />
              </div>

              {/* Marketing */}
              <div 
                onClick={() => handleCheckboxChange("marketing")}
                className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer select-none"
              >
                <div>
                  <span className="font-semibold block text-sm text-slate-800">Marketing</span>
                  <span className="text-[11px] text-slate-500 block max-w-[320px]">Utilizate pentru a urmări vizitatorii pe site-uri web în scopul afișării de reclame relevante.</span>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={() => {}}
                  className="w-4 h-4 accent-blue-600 cursor-pointer"
                />
              </div>

            </div>

            {/* Mesaj Succes Salvare */}
            {isSaved && (
              <div className="mb-4 text-center text-xs font-semibold text-emerald-600 bg-emerald-50 py-2 rounded-xl border border-emerald-100 animate-pulse">
                Consimțământul a fost actualizat cu succes!
              </div>
            )}

            {/* Butoanele Principale Solicitate (Albastre & Grilă perfectă) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleWithdrawConsent}
                className="px-4 py-2.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-100 rounded-xl transition-all text-center uppercase tracking-wider"
              >
                Retragere consimțământ
              </button>
              <button
                onClick={handleSaveConsent}
                className="px-4 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-200 transition-all text-center uppercase tracking-wider"
              >
                Schimbați consimțământul
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Stilurile CSS Globale/Animații */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </>
  );
}