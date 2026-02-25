import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, ChevronUp } from "lucide-react";
import imagenInicio from "../assets/iNICIO.png";
import imagenBrisaCalzado from "../assets/Brisa.png";
import ProjectDetailModal from "./ProjectDetailModal";

const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      id: 1,
      title: "BICTECH - Tienda Virtual",
      description:
        "E-commerce full stack con autenticación, gestión de roles, paginación y documentación automática de API. Arquitectura limpia con Clean Architecture.",
      tech: ["React", "ASP.NET 8", "SQL Server", "Swagger", "xUnit"],
      image: "/src/assets/bichtec.jpg",
      github: "https://github.com/SantiagoPerezAgustin/Bichtec-Tienda-Virtual",
      link: "https://github.com/SantiagoPerezAgustin/Bichtec-Tienda-Virtual",
    },
    {
      id: 2,
      title: "Procesamiento de documentos + recomendación de ofertas",
      description:
        "App full stack con microservicios: OCR (Tesseract, PyPDF2), resumen y clasificación con Mistral, gestión de candidatos y recomendación de ofertas con Adzuna API. Matching CV–oferta con IA y experiencia tipo portal de empleo.",
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind",
        "FastAPI",
        "ASP.NET 8",
        "Tesseract",
        "Mistral",
        "Adzuna API",
      ],
      image: imagenInicio,
      github: "https://github.com/SantiagoPerezAgustin/OCR-ia",
      link: "https://github.com/TU_USUARIO/TU_REPO",
    },
    {
      id: 3,
      title: "Brisa Calzado - E-commerce",
      description:
        "E-commerce full stack para emprendimiento familiar de calzado. Backend .NET 8 y Entity Framework sobre SQL Server con API REST y arquitectura limpia. Frontend React 19 con Vite y Tailwind, React Router y Context API. Catálogo por categorías, búsqueda y filtros, carrito persistente, gestión de pedidos, contacto e integración con WhatsApp.",
      tech: [
        "React 19",
        "Vite",
        "Tailwind CSS",
        "React Router",
        ".NET 8",
        "Entity Framework",
        "SQL Server",
        "API REST",
      ],
      image: imagenBrisaCalzado,
      github: "https://github.com/SantiagoPerezAgustin/BrisaCalzado",
      link: "https://github.com/TU_USUARIO/brisa-calzado",
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative rounded-xl overflow-hidden bg-slate-800/40 backdrop-blur border border-cyan-400/30 hover:border-cyan-400/70 transition-all"
            >
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent opacity-40" />
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800/90 text-cyan-300 text-sm font-medium hover:bg-cyan-500/20 border border-cyan-400/30 transition"
                >
                  <ChevronUp size={16} className="rotate-180" />
                  Ver más
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

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

                <div className="flex gap-4 pt-4 border-t border-cyan-400/20">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Código</span>
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Ver</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
          {selectedProject && (
            <ProjectDetailModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
