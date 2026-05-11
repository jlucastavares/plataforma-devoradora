import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      
      {/* Efeito de Luz no Fundo */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-orange/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-green/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Logo da Raposa Gigante (Marca d'água no fundo) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="relative w-[800px] h-[800px]">
          <Image 
            src="/logo-devoradora.png" 
            alt="Fundo"
            fill 
            className="object-contain grayscale"
          />
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h2 className="text-neon-orange font-bold uppercase tracking-[0.3em] text-sm mb-4 animate-pulse">
          A.A.A. Nutrição UFPE Apresenta
        </h2>
        
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
          A <span className="text-white">Devora</span><span className="text-neon-orange underline decoration-white/20 underline-offset-8">dora</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          Garra, tradição e Nutrição. Junte-se à maior do interior e tenha acesso a produtos exclusivos, treinos e eventos épicos.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link 
            href="/cadastro" 
            className="bg-neon-orange text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm transition-all duration-300 hover:shadow-neon-orange hover:-translate-y-1 active:scale-95"
          >
            Seja Sócio
          </Link>
          
          <Link 
            href="/loja" 
            className="border border-white/20 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm transition-all duration-300 hover:bg-white hover:text-dark"
          >
            Ver Loja
          </Link>
        </div>
      </div>

    </main>
  );
}