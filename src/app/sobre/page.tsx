import { prisma } from "@/lib/prisma";
import Image from 'next/image';

export default async function Sobre() {
  // Buscando os membros no banco de dados de forma dinâmica
  // Se o banco estiver vazio, ele retornará um array vazio []
  const members = await prisma.member.findMany({
    orderBy: {
      order: 'asc', // Garante que você pode controlar a ordem (Presidência primeiro, etc)
    },
  });

  return (
    <main className="min-h-screen pt-32 pb-16 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Página */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            A Nossa <span className="text-neon-orange">História</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mais do que uma atlética, uma família. Conheça as raízes da Devoradora e a diretoria que faz tudo acontecer.
          </p>
        </div>

        {/* Seção de História e Mascote */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-neon-orange/20 shadow-[0_0_30px_rgba(255,107,0,0.1)] group">
            <div className="absolute inset-0 bg-neon-orange/5 z-10 transition-colors group-hover:bg-transparent"></div>
            <div className="w-full h-full bg-[#111111] flex items-center justify-center">
               <Image 
                  src="/logo-devoradora.png" 
                  alt="Mascote Devoradora"
                  fill
                  className="object-contain p-12 opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-6 border-l-4 border-neon-orange pl-4">
              A Maior da UFPE
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Fundada por alunos apaixonados pelo curso, a <strong>A.A.A. Nutrição UFPE</strong> nasceu com um propósito claro: integrar os estudantes, promover o esporte universitário e representar nossa universidade com garra em todas as competições.
              </p>
              <p>
                A <strong>Devoradora</strong> (nossa mascote raposa) simboliza a nossa astúcia, rapidez e a fome de vitória. Seja nas quadras, nas arquibancadas ou nas festas, nossa bateria e nossos atletas deixam a sua marca registrada.
              </p>
              <p>
                Nosso compromisso é com o bem-estar, a diversão e a excelência. Juntos, construímos memórias que duram a vida toda dentro e fora do campus universitário.
              </p>
            </div>
          </div>
        </div>

        {/* Seção da Diretoria Dinâmica */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold uppercase tracking-tight mb-10 text-center">
            Nossa <span className="text-neon-orange">Diretoria</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {members.length > 0 ? (
              members.map((member) => (
                <div 
                  key={member.id} 
                  className="bg-[#111111] border border-white/5 rounded-xl p-6 text-center hover:border-neon-orange/50 transition-all hover:-translate-y-2 group"
                >
                  <div className="w-24 h-24 mx-auto bg-dark-card rounded-full mb-4 overflow-hidden border-2 border-transparent group-hover:border-neon-orange transition-all relative">
                    {member.image ? (
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        fill 
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-neon-orange bg-neon-orange/10 font-black text-2xl uppercase italic">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  
                  <h3 className="font-bold text-white text-lg group-hover:text-neon-orange transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mt-1">
                    {member.role}
                  </p>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-2xl">
                <p className="text-gray-500 italic">
                  Nenhum membro da diretoria cadastrado no banco de dados.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}