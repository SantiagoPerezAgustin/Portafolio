import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/mi-cv-profesional.pdf";
    link.download = "Santiago_Perez_CV.pdf";
    link.click();
  };

  const socials = [
    { label: "GitHub", href: "https://github.com/SantiagoPerezAgustin", Icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/santiago-perez-666362282/", Icon: Linkedin },
    { label: "Email", href: "mailto:santiagus153@gmail.com?subject=Contacto%20desde%20mi%20portafolio", Icon: Mail },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl w-full"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            Disponible para trabajar
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-black mb-4 leading-none tracking-tight"
        >
          <span className="text-white">Santiago</span>
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-400 bg-clip-text text-transparent">
            Perez
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-zinc-400 font-medium mb-4 tracking-widest uppercase"
        >
          Full Stack Developer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-base text-zinc-500 mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Construyo aplicaciones web completas — desde la base de datos hasta la UI.
          Backend robusto con .NET y Python, frontend moderno con React.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(139,92,246,0.4)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-violet-900/40 cursor-pointer transition-shadow"
          >
            Ver mis proyectos
          </motion.button>

          {/* Gradient border button */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="p-[1.5px] rounded-xl bg-gradient-to-r from-violet-500 to-amber-500 cursor-pointer"
            onClick={downloadCV}
          >
            <div className="px-8 py-4 rounded-xl bg-zinc-950 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-zinc-900 transition-colors">
              <Download size={16} />
              Descargar CV
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-3 mb-16"
        >
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-white/8 text-zinc-400 hover:text-white hover:border-violet-500/50 hover:bg-zinc-800 transition-all text-sm font-medium"
              title={social.label}
            >
              <social.Icon size={16} />
              <span className="hidden sm:inline">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection("about")}
          className="text-zinc-600 hover:text-violet-400 transition-colors mx-auto flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase text-zinc-600">Scroll</span>
          <ArrowDown size={18} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
