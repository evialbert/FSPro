"use client"; // <--- Această linie rezolvă eroarea de build!

import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const startYear = 2024;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f0f4f8] border-t border-[#d9e2ec] py-16 text-[#334e68]">
      {/* Structură pe 5 coloane egale - Fără elemente împrăștiate în partea de jos */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-5 gap-12 items-start">
        
        {/* Coloana 1: Info Companie */}
        <div className="space-y-4">
          <h3 className="text-xl font-black text-[#102a43] tracking-tight">
            Fine Solutions Professional
          </h3>
          <div className="flex items-start gap-2 text-sm text-[#486581]">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#102a43]" />
            <p>
              Strada Ciocanului nr. 15B,
              <br />
              Cluj-Napoca, România
            </p>
          </div>
        </div>

        {/* Coloana 2: Contact */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#102a43]">
            Contact
          </h4>
          <div className="space-y-3 text-sm text-[#486581]">
            <a href="tel:+40746061243" className="flex items-center gap-2 transition-colors hover:text-[#102a43]">
              <Phone className="h-4 w-4 text-[#102a43]" /> +40 746 061 243
            </a>
            <a href="mailto:contact@finesolutionspro.ro" className="flex items-center gap-2 transition-colors hover:text-[#102a43]">
              <Mail className="h-4 w-4 text-[#102a43]" /> contact@finesolutionspro.ro
            </a>
            <a href="mailto:finesolutionspro@gmail.com" className="flex items-center gap-2 transition-colors hover:text-[#102a43]">
              <Mail className="h-4 w-4 text-[#102a43]" /> finesolutionspro@gmail.com
            </a>
          </div>
        </div>

        {/* Coloana 3: Program de lucru */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#102a43]">
            Program de lucru
          </h4>
          <div className="flex items-center gap-2 text-sm text-[#486581]">
            <Clock className="h-4 w-4 text-[#102a43]" />
            <p>Luni – Vineri: 12:30 – 19:30</p>
          </div>
        </div>

        {/* Coloana 4: Localizare */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#102a43]">
            Localizare
          </h4>
          <div className="h-32 w-full overflow-hidden rounded-xl border border-[#bcccdc] shadow-sm relative z-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.5!2d23.6!3d46.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDQ2JzEyLjAiTiAyM8KwMzYnMDAuMCJF!5e0!3m2!1sro!2sro!4v1700000000000!5m2!1sro!2sro"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Locație Fine Solutions"
            ></iframe>
          </div>
        </div>

        {/* Coloana 5: Informații Legale & Doar SAL */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#102a43]">
            Informații Legale
          </h4>
          
          {/* Link-urile legale */}
          <div className="flex flex-col space-y-2 text-xs font-semibold">
            <a href="/termeni-conditii" className="text-[#486581] hover:text-[#102a43] transition-colors">
              Termeni și Condiții
            </a>
            <a href="/politica-confidentialitate" className="text-[#486581] hover:text-[#102a43] transition-colors">
              Politică de confidențialitate (GDPR)
            </a>
            <a href="/politica-cookies" className="text-[#486581] hover:text-[#102a43] transition-colors">
              Politică module cookie
            </a>
          </div>

          {/* Doar banner-ul SAL integrat elegant */}
          <div className="pt-2">
            <a 
              href="https://anpc.ro/ce-este-sal/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block h-10 transition-opacity hover:opacity-80"
            >
              <img 
                src="/anpc/sal.png" 
                alt="Soluționarea Alternativă a Litigiilor" 
                className="h-full w-auto object-contain rounded border border-[#bcccdc] bg-white p-1"
                onError={(e) => {
                  e.currentTarget.src = "https://wp-assets.b-cdn.net/anpc/sal.png";
                }}
              />
            </a>
          </div>
        </div>

      </div>

      {/* Drepturi de autor la bază */}
      <div className="mt-16 max-w-7xl mx-auto px-6 pt-8 border-t border-[#bcccdc] text-center text-xs text-[#627d98]/60">
        © {startYear} – {currentYear} Fine Solutions Professional. Toate drepturile rezervate.
      </div>
    </footer>
  );
}