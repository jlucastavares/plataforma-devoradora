import { create } from 'zustand';

// O que é um produto pra gente
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string | null;
}

// O que é um item no carrinho (Produto + Quantidade)
export interface CartItem extends Product {
  quantity: number;
}

// As funções que o nosso carrinho vai ter
interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  cartTotal: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [], // Começa vazio
  
  addItem: (product) => {
    const currentItems = get().items;
    const existingItem = currentItems.find(item => item.id === product.id);

    if (existingItem) {
      // Se o item já tá no carrinho, só aumenta a quantidade
      set({
        items: currentItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      });
    } else {
      // Se é um item novo, adiciona com quantidade 1
      set({ items: [...currentItems, { ...product, quantity: 1 }] });
    }
  },

  removeItem: (productId) => {
    // Filtra e remove o item clicado
    set({ items: get().items.filter(item => item.id !== productId) });
  },

  clearCart: () => set({ items: [] }),

  cartTotal: () => {
    // Calcula o valor total multiplicando preço pela quantidade
    return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
}));