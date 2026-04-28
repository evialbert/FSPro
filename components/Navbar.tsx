"use client";

import React, { useState, useEffect } from "react";
// IMPORTUL CRITIC - Fără acesta build-ul va eșua cu "Link is not defined"
import Link from "next/link"; 
import { Menu, X, Phone, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Schimbăm aspectul navbar-ului când utilizatorul dă scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Acasă", href: "/" },
    { name: "Despre", href: "/despre" },
    { name: "Servicii", href: "/servicii" },
    { name: "Portofoliu", href: "/portofoliu" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3" 
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* --- LOGO --- */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-6 transition-transform">
              <div className="w-6 h-6 border-2 border-white rounded-sm flex items-center justify-center font-bold text-white text-xs">
                FS
              </div>
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tighter">
              FINE SOLUTIONS <span className="text-blue-600">PRO</span>
            </span>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-slate-600 hover:text-blue-600 font-bold text-sm tracking-tight transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Buton CTA */}
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 transition-all flex items-center space-x-2 shadow-md shadow-blue-100"
            >
              <Phone size={14} />
              <span>CONSULTANȚĂ GRATUITĂ</span>
            </Link>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <div 
        className={`md:hidden absolute w-full bg-white border-t border-slate-100 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen shadow-2xl" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-4 p-6 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-800 font-bold text-lg flex justify-between items-center border-b border-slate-50 pb-2"
            >
              {link.name}
              <ArrowRight size={16} className="text-blue-600" />
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-blue-600 text-white text-center py-4 rounded-xl font-bold mt-4"
          >
            SOLICITĂ OFERTĂ ACUM
          </Link>
        </div>
      </div>
    </nav>
  );
}