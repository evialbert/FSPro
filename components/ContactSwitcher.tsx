'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, Mail, Phone } from 'lucide-react';

// Configurăm metodele de contact
const contactMethods = [
  { 
    icon: MessageCircle, 
    link: 'https://m.me/NUME_UTILIZATOR_FACEBOOK', // Înlocuiește cu link-ul tău de Messenger
    color: 'bg-blue-600', 
    label: 'Messenger' 
  },
  { 
    icon: Send, 
    link: 'https://wa.me/40746061243', 
    color: 'bg-green-500', 
    label: 'WhatsApp' 
  },
  { 
    icon: Mail, 
    link: 'mailto:contact@finesolutionspro.ro', 
    color: 'bg-red-500', 
    label: 'Email' 
  },
  { 
    icon: Phone, 
    link: 'tel:+40746061243', 
    color: 'bg-blue-900', 
    label: 'Vreau să fiu sunat(ă)' 
  },
];

export default function ContactSwitcher() {
  const [index, setIndex] = useState(0);

  // Funcția de rotație automată
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % contactMethods.length);
    }, 3000); // Se schimbă la fiecare 3 secunde

    return () => clearInterval(interval);
  }, []);

  const CurrentMethod = contactMethods[index];
  const IconComponent = CurrentMethod.icon;

  return (
    <a
      href={CurrentMethod.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-all duration-500 hover:scale-110 active:scale-95 ${CurrentMethod.color}`}
      title={CurrentMethod.label}
      aria-label={CurrentMethod.label}
    >
      {/* Iconița se animează la schimbare */}
      <IconComponent className="h-7 w-7 animate-in fade-in zoom-in duration-500" />
    </a>
  );
}