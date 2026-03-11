import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      accent: "violet",
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "Framer Motion"],
    },
    {
      category: "Backend",
      accent: "fuchsia",
      skills: [".NET", "ASP.NET Core", "C#", "Python", "FastAPI", "APIs RESTful"],
    },
    {
      category: "Bases de Datos",
      accent: "amber",
      skills: ["SQL", "SQL Server", "MySQL", "Entity Framework"],
    },
    {
      category: "IA, OCR y APIs",
      accent: "violet",
      skills: ["Mistral", "Tesseract", "PyPDF2", "Adzuna API", "APIs externas"],
    },
    {
      category: "Cloud & Herramientas",
      accent: "fuchsia",
      skills: ["Microsoft Azure", "Git", "GitHub", "Visual Studio", "Microservicios"],
    },
  ];

  const accentMap = {
    violet: {
      border: "border-violet-500/30",
      label: "text-violet-400",
      tag: "bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/25",
      dot: "bg-violet-500",
    },
    fuchsia: {
      border: "border-fuchsia-500/30",
      label: "text-fuchsia-400",
      tag: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20 hover:bg-fuchsia-500/25",
      dot: "bg-fuchsia-500",
    },
    amber: {
      border: "border-amber-500/30",
      label: "text-amber-400",
      tag: "bg-amber-500/10 text-amber-300 border-amber-500/20 hover:bg-amber-500/25",
      dot: "bg-amber-500",
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <motion.section
      id="skills"
      className="py-24 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-violet-500">02</span>
          <span className="h-[1px] w-12 bg-violet-500/40" />
          <span className="text-xs font-medium tracking-widest uppercase text-zinc-500">Skills</span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight"
        >
          Lo que
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">
            domino.
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((cat, idx) => {
            const a = accentMap[cat.accent];
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`p-6 rounded-2xl bg-zinc-900/60 border ${a.border} relative overflow-hidden`}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-6 right-6 h-[2px] ${a.dot} opacity-60 rounded-full`} />

                <div className="flex items-center gap-2 mb-5">
                  <span className={`w-2 h-2 rounded-full ${a.dot}`} />
                  <h3 className={`text-xs font-bold uppercase tracking-widest ${a.label}`}>
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${a.tag} transition-colors cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
