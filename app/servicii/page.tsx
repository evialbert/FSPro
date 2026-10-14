"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  CheckCircle2, 
  Calendar, 
  GraduationCap, 
  FileText, 
  ShieldCheck,
  Scale,
  Briefcase,
  Coins
} from "lucide-react";

export default function Servicii() {
  const beneficii = [
    "Analiză de eligibilitate",
    "Suport SEAP / SICAP",
    "Management Proiect",
    "Contestații"
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* --- HEADER PAGINA --- */}
      <section className="bg-slate-900 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Servicii Profesionale
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Consultanță integrată în finanțări nerambursabile, achiziții publice, contestații, managementul proiectelor și formare profesională.
          </p>
        </div>
      </section>

      {/* --- SECTIUNEA 1: FINANȚĂRI NERAMBURSABILE --- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-50 rounded-[2.5rem] p-10 md:p-16 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                <Coins size={30} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Finanțări nerambursabile</h2>
                <p className="text-slate-600 mt-2">
                  Vă oferim suport integral, de la identificarea oportunităților de finanțare până la închiderea proiectului, cu accent pe conformitatea cu ghidul solicitantului și contractul de finanțare și pe atingerea indicatorilor asumați.
                </p>
              </div>
            </div>

            <div className="my-8 pt-6 border-t border-slate-200">
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-slate-700">
                <li className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>Analiza eligibilității solicitantului și a proiectului</span>
                </li>
                <li className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>Elaborarea cererii de finanțare și a anexelor</span>
                </li>
                <li className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>Depunerea documentației în sistemul informatic al finanțatorului</span>
                </li>
                <li className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>Organizarea implementării și coordonarea echipei de proiect</span>
                </li>
                <li className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>Coordonarea achizițiilor aferente proiectului</span>
                </li>
                <li className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>Monitorizare financiară și cereri de plată/rambursare</span>
                </li>
                <li className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm md:col-span-2">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>Asistență privind conformitatea și pregătirea pentru verificări</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
              <p className="text-sm text-slate-500 italic">Doriți să verificăm eligibilitatea și să identificăm apelul potrivit pentru proiectul dumneavoastră?</p>
              <Link href="/contact" className="inline-flex items-center space-x-2 text-blue-600 font-bold hover:underline">
                <span>Solicitați ofertă</span>
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTIUNEA 2: ACHIZIȚII PUBLICE ÎN SEAP SAU OFF-LINE --- */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                <Briefcase size={30} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Achiziții publice în SEAP sau off-line</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 my-8 pt-6 border-t border-slate-100">
              
              {/* Pentru autorități contractante */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-3">Pentru autorități contractante care inițiază procedurile</h4>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    Vă sprijinim de la fundamentarea necesității până la atribuirea și încheierea contractului, cu respectarea Legii nr. 98/2016, a HG nr. 395/2016 și a legislației subsecvente, astfel încât procedura să fie legală, transparentă și rezistentă la contestații.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Fundamentarea necesității și estimarea valorii contractului</span></li>
                    <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Alegerea și justificarea procedurii de atribuire</span></li>
                    <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Elaborarea strategiei de contractare și a programului anual al achizițiilor publice</span></li>
                    <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Elaborarea instrucțiunilor către ofertanți, caietului de sarcini, a criteriilor de calificare și selecție, a factorilor de evaluare, a proiectului de contract și a formularelor</span></li>
                    <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Inițierea procedurii în SEAP, publicarea anunțurilor și răspunsurile la solicitările de clarificări</span></li>
                    <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Coordonarea echipei de achiziții și a comisiei de evaluare, inclusiv întocmirea proceselor verbale și a raportului procedurii</span></li>
                    <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Suport pentru atribuirea și încheierea contractului, precum și pentru urmărirea executării acestuia</span></li>
                  </ul>
                </div>
              </div>

              {/* Pentru ofertanți */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-3">Pentru ofertanți</h4>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    Vă ajutăm să depuneți o ofertă conformă și bine fundamentată, reducând riscul de respingere ca neconformă sau inacceptabilă și sprijinind participarea dumneavoastră de la analiza documentației până la semnarea contractului.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Analiza documentației de atribuire și a oportunității participării</span></li>
                    <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Evaluarea condițiilor de calificare și selecție și identificarea riscurilor de respingere</span></li>
                    <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Completarea DUAE și pregătirea documentelor de calificare</span></li>
                    <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Suport în elaborarea propunerii tehnice și financiare</span></li>
                    <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Fundamentarea strategiei de preț, cu justificarea elementelor de cost</span></li>
                    <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Formularea solicitărilor de clarificări și pregătirea răspunsurilor la clarificările autorității contractante</span></li>
                    <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Suport la semnarea și derularea contractului</span></li>
                  </ul>
                </div>
              </div>

            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
              <p className="text-sm text-slate-500 italic">Aveți o procedură în pregătire sau o ofertă de depus?</p>
              <Link href="/contact" className="inline-flex items-center space-x-2 text-blue-600 font-bold hover:underline">
                <span>Solicitați ofertă</span>
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTIUNEA 3: CONTESTAȚII ÎN ACHIZIȚII PUBLICE --- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-50 rounded-[2.5rem] p-10 md:p-16 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                <Scale size={30} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Contestații în achiziții publice</h2>
                <p className="text-slate-600 mt-2">
                  Vă oferim suport specializat în pregătirea și soluționarea contestațiilor, atât din perspectiva autorității contractante, cât și a ofertantului, în fața CNSC, în conformitate cu Legea nr. 101/2016.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 my-8 pt-6 border-t border-slate-200">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 text-lg mb-3">Pentru autorități contractante</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Analiza riscului de contestare a documentației de atribuire și a deciziilor</span></li>
                  <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Redactarea punctelor de vedere și a solicitărilor CNSC</span></li>
                  <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Fundamentarea și motivarea deciziilor privind rezultatul procedurii și respingerea ofertanților</span></li>
                  <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Suport în implementarea măsurilor dispuse prin deciziile CNSC</span></li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 text-lg mb-3">Pentru ofertanți</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Analiza legalității documentației de atribuire și a comunicării rezultatului procedurii</span></li>
                  <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Evaluarea oportunității și a șanselor de succes ale unei contestații</span></li>
                  <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Redactarea contestației și a susținerilor ulterioare</span></li>
                  <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Respectarea termenelor legale de formulare și a condițiilor de admisibilitate</span></li>
                </ul>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
              <p className="text-sm text-slate-500 italic">Aveți o contestație de formulat sau de apărat?</p>
              <Link href="/contact" className="inline-flex items-center space-x-2 text-blue-600 font-bold hover:underline">
                <span>Solicitați ofertă</span>
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTIUNEA 4: ABONAMENTE LUNARE --- */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Calendar size={30} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Abonamente lunare</h3>
              <p className="text-slate-600 mb-6">Pachete flexibile pentru suport permanent și intervenție rapidă, adaptate ritmului de activitate al organizației dumneavoastră.</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Consultanță continuă, cu expert dedicat", 
                  "Suport prompt prin e-mail și telefon", 
                  "Revizuire periodică a progresului", 
                  "Informare periodică privind modificările legislative"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-700 text-sm">
                    <CheckCircle2 size={16} className="text-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="text-blue-600 font-bold hover:underline inline-flex items-center space-x-2">
                <span>Aflați care este pachetul potrivit</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- WORKSHOPURI DE FORMARE PROFESIONALĂ (ÎN CURÂND) --- */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                În curând
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">În curând: workshopuri de formare profesională</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Lansăm workshopuri pentru profesioniști, bazate pe practică, metodologii riguroase și studii de caz reale. Programele de formare vor fi autorizate ulterior.
              </p>
              <div className="grid gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg text-blue-400"><GraduationCap size={24} /></div>
                  <div>
                    <h4 className="text-white font-bold">Workshop achiziții publice</h4>
                    <p className="text-slate-500 text-sm">Legislație, proceduri de atribuire și bune practici în SEAP/SICAP.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg text-blue-400"><FileText size={24} /></div>
                  <div>
                    <h4 className="text-white font-bold">Workshop accesare fonduri europene</h4>
                    <p className="text-slate-500 text-sm">Cereri de finanțare și management integrat de proiect.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center">
              <h3 className="text-xl font-bold text-white mb-4">Doriți să fiți printre primii informați?</h3>
              <p className="text-slate-400 mb-8">Înscrieți-vă pe lista de așteptare și vă anunțăm la deschiderea înscrierilor.</p>
              <Link href="/contact" className="block w-full bg-white text-slate-900 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                Mă interesează workshopurile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Pregătiți să transformăm ideile dumneavoastră în proiecte realizate?</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {beneficii.map((b, i) => (
              <div key={i} className="bg-blue-50 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                <ShieldCheck size={16} />
                <span>{b}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-600 mb-8 font-medium">Analiză de eligibilitate · Achiziții SEAP · Management de proiect · Contestații</p>
          <Link href="/contact" className="bg-blue-600 text-white px-12 py-5 rounded-full font-extrabold text-xl hover:bg-blue-700 shadow-2xl transition-all inline-block hover:scale-105 active:scale-95">
            Solicitați o analiză inițială
          </Link>
        </div>
      </section>
    </div>
  );
}