// components/ContactForm.tsx
import React from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-blue-50/50 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-sm">
          
          {/* Header Secțiune */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black text-blue-950 mb-4">
              Ești gata să discutăm despre viitorul afacerii tale?
            </h2>
            <p className="text-blue-800/70 text-lg">
              O primă discuție poate fi punctul de cotitură pentru investiția ta.
            </p>
          </div>

          {/* Formular */}
          <form className="space-y-6" action="#" method="POST">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Nume */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-blue-950 ml-1">Numele tău</label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-5 h-5 text-blue-400" />
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white"
                    placeholder="Ion Popescu"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-blue-950 ml-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-5 h-5 text-blue-400" />
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white"
                    placeholder="exemplu@mail.ro"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Mesaj */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-blue-950 ml-1">Mesaj</label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-blue-400" />
                <textarea 
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white"
                  placeholder="Povestește-ne pe scurt despre proiectul tău..."
                  required
                ></textarea>
              </div>
            </div>

            {/* Buton Submit */}
            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-900/20 active:scale-95"
            >
              Trimite solicitarea <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}