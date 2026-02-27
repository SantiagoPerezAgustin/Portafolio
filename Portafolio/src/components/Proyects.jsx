import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import imagenInicio from "../assets/iNICIO.png";
import imagenBrisaCalzado from "../assets/Brisa.png";
import ImgBichtec from "../assets/bichtec.jpg"
import ProjectDetailModal from "./ProjectDetailModal";

const BICTECH_IMAGE = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop";

const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      id: 1,
      title: "BICTECH - Tienda Virtual",
      description:
        "E-commerce full stack con autenticación, gestión de roles, paginación y documentación automática de API. Arquitectura limpia con Clean Architecture.",
      longDescription:
        "E-commerce completo con sistema de autenticación de usuarios y gestión de roles. El backend fue construido con ASP.NET 8 aplicando Clean Architecture (Domain, Application, Infrastructure), con SQL Server como base de datos y Swagger para la documentación automática de la API. El frontend en React consume la API REST y ofrece paginación, filtros y una UI responsiva. Incluye tests unitarios con xUnit para garantizar la calidad del código.",
      tech: ["React", "ASP.NET 8", "SQL Server", "Swagger", "xUnit"],
      image: ImgBichtec,
      github: "https://github.com/SantiagoPerezAgustin/Bichtec-Tienda-Virtual",
      link: "https://github.com/SantiagoPerezAgustin/Bichtec-Tienda-Virtual",
    },
    {
      id: 2,
      title: "Procesamiento de documentos + IA",
      description:
        "App full stack con microservicios: OCR (Tesseract, PyPDF2), resumen y clasificación con Mistral, gestión de candidatos y recomendación de ofertas con Adzuna API.",
      longDescription:
        "El problema inicial era procesar documentos a mano (CVs, facturas, contratos): lento y propenso a errores. La solución fue una app full stack con microservicios que incluye: subida de PDFs/imágenes → OCR (Tesseract, PyPDF2) → resumen y clasificación con Mistral. Además, gestión de candidatos con guardado, listado y eliminación desde el frontend, y recomendación de ofertas de empleo por candidato usando la API de Adzuna. La IA (Mistral) calcula afinidad con cada oferta, skills a reforzar y genera un pitch personalizado. El frontend es una experiencia tipo portal de empleo con enlace directo a la oferta y búsqueda en LinkedIn con keywords del perfil.",
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
      link: "https://github.com/SantiagoPerezAgustin/OCR-ia",
    },
    {
      id: 3,
      title: "Brisa Calzado - E-commerce",
      description:
        "E-commerce full stack para emprendimiento familiar de calzado. Backend .NET 8 con API REST y arquitectura limpia, frontend React 19 con Vite, Tailwind y Context API.",
      longDescription:
        "La idea fue digitalizar la operación de un negocio familiar y darle presencia web profesional. El backend usa .NET 8 y Entity Framework Core sobre SQL Server, con una API REST siguiendo arquitectura limpia (Domain, Application, Infrastructure). El frontend está en React 19 con Vite, Tailwind CSS, React Router para la navegación y Context API para el estado del carrito. Funcionalidades: catálogo por categorías con búsqueda en tiempo real y filtros, carrito de compras persistente, gestión de pedidos, formulario de contacto e integración con WhatsApp para que los clientes puedan enviar pedidos directo desde la web.",
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
      link: "https://github.com/SantiagoPerezAgustin/BrisaCalzado",
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
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-xl overflow-hidden bg-slate-800/40 backdrop-blur border border-cyan-400/30 hover:border-cyan-400/70 transition-all cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent opacity-40" />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-slate-800/90 text-cyan-300 text-xs font-medium border border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Ver más →
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-cyan-400/20">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Código</span>
                  </motion.a>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Ver</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
