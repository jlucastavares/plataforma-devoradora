"use client"; // Isso transforma a página em Client Component para podermos usar interatividade

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  
  // Estados para guardar o que o usuário digita e avisos de erro/carregamento
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Função que roda quando o formulário é enviado
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Impede a página de recarregar
    setIsLoading(true);
    setError(""); // Limpa erros anteriores

    // Chama o motor do NextAuth que criamos no passo anterior
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // Dizemos para ele não redirecionar sozinho, nós controlamos isso
    });

    if (result?.error) {
      setError("E-mail ou senha incorretos.");
      setIsLoading(false);
    } else {
      // Se deu tudo certo, joga o usuário para a Home (ou futura área do sócio)
      router.push("/");
      router.refresh(); // Força o Next.js a atualizar a página para mostrar que estamos logados
    }
  };

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

          {/* Se houver erro, mostra essa caixa vermelha */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-center gap-3">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-500 text-sm font-bold">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* E-mail */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">E-mail</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-neon-orange focus:ring-1 focus:ring-neon-orange transition-all" 
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full text-white py-4 rounded-xl font-black uppercase tracking-widest text-lg transition-all mt-8 ${
                isLoading 
                  ? "bg-neon-orange/50 cursor-not-allowed" 
                  : "bg-neon-orange hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] active:scale-[0.98]"
              }`}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </button>
          </form>

          <p className="text-gray-500 text-sm mt-8 text-center font-medium">
            Ainda não é da alcateia? <Link href="/cadastro" className="text-neon-orange font-bold hover:underline transition-all">Seja Sócio</Link>
          </p>
        </div>
      </div>

      {/* Lado Direito - Branding (Escondido no mobile) */}
      <div className="hidden lg:flex w-1/2 relative bg-[#0a0a0a] items-center justify-center p-12 border-l border-white/5 overflow-hidden">
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