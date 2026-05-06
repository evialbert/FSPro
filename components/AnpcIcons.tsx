import Image from 'next/image';

export default function AnpcIcons() {
  return (
    <div className="flex items-center justify-center gap-4 py-4 md:py-8 border-t border-stone-800/50 mt-8">
      {/* SOL */}
      <a 
        href="https://ec.europa.eu/consumers/odr" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block w-24 h-auto md:w-32 transition-transform hover:scale-105"
      >
        <Image 
          src="/sol.png" 
          alt="SOL" 
          width={200} 
          height={200} 
          className="w-full h-auto object-contain"
        />
      </a>
      
      {/* SAL */}
      <a 
        href="https://anpc.ro/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block w-24 h-auto md:w-32 transition-transform hover:scale-105"
      >
        <Image 
          src="/sal.png" 
          alt="SAL" 
          width={200} 
          height={200} 
          className="w-full h-auto object-contain"
        />
      </a>
    </div>
  );
}