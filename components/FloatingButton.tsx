// components/FloatingButton.tsx
"use client";
import React, { useState } from 'react';
import { Plus, X, MessageSquare, Phone } from 'lucide-react';

export default function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
      
      {/* Meniu secundar (apare la click) */}
      {isOpen && (
        <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <a href="tel:+40700000000" className="bg-white p-3 rounded-full shadow-lg border border-blue-100 text-blue-900 hover:bg-blue-50 transition-all">
            <Phone className="w-6 h-6" />
          </a>
          <a href="#contact" className="bg-white p-3 rounded-full shadow-lg border border-blue-100 text-blue-900 hover:bg-blue-50 transition-all">
            <MessageSquare className="w-6 h-6" />
          </a>
        </div>
      )}

      {/* Butonul principal (Toggle) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center 
          ${isOpen ? 'bg-blue-950 rotate-45' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Plus className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}