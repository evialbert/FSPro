"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  CheckCircle2, 
  Megaphone, 
  Calendar, 
  GraduationCap, 
  FileText, 
  ShieldCheck,
  Scale
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

      {/* --- SERVICII PRINCIPALE (CARDS CU IMAGINI) --- */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Card 1: Finanțări Nerambursabile */}
          <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 transition-all hover:shadow-2xl flex flex-col">
            <div className="h-80 overflow-hidden relative">
              <img 
                src="/fonduri.jpg" 
                alt="Finanțări nerambursabile" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold text-white">Finanțări Nerambursabile</h3>
              </div>
            </div>
            <div className="p-10 flex-grow flex flex-col">
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Vă oferim suport integral, de la identificarea oportunităților de finanțare până la închiderea proiectului, cu accent pe conformitatea cu ghidul solicitantului și contractul de finanțare și pe atingerea indicatorilor asumați.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {[
                  "Analiza eligibilității solicitantului și a proiectului",
                  "Elaborarea cererii de finanțare și a anexelor",
                  "Depunerea documentației în sistemul informatic",
                  "Organizarea implementării și coordonarea echipei",
                  "Coordonarea achizițiilor aferente proiectului",
                  "Monitorizare financiară și cereri de plată",
                  "Asistență privind conformitatea și pregătirea"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-700 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6 border-t border-slate-50">
                <p className="text-sm text-slate-500 mb-4 italic">Doriți să verificăm eligibilitatea și să identificăm apelul potrivit pentru proiectul dumneavoastră?</p>
                <Link href="/contact" className="inline-flex items-center space-x-2 text-blue-600 font-bold text-lg hover:translate-x-2 transition-all">
                  <span>Solicitați ofertă</span>
                  <ChevronRight size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Achiziții Publice (SEAP) */}
          <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 transition-all hover:shadow-2xl flex flex-col">
            <div className="h-80 overflow-hidden relative">
              <img 
                src="/achizitii.jpg" 
                alt="Achiziții publice SEAP" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold text-white">Achiziții Publice în SEAP sau off-line</h3>
              </div>
            </div>
            <div className="p-10 flex-grow flex flex-col">
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Pentru autorități contractante și ofertanți: asigurăm legalitatea, transparența, rezistența la contestații și întocmirea unor oferte conforme.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {[
                  "Fundamentarea necesității și estimarea valorii",
                  "Alegerea și justificarea procedurii de atribuire",
                  "Elaborare strategiei și caietului de sarcini",
                  "Inițierea procedurii în SEAP și clarificări",
                  "Analiza documentației de atribuire pentru ofertanți",
                  "Completare DUAE și propunere tehnică/financiară"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-700 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6 border-t border-slate-50">
                <p className="text-sm text-slate-500 mb-4 italic">Aveți o procedură în pregătire sau o ofertă de depus?</p>
                <Link href="/contact" className="inline-flex items-center space-x-2 text-blue-600 font-bold text-lg hover:translate-x-2 transition-all">
                  <span>Solicitați ofertă</span>
                  <ChevronRight size={20} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTIUNEA NOUĂ: CONTESTAȚII ÎN ACHIZIȚII PUBLICE --- */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                <Scale size={30} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Contestații în achiziții publice</h2>
                <p className="text-slate-500">Suport specializat în fața CNSC conform Legii nr. 101/2016, atât pentru autorități contractante, cât și pentru ofertanți.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 my-8 pt-6 border-t border-slate-100">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 text-lg mb-3">Pentru autorități contractante</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Analiza riscului de contestare a documentației și a deciziilor</span></li>
                  <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Redactarea punctelor de vedere și a solicitărilor CNSC</span></li>
                  <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Fundamentarea și motivarea deciziilor privind rezultatul</span></li>
                  <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Suport în implementarea măsurilor dispuse de CNSC</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 text-lg mb-3">Pentru ofertanți</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Analiza legalității documentației și a rezultatului procedurii</span></li>
                  <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Evaluarea șanselor de succes ale unei contestații</span></li>
                  <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Redactarea contestației și a susținerilor ulterioare</span></li>
                  <li className="flex items-start space-x-2"><span className="text-blue-600 font-bold">•</span><span>Respectarea termenelor legale și a condițiilor de admisibilitate</span></li>
                </ul>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-slate-500 italic">Aveți o contestație de formulat sau de apărat?</p>
              <Link href="/contact" className="inline-flex items-center space-x-2 text-blue-600 font-bold hover:underline">
                <span>Solicitați ofertă</span>
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTIUNEA ORIZONTALĂ: PUBLICITATE & ABONAMENTE --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Anunțuri & Publicitate */}
            <div className="bg-slate-50 p-10 rounded-[2rem] shadow-sm border border-slate-200">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Megaphone size={30} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Anunțuri & Publicitate</h3>
              <p className="text-slate-600 mb-6">Creștem vizibilitatea proiectelor și ofertelor prin prezență media, cu raportare clară și optimizare continuă.</p>
              <div className="space-y-4 mb-8">
                <div className="p-4 bg-white rounded-xl border border-slate-100">
                  <span className="font-bold block text-slate-900">Servicii Publicitate</span>
                  <p className="text-sm text-slate-500">Publicare comunicate presă, mass media online și publicitate online.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-100">
                  <span className="font-bold block text-slate-900">Anunțuri Imobile / Terenuri</span>
                  <p className="text-sm text-slate-500">Publicare în Monitorul Oficial al României și presă scrisă.</p>
                </div>
              </div>
              <Link href="/contact" className="text-blue-600 font-bold hover:underline inline-flex items-center">
                Vrei un serviciu personalizat? Solicită ofertă <ChevronRight size={16} />
              </Link>
            </div>

            {/* Abonamente Lunare */}
            <div className="bg-slate-50 p-10 rounded-[2rem] shadow-sm border border-slate-200">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Calendar size={30} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Abonamente Lunare</h3>
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
              <Link href="/contact" className="text-blue-600 font-bold hover:underline inline-flex items-center">
                Aflați care este pachetul potrivit <ChevronRight size={16} />
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Workshopuri de formare profesională</h2>
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
          <Link href="/contact" className="bg-blue-600 text-white px-12 py-5 rounded-full font-extrabold text-xl hover:bg-blue-700 shadow-2xl transition-all inline-block hover:scale-105 active:scale-95">
            Solicitați consultanță ACUM.
          </Link>
        </div>
      </section>
    </div>
  );
}