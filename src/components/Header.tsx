import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-neon-orange/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo e Nome */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/logo-devoradora.png"
                  alt="Logo Devoradora"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">
                Devora<span className="text-neon-orange">dora</span>
              </span>
            </Link>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="hover:text-neon-orange transition-colors font-medium uppercase text-sm tracking-widest">Início</Link>
            <Link href="/sobre" className="hover:text-neon-orange transition-colors font-medium uppercase text-sm tracking-widest">A Atlética</Link>
            <Link href="/loja" className="hover:text-neon-orange transition-colors font-medium uppercase text-sm tracking-widest">Loja</Link>
            <Link href="/agenda" className="hover:text-neon-orange transition-colors font-medium uppercase text-sm tracking-widest">Agenda</Link>

            <Link href="/login" className="border border-neon-orange text-neon-orange px-6 py-2 rounded-full hover:bg-neon-orange hover:text-white transition-all duration-300 font-bold uppercase text-xs tracking-widest shadow-neon-orange">
              Sou Sócio
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}