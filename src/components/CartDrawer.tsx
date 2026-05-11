"use client";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  return (
    <>
      {/* Overlay (Fundo escuro desfocado) */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer (A gaveta em si) */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[#111111] border-l border-white/5 z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cabeçalho do Carrinho */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-black uppercase tracking-widest text-white">
            Seu <span className="text-neon-orange">Carrinho</span>
          </h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-neon-orange transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Corpo do Carrinho (Estado Vazio) */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-dark-card rounded-full flex items-center justify-center mb-6 border border-white/5">
            <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <p className="text-white font-bold uppercase tracking-widest text-lg mb-2">
            Carrinho Vazio
          </p>
          <p className="text-gray-500 text-sm">
            Adicione o manto sagrado ou uma caneca para continuar!
          </p>
        </div>

        {/* Rodapé (Total e Botão) */}
        <div className="p-6 border-t border-white/10 bg-[#0a0a0a]">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">Total</span>
            <span className="text-3xl font-black text-white">R$ 0,00</span>
          </div>
          <button 
            disabled 
            className="w-full bg-neon-orange/20 text-neon-orange border border-neon-orange/20 cursor-not-allowed py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </>
  );
}