"use client";
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setShowBanner(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#003366] text-white p-4 z-[100] shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-blue-100">
          Folosim cookie-uri pentru a vă asigura o experiență optimă pe site-ul nostru. 
          Continuarea navigării reprezintă acceptul dumneavoastră.
        </p>
        <div className="flex gap-4">
          <button 
            onClick={acceptCookies}
            className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2 rounded-lg font-bold text-sm transition-all"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
