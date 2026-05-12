// app/page.tsx
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ConsultantSection from '@/components/ConsultantSection';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section - Impact vizual maxim la intrare */}
      <Hero />

      {/* 2. Servicii - Prezentarea ofertelor */}
      <Services />

      {/* 3. Despre/Consultant - Secțiunea dedicată lui Claudiu */}
      <ConsultantSection />

      {/* 4. Contact/CTA - Apelul la acțiune final */}
      <section className="py-20 bg-stone-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ești gata să duci afacerea la nivelul următor?
          </h2>
          <p className="text-lg mb-10 text-stone-200">
            Expertiza noastră în consultanță este la un mesaj distanță. 
            Hai să stabilim o discuție despre obiectivele tale.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-stone-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-stone-100 transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            Solicită o ofertă
          </a>
        </div>
      </section>

    </main>
  );
}