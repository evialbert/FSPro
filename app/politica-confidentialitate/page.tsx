import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Calendar, FileText, Mail } from 'lucide-react';

export const metadata = {
  title: 'Politică de Confidențialitate - FINE SOLUTIONS PROFESSIONAL S.R.L.',
  description: 'Informare detaliată cu privire la prelucrarea datelor dumneavoastră cu caracter personal în cadrul utilizării paginii de internet www.finesolutionspro.ro.',
  robots: {
    index: true,
    follow: true,
  }
};

const txt = {
  titlu: "Politică de Confidențialitate și Protecția Datelor (GDPR)",
  actualizare: "Ultima actualizare: Mai 2026",
  s1_titlu: "1. Informații generale",
  s1_p1: "Confidențialitatea datelor dumneavoastră cu caracter personal reprezintă mai mult decât o obligație legală pentru noi; este o prioritate. FINE SOLUTIONS PROFESSIONAL S.R.L., cu sediul în Cluj-Napoca, Str. CIOCANULUI, Nr. 15B, Ap. 2, Județul CLUJ, înregistrată la Registrul Comerțului cu numărul J12/792/2024, C.U.I. 49574499, acționează în calitate de operator de date.",
  s1_p2: "Acest document are rolul de a vă informa în mod transparent cu privire la colectarea, prelucrarea și protecția datelor dumneavoastră cu caracter personal, în contextul utilizării paginii de internet www.finesolutionspro.ro (denumit în continuare „Site-ul”).",
  
  s2_titlu: "2. Categoriile de date cu caracter personal prelucrate",
  s2_p1: "2.1. Dacă sunteți client al Site-ului: Operatorul va prelucra datele dumneavoastră cu caracter personal necesare colaborării, cum ar fi: nume şi prenume, număr de telefon, adresa de e-mail, adresa de facturare, adresa de corespondență, precum și date referitoare la modul în care interacționați cu Site-ul (de exemplu, preferinţele dumneavoastră în timpul navigării), sau orice alte date pe care le furnizați în mod direct în contextul solicitării unei oferte sau plasării unei comenzi.",
  s2_p2: "2.2. Dacă sunteți vizitator al Site-ului: Operatorul va prelucra datele pe care le furnizați în mod direct în secțiunile interactive (formulare de contact, întrebări sau reclamații), precum și date colectate automat prin modulele cookie integrate (adresa IP anonimizată, tipul de browser utilizat, istoricul de navigare pe paginile noastre).",
  
  s3_titlu: "3. Scopurile și temeiurile prelucrării",
  s3_sub: "Temeiul juridic al prelucrării este definit conform articolului 6 alineatul (1) literele (b), (c) și (f) din Regulamentul (UE) 2016/679 (GDPR):",
  s3_p1: "Pentru desfășurarea relației contractuale: Preluarea, validarea și confirmarea solicitărilor transmise pe Site sau telefonic. Furnizarea datelor este necesară pentru a putea răspunde cererilor dumneavoastră comerciale.",
  s3_p2: "Pentru îndeplinirea obligațiilor legale: Respectarea obligațiilor fiscale, contabile și de arhivare (cum ar fi emiterea și păstrarea facturilor fiscale conform legii).",
  s3_p3: "Pentru activități de marketing: Transmiterea de comunicări comerciale periodice privind produsele şi serviciile oferite de companie, prin e-mail. Această activitate se realizează EXCLUSIV în baza consimțământului dumneavoastră expres, pe care îl puteți retrage în orice moment.",
  s3_p4: "Pentru îmbunătățirea serviciilor: Efectuarea de statistici anonime privind funcționarea Site-ului în vederea optimizării constante a experienței de navigare.",
  
  s4_titlu: "4. Durata pentru care vă prelucrăm datele",
  s4_p1: "Ca principiu, Operatorul va prelucra datele dumneavoastră atât cât este necesar pentru realizarea scopurilor de prelucrare menționate mai sus.",
  s4_p2: "În cazul documentelor justificative financiar-contabile (facturi), termenul legal de păstrare obligatoriu este de 5 ani de la data încheierii exercițiului financiar în cursul căruia au fost întocmite.",
  s4_p3: "Dacă vă retrageți consimțământul pentru marketing direct, vom stabili oprirea imediată a transmiterii oricăror comunicări în acest scop.",
  
  s5_titlu: "5. Dezvăluirea datelor cu caracter personal",
  s5_p1: "Pentru îndeplinirea optimă a scopurilor de prelucrare, Operatorul poate dezvălui datele dumneavoastră către parteneri sau terțe entități de încredere care sprijină activitatea Site-ului în mod direct (furnizori de servicii IT, hosting, contabilitate externalizată), ori către autoritățile publice în baza unor obligații legale stricte.",
  
  s6_titlu: "6. Transferul datelor către țări terțe",
  s6_p1: "Toate datele cu caracter personal sunt stocate pe servere securizate din interiorul Spațiului Economic European (SEE). Un eventual transfer către parteneri externi are loc exclusiv cu respectarea garanțiilor adecvate agreate de Comisia Europeană (clauze contractuale standard).",
  
  s7_titlu: "7. Securitatea datelor cu caracter personal",
  s7_p1: "Implementăm măsuri tehnice și organizatorice avansate (utilizarea protocoalelor de criptare HTTPS/SSL pe toate formularele, firewall-uri active, restricționarea strictă și monitorizată a accesului la date) pentru a asigura un nivel de securitate optim împotriva pierderii sau utilizării abuzive.",
  
  s8_titlu: "8. Datele minorilor",
  s8_p1: "Site-ul nostru nu se adresează și nu colectează cu bună știință date de la copii cu vârsta sub 18 ani. Dacă o astfel de colectare a avut loc accidental, vă rugăm să ne contactați pentru ștergerea imediată.",
  
  s9_titlu: "9. Link-uri către site-uri terțe",
  s9_p1: "Platforma poate conține legături către pagini externe. Această politică se aplică exclusiv pentru domeniul nostru propriu. Vă recomandăm să consultați politicile specifice acelor site-uri odată ce părăsiți pagina noastră.",
  
  s10_titlu: "10. Proces decizional automatizat și Profilarea",
  s10_p1: "Prin intermediul modulelor cookie de marketing și analiză acceptate de dumneavoastră, site-ul poate procesa interacțiunile de navigare pentru a vă afișa publicitate relevantă în motoarele de căutare.",
  s10_p2: "Aceste prelucrări se realizează exclusiv dacă v-ați exprimat acordul explicit prin intermediul bannerului de consimțământ.",
  
  s11_titlu: "11. Drepturile de care beneficiați",
  s11_p1: "În conformitate cu regulamentul GDPR, beneficiați de o serie de drepturi clare pe care le puteți exercita în mod gratuit printr-o solicitare scrisă:",
  
  s12_titlu: "12. Utilizarea fișierelor de tip Cookie",
  s12_p1: "Această pagină de internet folosește fișiere de tip cookie proprii și de la terți pentru funcționare și performanță. Pentru detalii complete despre configurare și modulele folosite, accesați pagina dedicată ",
  s13_titlu: "13. Modificări ale Politicii de Confidențialitate",
  s13_p1: "Ne rezervăm dreptul de a actualiza periodic această Politică de Confidențialitate pentru a reflecta eventualele modificări ale practicilor noastre sau ale cadrului legislativ. Orice versiune nouă va fi publicată direct pe această pagină, devenind imediat aplicabilă."
};

export default function PoliticaConfidentialitate() {
  return (
    <main className="min-h-screen bg-blue-50/50 selection:bg-blue-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white border border-blue-100 rounded-2xl shadow-sm p-6 sm:p-10 lg:p-12">
        
        {/* Antetul documentului legal */}
        <div className="border-b border-blue-100 pb-8 mb-8">
          <div className="flex items-center gap-2 text-blue-600 mb-3">
            <ShieldCheck className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Protecția Datelor Personale</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight mb-4">
            {txt.titlu}
          </h1>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
            <Calendar className="h-4 w-4 text-blue-400" />
            <p>{txt.actualizare}</p>
          </div>
        </div>

        {/* Corpul Politicii de Confidențialitate */}
        <div className="space-y-12 leading-relaxed text-slate-600 text-sm sm:text-base">
          
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-2">
              {txt.s1_titlu}
            </h2>
            <p>{txt.s1_p1}</p>
            <p>{txt.s1_p2}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-800">
              {txt.s2_titlu}
            </h2>
            <p className="bg-slate-50 p-4 border-l-2 border-blue-400 rounded-r-xl text-slate-600 text-sm">
              {txt.s2_p1}
            </p>
            <p className="bg-slate-50 p-4 border-l-2 border-blue-400 rounded-r-xl text-slate-600 text-sm">
              {txt.s2_p2}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-800">
              {txt.s3_titlu}
            </h2>
            <p className="italic text-xs sm:text-sm text-blue-600 font-medium bg-blue-50/50 p-3 rounded-lg">
              {txt.s3_sub}
            </p>
            <ul className="space-y-3 pl-2">
              <li className="flex gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <p><strong className="text-slate-700">Relație contractuală:</strong> {txt.s3_p1}</p>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <p><strong className="text-slate-700">Obligații legale:</strong> {txt.s3_p2}</p>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <p><strong className="text-slate-700">Marketing Direct:</strong> {txt.s3_p3}</p>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <p><strong className="text-slate-700">Optimizare:</strong> {txt.s3_p4}</p>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-800">
              {txt.s4_titlu}
            </h2>
            <p>{txt.s4_p1}</p>
            <p>{txt.s4_p2}</p>
            <p>{txt.s4_p3}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-800">
              {txt.s5_titlu}
            </h2>
            <p>{txt.s5_p1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-800">
              {txt.s6_titlu}
            </h2>
            <p>{txt.s6_p1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-800">
              {txt.s7_titlu}
            </h2>
            <p>{txt.s7_p1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-800">
              {txt.s8_titlu}
            </h2>
            <p>{txt.s8_p1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-800">
              {txt.s9_titlu}
            </h2>
            <p>{txt.s9_p1}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-800">
              {txt.s10_titlu}
            </h2>
            <p>{txt.s10_p1}</p>
            <p>{txt.s10_p2}</p>
          </section>

          {/* Secțiunea de Drepturi - Transformă textul lung în elemente de listă clare */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-800">
              {txt.s11_titlu}
            </h2>
            <p>{txt.s11_p1}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {[
                "Dreptul la informare și acces la date",
                "Dreptul la rectificarea datelor inexacte",
                "Dreptul la ștergerea datelor (dreptul de a fi uitat)",
                "Dreptul la restricționarea prelucrării",
                "Dreptul la portabilitatea datelor către alt operator",
                "Dreptul la opoziție (încetarea prelucrării)",
                "Dreptul de a nu fi supus unei decizii automate",
                "Dreptul de a depune o plângere la ANSPDCP"
              ].map((drept, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <FileText className="h-4 w-4 text-blue-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">{drept}</span>
                </div>
              ))}
            </div>
            <p className="pt-2">
              Vă puteți exercita oricare dintre aceste drepturi trimitând o solicitare semnată la adresa de e-mail:{" "}
              <a href="mailto:contact@finesolutionspro.ro" className="text-blue-600 font-bold hover:underline">
                contact@finesolutionspro.ro
              </a>.
            </p>
          </section>

          {/* Secțiunea Cookie-uri cu Link Activ */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-800">
              {txt.s12_titlu}
            </h2>
            <p>
              {txt.s12_p1}
              <Link href="/politica-cookies" className="text-blue-600 font-bold underline hover:text-blue-800 transition-colors">
                Politica de Cookies
              </Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-800">
              {txt.s13_titlu}
            </h2>
            <p>{txt.s13_p1}</p>
          </section>

        </div>

        {/* Caseta rapidă de asistență GDPR în Footer-ul cardului */}
        <div className="mt-12 pt-8 border-t border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-blue-50/40 p-6 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-600 text-white rounded-full shadow-sm">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">Responsabil Protecția Datelor</h4>
              <p className="text-xs text-slate-500">Răspundem cu prioritate solicitărilor GDPR</p>
            </div>
          </div>
          <a
            href="mailto:contact@finesolutionspro.ro"
            className="text-xs font-bold uppercase tracking-wider bg-white border border-blue-200 text-blue-600 px-4 py-2.5 rounded-lg hover:bg-blue-600 hover:text-white transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            Trimite Solicitare
          </a>
        </div>

      </div>
    </main>
  );
}