import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-neon-orange/10 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Coluna 1: Logo e Slogan */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image 
                  src="/logo-devoradora.png" 
                  alt="Logo Devoradora"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-black uppercase tracking-tighter">
                Devora<span className="text-neon-orange">dora</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A maior da UFPE. <br />
              A.A.A. Nutrição - UFPE. <br />
              Garra, tradição e Nutrição.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h3 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Mapa do Site</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-neon-orange transition-colors">Início</Link></li>
              <li><Link href="/sobre" className="text-gray-400 hover:text-neon-orange transition-colors">A Atlética</Link></li>
              <li><Link href="/loja" className="text-gray-400 hover:text-neon-orange transition-colors">Produtos</Link></li>
              <li><Link href="/agenda" className="text-gray-400 hover:text-neon-orange transition-colors">Eventos</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Sócio */}
          <div>
            <h3 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Área do Aluno</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/login" className="text-gray-400 hover:text-neon-orange transition-colors">Minha Carteirinha</Link></li>
              <li><Link href="/cadastro" className="text-gray-400 hover:text-neon-orange transition-colors">Seja Sócio</Link></li>
              <li><Link href="/vantagens" className="text-gray-400 hover:text-neon-orange transition-colors">Clube de Vantagens</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div>
            <h3 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Siga-nos</h3>
            <div className="flex space-x-4">
              {/* Você pode trocar os links pelos do Instagram/TikTok da atlética */}
              <a href="#" className="w-10 h-10 rounded-full bg-dark-card border border-neon-orange/20 flex items-center justify-center hover:bg-neon-orange transition-all duration-300 group">
                <span className="text-xs group-hover:scale-110">IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-card border border-neon-orange/20 flex items-center justify-center hover:bg-neon-orange transition-all duration-300 group">
                <span className="text-xs group-hover:scale-110">TK</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-card border border-neon-orange/20 flex items-center justify-center hover:bg-neon-orange transition-all duration-300 group">
                <span className="text-xs group-hover:scale-110">WA</span>
              </a>
            </div>
          </div>

        </div>

        {/* Linha Final de Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">
            © {currentYear} A.A.A. Nutrição UFPE. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">
            Desenvolvido por <span className="text-neon-orange font-bold">Diretorias - Devoradora</span>
          </p>
        </div>
      </div>
    </footer>
  );
}