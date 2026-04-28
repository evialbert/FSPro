import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fine Solutions Pro | Consultanță Fonduri Nerambursabile 2026",
  description: "Expertiză în finanțări nerambursabile, achiziții publice, ESG și digitalizare pentru IMM-uri.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-slate-900`}>
        {/* Navigația principală */}
        <Navbar />
        
        {/* Conținutul paginilor */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer profesional */}
        <footer className="bg-slate-900 text-white py-12 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-blue-400">Fine Solutions Pro</h3>
              <p className="text-slate-400 text-sm">
                Partenerul tău strategic pentru obținerea și implementarea finanțărilor europene și guvernamentale.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Link-uri Rapide</h4>
              <ul className="text-slate-400 text-sm space-y-2">
                <li><Link href="/despre" className="hover:text-blue-300">Despre Noi</Link></li>
                <li><Link href="/portofoliu" className="hover:text-blue-300">Portofoliu</Link></li>
                <li><Link href="/contact" className="hover:text-blue-300">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-slate-400 text-sm">Email: contact@fspro.ro</p>
              <p className="text-slate-400 text-sm">Consultanță specializată 2026</p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-xs">
            <p>© {new Date().getFullYear()} Fine Solutions Pro. Toate drepturile rezervate.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}