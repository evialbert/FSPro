// app/page.tsx
import Hero from "@/components/Hero";
import ConsultantSection from "@/components/ConsultantSection";
import Services from "@/components/Services"; // Asigură-te că ai creat acest component
import ContactForm from "@/components/ContactForm"; // Asigură-te că ai creat acest component

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      
      {/* 1. Prima impresie - Hero */}
      <Hero />

      {/* 2. Autoritate - Claudiu (Vizibilitate maximă) */}
      <ConsultantSection />

      {/* 3. Ce oferim - Servicii */}
      <Services />

      {/* 4. Conversie - Formular de Contact */}
      <section id="contact">
        <ContactForm />
      </section>

    </main>
  );
}