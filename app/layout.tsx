import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // IMPORTUL ESENȚIAL PENTRU STILIZARE

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fine Solutions Professional | Expertiză în Consultanță",
  description: "Management de proiect, achiziții publice SEAP și finanțări europene.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  );
}