import { Code2, Zap, Palette, Brain } from "lucide-react";

const About = () => {
  const areas = [
    { icon: Code2,   title: "Backend",           description: ".NET 8, C#, PostgreSQL, SQL Server, Python, FastAPI, APIs REST, JWT", color: "violet"  },
    { icon: Palette, title: "Frontend",          description: "React, TypeScript, JavaScript, Tailwind CSS, Vite",     color: "fuchsia" },
    { icon: Brain,   title: "IA & datos",        description: "Mistral, LangChain, RAG, OCR, prompt engineering",       color: "amber"   },
    { icon: Zap,     title: "Automatización",   description: "n8n, Docker, GitHub Actions, CI/CD, Azure, microservicios", color: "violet"  },
  ];

  const stats = [
    { number: "5+",  label: "Proyectos destacados"   },
    { number: "UTN", label: "Técnico en Programación" },
    { number: "B1",  label: "Inglés (lectura técnica)" },
    { number: "2+",  label: "Años construyendo producto" },
  ];

  const colorMap = {
    violet:  "border-violet-500/40  bg-violet-500/5  text-violet-400",
    fuchsia: "border-fuchsia-500/40 bg-fuchsia-500/5 text-fuchsia-400",
    amber:   "border-amber-500/40   bg-amber-500/5   text-amber-400",
  };

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-violet-500">01</span>
          <span className="h-[1px] w-12 bg-violet-500/40" />
          <span className="text-xs font-medium tracking-widest uppercase text-zinc-500">Sobre mí</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">
          Hola, soy<br />
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Santiago Agustín.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-5">
            <p className="text-base text-zinc-400 leading-relaxed">
              Soy <span className="text-white font-semibold">Técnico Universitario en Programación (UTN Rosario)</span> con base sólida en aplicaciones{" "}
              <span className="text-white font-semibold">robustas y escalables</span>. Me especializo en orquestar{" "}
              <span className="text-white font-semibold">herramientas de IA y automatización (n8n)</span> para optimizar procesos y generar valor de negocio.
            </p>
            <p className="text-base text-zinc-400 leading-relaxed">
              Integro el stack tradicional <span className="text-white font-semibold">C#, .NET, React y SQL</span> con soluciones actuales como{" "}
              <span className="text-white font-semibold">RAG, LLMs y microservicios en Python</span>. Aprendizaje acelerado asistido por IA, enfoque en resultados y automatización proactiva.
            </p>
            <p className="text-base text-zinc-400 leading-relaxed">
              Busco roles como{" "}
              <span className="text-violet-400 font-semibold">Full Stack o integrador de IA / automatización</span>, donde pueda sumar desde el código hasta el diseño de flujos y la calidad en producción.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10 pt-10 border-t border-white/5">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-zinc-900 border border-white/5">
                  <div className="text-2xl font-black text-white mb-1">{stat.number}</div>
                  <div className="text-xs text-zinc-500 font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((area, index) => (
              <div
                key={index}
                className={`p-5 rounded-xl border ${colorMap[area.color]} hover:-translate-y-1 transition-transform duration-200 cursor-default`}
              >
                <div className="mb-3"><area.icon size={22} /></div>
                <h3 className="text-sm font-bold text-white mb-1 uppercase tracking-wide">{area.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
