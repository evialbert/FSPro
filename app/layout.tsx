import './globals.css';
import Link from 'next/link';
import { Metadata } from 'next';

// 1. Definim setările pentru SEO (Titlul care apare în tab-ul browserului)
export const metadata: Metadata = {
  title: 'Fine Solutions Pro | Consultanță Achiziții și Finanțări',
  description: 'Expertiză în achiziții publice, SEAP și finanțări nerambursabile.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className="antialiased font-sans text-slate-900">
        {/* Navbar-ul - Fixat deasupra tuturor paginilor */}
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="text-xl font-black text-fineBlue tracking-tight">
              FINE SOLUTIONS <span className="text-blue-600">PRO</span>
            </Link>
            
            {/* Link-uri Navigare (Vizibile doar pe Desktop) */}
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
              <Link href="/despre" className="hover:text-blue-600 transition-colors">Despre noi</Link>
              <Link href="/servicii" className="hover:text-blue-600 transition-colors">Servicii</Link>
              <Link href="/garantii" className="hover:text-blue-600 transition-colors">Garanții</Link>
              <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            </div>

            {/* Buton Acțiune */}
            <Link 
              href="/contact" 
              className="bg-fineBlue text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-900 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Solicită Ofertă
            </Link>
          </div>
        </nav>

        {/* Zona de conținut a paginilor (Home, Contact, etc.) */}
        <div className="pt-20">
          {children}
        </div>

        {/* Footer (Opțional, adăugat pentru profesionalism) */}
        <footer className="bg-slate-50 border-t border-slate-200 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Fine Solutions Professional. Toate drepturile rezervate.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}