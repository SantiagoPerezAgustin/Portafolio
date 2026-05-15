import { Github, Linkedin, Download, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Santiago_Agustin_Perez_CV.pdf";
    link.download = "Santiago_Agustin_Perez_CV.pdf";
    link.click();
  };

  const socials = [
    { label: "GitHub",   href: "https://github.com/SantiagoPerezAgustin",               Icon: Github   },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/santiago-perez-666362282/", Icon: Linkedin },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="text-center max-w-4xl w-full">

        <div className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            Disponible para trabajar
          </span>
        </div>

        <div className="mb-4 leading-none tracking-tight">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black">
            <span className="text-white">Santiago Agustín</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-400 bg-clip-text text-transparent">
              Pérez
            </span>
          </h1>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-zinc-400 font-semibold mb-4 tracking-wide uppercase max-w-2xl mx-auto leading-snug">
          Full Stack Developer &amp; AI Integrator
        </p>

        <p className="text-base text-zinc-500 mb-12 max-w-xl mx-auto leading-relaxed">
          Técnico en Programación (UTN). Integro <span className="text-zinc-400">.NET, React y SQL</span> con{" "}
          <span className="text-zinc-400">IA, RAG y automatización en n8n</span> para productos escalables y con impacto en negocio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-sm tracking-wide cursor-pointer hover:opacity-90 active:scale-[0.98] transition-all duration-150"
          >
            Ver mis proyectos
          </button>

          <div
            className="p-[1.5px] rounded-xl bg-gradient-to-r from-violet-500 to-amber-500 cursor-pointer"
            onClick={downloadCV}
          >
            <div className="px-8 py-4 rounded-xl bg-zinc-950 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-zinc-900 transition-colors">
              <Download size={16} />
              Descargar CV
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 mb-16">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-white/8 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors text-sm font-medium"
              title={social.label}
            >
              <social.Icon size={16} />
              <span className="hidden sm:inline">{social.label}</span>
            </a>
          ))}
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="text-zinc-600 hover:text-violet-400 transition-colors mx-auto flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={18} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
