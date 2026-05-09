export default function Home() {
  return (
    <main className="min-h-screen pt-20 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-8 uppercase tracking-wider">
        A <span className="text-neon-orange">Devoradora</span> chegou.
      </h1>
      
      <button className="bg-neon-orange text-white px-8 py-3 rounded-md font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-neon-orange hover:-translate-y-1">
        Seja Sócio
      </button>
    </main>
  );
}