"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setIsVisible(true);
  }, []);

  const handleConsent = (action: 'accept' | 'decline') => {
    localStorage.setItem('cookieConsent', action);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[1000] bg-stone-50/90 backdrop-blur-md border-t border-stone-200 p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
        >
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-stone-700 text-sm leading-relaxed max-w-2xl">
              <p>
                Folosim cookie-uri pentru a vă oferi o experiență de navigare personalizată și pentru a analiza traficul pe site. 
                Puteți afla mai multe detalii în <Link href="/politica-cookies" className="text-stone-900 underline font-medium hover:text-stone-600 transition-colors">Politica noastră privind modulele cookie</Link>.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <button 
                onClick={() => handleConsent('accept')} 
                className="bg-stone-900 text-white px-8 py-2.5 rounded-full font-medium text-sm hover:bg-stone-800 transition-all active:scale-95"
              >
                Acceptă tot
              </button>
              <button 
                onClick={() => handleConsent('decline')} 
                className="text-stone-500 hover:text-stone-900 font-medium text-sm transition-colors"
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