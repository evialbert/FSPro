import type { Metadata } from 'next';
import './globals.css';

// Importăm DOAR componentele finale și funcționale
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import CookieSettings from '@/components/CookieSettings';
import FloatingContact from '@/components/FloatingContact';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.finesolutionspro.ro'),
  title: 'Fine Solutions Professional | Consultanță Finanțări & Achiziții',
  description: 'Consultanță integrată în finanțări nerambursabile, achiziții publice, contestații și management de proiect.',
  openGraph: {
    title: 'Fine Solutions Professional',
    description: 'Consultanță integrată în finanțări nerambursabile, achiziții publice, contestații și management de proiect.',
    url: 'https://www.finesolutionspro.ro',
    siteName: 'Fine Solutions Professional',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fine Solutions Professional Logo',
      },
    ],
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fine Solutions Professional',
    description: 'Consultanță integrată în finanțări nerambursabile, achiziții publice, contestații și management de proiect.',
    images: ['/og-image.png'],
  },
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