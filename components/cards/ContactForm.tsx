"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  nume: z.string().min(2, "Numele este obligatoriu"),
  companie: z.string().optional(),
  email: z.string().email("Adresă de email invalidă"),
  telefon: z.string().min(10, "Introduceți un număr valid"),
  serviciu: z.enum(["Finantari", "Achizitii", "Publicitate", "Abonamente", "Cursuri"]),
  mesaj: z.string().min(10, "Te rugăm să oferi câteva detalii despre proiect"),
});

type ContactFormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors, isSubmitting } 
  } = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        serviciu: "Finantari"
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Aici apelăm API-ul de trimitere email
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Mesajul a fost trimis cu succes! Te vom contacta în curând.");
        reset(); // Golește formularul după succes
      } else {
        alert("A apărut o eroare la server. Te rugăm să încerci din nou.");
      }
    } catch (error) {
      console.error("Eroare:", error);
      alert("Problemă de conexiune. Verifică internetul.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-700">Nume și prenume</label>
          <input 
            {...register("nume")} 
            placeholder="Ex: Ion Popescu" 
            className={`w-full p-3 rounded-lg border ${errors.nume ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-blue-600 outline-none`} 
          />
          {errors.nume && <p className="text-red-500 text-xs mt-1">{errors.nume.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-700">Companie (Opțional)</label>
          <input 
            {...register("companie")} 
            placeholder="Nume firmă/instituție" 
            className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none" 
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-700">Email</label>
          <input 
            {...register("email")} 
            placeholder="email@exemplu.ro" 
            className={`w-full p-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-blue-600 outline-none`} 
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-700">Telefon</label>
          <input 
            {...register("telefon")} 
            placeholder="07xx xxx xxx" 
            className={`w-full p-3 rounded-lg border ${errors.telefon ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-blue-600 outline-none`} 
          />
          {errors.telefon && <p className="text-red-500 text-xs mt-1">{errors.telefon.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-slate-700">Serviciu de interes</label>
        <select {...register("serviciu")} className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none bg-white">
          <option value="Finantari">Finanțări nerambursabile</option>
          <option value="Achizitii">Achiziții Publice (SEAP)</option>
          <option value="Publicitate">Anunțuri & Publicitate</option>
          <option value="Abonamente">Abonament Lunar</option>
          <option value="Cursuri">Cursuri Specializare</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-slate-700">Mesaj</label>
        <textarea 
            {...register("mesaj")} 
            rows={4} 
            placeholder="Spune-ne mai multe despre proiectul tău..." 
            className={`w-full p-3 rounded-lg border ${errors.mesaj ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-blue-600 outline-none`} 
        />
        {errors.mesaj && <p className="text-red-500 text-xs mt-1">{errors.mesaj.message}</p>}
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-[#003366] text-white font-bold py-4 rounded-xl hover:bg-blue-900 transition-all shadow-md disabled:bg-slate-400"
      >
        {isSubmitting ? "Se trimite..." : "Solicită evaluare eligibilitate"}
      </button>
      <p className="text-center text-[10px] text-slate-400 uppercase tracking-wider">Confidențialitate garantată conform GDPR</p>
    </form>
  );
}