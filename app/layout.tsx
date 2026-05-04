// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Importă componentele globale
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import CookieSettings from "@/components/CookieSettings";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Fine Solutions Professional | Expert Strateg în Fonduri Europene',
    template: '%s | Fine Solutions Professional'
  },
  description: 'Specialist în structurarea și protejarea investițiilor publice și europene. Partenerul tău pentru succesul proiectelor.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-blue-950 antialiased`}>
        
        {/* 1. Header & Navigare */}
        <Navbar />
        
        {/* 2. Conținutul dinamic (fiecare pagină) */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* 3. Footer (Legal & ANPC) */}
        <Footer />
        
        {/* 4. Interacțiune & Cookies */}
        <FloatingContact />
        <CookieSettings />
        
      </body>
    </html>
  );
}