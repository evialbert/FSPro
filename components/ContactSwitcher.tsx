"use client";
import { useState } from 'react';
import { MessageCircle, X, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactSwitcher() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      
      {/* Fereastra care se deschide (condiționată de isOpen) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 w-72"
          >
            <h3 className="font-bold text-lg mb-4">Contactează-ne</h3>
            <div className="space-y-3">
              <button className="flex items-center gap-3 w-full p-3 hover:bg-slate-50 rounded-lg transition">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>Email oficial</span>
              </button>
              <button className="flex items-center gap-3 w-full p-3 hover:bg-slate-50 rounded-lg transition">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>Apel direct</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Butonul Floating (Se schimbă icoana dinamic) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
        aria-label={isOpen ? "Închide contact" : "Deschide contact"}
      >
        {/* Animație simplă pentru schimbarea icoanei */}
        <motion.div
          key={isOpen ? "close" : "open"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </motion.div>
      </button>
    </div>
  );
}