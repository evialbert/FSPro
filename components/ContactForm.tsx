"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

// 1. Schema de validare (Zod) - Trebuie să se potrivească cu destructuring-ul din API
const formSchema = z.object({
  nume: z.string().min(2, "Numele este prea scurt"),
  email: z.string().email("Adresă de email invalidă"),
  telefon: z.string().min(10, "Număr de telefon invalid"),
  companie: z.string().optional(),
  serviciu: z.string().min(1, "Selectează un serviciu"),
  mesaj: z.string().min(10, "Mesajul trebuie să aibă minim 10 caractere"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviciu: "Finantari",
    },
  });

  // 2. Funcția de trimitere către /api/send
  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        reset();
        setTimeout(() => setStatus("idle"), 5000); // Revine la normal după 5 secunde
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Eroare trimitere:", error);
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {/* Nume */}
          <div>
            <label className="block text-sm font-bold text-[#003366] mb-2">Nume Complet</label>
            <input
              {...register("nume")}
              placeholder="Ex: Ion Popescu"
              className={`w-full p-3 rounded-xl border outline-none transition-all ${
                errors.nume ? "border-red-500 bg-red-50" : "border-slate-200 focus:border-blue-600 shadow-sm"
              }`}
            />
            {errors.nume && <p className="text-red-500 text-xs mt-1">{errors.nume.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-[#003366] mb-2">Email Business</label>
            <input
              {...register("email")}
              placeholder="contact@companie.ro"
              className={`w-full p-3 rounded-xl border outline-none transition-all ${
                errors.email ? "border-red-500 bg-red-50" : "border-slate-200 focus:border-blue-600 shadow-sm"
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Telefon */}
          <div>
            <label className="block text-sm font-bold text-[#003366] mb-2">Telefon</label>
            <input
              {...register("telefon")}
              placeholder="07xx xxx xxx"
              className={`w-full p-3 rounded-xl border outline-none transition-all ${
                errors.telefon ? "border-red-500 bg-red-50" : "border-slate-200 focus:border-blue-600 shadow-sm"
              }`}
            />
            {errors.telefon && <p className="text-red-500 text-xs mt-1">{errors.telefon.message}</p>}
          </div>

          {/* Serviciu */}
          <div>
            <label className="block text-sm font-bold text-[#003366] mb-2">Serviciu dorit</label>
            <select
              {...register("serviciu")}
              className="w-full p-3 rounded-xl border border-slate-200 focus:border-blue-600 outline-none bg-white shadow-sm"
            >
              <option value="Finantari">Finanțări Nerambursabile</option>
              <option value="Achizitii">Achiziții Publice (SEAP)</option>
              <option value="Publicitate">Publicitate & Anunțuri</option>
              <option value="Abonamente">Abonament Consultanță</option>
            </select>
          </div>
        </div>

        {/* Mesaj */}
        <div>
          <label className="block text-sm font-bold text-[#003366] mb-2">Mesaj / Detalii Proiect</label>
          <textarea
            {...register("mesaj")}
            rows={4}
            placeholder="Descrie scurt nevoia ta..."
            className={`w-full p-3 rounded-xl border outline-none transition-all ${
              errors.mesaj ? "border-red-500 bg-red-50" : "border-slate-200 focus:border-blue-600 shadow-sm"
            }`}
          />
          {errors.mesaj && <p className="text-red-500 text-xs mt-1">{errors.mesaj.message}</p>}
        </div>

        {/* Buton Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className={`w-full py-4 rounded-xl font-black text-white transition-all flex items-center justify-center gap-2 shadow-lg ${
            status === "loading" ? "bg-slate-400 cursor-wait" : "bg-blue-600 hover:bg-[#003366] active:scale-95"
          }`}
        >
          {status === "loading" ? (
            "Se trimite..."
          ) : status === "success" ? (
            <span className="flex items-center gap-2 italic">
              <CheckCircle2 size={20} /> Mesaj trimis!
            </span>
          ) : status === "error" ? (
            <span className="flex items-center gap-2 italic">
              <AlertCircle size={20} /> Reîncearcă
            </span>
          ) : (
            <>
              Trimite solicitarea <Send size={18} />
            </>
          )}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-center font-bold text-sm animate-bounce">
            Te vom contacta în maxim 24 de ore!
          </p>
        )}
      </form>
    </div>
  );
}