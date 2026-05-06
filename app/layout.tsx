import type { Metadata } from 'next';
import './globals.css';

// Importăm componentele
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSwitcher from '@/components/ContactSwitcher';
import CookieButton from '@/components/CookieButton';
import CookieBanner from '@/components/CookieBanner';
import CookieSettings from '@/components/CookieSettings';
import AnpcIcons from '@/components/AnpcIcons';

// Metadata pentru SEO
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
        
        {/* Navigația (Fixed la top) */}
        <Navbar />

        {/* Conținutul paginii: 
          'pt-20' este esențial pentru a preveni suprapunerea conținutului 
          peste Navbar-ul care are poziție 'fixed'.
        */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        {/* Footer-ul la baza paginii */}
        <Footer />

        {/* Elemente Floating (sunt 'fixed' în componentele lor, 
            deci vor apărea mereu deasupra conținutului) */}
        <ContactSwitcher />
        <CookieButton />
        <CookieBanner />
        <CookieSettings />
        
      </body>
    </html>
  );
}