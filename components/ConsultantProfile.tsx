'use client'; // Aceasta este linia critică pentru a rezolva eroarea de build

import React from 'react';

export default function ConsultantProfile() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 p-8 md:p-12 bg-stone-50 rounded-3xl border border-stone-100 shadow-sm">
          
          {/* Zona Foto */}
          <div className="w-48 h-48 md:w-64 md:h-64 bg-stone-200 rounded-2xl overflow-hidden shrink-0 shadow-lg relative group">
             <img 
                src="/claudiu.jpg" 
                alt="Claudiu - Consultant Senior" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" 
                onError={(e) => { 
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23e7e5e4%22%2F%3E%3C%2Fsvg%3E'; 
                }}
             />
          </div>
          
          {/* Text și Mesaj */}
          <div>
            <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-2">Consultant Senior</h3>
            <h2 className="text-3xl font-black text-stone-900 mb-6 tracking-tight">Claudiu</h2>
            <p className="text-stone-600 leading-relaxed mb-6 italic">
              "Abordarea mea este simplă: birocrația nu trebuie să fie un obstacol, ci un sistem pe care îl folosim în avantajul tău. 
              Fiecare proiect pe care îl preiau devine propria mea responsabilitate. Sunt aici să mă asigur că nu doar obținem finanțarea, ci că o gestionăm corect până la final."
            </p>
            
            <div className="flex gap-4">
              <a 
                href="mailto:contact@finesolutionspro.ro" 
                className="text-stone-800 font-bold border-b-2 border-stone-300 hover:border-stone-800 transition-all"
              >
                Trimite un mesaj direct
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}