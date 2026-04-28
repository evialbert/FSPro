"use client";

import React, { useState } from "react";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  X, 
  MessageSquare, 
  Send,
  ArrowUpRight
} from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  // DATE CONTACT - Modifică aici cu datele firmei tale
  const contactData = {
    phone: "+40700000000",
    email: "office@fspro.ro",
    whatsapp: "40700000000", // Format internațional fără +
    messenger: "finesolutionspro", // ID-ul paginii de Facebook
  };

  const actions = [
    {
      name: "WhatsApp",
      icon: <Send size={20} />,
      color: "bg-[#25D366]",
      href: `https://wa.me/${contactData.whatsapp}`,
    },
    {
      name: "Messenger",
      icon: <MessageSquare size={20} />,
      color: "bg-[#0084FF]",
      href: `https://m.me/${contactData.messenger}`,
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      color: "bg-amber-500",
      href: `mailto:${contactData.email}`,
    },
    {
      name: "Sună-mă!",
      icon: <Phone size={20} />,
      color: "bg-red-500",
      href: `tel:${contactData.phone}`,
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      
      {/* --- BUTOANELE SECUNDARE (MENIUL EXTINS) --- */}
      <div className={`flex flex-col items-end space-y-3 mb-4 transition-all duration-300 ease-out ${
        isOpen 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-10 scale-50 pointer-events-none"
      }`}>
        {actions.map((action, index) => (
          <div key={index} className="flex items-center group">
            {/* Label-ul care apare la hover pe desktop */}
            <span className="mr-3 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
              {action.name}
            </span>
            <a
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${action.color} text-white p-3.5 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all flex items-center justify-center`}
              title={action.name}
            >
              {action.icon}
            </a>
          </div>
        ))}
      </div>

      {/* --- BUTONUL PRINCIPAL (TRIGGER) --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen 
            ? "bg-slate-900 rotate-90" 
            : "bg-blue-600 hover:bg-blue-700 animate-bounce-slow"
        } text-white p-4 rounded-full shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all duration-300 relative flex items-center justify-center`}
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <div className="relative">
            <MessageCircle size={28} />
            {/* Indicator de notificare (bulină roșie) */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>
        )}

        {/* Text scurt care apare doar când meniul e închis */}
        {!isOpen && (
          <span className="absolute right-full mr-4 bg-white text-slate-900 text-[10px] font-black px-3 py-1.5 rounded-full shadow-sm border border-slate-100 whitespace-nowrap tracking-tighter hidden md:block">
            AI O ÎNTREBARE?
          </span>
        )}
      </button>

      {/* Stil pentru animația lentă de bounce */}
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </div>
  );
}