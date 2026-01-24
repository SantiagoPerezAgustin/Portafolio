import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Proyecto 1",
      description:
        "Aplicación web moderna con React y Tailwind CSS. Interfaz responsiva y animaciones fluidas.",
      tech: ["React", "Tailwind", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      github: "#",
      link: "#",
    },
    {
      id: 2,
      title: "Proyecto 2",
      description:
        "Full Stack application con backend en Node.js y base de datos MongoDB.",
      tech: ["Node.js", "React", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop",
      github: "#",
      link: "#",
    },
    {
      id: 3,
      title: "Proyecto 3",
      description:
        "Dashboard interactivo con gráficos en tiempo real y UI responsiva.",
      tech: ["React", "TypeScript", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      github: "#",
      link: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Mis Proyectos
          </span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative rounded-xl overflow-hidden bg-slate-800/40 backdrop-blur border border-cyan-400/30 hover:border-cyan-400/70 transition-all"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent opacity-40" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-cyan-400/20">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 py-2 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Código</span>
                  </a>
                  <a
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 py-2 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Ver</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
