"use client";

import { useCartStore, Product } from "@/store/cartStore";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAdd = () => {
    addItem(product);
    // Aqui no futuro podemos colocar um toast/alerta de "Produto adicionado!"
  };

  return (
    <button 
      onClick={handleAdd}
      className="w-full bg-neon-orange text-white py-4 rounded-xl font-black uppercase tracking-widest text-lg hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] active:scale-[0.98] transition-all"
    >
      Adicionar ao Carrinho
    </button>
  );
}