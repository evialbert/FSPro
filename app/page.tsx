// app/page.tsx
import Hero from '@/components/Hero'; // Asigură-te că ai creat acest fișier
import Services from '@/components/Services'; // Asigură-te că ai creat acest fișier
import ConsultantSection from '@/components/ConsultantSection'; // Secțiunea unitară cu Claudiu

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section - Prima impresie (Header-ul paginii) */}
      <Hero />

      {/* 2. Servicii - Ce oferi */}
      <Services />

      {/* 3. Despre/Consultant - Claudiu (Apare O SINGURĂ DATĂ) */}
      <ConsultantSection />

      {/* 4. Contact/CTA - Un apel final la acțiune */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ești gata să duci afacerea la nivelul următor?</h2>
        <p className="mb-8 opacity-90">Contactează-ne pentru o discuție fără obligații.</p>
        <a 
          href="/contact" 
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition"
        >
          Solicită o ofertă
        </a>
      </section>

    </main>
  );
}