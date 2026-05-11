import { prisma } from "@/lib/prisma";

export default async function Agenda() {
  // Buscando os eventos no banco de dados, ordenados pela data (do mais próximo ao mais distante)
  const events = await prisma.event.findMany({
    orderBy: {
      date: 'asc',
    },
  });

  return (
    <main className="min-h-screen pt-32 pb-16 bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Nossa <span className="text-neon-orange">Agenda</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Fique por dentro dos próximos jogos, treinos e eventos épicos da Devoradora.
          </p>
        </div>

        {/* Lista de Eventos */}
        <div className="space-y-6">
          {events.length > 0 ? (
            events.map((event) => {
              // Lógica para pegar o dia e o mês formatados
              const eventDate = new Date(event.date);
              const day = eventDate.getDate().toString().padStart(2, '0');
              const month = eventDate.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '');

              return (
                <div 
                  key={event.id} 
                  className="bg-[#111111] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 hover:border-neon-orange/30 transition-all group"
                >
                  {/* Bloco de Data (Estilo Calendário) */}
                  <div className="bg-dark-card border border-white/10 rounded-xl p-4 min-w-[120px] text-center group-hover:border-neon-orange/50 transition-colors">
                    <span className="block text-neon-orange font-black text-4xl leading-none mb-1">
                      {day}
                    </span>
                    <span className="block text-gray-400 text-sm uppercase tracking-widest font-bold">
                      {month}
                    </span>
                  </div>

                  {/* Informações do Evento */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="bg-neon-orange/10 text-neon-orange border border-neon-orange/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                        {event.type} {/* Aqui vai aparecer JOGO, FESTA ou TREINO */}
                      </span>
                      <h2 className="text-2xl font-bold text-white uppercase tracking-tight group-hover:text-neon-orange transition-colors">
                        {event.title}
                      </h2>
                    </div>
                    
                    <p className="text-gray-400 mb-4 line-clamp-2 text-sm leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                      {/* Ícone de Localização (Pin) */}
                      <svg className="w-4 h-4 text-neon-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                  
                </div>
              );
            })
          ) : (
            <div className="py-20 text-center border border-dashed border-white/10 rounded-2xl">
              <p className="text-gray-500 italic">Nenhum evento agendado no momento. Fique de olho!</p>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}