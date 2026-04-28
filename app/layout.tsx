import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fine Solutions Pro | Consultanță Fonduri Europene & SEAP 2026",
  description: "Servicii profesionale de consultanță pentru finanțări nerambursabile, digitalizare și achiziții publice în România.",
  keywords: ["fonduri europene", "PNRR", "SEAP", "consultanta afaceri", "digitalizare", "2026"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen bg-white text-slate-900 antialiased`}>
        
        {/* Navigația principală - vizibilă pe toate paginile */}
        <Navbar />
        
        {/* Conținutul paginilor */}
        <main className="flex-grow">
          {children}
        </main>

        {/* --- FOOTER CONFORM CERINȚELOR 2026 ROMÂNIA --- */}
        <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              
              {/* Coloana 1: Brand */}
              <div className="space-y-4">
                <span className="text-xl font-black tracking-tighter">
                  FINE SOLUTIONS <span className="text-blue-500">PRO</span>
                </span>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Expertiză de elită în managementul proiectelor cu finanțare europeană și asistență tehnică pentru achiziții publice.
                </p>
              </div>

              {/* Coloana 2: Link-uri Rapide */}
              <div className="flex flex-col space-y-3">
                <h4 className="font-bold text-sm uppercase tracking-widest text-blue-500">Companie</h4>
                <Link href="/despre" className="text-slate-400 hover:text-white text-sm transition-colors">Despre Noi</Link>
                <Link href="/servicii" className="text-slate-400 hover:text-white text-sm transition-colors">Servicii</Link>
                <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">Contact</Link>
              </div>

              {/* Coloana 3: Legal & Revisit */}
              <div className="flex flex-col space-y-3">
                <h4 className="font-bold text-sm uppercase tracking-widest text-blue-500">Legal</h4>
                <Link href="/politica-cookie" className="text-slate-400 hover:text-white text-sm transition-colors font-medium">
                  Politică Fișiere Cookie
                </Link>
                <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors font-medium">
                  Confidențialitate (GDPR)
                </Link>
                
                {/* Buton Revisit Consent - Cerință obligatorie 2026 pentru controlul utilizatorului */}
                <div className="pt-2">
                  <button 
                    onClick={() => {
                      // Script simplu pentru ștergerea cookie-urilor și resetare
                      const cookies = document.cookie.split(";");
                      for (let i = 0; i < cookies.length; i++) {
                        const cookie = cookies[i];
                        const eqPos = cookie.indexOf("=");
                        const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
                        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
                      }
                      alert("Preferințele tale de confidențialitate au fost resetate.");
                      window.location.reload();
                    }}
                    className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 rounded-lg text-[10px] font-bold transition-all border border-slate-700 uppercase tracking-tighter"
                  >
                    <span>⚙️ Revisit Consent</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-xs">
                &copy; {new Date().getFullYear()} Fine Solutions Pro. Toate drepturile rezervate.
              </p>
              <div className="flex space-x-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                {/* Aici poți pune logouri mici cu UE sau ANSPDCP dacă e cazul */}
                <span className="text-[10px] text-slate-500">RO-EU GDPR COMPLIANT</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}