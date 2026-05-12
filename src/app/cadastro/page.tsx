"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { registerUser } from "@/actions/auth";

export default function Cadastro() {
  const router = useRouter();
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess(false);

    // Pega os dados do formulário
    const formData = new FormData(e.currentTarget);

    // Chama a nossa Server Action
    const response = await registerUser(formData);

    if (response?.error) {
      setError(response.error);
      setIsLoading(false);
    } else if (response?.success) {
      setSuccess(true);
      // Aguarda 2 segundos para o usuário ler a mensagem de sucesso e redireciona
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }
  };

  return (
    <main className="min-h-screen flex bg-dark pt-20">
      {/* Lado Esquerdo - Branding */}
      <div className="hidden lg:flex w-1/2 relative bg-[#0a0a0a] items-center justify-center p-12 border-r border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-orange/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 text-center flex flex-col items-center">
          <div className="relative w-40 h-40 mb-8 drop-shadow-[0_0_30px_rgba(255,107,0,0.4)]">
            <Image src="/logo-devoradora.png" alt="Logo Devoradora" fill className="object-contain" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-6">
            Junte-se à <span className="text-neon-orange">Alcateia</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-md leading-relaxed">
            Tenha acesso à sua carteirinha digital, descontos exclusivos no nosso manto e ingressos dos melhores rolês.
          </p>
        </div>
      </div>

      {/* Lado Direito - Formulário */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md bg-[#111111] lg:bg-transparent p-8 sm:p-10 lg:p-0 rounded-3xl border border-white/5 lg:border-none shadow-2xl lg:shadow-none">
          
          <div className="mb-10 lg:hidden text-center flex flex-col items-center">
             <div className="relative w-20 h-20 mb-4">
                <Image src="/logo-devoradora.png" alt="Logo Devoradora" fill className="object-contain" />
             </div>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Seja <span className="text-neon-orange">Sócio</span></h2>
          </div>

          <h2 className="hidden lg:block text-4xl font-black uppercase tracking-tighter text-white mb-2">Criar Conta</h2>
          <p className="hidden lg:block text-gray-400 text-sm mb-8 font-medium">Preencha seus dados para se tornar um sócio oficial.</p>

          {/* Mensagem de Erro */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-center gap-3">
              <p className="text-red-500 text-sm font-bold">{error}</p>
            </div>
          )}

          {/* Mensagem de Sucesso */}
          {success && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-xl flex items-center gap-3">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-green-500 text-sm font-bold">Cadastro realizado com sucesso! Redirecionando...</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nome */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Nome Completo</label>
              <input name="name" required type="text" placeholder="Ex: João da Silva" className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-neon-orange transition-all" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">CPF</label>
                <input name="cpf" required type="text" placeholder="000.000.000-00" className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-neon-orange transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Curso</label>
                <input name="course" required type="text" placeholder="Ex: Nutrição" className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-neon-orange transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">E-mail</label>
              <input name="email" required type="email" placeholder="seu.email@exemplo.com" className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-neon-orange transition-all" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Crie uma Senha</label>
              <input name="password" required type="password" placeholder="••••••••" className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-neon-orange transition-all" />
            </div>

            <button 
              type="submit" 
              disabled={isLoading || success}
              className={`w-full text-white py-4 rounded-xl font-black uppercase tracking-widest text-lg transition-all mt-8 ${
                isLoading || success
                  ? "bg-neon-orange/50 cursor-not-allowed" 
                  : "bg-neon-orange hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] active:scale-[0.98]"
              }`}
            >
              {isLoading ? "Cadastrando..." : "Finalizar Cadastro"}
            </button>
          </form>

          <p className="text-gray-500 text-sm mt-8 text-center font-medium">
            Já faz parte da alcateia? <Link href="/login" className="text-neon-orange font-bold hover:underline transition-all">Entre aqui</Link>
          </p>
        </div>
      </div>
    </main>
  );
}