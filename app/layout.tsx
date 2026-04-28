import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Importul componentelor create
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingContact from "@/components/FloatingContact";

const inter = Inter({ subsets: ["latin"] });

// Metadate optimizate pentru SEO România 2026
export const metadata: Metadata = {
  title: "Fine Solutions Pro | Consultanță Fonduri Europene & SEAP",
  description: "Expertiză în finanțări nerambursabile, digitalizare și managementul achizițiilor publice în România. Soluții inteligente pentru succesul afacerii tale.",
  viewport: "width=device-width, initial-scale=1",
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
        
        {/* Navigația principală (Sticky) */}
        <Navbar />

        {/* Banner discret pentru Cookies (Conformitate GDPR) */}
        <CookieBanner />

        {/* Buton flotant pentru Contact Rapid (WhatsApp, Messenger, Telefon) */}
        <FloatingContact />

        {/* Zona principală de conținut */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer cu link-uri legale și buton Revisit Consent */}
        <Footer />

      </body>
    </html>
  );
}