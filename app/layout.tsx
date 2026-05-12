import type { Metadata } from 'next';
import './globals.css';

// Importăm DOAR componentele finale și funcționale
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import CookieSettings from '@/components/CookieSettings';
import FloatingContact from '@/components/FloatingContact';

export const metadata: Metadata = {
  title: 'Fine Solutions Professional',
  description: 'Soluții profesionale pentru afacerea ta',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className="min-h-screen flex flex-col bg-white">
        
        {/* Navigația rămâne fixă sus */}
        <Navbar />

        {/* Conținutul paginii cu padding-top pentru a nu intra sub Navbar */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        {/* Footer-ul site-ului */}
        <Footer />

        {/* ELEMENTE GLOBALE DE FUNCȚIONALITATE 
            Am păstrat doar versiunile "Premium" care nu se suprapun:
        */}
        
        {/* 1. Logica pentru consimțământ (Bannerul principal) */}
        <CookieBanner />

        {/* 2. Butonul "Scut" (stânga jos) - permite resetarea cookies oricând */}
        <CookieSettings />

        {/* 3. Butonul de Contact (dreapta jos) - cel cu animație de 3s și multiple rețele */}
        <FloatingContact />
        
      </body>
    </html>
  );
}