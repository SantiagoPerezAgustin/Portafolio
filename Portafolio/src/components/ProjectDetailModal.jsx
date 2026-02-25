import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";

const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 25 }}
          className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl bg-slate-800 border border-cyan-400/30 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-1 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition"
            aria-label="Cerrar"
          >
            <X size={24} />
          </button>

          <div className="relative h-48 overflow-hidden bg-slate-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent opacity-60" />
            <h3 className="absolute bottom-4 left-4 right-12 text-xl font-bold text-white">
              {project.title}
            </h3>
          </div>

          <div className="p-6">
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
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
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-700/50 text-slate-300 hover:text-cyan-400 hover:bg-slate-600/50 transition"
              >
                <Github size={18} />
                <span className="text-sm font-medium">Código</span>
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-700/50 text-slate-300 hover:text-cyan-400 hover:bg-slate-600/50 transition"
              >
                <ExternalLink size={18} />
                <span className="text-sm font-medium">Ver proyecto</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
