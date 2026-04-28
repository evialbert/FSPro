import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Configurăm fontul Inter pentru un aspect modern și curat
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fine Solutions Pro | Consultanță Finanțări Nerambursabile",
  description: "Expertiză în finanțări nerambursabile, consultanță afaceri și soluții financiare integrate.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-slate-900`}>
        {/* Navbar-ul va apărea pe toate paginile site-ului */}
        <Navbar />
        
        {/* Aici se va încărca conținutul specific fiecărei pagini */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Opțional: Poți adăuga aici și un Footer mai târziu */}
        <footer className="bg-slate-50 border-t border-slate-200 py-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Fine Solutions Pro. Toate drepturile rezervate.</p>
        </footer>
      </body>
    </html>
  );
}