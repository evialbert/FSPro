import './globals.css';
import { Metadata } from 'next';
import Navbar from "@/components/Navbar";

// 1. Setări SEO
export const metadata: Metadata = {
  title: 'Fine Solutions Pro | Consultanță Achiziții și Finanțări',
  description: 'Expertiză în achiziții publice, SEAP și finanțări nerambursabile.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className="antialiased font-sans text-slate-900 bg-white">
        
        {/* Folosim componenta Navbar nouă care are și meniu de mobil inclus */}
        <Navbar />

        {/* Zona de conținut (pt-20 asigură că textul nu intră sub Navbar-ul fixat) */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer profesional */}
        <footer className="bg-slate-50 border-t border-slate-200 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-4 font-black text-[#003366]">
              FINE SOLUTIONS <span className="text-blue-600">PRO</span>
            </div>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Fine Solutions Professional. Toate drepturile rezervate.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}