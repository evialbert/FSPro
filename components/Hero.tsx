export default function Hero() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 bg-stone-50">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Etichetă mică (opțional, pentru autoritate) */}
        <span className="inline-block py-1 px-3 rounded-full bg-stone-200 text-stone-700 text-xs font-semibold tracking-widest uppercase">
          Consultanță și Strategie
        </span>

        {/* Titlu Impactant */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[1.1]">
          Transformăm provocările în <br />
          <span className="text-stone-500">rezultate măsurabile.</span>
        </h1>

        {/* Text explicativ */}
        <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
          Nu oferim doar soluții, ci parteneriate strategice construite pe rigoare, 
          expertiză și o înțelegere profundă a nevoilor tale de business. 
          Eficiența începe aici.
        </p>

        {/* Buton de acțiune */}
        <div className="pt-4">
          <a 
            href="#contact" 
            className="inline-block bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-stone-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Discută cu un consultant
          </a>
        </div>
        
      </div>
    </section>
  );
}