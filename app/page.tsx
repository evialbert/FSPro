// app/page.tsx
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ConsultantSection from "@/components/ConsultantSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="bg-stone-50 text-stone-900">
      {/* 1. Hero: Impactul vizual și mesajul principal */}
      <Hero />

      {/* 2. Services: Ce oferim concret */}
      <Services />

      {/* 3. Consultant: Autoritate și încredere */}
      <ConsultantSection />

      {/* 4. Contact: Apel la acțiune final */}
      <ContactForm />
    </main>
  );
}