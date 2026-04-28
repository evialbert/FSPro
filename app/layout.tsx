import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Configurarea fontului oficial pentru un aspect modern
const inter = Inter({ subsets: ["latin"] });

// Meta-datele pentru Google (SEO) - Importante pentru 2026
export const metadata: Metadata = {
  title: "Fine Solutions Pro | Consultanță Fonduri Europene & SEAP",
  description: "Expertiză în accesarea fondurilor nerambursabile, digitalizare și managementul achizițiilor publice în România.",
  keywords: ["fonduri europene", "PNRR", "SEAP", "consultanta afaceri", "digitalizare", "2026"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        {/* Navbar-ul apare automat pe toate paginile */}
        <Navbar />
        
        {/* Aici se randează conținutul fiecărei pagini (page.tsx) */}
        <main>
          {children}
        </main>

        {/* Footer-ul (opțional, dar recomandat) */}
        <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="mb-6">
              <span className="text-xl font-black tracking-tighter">
                FINE SOLUTIONS <span className="text-blue-500">PRO</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Fine Solutions Pro. Toate drepturile rezervate.
            </p>
            <p className="text-slate-500 text-xs mt-2 italic">
              Profesionalism. Integritate. Succes.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}