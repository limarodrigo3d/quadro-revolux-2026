export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#050505] px-6 text-center text-white">
      <span className="mb-6 text-[10px] uppercase tracking-[0.8em] text-white/30">
        Quadro Rio Novo
      </span>

      <h1 className="text-4xl font-extralight italic tracking-[-0.04em] sm:text-6xl">
        Site com problemas, por favor usem o Quadro físico do Salão do Reino.
      </h1>

      <div className="mt-8 h-[1px] w-[100px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />

      <p className="mt-8 max-w-md text-sm font-light text-white/50">
        Site com problemas, por favor usem o Quadro físico do Salão do Reino.
      </p>
    </main>
  );
}