import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <>
      {/* Base background */}
      <div className="fixed inset-0 -z-20 bg-zinc-950" />

      {/* Dot grid */}
      <div
        className="fixed inset-0 -z-20 opacity-30"
        style={{
          backgroundImage: "radial-gradient(#7c3aed22 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Blob violet */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-10 left-0 -z-10 w-[500px] h-[500px] bg-violet-700/20 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Blob fuchsia */}
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="fixed bottom-20 right-0 -z-10 w-[420px] h-[420px] bg-fuchsia-700/15 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Blob amber small */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -60, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        className="fixed top-1/2 right-1/4 -z-10 w-64 h-64 bg-amber-500/8 rounded-full blur-[80px] pointer-events-none"
      />
    </>
  );
};

export default AnimatedBackground;
