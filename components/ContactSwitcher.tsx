"use client";
import { useState } from 'react';
import { MessageCircle, X, Mail, Phone } from 'lucide-react';

export default function ContactSwitcher() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Z-index-ul mare asigură că stă deasupra tuturor elementelor
    <div className="fixed bottom-8 right-8 z-[999] flex flex-col items-end gap-3">
      
      {/* Meniul care apare la click */}
      {isOpen && (
        <div className="bg-white p-4 rounded-2xl shadow-2xl border border-stone-100 w-64 animate-in fade-in zoom-in duration-200">
          <h4 className="font-bold text-stone-900 mb-3 text-sm">Contactează-ne</h4>
          <div className="space-y-2">
            <a href="mailto:contact@finesolutionspro.ro" className="flex items-center gap-3 p-2 hover:bg-stone-50 rounded-lg text-sm text-stone-600 transition">
              <Mail size={16} /> Trimite un email
            </a>
            <a href="tel:+40700000000" className="flex items-center gap-3 p-2 hover:bg-stone-50 rounded-lg text-sm text-stone-600 transition">
              <Phone size={16} /> Sună acum
            </a>
          </div>
        </div>
      )}

      {/* Butonul principal */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-stone-900 text-white p-4 rounded-full shadow-lg hover:bg-stone-700 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}