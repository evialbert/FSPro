"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, Mail, X, MessageSquare, Send } from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  // Am păstrat culorile specifice brandurilor (WhatsApp/Messenger) pentru recunoaștere,
  // dar am folosit tonuri "Stone" pentru contactul direct (Email/Telefon).
  const actions = [
    { name: "WhatsApp", icon: <Send size={22} />, color: "bg-[#25D366]", href: "https://wa.me/40746061243" },
    { name: "Messenger", icon: <MessageSquare size={22} />, color: "bg-[#0084FF]", href: "https://m.me/finesolutionspro" },
    { name: "Email", icon: <Mail size={22} />, color: "bg-stone-600", href: "mailto:contact@finesolutionspro.ro" },
    { name: "Telefon", icon: <Phone size={22} />, color: "bg-stone-700", href: "tel:+40746061243" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      
      {/* Meniul de contact - Animație fluidă de apariție */}
      <div 
        className={`flex flex-col gap-3 transition-all duration-500 ease-in-out ${
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
            className={`${action.color} text-white p-4 rounded-2xl shadow-lg shadow-stone-900/10 hover:scale-110 transition-transform flex items-center justify-center`}
            aria-label={action.name}
          >
            {action.icon}
          </a>
        ))}
      </div>

      {/* Butonul Trigger - Estetică Pudrată (Stone) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`backdrop-blur-xl bg-stone-700 text-white w-16 h-16 rounded-[2rem] shadow-xl shadow-stone-900/20 border border-white/10 flex items-center justify-center transition-all duration-500 hover:bg-stone-800 ${
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