import Image from 'next/image';

export default function AnpcIcons() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 py-8 border-t border-stone-200">
      
      {/* SOL */}
      <a 
        href="https://ec.europa.eu/consumers/odr" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block transition-transform hover:scale-105 duration-200"
        title="SOL"
      >
        <Image 
          src="/sol.png" 
          alt="SOL - Solutionarea Online a Litigiilor" 
          width={200} 
          height={200} 
          className="w-32 h-auto object-contain"
          priority
        />
      </a>

      {/* SAL */}
      <a 
        href="https://anpc.ro/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block transition-transform hover:scale-105 duration-200"
        title="SAL"
      >
        <Image 
          src="/sal.png" 
          alt="SAL - Solutionarea Alternativa a Litigiilor" 
          width={200} 
          height={200} 
          className="w-32 h-auto object-contain"
          priority
        />
      </a>
      
    </div>
  );
}