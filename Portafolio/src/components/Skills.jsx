const Skills = ({ allSkills = [] }) => {
  
const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    skills: [".NET", "ASP.NET Core", "C#", "Python", "FastAPI", "APIs RESTful"],
  },
  {
    category: "Bases de Datos",
    skills: ["SQL", "SQL Server", "MySQL", "Entity Framework"],
  },
  {
    category: "IA, OCR y APIs",
    skills: ["Mistral", "Tesseract", "PyPDF2", "Adzuna API", "APIs externas"],
  },
  {
    category: "Cloud & Herramientas",
    skills: [
      "Microsoft Azure",
      "Git",
      "GitHub",
      "Visual Studio",
      "Microservicios",
    ],
  },
];

  return (
    <section id="skills" className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-400">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-cyan-400/30 bg-slate-800/20 transition"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-6">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-slate-800/40 text-slate-300 border border-cyan-400/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
