// app/layout.tsx
import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="text-xl font-black text-[#003366]">
              FINE SOLUTIONS <span className="text-blue-600">PRO</span>
            </Link>
            
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
              <Link href="/despre" className="hover:text-blue-600">Despre noi</Link>
              <Link href="/servicii" className="hover:text-blue-600">Servicii</Link>
              <Link href="/garantii" className="hover:text-blue-600">Garanții</Link>
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            </div>

            <Link href="/contact" className="bg-[#003366] text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:shadow-lg transition-all">
              Solicită Ofertă
            </Link>
          </div>
        </nav>
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
