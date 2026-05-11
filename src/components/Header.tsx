"use client"; 

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CartDrawer from "./CartDrawer";

export default function Header() {
  // Estados para controlar o menu mobile e o carrinho
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Funções para inverter os estados
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <header className="fixed top-0 w-full bg-dark/90 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-neon-orange/50 group-hover:border-neon-orange transition-colors">
                <Image src="/logo-devoradora.png" alt="Logo Devoradora" fill className="object-cover" />
              </div>
              <span className="font-black text-xl tracking-tighter uppercase text-white group-hover:text-neon-orange transition-colors">
                Devora<span className="text-neon-orange group-hover:text-white transition-colors">dora</span>
              </span>
            </Link>

            {/* Desktop Menu (Escondido no mobile) */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-neon-orange transition-colors">Início</Link>
              <Link href="/sobre" className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-neon-orange transition-colors">A Atlética</Link>
              <Link href="/agenda" className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-neon-orange transition-colors">Agenda</Link>
              <Link href="/loja" className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-neon-orange transition-colors">Loja</Link>
            </nav>

            {/* Área de Ícones e Login (Desktop) */}
            <div className="hidden md:flex items-center gap-6">
               {/* Ícone do Carrinho */}
               <button onClick={toggleCart} className="text-gray-300 hover:text-neon-orange transition-colors relative group">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  {/* Bolinha vermelha de notificação */}
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-orange opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-orange"></span>
                  </span>
               </button>

               <div className="w-[1px] h-6 bg-white/10"></div> {/* Separador */}
               
               <Link href="/login" className="text-sm font-bold uppercase tracking-widest text-white hover:text-neon-orange transition-colors">Entrar</Link>
               <Link href="/cadastro" className="bg-neon-orange text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:shadow-neon-orange transition-all active:scale-95">Seja Sócio</Link>
            </div>

            {/* Mobile Menu Button e Carrinho (Mobile) */}
            <div className="flex items-center gap-4 md:hidden">
              {/* Ícone do Carrinho Mobile */}
              <button onClick={toggleCart} className="text-gray-300 hover:text-neon-orange transition-colors relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-orange"></span>
                </span>
              </button>

              {/* Botão do Menu Hambúrguer */}
              <button 
                onClick={toggleMenu}
                className="text-gray-300 hover:text-neon-orange focus:outline-none"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown (Animado) */}
        <div 
          className={`md:hidden absolute w-full left-0 top-20 bg-[#111111] border-b border-white/5 shadow-xl transition-all duration-300 ease-in-out origin-top ${
            isMenuOpen 
              ? "opacity-100 translate-y-0 pointer-events-auto visible" 
              : "opacity-0 -translate-y-4 pointer-events-none invisible"
          }`}
        >
          <nav className="flex flex-col px-4 pt-2 pb-6 space-y-4">
            <Link href="/" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-bold uppercase tracking-widest text-gray-300 hover:text-neon-orange hover:bg-white/5 transition-colors">Início</Link>
            <Link href="/sobre" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-bold uppercase tracking-widest text-gray-300 hover:text-neon-orange hover:bg-white/5 transition-colors">A Atlética</Link>
            <Link href="/agenda" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-bold uppercase tracking-widest text-gray-300 hover:text-neon-orange hover:bg-white/5 transition-colors">Agenda</Link>
            <Link href="/loja" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-bold uppercase tracking-widest text-gray-300 hover:text-neon-orange hover:bg-white/5 transition-colors">Loja</Link>
            
            <div className="border-t border-white/10 pt-4 mt-2 flex flex-col gap-3">
              <Link href="/login" onClick={toggleMenu} className="block px-3 py-2 text-center rounded-md text-base font-bold uppercase tracking-widest text-white hover:text-neon-orange border border-white/10 transition-colors">Entrar</Link>
              <Link href="/cadastro" onClick={toggleMenu} className="block px-3 py-3 text-center rounded-md text-base font-black uppercase tracking-widest bg-neon-orange text-white active:scale-95 transition-transform">Seja Sócio</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Componente do Carrinho (Agora LIVRE, fora do header!) */}
      <CartDrawer isOpen={isCartOpen} onClose={toggleCart} />
    </>
  );
}