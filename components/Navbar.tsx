"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; // IMPORTUL CRITIC PENTRU REPARAREA ERORII
import { Menu, X, ChevronDown, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efect pentru a schimba aspectul navbar-ului la scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
        scrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <div className="w-6 h-6 border-2 border-white rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xs font-serif italic uppercase">F</span>
              </div>
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tighter">
              FINE SOLUTIONS <span className="text-blue-600">PRO</span>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-slate-600 hover:text-blue-600 font-semibold text-sm uppercase tracking-wider transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center space-x-2"
            >
              <Phone size={16} />
              <span>CERE OFERTĂ</span>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div 
        className={`md:hidden absolute w-full bg-white border-t border-slate-100 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen py-6 shadow-xl" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-700 font-bold text-lg hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-blue-600 text-white text-center py-4 rounded-xl font-bold"
          >
            VREAU CONSULTANȚĂ
          </Link>
        </div>
      </div>
    </nav>
  );
}