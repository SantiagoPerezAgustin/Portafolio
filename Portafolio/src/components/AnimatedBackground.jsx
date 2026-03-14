/**
 * Fondo animado con CSS puro (sin Framer Motion) para mejor rendimiento
 * en dispositivos lentos y menos consumo de batería.
 */
const AnimatedBackground = () => {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-zinc-950" aria-hidden="true" />

      <div
        className="fixed inset-0 -z-20 opacity-30"
        style={{
          backgroundImage: "radial-gradient(#7c3aed22 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div
        className="fixed top-10 left-0 -z-10 w-[500px] h-[500px] bg-violet-700/20 rounded-full blur-[120px] pointer-events-none animate-blob-1 will-change-transform"
        aria-hidden="true"
      />
      <div
        className="fixed bottom-20 right-0 -z-10 w-[420px] h-[420px] bg-fuchsia-700/15 rounded-full blur-[100px] pointer-events-none animate-blob-2 will-change-transform"
        aria-hidden="true"
      />
      <div
        className="fixed top-1/2 right-1/4 -z-10 w-64 h-64 bg-amber-500/8 rounded-full blur-[80px] pointer-events-none animate-blob-3 will-change-transform"
        aria-hidden="true"
      />
    </>
  );
};

export default AnimatedBackground;
