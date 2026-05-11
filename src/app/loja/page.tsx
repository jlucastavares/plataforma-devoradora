import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Loja() {
  // Busca os produtos no banco, ordenados do mais recente pro mais antigo
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <main className="min-h-screen pt-32 pb-16 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Loja da <span className="text-neon-orange">Devoradora</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Vista o manto da maior da UFPE. Produtos oficiais e exclusivos. Seja <span className="text-neon-orange">sócio</span> para obter descontos.
          </p>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <Link 
                href={`/loja/${product.id}`} 
                key={product.id} 
                className="bg-[#111111] border border-white/5 rounded-2xl overflow-hidden group hover:border-neon-orange/50 transition-all flex flex-col"
                >
                {/* Área da Imagem */}
                <div className="relative h-64 w-full bg-[#1a1a1a]">
                  {product.image ? (
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-600 font-black uppercase tracking-widest text-sm">
                      Sem Imagem
                    </div>
                  )}
                  {/* Badge da Categoria */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-dark/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Área de Informações */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-neon-orange transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Preço e Botão */}
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-2xl font-black text-white">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                    </span>
                    
                    {product.stock > 0 ? (
                      <button className="bg-neon-orange text-white px-4 py-2 rounded-lg font-bold uppercase tracking-widest text-xs hover:shadow-neon-orange active:scale-95 transition-all">
                        Comprar
                      </button>
                    ) : (
                      <span className="text-red-500 font-bold uppercase tracking-widest text-xs border border-red-500/20 bg-red-500/10 px-3 py-1 rounded-lg">
                        Esgotado
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-2xl">
              <p className="text-gray-500 italic">A loja está sendo abastecida. Volte em breve!</p>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}