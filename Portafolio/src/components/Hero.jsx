import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    // Aquí irá la descarga del CV
    const link = document.createElement("a");
    link.href = "/CV.pdf"; // Cambia esto por la ruta de tu CV
    link.download = "Santiago_Perez_CV.pdf";
    link.click();
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        {/* Greeting Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold">
            ✨ Bienvenido a mi portafolio
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Santiago Perez
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-3xl text-slate-300 mb-8 font-light"
        >
          Desarrollador Full Stack & Creative Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Creo experiencias web modernas, responsivas e innovadoras.
          Especializado en React, JavaScript y tecnologías modernas. Apasionado
          por el diseño y la programación.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row gap-6 justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 rounded-lg bg-cyan-500 text-slate-950 font-semibold flex items-center justify-center gap-2 hover:bg-cyan-400 transition"
          >
            Ver mis proyectos
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadCV}
            className="px-8 py-4 rounded-lg border-2 border-cyan-500/50 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition flex items-center justify-center gap-2"
          >
            <Download size={20} />
            Descargar CV
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-6 mb-16"
        >
          {[
            {
              label: "GitHub",
              href: "https://github.com/dashboard",
              Icon: Github,
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/santiago-perez-666362282/",
              Icon: Linkedin,
            },
            {
              label: "Email",
              href: "mailto:santiagus153@gmail.com?subject=Contacto%20desde%20mi%20portafolio",
              Icon: Mail,
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg bg-slate-800/50 border border-cyan-500/20 text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition"
              title={social.label}
            >
              <social.Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
