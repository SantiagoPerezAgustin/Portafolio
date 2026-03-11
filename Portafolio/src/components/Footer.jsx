import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-lg font-black bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">
            SP.
          </span>
          <span className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Santiago Perez — Full Stack Developer
          </span>
        </div>

        <div className="flex items-center gap-3">
          {[
            { href: "https://github.com/SantiagoPerezAgustin", Icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/santiago-perez-666362282/", Icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:santiagus153@gmail.com", Icon: Mail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-zinc-600 hover:text-violet-400 hover:bg-violet-500/10 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
