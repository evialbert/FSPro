"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Funcție pentru a închide meniul la click pe link
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-[#003366] text-white sticky top-0 z-[100] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
            F
          </div>
          <span className="font-bold text-xl tracking-tight uppercase">
            Fine Solutions <span className="text-blue-400">Pro</span>
          </span>
        </Link>

        {/* BUTON HAMBURGER (Mobil) */}
        <button className="md:hidden p-2 outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} className="text-blue-400" /> : <Menu size={32} />}
        </button>

        {/* MENIU DESKTOP (Ascuns pe mobil) */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/despre" className="hover:text-blue-400 transition-colors">Despre noi</Link>
          <Link href="/finantari" className="hover:text-blue-400 transition-colors">Finanțări nerambursabile</Link>
          <Link href="/servicii" className="hover:text-blue-400 transition-colors">Alte Servicii</Link>
          <Link href="/portofoliu" className="hover:text-blue-400 transition-colors">Portofoliu Clienți</Link>
          <Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
          <Link href="/contact" className="bg-blue-600 px-5 py-2 rounded-full hover:bg-blue-500 transition-all">
            Contact
          </Link>
        </div>
      </div>

      {/* MENIU MOBIL (Hamburger Dropdown) */}
      <div 
        className={`md:hidden absolute w-full bg-[#002a54] transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 border-t border-blue-900" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4 shadow-2xl">
          <Link href="/despre" onClick={closeMenu} className="flex justify-between items-center text-lg border-b border-blue-900/50 pb-2">
            Despre noi <ChevronRight size={18} className="text-blue-400" />
          </Link>
          
          <Link href="/finantari" onClick={closeMenu} className="flex justify-between items-center text-lg border-b border-blue-900/50 pb-2">
            Finanțări nerambursabile <ChevronRight size={18} className="text-blue-400" />
          </Link>
          
          <Link href="/servicii" onClick={closeMenu} className="flex justify-between items-center text-lg border-b border-blue-900/50 pb-2">
            Alte Servicii <ChevronRight size={18} className="text-blue-400" />
          </Link>
          
          <Link href="/portofoliu" onClick={closeMenu} className="flex justify-between items-center text-lg border-b border-blue-900/50 pb-2">
            Portofoliu Clienți <ChevronRight size={18} className="text-blue-400" />
          </Link>
          
          <Link href="/blog" onClick={closeMenu} className="flex justify-between items-center text-lg border-b border-blue-900/50 pb-2">
            Blog <ChevronRight size={18} className="text-blue-400" />
          </Link>
          
          <Link href="/contact" onClick={closeMenu} className="bg-blue-600 text-center py-4 rounded-xl font-bold text-xl mt-4 shadow-lg active:scale-95 transition-transform">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}