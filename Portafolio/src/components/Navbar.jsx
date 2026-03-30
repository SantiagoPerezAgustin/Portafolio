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
    { label: "Inicio",    id: "hero"     },
    { label: "Sobre mí",  id: "about"    },
    { label: "Proyectos", id: "projects" },
    { label: "Contacto",  id: "contact"  },
  ];

  return (
    <nav className="nav-enter fixed top-0 w-full z-50 bg-zinc-950 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-xl font-black tracking-tight bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
        >
          SP.
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 group cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-zinc-400 hover:text-white transition-colors active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900/95 border-t border-white/5 modal-overlay">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="py-3 text-zinc-400 hover:text-violet-400 font-medium cursor-pointer transition-colors border-b border-white/5 last:border-0 hover:translate-x-1 transition-transform duration-200"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
