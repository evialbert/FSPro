import type { Metadata } from 'next';
import './globals.css'; // Asigură-te că importul CSS este corect
import Footer from '@/components/Footer';
import ContactSwitcher from '@/components/ContactSwitcher';
import CookieButton from '@/components/CookieButton';

export const metadata: Metadata = {
  title: 'Fine Solutions Professional',
  description: 'Fine Solutions Professional - Soluții profesionale pentru afacerea ta',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className="min-h-screen flex flex-col">
        {/* Conținutul paginii tale */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer-ul rămâne la baza paginii */}
        <Footer />

        {/* Butoanele Floating (Se vor afișa peste tot) */}
        <ContactSwitcher />
        <CookieButton />
      </body>
    </html>
  );
}