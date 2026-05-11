"use client";

import React, { useState, useEffect, useMemo } from "react";
import { 
  X, 
  MessageCircle, 
  Phone, 
  Mail, 
  MessageSquare, 
  Send 
} from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState(0);

  const contactData = {
    phone: "+40746061243",
    email: "finesolutionspro@gmail.com",
    whatsapp: "40746061243",
    messenger: "finesolutionspro",
  };

  // 1. Folosim useMemo pentru mainIcons ca să nu se reconstruiască la fiecare randare
  // Asta rezolvă problemele de dependență în useEffect
  const mainIcons = useMemo(() => [
    <MessageCircle key="1" size={28} />,
    <Send key="2" size={24} />,
    <Phone key="3" size={24} />,
    <MessageSquare key="4" size={24} />
  ], []);

  useEffect(() => {
    // 2. Specificăm tipul pentru interval ca să fie compatibil și cu Browser și cu Node
    let interval: ReturnType<typeof setInterval>;
    
    if (!isOpen) {
      interval = setInterval(() => {
        setActiveIcon((prev) => (prev + 1) % mainIcons.length);
      }, 3000);
    }

    return () => {
      // @ts-ignore - un mic fix pentru a preveni erorile de tip în medii hibride
      if (interval) clearInterval(interval);
    };
  }, [isOpen, mainIcons]);

  const actions = [
    { 
      name: "WhatsApp", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ), 
      color: "bg-[#25D366]", 
      href: `https://wa.me/${contactData.whatsapp}` 
    },
    { 
      name: "Messenger", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.303 2.256.464 3.443.464 6.627 0 12-4.974 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.809 8.37l3.055 3.26 5.962-3.26-6.635 6.593z"/>
        </svg>
      ), 
      color: "bg-[#0084FF]", 
      href: `https://m.me/${contactData.messenger}` 
    },
    { name: "Email", icon: <Mail size={22} />, color: "bg-[#EA4335]", href: `mailto:${contactData.email}` },
    { name: "Sună-mă!", icon: <Phone size={22} />, color: "bg-stone-600", href: `tel:${contactData.phone}` },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      <div className={`flex flex-col items-end space-y-3 mb-4 transition-all duration-500 ease-in-out ${
        isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-50 pointer-events-none"
      }`}>
        {actions.map((action, index) => (
          <div key={index} className="flex items-center group">
            <span className="mr-3 bg-stone-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest hidden md:block border border-stone-700">
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

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen 
            ? "bg-stone-900 rotate-90" 
            : "bg-blue-600 hover:bg-blue-700 shadow-[0_10px_40px_rgba(37,99,235,0.4)]"
        } text-white w-16 h-16 rounded-full transition-all duration-500 flex items-center justify-center relative outline-none`}
      >
        <div className="transition-all duration-500">
          {/* AICI ESTE FIX-UL: Verificăm dacă iconița există înainte de randare */}
          {isOpen ? <X size={30} /> : (mainIcons[activeIcon] || <MessageCircle size={28} />)}
        </div>
      </button>
    </div>
  );
}