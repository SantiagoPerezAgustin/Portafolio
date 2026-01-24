import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <>
      {/* Main Gradient Background */}
      <motion.div
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="fixed inset-0 -z-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 bg-[length:400%_400%]"
      />

      {/* Floating Blob 1 - Cyan */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed top-20 left-10 -z-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"
      />

      {/* Floating Blob 2 - Blue */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="fixed bottom-32 right-20 -z-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
      />

      {/* Floating Blob 3 - Purple subtle */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="fixed top-1/2 left-1/2 -z-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"
      />
    </>
  );
};

export default AnimatedBackground;
