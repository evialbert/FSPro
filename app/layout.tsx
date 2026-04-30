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
        
        {/* Meniul Principal (Sticky) */}
        <Navbar />

        {/* Banner GDPR (Apare dinamic) */}
        <CookieBanner />

        {/* CONTAINER FLOTANT (Glassmorphism & Squirkle Shapes)
            Folosim pointer-events-none pe containerul părinte pentru a nu bloca 
            conținutul site-ului, activând pointer-events doar pe butoane.
        */}
        <div className="fixed inset-0 pointer-events-none z-[100] p-6 flex items-end justify-between">
           {/* Partea Stângă: Control Confidențialitate */}
           <div className="pointer-events-auto">
             <CookieSettings />
           </div>
           
           {/* Partea Dreaptă: Canale de Contact */}
           <div className="pointer-events-auto">
             <FloatingContact />
           </div>
        </div>

        {/* Conținutul Paginii */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Subsolul Paginii */}
        <Footer />

      </body>
    </html>
  );
}