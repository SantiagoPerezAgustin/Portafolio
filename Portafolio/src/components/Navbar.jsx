import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "Inicio", id: "hero" },
    { label: "Sobre mí", id: "about" },
    { label: "Proyectos", id: "projects" },
    { label: "Contacto", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("hero")}
          className="text-xl font-black tracking-tight bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent cursor-pointer"
        >
          SP.
        </motion.button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <motion.button
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 group cursor-pointer"
                whileHover={{ y: -1 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-zinc-900/95 border-t border-white/5"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  whileHover={{ x: 6 }}
                  onClick={() => scrollToSection(item.id)}
                  className="py-3 text-zinc-400 hover:text-violet-400 font-medium cursor-pointer transition-colors border-b border-white/5 last:border-0"
                >
                  {item.label}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
