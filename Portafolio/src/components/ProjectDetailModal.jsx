import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight, X } from "lucide-react";

const accentMap = {
  violet: {
    gradient: "from-violet-500 to-fuchsia-500",
    tag: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    tech: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    btn: "from-violet-600 to-fuchsia-600",
  },
  fuchsia: {
    gradient: "from-fuchsia-500 to-pink-500",
    tag: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20",
    tech: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20",
    btn: "from-fuchsia-600 to-pink-600",
  },
  amber: {
    gradient: "from-amber-500 to-orange-500",
    tag: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    tech: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    btn: "from-amber-500 to-orange-500",
  },
};

const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;
  const a = accentMap[project.accent] || accentMap.violet;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: "spring", damping: 28, stiffness: 300 }}
          className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-900 border border-white/8 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Gradient top border */}
          <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${a.gradient} rounded-t-2xl`} />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-1.5 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition"
            aria-label="Cerrar"
          >
            <X size={18} />
          </button>

          {/* Image */}
          <div className="relative h-48 overflow-hidden bg-zinc-950 rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />

            {project.tag && (
              <span className={`absolute top-4 left-4 px-2.5 py-1 rounded-md text-xs font-semibold border ${a.tag}`}>
                {project.tag}
              </span>
            )}

            <h3 className="absolute bottom-4 left-4 right-12 text-xl font-black text-white leading-tight">
              {project.title}
            </h3>
          </div>

          {/* Body */}
          <div className="p-6">
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
              {project.longDescription || project.description}
            </p>

            {/* Tech */}
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-3">
                Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`text-xs px-2.5 py-1 rounded-lg border ${a.tech}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-5 border-t border-white/5">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition text-sm font-semibold"
              >
                <Github size={16} />
                Código
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r ${a.btn} text-white text-sm font-semibold shadow-lg`}
              >
                <ArrowUpRight size={16} />
                Ver proyecto
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
