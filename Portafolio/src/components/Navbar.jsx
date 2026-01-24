import { motion } from "framer-motion";
import { useState } from "react";

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
    { label: "Inicio", id: "home" },
    { label: "Sobre mí", id: "about" },
    { label: "Proyectos", id: "projects" },
    { label: "Contacto", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-cyan-500/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="text-cyan-400 font-bold text-xl cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          SP
        </motion.span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-slate-300">
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ color: "#00d9ff" }}
              className="cursor-pointer hover:text-cyan-400 transition"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-cyan-400 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-slate-900/95 border-t border-cyan-500/10"
        >
          <ul className="flex flex-col gap-4 px-6 py-4 text-slate-300">
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ x: 4, color: "#00d9ff" }}
                className="cursor-pointer"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;