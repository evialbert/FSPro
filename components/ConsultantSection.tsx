"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ConsultantSection() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Imagine - Cu tratare de eroare pentru a evita spațiul gol */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative w-full"
        >
          {/* Container cu aspect fix pentru a menține forma */}
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-stone-200 relative group">
             <Image 
                src="/poza-claudiu.jpg" 
                alt="Claudiu - Consultanță"
                fill
                priority={true}
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                onError={(e) => { 
                  // Dacă imaginea lipsește, ascundem părintele pentru a elimina golul din pagină
                  const target = e.target as HTMLImageElement;
                  const container = target.closest('.aspect-\\[4\\/5\\]');
                  if (container) (container as HTMLElement).style.display = 'none';
                }}
             />
          </div>
        </motion.div>
        
        {/* Text */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
           <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight">
             Expertiză aplicată pentru afacerea ta
           </h2>
           <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
             <p>
               Nu cred în soluții generice. Fiecare business este unic, iar abordarea mea combină rigoarea strategică cu soluții practice, implementabile imediat. 
               Identificăm blocajele operaționale, optimizăm fluxurile și scalăm performanța acolo unde contează cu adevărat.
             </p>
             <p>
               Experiența de peste un deceniu în managementul strategic îmi permite să văd dincolo de cifre, către potențialul neexploatat al organizației tale. 
               Hai să construim împreună un sistem robust, adaptat viitorului.
             </p>
           </div>
        </motion.div>
      </div>
    </section>
  );
}