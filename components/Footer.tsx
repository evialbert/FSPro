import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const startYear = 2024;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-50/50 border-t border-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Coloana 1: Info Companie */}
        <div className="space-y-4">
          <h3 className="text-xl font-black text-blue-950 tracking-tight">
            Fine Solutions Professional
          </h3>
          <div className="flex items-start gap-2 text-sm text-blue-800">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
            <p>
              Strada Ciocanului nr. 15B,
              <br />
              Cluj-Napoca, România
            </p>
          </div>
        </div>

        {/* Coloana 2: Contact */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-blue-950">
            Contact
          </h4>
          <div className="space-y-3 text-sm text-blue-800">
            <a href="tel:+40746061243" className="flex items-center gap-2 transition-colors hover:text-blue-600">
              <Phone className="h-4 w-4 text-blue-600" /> +40 746 061 243
            </a>
            <a href="mailto:contact@finesolutionspro.ro" className="flex items-center gap-2 transition-colors hover:text-blue-600">
              <Mail className="h-4 w-4 text-blue-600" /> contact@finesolutionspro.ro
            </a>
            <a href="mailto:finesolutionspro@gmail.com" className="flex items-center gap-2 transition-colors hover:text-blue-600">
              <Mail className="h-4 w-4 text-blue-600" /> finesolutionspro@gmail.com
            </a>
          </div>
        </div>

        {/* Coloana 3: Program & Legal */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-blue-950">
            Program & Legal
          </h4>
          <div className="flex items-center gap-2 text-sm text-blue-800">
            <Clock className="h-4 w-4 text-blue-600" />
            <p>Luni – Vineri: 12:30 – 19:30</p>
          </div>

          <div className="space-y-4 border-t border-blue-200/50 pt-4">
            <a href="/politica-confidentialitate" className="block text-xs font-medium text-blue-800 underline underline-offset-4 hover:text-blue-950">
              GDPR / Politica de confidențialitate
            </a>
            {/* Am adăugat aici link-urile ANPC ca text/link-uri simple pentru a evita erorile de import */}
            <div className="flex flex-col gap-2 pt-2">
               <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-blue-700 hover:underline">SOL - Soluționarea Online a Litigiilor</a>
               <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-blue-700 hover:underline">SAL - Soluționarea Alternativă a Litigiilor</a>
            </div>
          </div>
        </div>

        {/* Coloana 4: Localizare */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-blue-950">
            Localizare
          </h4>
          <div className="h-32 w-full overflow-hidden rounded-xl border border-blue-200 shadow-sm">
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
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-blue-100/50 pt-8 text-center text-xs text-blue-900/40">
        © {startYear} – {currentYear} Fine Solutions Professional. Toate drepturile rezervate.
      </div>
    </footer>
  );
}