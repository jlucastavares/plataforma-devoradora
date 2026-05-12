import Link from "next/link";
import Image from "next/image";

export default function Login() {
  return (
    <main className="min-h-screen flex bg-dark pt-20">
      
      {/* Lado Esquerdo - Formulário */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md bg-[#111111] lg:bg-transparent p-8 sm:p-10 lg:p-0 rounded-3xl border border-white/5 lg:border-none shadow-2xl lg:shadow-none">
          
          {/* Título Mobile */}
          <div className="mb-10 lg:hidden text-center flex flex-col items-center">
             <div className="relative w-20 h-20 mb-4">
                <Image src="/logo-devoradora.png" alt="Logo Devoradora" fill className="object-contain" />
             </div>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Bem-vindo de <span className="text-neon-orange">Volta</span></h2>
          </div>

          {/* Título Desktop */}
          <h2 className="hidden lg:block text-4xl font-black uppercase tracking-tighter text-white mb-2">Acessar Conta</h2>
          <p className="hidden lg:block text-gray-400 text-sm mb-8 font-medium">Entre com seus dados para acessar a área do sócio.</p>

          <form className="space-y-5">
            {/* E-mail */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">E-mail</label>
              <input 
                type="email" 
                placeholder="seu.email@exemplo.com" 
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-neon-orange focus:ring-1 focus:ring-neon-orange transition-all" 
              />
            </div>

            {/* Senha */}
            <div>
              <div className="flex justify-between items-center mb-2 ml-1 pr-1">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400">Senha</label>
                <Link href="#" className="text-xs text-neon-orange font-bold hover:underline transition-all">Esqueceu a senha?</Link>
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-neon-orange focus:ring-1 focus:ring-neon-orange transition-all" 
              />
            </div>

            <button 
              type="button" 
              className="w-full bg-neon-orange text-white py-4 rounded-xl font-black uppercase tracking-widest text-lg hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] active:scale-[0.98] transition-all mt-8"
            >
              Entrar
            </button>
          </form>

          <p className="text-gray-500 text-sm mt-8 text-center font-medium">
            Ainda não é da alcateia? <Link href="/cadastro" className="text-neon-orange font-bold hover:underline transition-all">Seja Sócio</Link>
          </p>
        </div>
      </div>

      {/* Lado Direito - Branding (Escondido no mobile) */}
      <div className="hidden lg:flex w-1/2 relative bg-[#0a0a0a] items-center justify-center p-12 border-l border-white/5 overflow-hidden">
        {/* Efeito de brilho de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-orange/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 text-center flex flex-col items-center">
          <div className="relative w-40 h-40 mb-8 drop-shadow-[0_0_30px_rgba(255,107,0,0.4)]">
            <Image src="/logo-devoradora.png" alt="Logo Devoradora" fill className="object-contain" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-6">
            Bem-vindo de <span className="text-neon-orange">Volta</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-md leading-relaxed">
            Acesse sua carteirinha digital e confira as novidades, eventos e produtos exclusivos da maior atlética do interior.
          </p>
        </div>
      </div>

    </main>
  );
}