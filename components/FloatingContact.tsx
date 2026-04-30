"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, Mail, X, MessageSquare, Send } from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  // Lista canalelor de contact
  const actions = [
    { name: "WhatsApp", icon: <Send size={22} />, color: "bg-[#25D366]", href: "https://wa.me/40700000000" },
    { name: "Messenger", icon: <MessageSquare size={22} />, color: "bg-[#0084FF]", href: "https://m.me/finesolutionspro" },
    { name: "Email", icon: <Mail size={22} />, color: "bg-emerald-600", href: "mailto:office@fspro.ro" },
    { name: "Telefon", icon: <Phone size={22} />, color: "bg-emerald-700", href: "tel:+40700000000" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      
      {/* Meniul de contact - Apare animat */}
      <div 
        className={`flex flex-col gap-3 transition-all duration-500 ease-out ${
          isOpen 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-10 scale-90 pointer-events-none"
        }`}
      >
        {actions.map((action, index) => (
          <a
            key={index}
            href={action.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${action.color} text-white p-4 rounded-2xl shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center`}
            aria-label={action.name}
          >
            {action.icon}
          </a>
        ))}
      </div>

      {/* Butonul de declanșare (Trigger) - Emerald Glassmorphism */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`backdrop-blur-xl bg-emerald-600/90 text-white w-16 h-16 rounded-[2rem] shadow-lg shadow-emerald-500/20 border border-white/20 flex items-center justify-center transition-all duration-500 hover:bg-emerald-700 ${
          isOpen ? "rotate-180" : ""
        }`}
        aria-label="Contactează-ne"
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <MessageCircle size={28} className="animate-pulse" />
        )}
      </button>
      
    </div>
  );
}