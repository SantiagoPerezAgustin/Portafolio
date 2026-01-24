import { motion } from "framer-motion";
import { Code2, Zap, Palette } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Desarrollo",
      description: "React, Node.js, JavaScript, TypeScript, Express, MongoDB",
    },
    {
      icon: Palette,
      title: "Diseño",
      description: "Tailwind CSS, UI/UX Design, Responsive Design, Animaciones",
    },
    {
      icon: Zap,
      title: "Herramientas",
      description: "Git, Vite, NPM, VS Code, Postman, Figma",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      id="about"
      className="min-h-screen py-20 px-6 flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        >
          Sobre mí
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Text Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              Soy un desarrollador apasionado con experiencia en crear soluciones web modernas y efectivas.
              Me encanta transformar ideas en código funcional y hermoso.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              Trabajo con tecnologías modernas y sigo las mejores prácticas en desarrollo. Mi objetivo es
              crear experiencias que sean tanto hermosas como funcionales.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              Cuando no estoy programando, me encanta aprender cosas nuevas, contribuir en proyectos
              open-source y explorar las últimas tendencias en desarrollo web.
            </p>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 gap-8 mt-8 pt-8 border-t border-cyan-500/20"
              variants={containerVariants}
            >
              {[
                { number: "20+", label: "Proyectos" },
                { number: "5+", label: "Años Exp." },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/50 hover:bg-slate-800/70 transition group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition">
                    <skill.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
