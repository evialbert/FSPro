'use client';
import React from 'react';
import { Cookie } from 'lucide-react';

export default function CookieButton() {
  const openCookieSettings = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  };

  return (
    <button
      onClick={openCookieSettings}
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 text-white shadow-lg transition-transform hover:scale-105 hover:bg-slate-900"
      aria-label="Setări Cookies"
    >
      <Cookie className="h-7 w-7" />
    </button>
  );
}