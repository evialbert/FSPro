'use client';

import React from 'react';
import { Cookie } from 'lucide-react';

export default function CookieButton() {
  const openCookieSettings = () => {
    // Trimitem evenimentul către modal
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  };

  return (
    <button
      onClick={openCookieSettings}
      // z-[9999] asigură că este deasupra oricărui alt element (footer, header, imagini)
      // am adăugat focus:ring pentru accesibilitate
      className="fixed bottom-6 left-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-stone-800 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-stone-900 focus:outline-none focus:ring-4 focus:ring-stone-400/50 cursor-pointer"
      aria-label="Setări Cookies"
    >
      <Cookie className="h-7 w-7" />
    </button>
  );
}