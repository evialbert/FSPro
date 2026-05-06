import Image from 'next/image';

export default function AnpcIcons() {
  return (
    <div className="flex justify-center items-center gap-6 py-6">
      <a 
        href="https://ec.europa.eu/consumers/odr" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="opacity-90 hover:opacity-100 transition-opacity"
      >
        <Image 
          src="/sol.png" 
          alt="SOL" 
          width={120} 
          height={120} 
          style={{ width: '120px', height: 'auto' }}
        />
      </a>
      
      <a 
        href="https://anpc.ro/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="opacity-90 hover:opacity-100 transition-opacity"
      >
        <Image 
          src="/sal.png" 
          alt="SAL" 
          width={120} 
          height={120} 
          style={{ width: '120px', height: 'auto' }}
        />
      </a>
    </div>
  );
}