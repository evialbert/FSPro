"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  // Stări pentru formular
  const [formData, setFormData] = useState({
    nume: "",
    email: "",
    subiect: "Cere ofertă personalizată",
    mesaj: "",
  });

  // Stare pentru verificarea umană (Captcha matematic simplu & rapid, zero librării externe necesare)
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isHumanVerified, setIsHumanVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  // Stare trimitere
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Generare întrebare verificare la încărcare
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 9) + 1;
    const n2 = Math.floor(Math.random() * 9) + 1;
    setNum1(n1);
    setNum2(n2);
    setUserAnswer("");
    setIsHumanVerified(false);
    setCaptchaError(false);
  };

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUserAnswer(val);
    if (parseInt(val, 10) === num1 + num2) {
      setIsHumanVerified(true);
      setCaptchaError(false);
    } else {
      setIsHumanVerified(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isHumanVerified) {
      setCaptchaError(true);
      return;
    }

    setStatus("loading");

    try {
      // Trimitere folosind un endpoint gratuit (Web3Forms / Formspree) direct către contact@finesolutionspro.ro
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8edc9fa9-b44b-4f06-b19b-fcfebe27ff81",
          from_name: formData.nume,
          subject: `[Contact Fine Solutions] ${formData.subiect}`,
          message: `Nume: ${formData.nume}\nEmail: ${formData.email}\nSubiect: ${formData.subiect}\n\nMesaj:\n${formData.mesaj}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ nume: "", email: "", subiect: "Cere ofertă personalizată", mesaj: "" });
        generateCaptcha();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Pagina */}
      <div className="bg-[#003366] text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Contactați-ne</h1>
        <p className="text-blue-200 max-w-2xl mx-auto text-lg">
          Suntem aici să vă ajutăm să accesați finanțările de care afacerea dumneavoastră are nevoie în 2026.Oferim suport complet în achiziții publice inclusiv pentru procedurile derulate în SEAP.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Coloana 1: Informatii de contact */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Informații de contact</h2>
            <p className="text-slate-600 mb-8">
              Echipa Fine Solutions Professional este gata să vă ofere consultanță specializată pentru proiecte de digitalizare, energie verde și achiziții publice.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Telefon</p>
                <p className="text-slate-600">+40 746 061 243</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Email</p>
                <p className="text-slate-600">contact@finesolutionspro.ro</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Adresă</p>
                <p className="text-slate-600">Strada Ciocanului nr. 15B, Cluj-Napoca</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <Clock size={24} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Program</p>
                <p className="text-slate-600">Luni - Vineri: 12:30–19:30</p>
              </div>
            </div>
          </div>
        </div>

        {/* Coloana 2: Formular cu Verificare Umană */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
          {status === "success" ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="mx-auto text-green-500" size={56} />
              <h3 className="text-2xl font-bold text-slate-900">Mesaj trimis cu succes!</h3>
              <p className="text-slate-600">
                Vă mulțumim pentru solicitare. Echipa noastră vă va contacta pe adresa furnizată în cel mai scurt timp.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium"
              >
                Trimite alt mesaj
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nume</label>
                  <input
                    type="text"
                    required
                    value={formData.nume}
                    onChange={(e) => setFormData({ ...formData, nume: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="Popescu Ion"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="ion@companie.ro"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Subiect</label>
                <select
                  value={formData.subiect}
                  onChange={(e) => setFormData({ ...formData, subiect: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                >
                  <option>Cere ofertă personalizată</option>
                  <option>Programează o consultare</option>
                  <option>Primește analiza inițială</option>
                  <option>Solicită evaluare eligibilitate</option>
                  <option>Discută cu un consultant</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mesaj</label>
                <textarea
                  rows={4}
                  required
                  value={formData.mesaj}
                  onChange={(e) => setFormData({ ...formData, mesaj: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="Descrieți scurt proiectul dumneavoastră..."
                ></textarea>
              </div>

              {/* Bloc Verificare Umană */}
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                <div className="flex items-center space-x-2 text-slate-700 text-sm font-semibold">
                  <ShieldCheck size={18} className="text-blue-600" />
                  <span>Verificare anti-spam (umană)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-slate-600 font-medium">
                    Cât fac <strong className="text-slate-900">{num1} + {num2}</strong>?
                  </span>
                  <input
                    type="number"
                    required
                    value={userAnswer}
                    onChange={handleCaptchaChange}
                    placeholder="?"
                    className="w-20 px-3 py-1.5 rounded border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-center font-bold"
                  />
                  {isHumanVerified && (
                    <span className="text-xs text-green-600 font-semibold flex items-center space-x-1">
                      <CheckCircle2 size={16} /> <span>Verificat</span>
                    </span>
                  )}
                </div>
                {captchaError && !isHumanVerified && (
                  <p className="text-xs text-red-500 font-medium">
                    Te rugăm să rezolvi calculul corect pentru a putea trimite mesajul.
                  </p>
                )}
              </div>

              {status === "error" && (
                <p className="text-xs text-red-500 text-center">
                  A apărut o eroare la trimitere. Vă rugăm să încercați din nou sau să ne scrieți direct la contact@finesolutionspro.ro.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <span>{status === "loading" ? "Se trimite..." : "Trimite Mesajul"}</span>
                <Send size={20} />
              </button>
              <p className="text-xs text-slate-400 text-center mt-4">
                Prin trimiterea acestui formular, sunteți de acord cu prelucrarea datelor cu caracter personal conform GDPR.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Footer link rapid */}
      <div className="text-center pb-16">
        <Link href="/" className="text-blue-600 hover:underline font-medium">
          ← Înapoi la pagina principală
        </Link>
      </div>
    </div>
  );
}