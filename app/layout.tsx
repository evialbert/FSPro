import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Importăm noul Footer client-side

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fine Solutions Pro | Consultanță Fonduri Europene & SEAP 2026",
  description: "Expertiză în finanțări nerambursabile, digitalizare și achiziții publice în România.",
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
        
        {/* Navbar-ul global */}
        <Navbar />
        
        {/* Conținutul dinamic al paginilor */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer-ul extras (rezolvă eroarea de build) */}
        <Footer />
        
      </body>
    </html>
  );
}