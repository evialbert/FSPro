"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Acasă", href: "/" },
  { name: "Servicii", href: "/servicii" },
  { name: "Despre", href: "/despre" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectăm scroll-ul pentru a schimba stilul navbar-ului
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-2 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-blue-200">
            <Zap size={20} className="text-white fill-white" />
          </div>
          <span className="text-xl font-black tracking-tight text-[#003366]">
            FS<span className="text-blue-600 underline decoration-2 underline-offset-4">PRO</span>
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold text-[#003366]/80 hover:text-blue-600 transition-all hover:-translate-y-0.5"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="bg-[#003366] text-white px-6 py-2.5 rounded-full text-sm font-black hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-200 transition-all active:scale-95"
          >
            Cere Ofertă
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button className="md:hidden text-[#003366]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="flex justify-between items-center text-lg font-bold text-[#003366]"
                >
                  {link.name} <ChevronRight size={20} className="text-blue-600" />
                </Link>
              ))}
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white w-full py-4 rounded-xl text-center font-black shadow-lg"
              >
                Cere Ofertă
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}