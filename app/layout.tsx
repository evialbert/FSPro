import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Configurăm fontul Inter pentru un aspect modern și profesional
const inter = Inter({ subsets: ["latin"] });

// Setările SEO (Metadate) - Esențiale pentru vizibilitatea afacerii tale
export const metadata: Metadata = {
  title: "Fine Solutions Pro | Consultanță Fonduri Europene 2026",
  description: "Expertiză în finanțări nerambursabile, digitalizare și managementul achizițiilor publice (SEAP/SICAP).",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-slate-900`}>
        {/* Navbar-ul este plasat aici pentru a apărea pe TOATE paginile site-ului */}
        <Navbar />
        
        {/* Main conține conținutul specific fiecărei pagini (page.tsx) */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer simplu și elegant */}
        <footer className="bg-slate-50 border-t border-slate-100 py-12">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-lg font-black tracking-tighter">
                FINE SOLUTIONS <span className="text-blue-600">PRO</span>
              </span>
              <p className="text-slate-500 text-sm mt-1 italic">
                Soluții de elită pentru finanțări inteligente.
              </p>
            </div>
            <div className="text-slate-400 text-xs">
              &copy; {new Date().getFullYear()} Fine Solutions Pro. Toate drepturile rezervate.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}