"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, Mail, X, MessageSquare, Send } from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { name: "WhatsApp", icon: <Send size={22} />, color: "bg-[#25D366]", href: "https://wa.me/40700000000" },
    { name: "Messenger", icon: <MessageSquare size={22} />, color: "bg-[#0084FF]", href: "https://m.me/finesolutionspro" },
    { name: "Email", icon: <Mail size={22} />, color: "bg-amber-500", href: "mailto:office@fspro.ro" },
    { name: "Telefon", icon: <Phone size={22} />, color: "bg-red-500", href: "tel:+40700000000" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      <div className={`flex flex-col gap-3 transition-all duration-500 ${isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90 pointer-events-none"}`}>
        {actions.map((action, index) => (
          <a
            key={index}
            href={action.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${action.color} text-white p-4 rounded-2xl shadow-xl hover:scale-110 transition-transform flex items-center justify-center`}
          >
            {action.icon}
          </a>
        ))}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`backdrop-blur-xl bg-slate-900/90 text-white w-16 h-16 rounded-[2rem] shadow-2xl border border-white/10 flex items-center justify-center transition-all duration-500 ${isOpen ? "rotate-180" : ""}`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} className="animate-pulse" />}
      </button>
    </div>
  );
}