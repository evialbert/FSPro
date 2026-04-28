"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Menu, X, ChevronDown, ChevronRight, 
  Laptop, Leaf, Factory, Tractor, Rocket,
  FileText, BarChart3, ShieldCheck, Briefcase, Globe, Gavel
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFinantariOpen, setIsFinantariOpen] = useState(false);
  const [isServiciiOpen, setIsServiciiOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setIsFinantariOpen(false);
    setIsServiciiOpen(false);
  };

  const finantariSubmenu = [
    { name: "Digitalizare IMM (AI & Cyber)", href: "/finantari/digitalizare", icon: <Laptop size={18} /> },
    { name: "Energie Verde & Fotovoltaice", href: "/finantari/energie-verde", icon: <Leaf size={18} /> },
    { name: "Producție & Utilaje (PR 2026)", href: "/finantari/productie", icon: <Factory size={18} /> },
    { name: "Agricultură & Procesare PNS", href: "/finantari/agricultura", icon: <Tractor size={18} /> },
    { name: "Start-up & Microgranturi", href: "/finantari/startup", icon: <Rocket size={18} /> },
  ];

  const alteServiciiSubmenu = [
    { name: "Consultanță Achiziții Publice", href: "/servicii/achizitii-publice", icon: <Gavel size={18} /> },
    { name: "Consultanță Business & ESG", href: "/servicii/consultanta", icon: <Briefcase size={18} /> },
    { name: "Planuri de Afaceri & Fezabilitate", href: "/servicii/planuri", icon: <FileText size={18} /> },
    { name: "Audit Energetic & Green Audit", href: "/servicii/audit", icon: <Globe size={18} /> },
    { name: "Analize Cost-Beneficiu", href: "/servicii/analize", icon: <BarChart3 size={18} /> },
    { name: "Management de Proiect", href: "/servicii/management", icon: <ShieldCheck size={18} /> },
  ];

  return (
    <nav className="bg-[#003366] text-white sticky top-0 z-[100] shadow-lg font-sans">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        
        <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-inner">F</div>
          <span className="font-bold text-xl tracking-tight uppercase">
            Fine Solutions <span className="text-blue-400">Pro</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/despre" className="hover:text-blue-400 transition-colors">Despre noi</Link>
          
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-blue-400 transition-colors py-8 outline-none">
              <span>Finanțări nerambursabile</span>
              <ChevronDown size={16} />
            </button>
            <div className="absolute top-full left-0 w-72 bg-white text-slate-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2 border border-slate-100">
              {finantariSubmenu.map((sub) => (
                <Link key={sub.href} href={sub.href} className="flex items-center space-x-3 p-3 hover:bg-blue-50 rounded-lg transition-colors">
                  <div className="text-blue-600">{sub.icon}</div>
                  <span>{sub.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-blue-400 transition-colors py-8 outline-none">
              <span>Alte Servicii</span>
              <ChevronDown size={16} />
            </button>
            <div className="absolute top-full left-0 w-72 bg-white text-slate-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2 border border-slate-100">
              {alteServiciiSubmenu.map((sub) => (
                <Link key={sub.href} href={sub.href} className="flex items-center space-x-3 p-3 hover:bg-blue-50 rounded-lg transition-colors">
                  <div className="text-blue-600">{sub.icon}</div>
                  <span>{sub.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/portofoliu" className="hover:text-blue-400 transition-colors">Portofoliu</Link>
          <Link href="/contact" className="bg-blue-600 px-6 py-2.5 rounded-full hover:bg-blue-500 transition-all shadow-md active:scale-95">Contact</Link>
        </div>

        <button className="md:hidden p-2 rounded-lg hover:bg-blue-900 transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} className="text-blue-400" /> : <Menu size={32} />}
        </button>
      </div>

      <div className={`md:hidden absolute w-full bg-[#002a54] transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100 border-t border-blue-900" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="flex flex-col p-6 space-y-3">
          <Link href="/despre" onClick={closeMenu} className="py-2 border-b border-blue-900/50">Despre noi</Link>
          
          <div className="flex flex-col">
            <button onClick={() => setIsFinantariOpen(!isFinantariOpen)} className="flex justify-between items-center py-2 border-b border-blue-900/50 text-blue-300 outline-none">
              Finanțări nerambursabile <ChevronDown size={20} className={`transition-transform duration-300 ${isFinantariOpen ? "rotate-180" : ""}`} />
            </button>
            {isFinantariOpen && (
              <div className="bg-[#001f3d] rounded-lg mt-2 p-2 flex flex-col space-y-2">
                {finantariSubmenu.map((sub) => (
                  <Link key={sub.href} href={sub.href} onClick={closeMenu} className="flex items-center space-x-3 p-3 text-sm hover:text-blue-400 border-l border-blue-700 ml-2">
                    {sub.icon} <span>{sub.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <button onClick={() => setIsServiciiOpen(!isServiciiOpen)} className="flex justify-between items-center py-2 border-b border-blue-900/50 text-blue-300 outline-none">
              Alte Servicii <ChevronDown size={20} className={`transition-transform duration-300 ${isServiciiOpen ? "rotate-180" : ""}`} />
            </button>
            {isServiciiOpen && (
              <div className="bg-[#001f3d] rounded-lg mt-2 p-2 flex flex-col space-y-2">
                {alteServiciiSubmenu.map((sub) => (
                  <Link key={sub.href} href={sub.href} onClick={closeMenu} className="flex items-center space-x-3 p-3 text-sm hover:text-blue-400 border-l border-blue-700 ml-2">
                    {sub.icon} <span>{sub.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/portofoliu" onClick={closeMenu} className="py-2 border-b border-blue-900/50">Portofoliu Clienți</Link>
          <Link href="/blog" onClick={closeMenu} className="py-2 border-b border-blue-900/50">Blog</Link>
          <Link href="/contact" onClick={closeMenu} className="bg-blue-600 text-center py-4 rounded-xl font-bold mt-4 shadow-lg">Contact</Link>
        </div>
      </div>
    </nav>
  );
}