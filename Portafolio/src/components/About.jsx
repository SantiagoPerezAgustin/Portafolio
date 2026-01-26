import { motion } from "framer-motion";
import { Code2, Zap, Palette } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Backend",
      description: ".NET, C#, SQL, SQL Server, Python, API REST",
    },
    {
      icon: Palette,
      title: "Frontend",
      description:
        "React, TypeScript, JavaScript, HTML, CSS, Responsive Design",
    },
    {
      icon: Zap,
      title: "Herramientas & Cloud",
      description: "Git, Visual Studio, VS Code, Microsoft Azure, MySQL",
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
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Soy{" "}
              <span className="text-cyan-400 font-semibold">
                Técnico Universitario en Programación
              </span>{" "}
              por la UTN, especializado en backend. Trabajo con{" "}
              <span className="text-cyan-400 font-semibold">
                .NET, C#, SQL Server y Python
              </span>
              , diseñando aplicaciones desde cero con enfoque en bases de datos
              eficientes y construcción de APIs robustas.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              Complemento el backend con{" "}
              <span className="text-cyan-400 font-semibold">
                React y TypeScript
              </span>{" "}
              para interfaces modernas. Tengo experiencia desplegando en{" "}
              <span className="text-cyan-400 font-semibold">
                Microsoft Azure
              </span>{" "}
              y desarrollo proyectos full stack individuales.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              Me enfoco en escribir código claro, escalable y mantenible,
              aplicando buenas prácticas. Busco mi primera oportunidad como{" "}
              <span className="text-cyan-400 font-semibold">
                desarrollador backend o full stack junior
              </span>
              , donde pueda aportar valor técnico y crecer profesionalmente.
            </p>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 gap-8 mt-8 pt-8 border-t border-cyan-500/20"
              variants={containerVariants}
            >
              {[].map((stat, index) => (
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
          <motion.div className="space-y-6" variants={containerVariants}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/20"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
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
