import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Importul componentelor tale
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import CookieSettings from "@/components/CookieSettings";
import FloatingContact from "@/components/FloatingContact";

const inter = Inter({ subsets: ["latin"] });

// SEO & Metadate 2026
export const metadata: Metadata = {
  title: "Fine Solutions Pro | Consultanță Fonduri Europene & SEAP",
  description: "Servicii de elită în consultanță pentru finanțări nerambursabile și managementul achizițiilor publice în România.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen bg-white text-slate-900 antialiased`}>
        
        {/* 1. Meniul Principal */}
        <Navbar />

        {/* 2. Elementele de tip Banner/Overlay (GDPR) */}
        <CookieBanner />

        {/* 3. Elementele Flotante (UI deasupra conținutului) */}
        <div className="relative">
          {/* Partea Stângă: Control Confidențialitate */}
          <CookieSettings />
          
          {/* Partea Dreaptă: Canale de Contact Animante */}
          <FloatingContact />
        </div>

        {/* 4. Conținutul Paginii */}
        <main className="flex-grow">
          {children}
        </main>

        {/* 5. Subsolul Paginii (Informații Legale & Harta Site-ului) */}
        <Footer />

      </body>
    </html>
  );
}