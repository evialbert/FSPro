import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 px-4 text-center">
      <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">404</h1>
      <div className="bg-blue-600 px-2 text-sm rounded rotate-12 absolute text-white">
        Pagina negăsită
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Ups! Ceva n-a mers bine.</h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          Pagina pe care o căutați nu există sau a fost mutată pe o altă linie de finanțare.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg"
        >
          Înapoi la Acasă
        </Link>
      </div>
    </div>
  );
}