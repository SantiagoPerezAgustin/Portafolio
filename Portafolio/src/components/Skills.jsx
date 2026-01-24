const Skills = ({ allSkills = [] }) => {
  return (
    <section id="skills" className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-cyan-400">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {allSkills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-slate-800/40 text-slate-300 border border-cyan-400/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
