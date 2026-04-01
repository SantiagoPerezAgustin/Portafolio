import { useState } from "react";
import { Github, ArrowUpRight } from "lucide-react";
import imagenInicio from "../assets/iNICIO.webp";
import imagenBrisaCalzado from "../assets/Brisa.webp";
import ImgBichtec from "../assets/bichtec.webp";
import imagenChat from "../assets/ChatInicio.webp";
import ProjectDetailModal from "./ProjectDetailModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "BICTECH - Tienda Virtual",
      tag: "E-commerce",
      description:
        "E-commerce full stack con autenticación, gestión de roles, paginación y documentación automática de API. Arquitectura limpia con Clean Architecture.",
      longDescription:
        "E-commerce completo con sistema de autenticación de usuarios y gestión de roles. El backend fue construido con ASP.NET 8 aplicando Clean Architecture (Domain, Application, Infrastructure), con SQL Server como base de datos y Swagger para la documentación automática de la API. El frontend en React consume la API REST y ofrece paginación, filtros y una UI responsiva. Incluye tests unitarios con xUnit para garantizar la calidad del código.",
      tech: ["React", "ASP.NET 8", "SQL Server", "Swagger", "xUnit"],
      image: ImgBichtec,
      github: "https://github.com/SantiagoPerezAgustin/Bichtec-Tienda-Virtual",
      link: "https://github.com/SantiagoPerezAgustin/Bichtec-Tienda-Virtual",
      accent: "violet",
    },
    {
      id: 2,
      title: "Procesamiento de documentos + IA",
      tag: "IA · Microservicios",
      description:
        "App full stack con microservicios: OCR (Tesseract, PyPDF2), resumen y clasificación con Mistral, gestión de candidatos y recomendación de ofertas con Adzuna API.",
      longDescription:
        "El problema inicial era procesar documentos a mano (CVs, facturas, contratos): lento y propenso a errores. La solución fue una app full stack con microservicios que incluye: subida de PDFs/imágenes → OCR (Tesseract, PyPDF2) → resumen y clasificación con Mistral. Además, gestión de candidatos con guardado, listado y eliminación desde el frontend, y recomendación de ofertas de empleo por candidato usando la API de Adzuna. La IA (Mistral) calcula afinidad con cada oferta, skills a reforzar y genera un pitch personalizado.",
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
      accent: "fuchsia",
    },
    {
      id: 3,
      title: "Brisa Calzado - E-commerce",
      tag: "Full Stack",
      description:
        "E-commerce full stack para emprendimiento familiar de calzado. Backend .NET 8 con API REST y arquitectura limpia, frontend React 19 con Vite, Tailwind y Context API.",
      longDescription:
        "La idea fue digitalizar la operación de un negocio familiar y darle presencia web profesional. El backend usa .NET 8 y Entity Framework Core sobre SQL Server, con una API REST siguiendo arquitectura limpia (Domain, Application, Infrastructure). El frontend está en React 19 con Vite, Tailwind CSS, React Router para la navegación y Context API para el estado del carrito. Funcionalidades: catálogo por categorías con búsqueda en tiempo real y filtros, carrito de compras persistente, gestión de pedidos, formulario de contacto e integración con WhatsApp.",
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
      accent: "amber",
    },
    {
      id: 4,
      title: "Asistente de soporte con RAG",
      tag: "Full Stack + IA",
      description:
        "Chat de soporte técnico con IA (RAG): backend Python con FastAPI y LangChain, gateway .NET 8, frontend React, logs en SQL Server y automatización con n8n y Gmail.",
      longDescription:
        "La idea fue construir un asistente que responda en español sobre documentación interna (PDF, Markdown y TXT) y que permita analizar las consultas más frecuentes. El backend de IA está en Python con FastAPI, LangChain y Ollama, usando Chroma como vector store para búsqueda semántica (RAG). Un gateway en .NET 8 expone la API REST, hace de proxy hacia el servicio de IA y persiste las conversaciones en SQL Server con Entity Framework Core. El frontend es un chat en React con historial de conversación y manejo de errores orientado al usuario. Además, un flujo en n8n consume los logs desde la API, calcula el top de preguntas más repetidas y envía un resumen automático por correo (Gmail) al equipo.",
      tech: [
        "Python",
        "FastAPI",
        "LangChain",
        "Ollama",
        "Chroma",
        "React",
        "Vite",
        "Tailwind CSS",
        ".NET 8",
        "Entity Framework Core",
        "SQL Server",
        "n8n",
      ],
      image: imagenChat,
      github: "https://github.com/SantiagoPerezAgustin/RAG",
      link: "https://github.com/SantiagoPerezAgustin/RAG",
      accent: "emerald",
    },
  ];

  const accentMap = {
    violet:  { gradient: "from-violet-500 to-fuchsia-500",  tag: "bg-violet-500/10 text-violet-300 border-violet-500/20",   tech: "bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/25",   btn: "from-violet-600 to-fuchsia-600"  },
    fuchsia: { gradient: "from-fuchsia-500 to-pink-500",    tag: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20", tech: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20 hover:bg-fuchsia-500/25", btn: "from-fuchsia-600 to-pink-600"    },
    amber:   { gradient: "from-amber-500 to-orange-500",    tag: "bg-amber-500/10 text-amber-300 border-amber-500/20",     tech: "bg-amber-500/10 text-amber-300 border-amber-500/20 hover:bg-amber-500/25",     btn: "from-amber-500 to-orange-500"    },
    emerald: { gradient: "from-emerald-500 to-teal-500",    tag: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20", tech: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/25", btn: "from-emerald-600 to-teal-600"    },
  };

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-violet-500">03</span>
          <span className="h-[1px] w-12 bg-violet-500/40" />
          <span className="text-xs font-medium tracking-widest uppercase text-zinc-500">Proyectos</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">
          Lo que<br />
          <span className="bg-gradient-to-r from-fuchsia-400 to-amber-400 bg-clip-text text-transparent">construí.</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const a = accentMap[project.accent];
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/10 cursor-pointer hover:-translate-y-1 transition-transform duration-200"
              >
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${a.gradient}`} />

                <div className="relative h-44 overflow-hidden bg-zinc-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-semibold border ${a.tag}`}>
                    {project.tag}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="px-4 py-2 rounded-lg bg-black/60 text-white text-xs font-semibold tracking-wide border border-white/10">
                      Ver detalle →
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">{project.title}</h3>
                  <p className="text-xs text-zinc-500 mb-4 line-clamp-2 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className={`text-xs px-2 py-1 rounded-md border ${a.tech} transition-colors`}>{tech}</span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs px-2 py-1 rounded-md border border-white/10 text-zinc-500">+{project.tech.length - 4}</span>
                    )}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors text-xs font-medium"
                    >
                      <Github size={13} />Código
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-gradient-to-r ${a.gradient} text-white text-xs font-medium`}
                    >
                      <ArrowUpRight size={13} />Ver
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {selectedProject && (
          <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </section>
  );
};

export default Projects;
