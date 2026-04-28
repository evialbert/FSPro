"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECȚIUNEA PRINCIPALĂ: 4 COLOANE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Coloana 1: Brand & Misiune */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black tracking-tighter uppercase">
                Fine Solutions <span className="text-blue-500">Pro</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Partenerul tău strategic în accesarea fondurilor nerambursabile și optimizarea proceselor de achiziții publice prin SEAP/SICAP. 
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors text-slate-300 hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-700 transition-colors text-slate-300 hover:text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Coloana 2: Link-uri Rapide */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-6">Navigare</h4>
            <ul className="space-y-4">
              {[
                { name: "Acasă", href: "/" },
                { name: "Servicii Consultanță", href: "/servicii" },
                { name: "Despre Noi", href: "/despre" },
                { name: "Portofoliu Proiecte", href: "/portofoliu" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors flex items-center group">
                    <ChevronRight size={14} className="mr-2 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coloana 3: Contact Direct */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-6">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3 text-sm text-slate-400">
                <MapPin size={18} className="text-blue-600 shrink-0" />
                <span>București, România<br />Sector 1, Calea Victoriei</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-400">
                <Phone size={18} className="text-blue-600 shrink-0" />
                <a href="tel:+40700000000" className="hover:text-white transition-colors">+40 700 000 000</a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-400">
                <Mail size={18} className="text-blue-600 shrink-0" />
                <a href="mailto:office@fspro.ro" className="hover:text-white transition-colors">office@fspro.ro</a>
              </li>
            </ul>
          </div>

          {/* Coloana 4: Legal & Siguranță */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-6">Legal & Confidențialitate</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/politica-cookie" className="text-slate-400 hover:text-white text-sm transition-colors block">
                  Politică de Utilizare Cookie-uri
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors block">
                  Protecția Datelor (GDPR)
                </Link>
              </li>
              <li>
                <a href="https://anpc.ro" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white text-sm transition-colors block">
                  ANPC - Protecția Consumatorului
                </a>
              </li>
              <li className="pt-2">
                <div className="border border-slate-800 p-3 rounded-lg bg-slate-900/50">
                  <p className="text-[10px] text-slate-500 leading-tight">
                    Fine Solutions Pro este marcă înregistrată. Toate materialele prezentate sunt protejate de drepturi de autor conform legii.
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* BARA DE JOS (COPYRIGHT) */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-[11px] font-medium tracking-wider">
            &copy; {currentYear} FINE SOLUTIONS PRO. TOATE DREPTURILE REZERVATE.
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="text-[10px] font-bold text-slate-600 tracking-[0.2em] border-r border-slate-800 pr-6 uppercase">
              Proiectat pentru Excelență
            </span>
            <div className="flex space-x-3 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Locație pentru badge-uri (ex: ISO, ANSPDCP) */}
              <div className="w-8 h-8 bg-slate-700 rounded-sm"></div>
              <div className="w-8 h-8 bg-slate-700 rounded-sm"></div>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
}