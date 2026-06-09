import React from 'react';

export const metadata = {
  title: 'Termeni si Conditii | FINE SOLUTIONS PROFESSIONAL S.R.L.',
  description: 'Termenii si conditiile legale de utilizare a website-ului FINE SOLUTIONS PROFESSIONAL S.R.L.',
};

// Extragem tot textul in constante sigure pentru a preveni erorile de sintaxa
const COMPANIE = {
  nume: 'FINE SOLUTIONS PROFESSIONAL S.R.L.',
  sediu: 'Cluj-Napoca, Str. CIOCANULUI, Nr. 15B, Ap. 2, Judetul CLUJ',
  identificare: 'C.U.I. 49574499 | J12/792/2024',
  email: 'protectiadatelor@finesolutions.ro'
};

const SECTIUNI = [
  {
    id: '1',
    titlu: '1. Definitii si Dispozitii Generale',
    continut: 'Prin utilizarea acestui website, sunteti de acord cu termenii descrisi in continuare. Termenul de Utilizator defineste orice persoana fizica sau juridica ce acceseaza platforma. Termenul de Operator se refera la societatea FINE SOLUTIONS PROFESSIONAL S.R.L. Continutul site-ului, incluzand texte, elemente grafice, logo-uri si structuri software, este protejat de legislatia privind drepturile de autor si proprietatea intelectuala.'
  },
  {
    id: '2',
    titlu: '2. Drepturi de Proprietate Intelectuala',
    continut: 'Intreg continutul text si multimedia prezent pe aceasta platforma apartine in exclusivitate Operatorului. Copierea, reproducerea, republicarea sau distribuirea datelor fara acordul scris, prealabil si explicit al conducerii FINE SOLUTIONS PROFESSIONAL S.R.L. este strict interzisa si se pedepsește conform legilor in vigoare.'
  },
  {
    id: '3',
    titlu: '3. Limitarea Raspunderii',
    continut: 'Operatorul depune eforturi constante pentru ca informatiile din site sa fie corecte si actualizate. Totusi, nu garantam ca site-ul nu va prezenta erori sau ca functionarea sa va fi neintrerupta. FINE SOLUTIONS PROFESSIONAL S.R.L. nu isi asuma raspunderea pentru daune indirecte generate de utilizarea defectuoasa a site-ului sau de erori tehnice independente de controlul nostru.'
  },
  {
    id: '4',
    titlu: '4. Securitate si Obligatiile Utilizatorului',
    continut: 'Utilizatorul se obliga sa foloseasca site-ul intr-un mod legitim. Sunt strict interzise: introducerea de cod malitios (virusi, troieni), incercarile de scanare a vulnerabilitatilor infrastructurii noastre sau transmiterea de mesaje nesolicitate prin formularele de contact.'
  },
  {
    id: '5',
    titlu: '5. Prelucrarea Datelor si Confidentialitate',
    continut: 'Aspectele ce tin de colectarea si prelucrarea datelor cu caracter personal prin formularele de pe site sunt guvernate de Politica noastra de Confidentialitate si de Politica de Utilizare Cookie-uri, documente distincte accesibile pe platforma si aliniate complet reglementarilor GDPR in vigoare.'
  },
  {
    id: '6',
    titlu: '6. Legislatia Aplicabila si Litigii',
    continut: 'Prezentul document este guvernat si interpretat in conformitate cu legislatia romana si europeana. Orice neintelegere sau litigiu aparut intre parti in legatura cu utilizarea site-ului se va rezolva mai intai pe cale amiabila. Daca rezolvarea pe cale amiabila nu este posibila, litigiul va fi trimis spre solutionare instantelor judecatoresti competente din judetul Cluj.'
  },
  {
    id: '7',
    titlu: '7. Modificari ale Termenilor',
    continut: 'FINE SOLUTIONS PROFESSIONAL S.R.L. isi rezerva dreptul de a modifica sau actualiza structura acestor termeni fara o notificare prealabila a utilizatorilor. Vizitarea periodica a acestei pagini va asigura ca sunteti la curent cu variantele legale aplicabile in mod curent.'
  }
];

export default function TermeniConditii() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-slate-700">
      <div className="max-w-4xl mx-auto bg-white shadow-md border border-slate-100 rounded-xl overflow-hidden">
        
        {/* Header / Banner Albastru */}
        <div className="bg-blue-900 text-white p-8 sm:p-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {"TERMENI SI CONDITII DE UTILIZARE"}
          </h1>
          <p className="text-blue-200 text-sm sm:text-base">
            {"Ultima actualizare: Anul 2026"}
          </p>
        </div>

        {/* Continutul Principal */}
        <div className="p-8 sm:p-10 space-y-8">
          
          {/* Caseta Date Companie - Accent Albastru */}
          <div className="bg-blue-50/50 border-l-4 border-blue-600 p-6 rounded-r-lg space-y-3">
            <h2 className="text-sm font-semibold text-blue-900 uppercase tracking-wide">
              {"Informații despre Operator"}
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              {"Prezentul document stabilește regulile, termenii și condițiile de utilizare a acestui website. Navigarea pe site-ul nostru implică acceptarea integrală a acestor clauze comerciale și legale."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm pt-2 border-t border-blue-100">
              <div className="font-bold text-slate-600">{"Detinator Site:"}</div>
              <div className="sm:col-span-2 font-medium text-slate-900">{COMPANIE.nume}</div>
              
              <div className="font-bold text-slate-600">{"Sediu Social:"}</div>
              <div className="sm:col-span-2 text-slate-800">{COMPANIE.sediu}</div>
              
              <div className="font-bold text-slate-600">{"CUI / Reg. Com:"}</div>
              <div className="sm:col-span-2 text-slate-800">{COMPANIE.identificare}</div>
              
              <div className="font-bold text-slate-600">{"Contact Legal:"}</div>
              <div className="sm:col-span-2 text-blue-700 font-semibold">{COMPANIE.email}</div>
            </div>
          </div>

          {/* Mapam structura de sectiuni intr-un mod curat si sigur */}
          {SECTIUNI.map((sectiune) => (
            <section key={sectiune.id} className="space-y-3">
              <h2 className="text-xl font-bold text-blue-900 border-b border-slate-100 pb-2">
                {sectiune.titlu}
              </h2>
              <p className="text-justify leading-relaxed">
                {sectiune.continut}
              </p>
            </section>
          ))}

        </div>
      </div>
    </div>
  );
}