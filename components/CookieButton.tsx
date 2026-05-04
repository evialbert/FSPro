'use client';
import React from 'react';
import { Cookie } from 'lucide-react';

export default function CookieButton() {
  // Această funcție depinde de librăria ta de cookies (ex: tarteaucitron, react-cookie-consent)
  const openCookieSettings = () => {
    // Exemplu: Dacă folosești un event custom sau o librărie specifică
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
    console.log("Deschide setări cookie");
  };

  return (
    <button
      onClick={openCookieSettings}
      className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-stone-800 text-white shadow-lg transition-transform hover:scale-105 hover:bg-stone-900"
      aria-label="Setări Cookies"
    >
      <Cookie className="h-6 w-6" />
    </button>
  );
}