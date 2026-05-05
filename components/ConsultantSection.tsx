// components/ConsultantSection.tsx
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function ConsultantSection() {
  const expertiza = [
    'Strategie și Consultanță',
    'Optimizarea proceselor',
    'Management operațional',
    'Soluții personalizate'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Poza - Apare o singură dată aici */}
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-50 rounded-3xl -z-10" />
            <Image 
              src="/poza-claudiu.jpg" // Asigură-te că ai poza în folderul public
              alt="Claudiu - Consultant Fine Solutions"
              width={600}
              height={700}
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>

          {/* Textul combinat */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Expertiză și viziune cu <span className="text-blue-600">Claudiu</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Cu o abordare pragmatică și orientată spre rezultate, Claudiu te ajută să identifici 
              punctele slabe ale afacerii și să le transformi în avantaje competitive. 
              Fiecare soluție este adaptată nevoilor tale specifice.
            </p>

            <ul className="space-y-3">
              {expertiza.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}