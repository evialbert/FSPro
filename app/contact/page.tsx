import React from 'react';
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight text-center">Contact</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Trimite-ne un mesaj și revenim în maxim 24 de ore.
          </p>
        </div>
        <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 text-center">
            <p className="text-[#003366] font-black text-2xl">office@fspro.ro</p>
        </div>
      </div>
    </main>
  );
}