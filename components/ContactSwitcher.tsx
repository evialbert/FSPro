'use client';
import React, { useState } from 'react';
import { MessageCircle, Send, Mail, Phone, X } from 'lucide-react';

const contactMethods = [
  { icon: MessageCircle, link: 'https://m.me/NUME_UTILIZATOR', color: 'bg-blue-600', label: 'Messenger' },
  { icon: Send, link: 'https://wa.me/40746061243', color: 'bg-green-500', label: 'WhatsApp' },
  { icon: Mail, link: 'mailto:contact@finesolutionspro.ro', color: 'bg-red-500', label: 'Email' },
  { icon: Phone, link: 'tel:+40746061243', color: 'bg-blue-900', label: 'Sună-ne' },
];

export default function ContactSwitcher() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {isOpen && (
        <div className="flex flex-col gap-3 mb-2 animate-in slide-in-from-bottom-6 fade-in zoom-in duration-300">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition-transform hover:scale-110 ${method.color}`}
              title={method.label}
              aria-label={method.label}
            >
              <method.icon className="h-7 w-7" />
            </a>
          ))}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl transition-transform hover:scale-105 active:scale-95 hover:bg-blue-700"
        aria-label="Contact"
      >
        {isOpen ? <X className="h-8 w-8" /> : <MessageCircle className="h-8 w-8" />}
      </button>
    </div>
  );
}