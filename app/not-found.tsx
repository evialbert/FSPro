import React from "react";
import Link from "next/link"; // IMPORTUL CRITIC care lipsea în log-urile tale
import { Home, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      {/* Iconiță de alertă pentru impact vizual */}
      <div className="bg-red-50 p-6 rounded-full mb-6">
        <AlertCircle size={64} className="text-red-500" />
      </div>

      <h1 className="text-6xl font-black text-slate-900 mb-4 tracking-tighter">
        404
      </h1>
      
      <h2 className="text-2xl font-bold text-slate-800 mb-4">
        Pagina nu a fost găsită
      </h2>
      
      <p className="text-slate-600 mb-10 max-w-md mx-auto leading-relaxed">
        Se pare că link-ul accesat este nevalid sau pagina a fost mutată. 
        Vă rugăm să reveniți la pagina principală pentru a explora serviciile noastre de consultanță.
      </p>

      {/* Buton de întoarcere cu importul corect de Link */}
      <Link 
        href="/" 
        className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
      >
        <Home size={20} />
        <span>ÎNAPOI LA ACASĂ</span>
      </Link>
      
      <div className="mt-12 text-slate-400 text-sm italic">
        Fine Solutions Pro &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
}