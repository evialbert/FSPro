'use client';

import React, { useState } from 'react';
import { MessageCircle, Send, Mail, Phone, Plus, X } from 'lucide-react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    { name: "WhatsApp", icon: <MessageCircle className="w-6 h-6" />, color: "bg-[#25D366]", href: "https://wa.me/40746061243" },
    { name: "Messenger", icon: <Send className="w-5 h-5" />, color: "bg-[#0084FF]", href: "https://m.me/finesolutionspro" },
    { name: "Email", icon: <Mail className="w-6 h-6" />, color: "bg-[#EA4335]", href: "mailto:contact@finesolutionspro.ro" },
    { name: "Sunați-mă", icon: <Phone className="w-6 h-6" />, color: "bg-[#34A853]", href: "tel:+40746061243" },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-4">
      
      {/* Meniul de contact (apare când isOpen este true) */}
      <div className={`flex flex-col gap-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        {contactOptions.map((opt, index) => (
          <a
            key={index}
            href={opt.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-14 h-14 ${opt.color} rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform`}
            title={opt.name}
          >
            {opt.icon}
          </a>
        ))}
      </div>

      {/* Butonul principal de declanșare */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-blue-950 rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-blue-900 transition-all active:scale-95 border-2 border-white"
        aria-label="Deschide meniu contact"
      >
        {isOpen ? <X className="w-8 h-8" /> : <Plus className="w-8 h-8" />}
      </button>
    </div>
  );
}