import Image from 'next/image';

export default function AnpcIcons() {
  return (
    <div className="flex gap-6 items-center justify-center mt-6">
      {/* Link SAL (ANPC) */}
      <a 
        href="https://anpc.ro/ce-este-sal/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="transition hover:opacity-80"
      >
        <Image 
          src="/anpc/sal.png" 
          alt="ANPC SAL" 
          width={120} 
          height={40} 
          className="object-contain"
        />
      </a>

      {/* Link SOL (Comisia Europeană) */}
      <a 
        href="https://ec.europa.eu/consumers/odr" 
        target="_blank" 
        rel="noopener noreferrer"
        className="transition hover:opacity-80"
      >
        <Image 
          src="/anpc/sol.png" 
          alt="Platforma SOL" 
          width={120} 
          height={40} 
          className="object-contain"
        />
      </a>
    </div>
  );
}