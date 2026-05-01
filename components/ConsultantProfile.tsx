'use client';

import React from 'react';

export default function ConsultantProfile() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Card Principal - Design autoritar */}
        <div className="flex flex-col md:flex-row items-center gap-12 p-10 md:p-16 bg-white rounded-[2.5rem] border border-blue-100 shadow-2xl shadow-blue-100/50">
          
          {/* Zona Foto - Mult mai proeminentă */}
          <div className="w-72 h-72 md:w-96 md:h-96 bg-blue-100 rounded-3xl overflow-hidden shrink-0 shadow-lg border-8 border-blue-50 relative group">
             <img 
                src="/claudiu.jpg" 
                alt="Claudiu - Consultant Senior" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" 
                onError={(e) => { 
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22%23dbeafe%22%2F%3E%3C%2Fsvg%3E'; 
                }}
             />
             {/* Badge autoritate */}
             <div className="absolute bottom-6 left-6 right-6 bg-blue-900/90 backdrop-blur text-white p-4 rounded-xl text-center font-bold tracking-wide shadow-lg border border-blue-700/30">
               Expertiza Senior: 15+ ani
             </div>
          </div>
          
          {/* Text și Mesaj */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-blue-600 font-bold uppercase tracking-[0.25em] mb-2 text-sm">Consultant Senior</h3>
              <h2 className="text-5xl md:text-6xl font-black text-blue-950 tracking-tight">Claudiu</h2>
            </div>
            
            <div className="bg-amber-50/50 p-6 rounded-2xl border-l-4 border-green-500">
                <p className="text-lg text-amber-950 leading-relaxed italic font-medium">
                "Birocrația nu trebuie să fie un obstacol, ci un sistem pe care îl folosim în avantajul tău. 
                Fiecare proiect pe care îl preiau devine propria mea responsabilitate. Sunt aici să mă asigur că nu doar obținem finanțarea, ci că o gestionăm impecabil până la final."
                </p>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="mailto:contact@finesolutionspro.ro" 
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2"
              >
                Discută cu Claudiu <span>→</span>
              </a>
              <div className="flex items-center gap-2 text-blue-900 font-semibold border-b-2 border-blue-200 hover:border-blue-600 transition-colors cursor-pointer">
                <span>Vezi portofoliu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}