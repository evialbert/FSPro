"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Pagina */}
      <div className="bg-[#003366] text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Contactați-ne</h1>
        <p className="text-blue-200 max-w-2xl mx-auto text-lg">
          Suntem aici să vă ajutăm să accesați finanțările de care afacerea dumneavoastră are nevoie în 2026.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Coloana 1: Informatii de contact */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Informații de contact</h2>
            <p className="text-slate-600 mb-8">
              Echipa Fine Solutions Pro este gata să vă ofere consultanță specializată pentru proiecte de digitalizare, energie verde și achiziții publice.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Telefon</p>
                <p className="text-slate-600">+40 7xx xxx xxx</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Email</p>
                <p className="text-slate-600">contact@fspro.ro</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Adresă</p>
                <p className="text-slate-600">București, România (Sediul Central)</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <Clock size={24} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Program</p>
                <p className="text-slate-600">Luni - Vineri: 09:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Coloana 2: Formular Simplificat (UI) */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nume</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Popescu Ion" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="ion@companie.ro" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Subiect</label>
              <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                <option>Finanțări Nerambursabile</option>
                <option>Achiziții Publice</option>
                <option>Digitalizare / IT</option>
                <option>Alte Servicii</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Mesaj</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Descrieți scurt proiectul dumneavoastră..."></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center space-x-2">
              <span>Trimite Mesajul</span>
              <Send size={20} />
            </button>
            <p className="text-xs text-slate-400 text-center mt-4">
              Prin trimiterea acestui formular, sunteți de acord cu prelucrarea datelor cu caracter personal conform GDPR.
            </p>
          </form>
        </div>
      </div>

      {/* Footer link rapid */}
      <div className="text-center pb-16">
        <Link href="/" className="text-blue-600 hover:underline font-medium">
          ← Înapoi la pagina principală
        </Link>
      </div>
    </div>
  );
}