"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (action: 'accept' | 'decline') => {
    localStorage.setItem('cookieConsent', action);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-[100] bg-stone-900 border-t border-stone-800 p-6 shadow-2xl"
        >
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Text și Link Politică */}
            <div className="text-stone-300 text-sm leading-relaxed max-w-2xl">
              <p>
                Folosim cookie-uri pentru a optimiza funcționalitatea site-ului și a-ți oferi o experiență personalizată. 
                Poți alege să accepți toate, să refuzi cookie-urile neesențiale sau să îți personalizezi preferințele. 
                Mai multe detalii găsești în{' '}
                <Link href="/politica-cookies" className="text-white underline underline-offset-4 hover:text-blue-400 transition">
                  Politica noastră privind cookie-urile
                </Link>.
              </p>
            </div>

            {/* Butoane - Ierarhie vizuală clară */}
            <div className="flex flex-wrap gap-3 shrink-0">
              <button 
                onClick={() => handleConsent('accept')}
                className="bg-white text-stone-900 px-6 py-2 rounded-full font-bold text-sm hover:bg-stone-200 transition"
              >
                Acceptă
              </button>
              <button 
                className="bg-stone-800 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-stone-700 transition"
              >
                Personalizează
              </button>
              <button 
                onClick={() => handleConsent('decline')}
                className="text-stone-500 hover:text-white underline text-sm transition"
              >
                Refuză
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}