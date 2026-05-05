'use client';
import React, { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-cookie-settings', handleOpen);
    return () => window.removeEventListener('open-cookie-settings', handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white p-6 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.1)] border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-700 text-center md:text-left">
              Folosim cookie-uri pentru a îmbunătăți experiența ta.
            </p>
            <div className="flex gap-3 w-full md:w-auto">
              <button onClick={() => setShowPreferences(true)} className="flex-1 md:flex-none px-4 py-3 text-sm font-semibold text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50">
                Setează preferințele
              </button>
              <button onClick={() => setIsOpen(false)} className="flex-1 md:flex-none px-6 py-3 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Acceptă
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900">Gestionare preferințe</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              {['Necesare', 'Analitice', 'Marketing'].map((item) => (
                <div key={item} className="p-3 border rounded-lg bg-slate-50 flex items-center justify-between">
                  <span>{item}</span>
                  <input type="checkbox" defaultChecked={item === 'Necesare'} disabled={item === 'Necesare'} />
                </div>
              ))}
            </div>
            <button onClick={() => setIsOpen(false)} className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
              Salvează și închide
            </button>
          </div>
        )}
      </div>
    </div>
  );
}