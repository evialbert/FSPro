"use client";

import React, { useState, useEffect } from "react";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  X, 
  MessageSquare, 
  Send 
} from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState(0);

  // DATE CONTACT - Înlocuiește cu datele tale reale
  const contactData = {
    phone: "+40700000000",
    email: "office@fspro.ro",
    whatsapp: "40700000000",
    messenger: "finesolutionspro",
  };

  // Iconițele care se schimbă pe butonul principal la fiecare 3 secunde
  const mainIcons = [
    <MessageCircle key="1" size={28} />,
    <Send key="2" size={24} />,
    <Phone key="3" size={24} />,
    <MessageSquare key="4" size={24} />
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isOpen) {
      interval = setInterval(() => {
        setActiveIcon((prev) => (prev + 1) % mainIcons.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isOpen]);

  const actions = [
    { 
      name: "WhatsApp", 
      icon: <Send size={20} />, 
      color: "bg-[#25D366]", 
      href: `https://wa.me/${contactData.whatsapp}` 
    },
    { 
      name: "Messenger", 
      icon: <MessageSquare size={20} />, 
      color: "bg-[#0084FF]", 
      href: `https://m.me/${contactData.messenger}` 
    },
    { 
      name: "Email", 
      icon: <Mail size={20} />, 
      color: "bg-amber-500", 
      href: `mailto:${contactData.email}` 
    },
    { 
      name: "Sună-mă!", 
      icon: <Phone size={20} />, 
      color: "bg-red-500", 
      href: `tel:${contactData.phone}` 
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      
      {/* MENIUL EXTINS (Apare la click) */}
      <div className={`flex flex-col items-end space-y-3 mb-4 transition-all duration-500 ease-in-out ${
        isOpen 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-10 scale-50 pointer-events-none"
      }`}>
        {actions.map((action, index) => (
          <div key={index} className="flex items-center group">
            {/* Tooltip discret */}
            <span className="mr-3 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest hidden md:block border border-slate-700">
              {action.name}
            </span>
            <a
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${action.color} text-white p-4 rounded-full shadow-lg hover:scale-110 active:scale-90 transition-all flex items-center justify-center`}
            >
              {action.icon}
            </a>
          </div>
        ))}
      </div>

      {/* BUTONUL PRINCIPAL (TRIGGER) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen 
            ? "bg-slate-900 rotate-90" 
            : "bg-blue-600 hover:bg-blue-700 shadow-[0_10px_40px_rgba(37,99,235,0.4)]"
        } text-white w-16 h-16 rounded-full transition-all duration-500 flex items-center justify-center relative outline-none`}
      >
        <div className="transition-all duration-500">
          {isOpen ? <X size={30} /> : mainIcons[activeIcon]}
        </div>

        {/* Notificare vizuală (bulină roșie) doar când e închis */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
          </span>
        )}

        {/* Text invitatie care apare si dispare */}
        {!isOpen && (
          <div className="absolute right-full mr-4 hidden lg:block">
            <div className="bg-white text-slate-900 text-[10px] font-black px-4 py-2 rounded-full shadow-xl border border-slate-100 whitespace-nowrap animate-pulse tracking-tighter">
              AI O ÎNTREBARE? DISCUTĂM ACUM!
            </div>
          </div>
        )}
      </button>

      {/* Stil pentru animații fluide */}
      <style jsx global>{`
        @keyframes pulse-soft {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(0.95); }
        }
      `}</style>
    </div>
  );
}