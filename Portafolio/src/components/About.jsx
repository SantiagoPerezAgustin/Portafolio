import { motion } from "framer-motion";
import { Code2, Zap, Palette, Brain } from "lucide-react";

const About = () => {
  const areas = [
    {
      icon: Code2,
      title: "Backend",
      description: ".NET, C#, SQL Server, Python, API REST, FastAPI",
      color: "violet",
    },
    {
      icon: Palette,
      title: "Frontend",
      description: "React, TypeScript, JavaScript, Tailwind CSS, Vite",
      color: "fuchsia",
    },
    {
      icon: Brain,
      title: "IA & OCR",
      description: "Mistral, Tesseract, PyPDF2, integración de LLMs",
      color: "amber",
    },
    {
      icon: Zap,
      title: "Cloud & Tools",
      description: "Microsoft Azure, Git, GitHub, microservicios",
      color: "violet",
    },
  ];

  const stats = [
    { number: "3+", label: "Proyectos terminados" },
    { number: "UTN", label: "Técnico en Programación" },
    { number: "5+", label: "Tecnologías dominadas" },
    { number: "2", label: "Años de experiencia" },
  ];

  const colorMap = {
    violet: "border-violet-500/40 bg-violet-500/5 text-violet-400",
    fuchsia: "border-fuchsia-500/40 bg-fuchsia-500/5 text-fuchsia-400",
    amber: "border-amber-500/40 bg-amber-500/5 text-amber-400",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="about"
      className="py-24 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-violet-500">01</span>
          <span className="h-[1px] w-12 bg-violet-500/40" />
          <span className="text-xs font-medium tracking-widest uppercase text-zinc-500">Sobre mí</span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight"
        >
          Hola, soy
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Santiago.
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <motion.div variants={itemVariants} className="space-y-5">
            <p className="text-base text-zinc-400 leading-relaxed">
              Soy{" "}
              <span className="text-white font-semibold">Técnico Universitario en Programación</span>{" "}
              por la UTN, especializado en backend. Diseño aplicaciones desde cero con enfoque en
              bases de datos eficientes y{" "}
              <span className="text-white font-semibold">APIs robustas</span>.
            </p>
            <p className="text-base text-zinc-400 leading-relaxed">
              Complemento con{" "}
              <span className="text-white font-semibold">React y TypeScript</span> para interfaces
              modernas. Tengo experiencia en{" "}
              <span className="text-white font-semibold">Microsoft Azure</span> y en integración
              de <span className="text-white font-semibold">IA (Mistral)</span> y OCR en
              aplicaciones reales.
            </p>
            <p className="text-base text-zinc-400 leading-relaxed">
              Busco mi primera oportunidad como{" "}
              <span className="text-violet-400 font-semibold">
                desarrollador backend o full stack junior
              </span>
              , donde pueda aportar valor técnico y crecer profesionalmente.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-10 pt-10 border-t border-white/5">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-4 rounded-xl bg-zinc-900 border border-white/5"
                >
                  <div className="text-2xl font-black text-white mb-1">{stat.number}</div>
                  <div className="text-xs text-zinc-500 font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Areas grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={containerVariants}
          >
            {areas.map((area, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`p-5 rounded-xl border ${colorMap[area.color]} transition-all`}
              >
                <div className="mb-3">
                  <area.icon size={22} />
                </div>
                <h3 className="text-sm font-bold text-white mb-1 uppercase tracking-wide">
                  {area.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
