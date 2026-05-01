'use client';

import React from 'react';
import { MessageCircle, Send } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      
      {/* WhatsApp - Recunoscut instantaneu */}
      <a 
        href="https://wa.me/40746061243" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-[#25D366]/40"
        aria-label="Contactează-ne pe WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Messenger - Albastru clasic */}
      <a 
        href="https://m.me/finesolutionspro" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#0084FF] rounded-full shadow-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0084FF]/40"
        aria-label="Contactează-ne pe Messenger"
      >
        <Send className="w-6 h-6" />
      </a>
    </div>
  );
}