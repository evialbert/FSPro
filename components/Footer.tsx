// components/Footer.tsx
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const startYear = 2024;
  const currentYear = 2026;

  return (
    <footer className="bg-blue-50/50 border-t border-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Coloana 1: Info Companie */}
        <div className="space-y-4">
          <h3 className="font-black text-blue-950 text-xl tracking-tight">Fine Solutions Professional</h3>
          <div className="flex items-start gap-2 text-blue-800 text-sm">
            <MapPin className="w-5 h-5 shrink-0 text-blue-600 mt-0.5" />
            <p>
              Strada Ciocanului nr. 15B,<br /> 
              Cluj-Napoca, România
            </p>
          </div>
        </div>

        {/* Coloana 2: Contact */}
        <div className="space-y-4">
          <h4 className="font-bold text-blue-950 uppercase tracking-wider text-sm">Contact</h4>
          <div className="space-y-3 text-blue-800 text-sm">
            <a href="tel:+40746061243" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4 text-blue-600" /> +40 746 061 243
            </a>
            <a href="mailto:contact@finesolutionspro.ro" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Mail className="w-4 h-4 text-blue-600" /> contact@finesolutionspro.ro
            </a>
            <a href="mailto:finesolutionspro@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Mail className="w-4 h-4 text-blue-600" /> finesolutionspro@gmail.com
            </a>
          </div>
        </div>

        {/* Coloana 3: Program & Legal */}
        <div className="space-y-4">
          <h4 className="font-bold text-blue-950 uppercase tracking-wider text-sm">Program</h4>
          <div className="flex items-center gap-2 text-blue-800 text-sm">
            <Clock className="w-4 h-4 text-blue-600" />
            <p>Luni – Vineri: 12:30 – 19:30</p>
          </div>
          
          <div className="flex flex-wrap gap-3 pt-4 border-t border-blue-200/50">
            <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs font-bold underline underline-offset-4 hover:text-blue-900">ANPC</a>
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs font-bold underline underline-offset-4 hover:text-blue-900">SOL</a>
            <a href="/politica-confidentialitate" className="text-blue-800 text-xs font-medium hover:text-blue-950 underline underline-offset-4">GDPR</a>
          </div>
        </div>

        {/* Coloana 4: Harta Interactivă */}
        <div className="space-y-4">
          <h4 className="font-bold text-blue-950 uppercase tracking-wider text-sm">Localizare</h4>
          <div className="w-full h-32 rounded-xl overflow-hidden border border-blue-200 shadow-sm">
            {/* IMPORTANT: Înlocuiește src-ul de mai jos cu link-ul "Embed a map" obținut din Google Maps 
            */}
            <iframe 
              src="https://maps.google.com/maps?width=352&amp;height=651&amp;hl=en&amp;q=Str.%20Ciocanului%20nr.%2015B%20Cluj-Napoca+(FINE%20SOLUTIONS%20PROFESSIONAL%20S.R.L.)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Locație Fine Solutions"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-blue-100/50 text-center text-blue-900/40 text-xs">
        © {startYear} – {currentYear} Fine Solutions Professional. Toate drepturile rezervate.
      </div>
    </footer>
  );
}