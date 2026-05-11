"use client";

import { useCartStore } from "@/store/cartStore";
import Image from "next/image";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  // Puxando as informações do nosso estado global (Zustand)
  const { items, removeItem, cartTotal } = useCartStore();

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={onClose}
      />

      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[#111111] border-l border-white/5 z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Cabeçalho */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-black uppercase tracking-widest text-white">
            Seu <span className="text-neon-orange">Carrinho</span>
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-neon-orange transition-colors p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Corpo do Carrinho */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-dark-card rounded-full flex items-center justify-center mb-6 border border-white/5">
                <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              </div>
              <p className="text-white font-bold uppercase tracking-widest text-lg mb-2">Carrinho Vazio</p>
              <p className="text-gray-500 text-sm">Adicione o manto sagrado ou uma caneca para continuar!</p>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <div key={item.id} className="flex gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 group">
                  
                  {/* Imagem do Produto */}
                  <div className="w-24 h-28 relative bg-[#111111] rounded-xl overflow-hidden flex-shrink-0 border border-white/5">
                    {item.image ? (
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-600 font-bold uppercase">Sem img</div>
                    )}
                  </div>

                  {/* Detalhes do Produto */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between py-1 h-28">
                    <div className="flex flex-col gap-1 pr-2">
                      {/* Usando line-clamp-2 para permitir até 2 linhas de texto e respirar melhor */}
                      <h4 className="text-white font-bold text-base uppercase tracking-tight line-clamp-2" title={item.name}>
                        {item.name}
                      </h4>
                      <p className="text-gray-400 text-sm font-medium">Qtd: {item.quantity}</p>
                    </div>
                    <p className="text-neon-orange font-black text-xl">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}
                    </p>
                  </div>

                  {/* Botão de Remover */}
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="self-start p-2 -mt-1 -mr-1 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                    title="Remover item"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Rodapé */}
        <div className="p-6 border-t border-white/10 bg-[#0a0a0a]">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">Total</span>
            <span className="text-3xl font-black text-white">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cartTotal())}
            </span>
          </div>
          <button 
            disabled={items.length === 0}
            className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all ${
              items.length === 0 
                ? "bg-neon-orange/20 text-neon-orange border border-neon-orange/20 cursor-not-allowed" 
                : "bg-neon-orange text-white hover:shadow-neon-orange active:scale-95"
            }`}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </>
  );
}