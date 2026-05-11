import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";
import { notFound } from "next/navigation";

// 1. Atualizamos a tipagem para indicar que params é uma Promise
export default async function DetalhesProduto({ params }: { params: Promise<{ id: string }> }) {

    // 2. Colocamos o await para "desempacotar" o ID da URL
    const resolvedParams = await params;

    // 3. Agora buscamos no banco usando o ID correto
    const product = await prisma.product.findUnique({
        where: {
            id: resolvedParams.id,
        },
    });

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-32 pb-16 bg-dark">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Botão de Voltar */}
                <Link
                    href="/loja"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-orange transition-colors font-bold uppercase tracking-widest text-sm mb-8"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Voltar para a Loja
                </Link>

                {/* Layout do Produto (Imagem na esquerda, Dados na direita) */}
                <div className="bg-[#111111] border border-white/5 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">

                    {/* Lado da Imagem */}
                    <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[600px] bg-[#1a1a1a] p-8 flex items-center justify-center">
                        {product.image ? (
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain p-8 drop-shadow-2xl"
                            />
                        ) : (
                            <div className="text-gray-600 font-black uppercase tracking-widest">Sem Imagem</div>
                        )}
                        <div className="absolute top-6 left-6">
                            <span className="bg-dark/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-white/10">
                                {product.category}
                            </span>
                        </div>
                    </div>

                    {/* Lado dos Detalhes */}
                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
                            {product.name}
                        </h1>

                        <p className="text-gray-400 text-lg leading-relaxed mb-10 flex-1">
                            {product.description}
                        </p>

                        <div className="border-t border-white/10 pt-8 mt-auto">
                            <div className="flex flex-col gap-2 mb-8">
                                <span className="text-gray-500 text-sm font-bold uppercase tracking-widest">Preço</span>
                                <span className="text-5xl font-black text-white">
                                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                                </span>
                            </div>

                            {/* Controle de Estoque e Compra */}
                            {product.stock > 0 ? (
                                <div className="flex flex-col gap-4">
                                    <span className="text-neon-orange text-sm font-bold tracking-widest uppercase">
                                        ✓ {product.stock} em estoque
                                    </span>
                                    <AddToCartButton
                                        product={{
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                            image: product.image
                                        }}
                                    />
                                </div>
                            ) : (
                                <div className="flex flex-col gap-4">
                                    <span className="text-red-500 text-sm font-bold tracking-widest uppercase">
                                        ✗ Esgotado
                                    </span>
                                    <button disabled className="w-full bg-red-500/10 text-red-500 border border-red-500/20 py-4 rounded-xl font-black uppercase tracking-widest text-lg cursor-not-allowed">
                                        Produto Indisponível
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}