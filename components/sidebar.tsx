import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Pentru a vedea pagina activă

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-slate-50 border-r border-slate-200 p-4 flex flex-col">
      <div className="mb-8 px-2 font-bold text-xl text-blue-600 flex items-center gap-2">
        <ShieldCheck size={28} />
        <span>MyPlatform</span>
      </div>

      <nav className="space-y-1 flex-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center justify-between px-3 py-2 rounded-lg transition-colors
                ${isActive 
                  ? 'bg-blue-100 text-blue-700 font-medium' 
                  : 'text-slate-600 hover:bg-slate-200'}
              `}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} />
                <span>{item.label}</span>
              </div>
              
              {item.badge && (
                <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="border-t pt-4 text-xs text-slate-400 px-2">
        v1.0.4 - Proiect TypeScript
      </div>
    </aside>
  );
};