// app/layout.tsx
// @ts-ignore
import "./globals.css";
import type { Metadata } from "next";
import FloatingButton from "@/components/FloatingButton";

export const metadata: Metadata = {
  title: "Fine Solutions Professional | Consultant Fonduri Europene",
  description: "Consultant specializat în atragerea fondurilor europene. Transformăm birocrația în resurse reale pentru dezvoltarea afacerii tale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className="font-sans antialiased text-blue-950 bg-white">
        {/* Conținutul paginii tale */}
        <main>
          {children}
        </main>

        {/* Butonul plutitor va fi disponibil pe toate paginile */}
        <FloatingButton />
      </body>
    </html>
  );
}