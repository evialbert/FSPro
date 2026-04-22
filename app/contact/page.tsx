import React from 'react';
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">Contactează-ne</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Suntem gata să structurăm succesul următorului tău proiect. Trimite-ne un mesaj și revenim în maxim 24 de ore.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100">
          {/* Info Contact */}
          <div className="space-y-10">
            <h2 className="text-3xl font-black text-[#003366] mb-8">Detalii de contact</h2>
            
            <div className="flex items-start gap-4 group">
              <div className="bg-blue-600 p-3 rounded-xl text-white group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-lg">Email Direct</p>
                <p className="text-slate-600 text-lg">office@fspro.ro</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-blue-600 p-3 rounded-xl text-white group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-lg">Telefon</p>
                <p className="text-slate-600 text-lg">+40 7xx xxx xxx</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-blue-600 p-3 rounded-xl text-white group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-lg">Locație</p>
                <p className="text-slate-600 text-lg">București, România</p>
              </div>
            </div>
          </div>

          {/* Formular Simplificat */}
          <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-100">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Nume Complet</label>
                <input type="text" className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="Ion Popescu" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Business</label>
                <input type="email" className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="ion@companie.ro" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Proiectul tău</label>
                <textarea className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all h-32" placeholder="Cum te putem ajuta?" required></textarea>
              </div>
              <button type="submit" className="w-full bg-[#003366] text-white py-5 rounded-xl font-black text-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/10 active:scale-[0.98]">
                Trimite Mesajul <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}