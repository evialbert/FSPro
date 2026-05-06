'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { name: 'WhatsApp', icon: <MessageCircle size={20} />, href: 'https://wa.me/407xxxxxxxx', color: 'bg-green-600' },
    { name: 'Telefon', icon: <Phone size={20} />, href: 'tel:+407xxxxxxxx', color: 'bg-stone-700' },
    { name: 'Email', icon: <Mail size={20} />, href: 'mailto:contact@email.com', color: 'bg-stone-700' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Opțiunile care apar/dispar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex flex-col gap-3 mb-2"
          >
            {options.map((opt) => (
              <a
                key={opt.name}
                href={opt.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 ${opt.color} text-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform`}
              >
                <span className="text-sm font-medium hidden md:block">{opt.name}</span>
                {opt.icon}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Butonul principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-stone-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-stone-800 transition-all active:scale-95"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}