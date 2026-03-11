import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "santiagus153@gmail.com",
      href: "mailto:santiagus153@gmail.com",
      accent: "violet",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+54 9 3416 56-9839",
      href: "tel:+5493416569839",
      accent: "fuchsia",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Rosario, Santa Fe",
      href: "#",
      accent: "amber",
    },
  ];

  const socials = [
    { label: "GitHub", href: "https://github.com/SantiagoPerezAgustin", Icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/santiago-perez-666362282/", Icon: Linkedin },
  ];

  const accentMap = {
    violet: "border-violet-500/30 bg-violet-500/5 text-violet-400 hover:border-violet-500/60",
    fuchsia: "border-fuchsia-500/30 bg-fuchsia-500/5 text-fuchsia-400 hover:border-fuchsia-500/60",
    amber: "border-amber-500/30 bg-amber-500/5 text-amber-400 hover:border-amber-500/60",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="contact"
      className="py-24 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-violet-500">04</span>
          <span className="h-[1px] w-12 bg-violet-500/40" />
          <span className="text-xs font-medium tracking-widest uppercase text-zinc-500">Contacto</span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight"
        >
          Hablemos.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-base text-zinc-500 mb-14 max-w-lg"
        >
          ¿Tenés un proyecto en mente o buscás un desarrollador? Me encantaría
          charlar.
        </motion.p>

        {/* Big CTA email */}
        <motion.div
          variants={itemVariants}
          className="p-[1.5px] rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-500 mb-10"
        >
          <motion.a
            href="mailto:santiagus153@gmail.com"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="flex items-center justify-between px-8 py-6 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition-colors group"
          >
            <div>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mb-1">Email directo</p>
              <p className="text-lg md:text-2xl font-black text-white">santiagus153@gmail.com</p>
            </div>
            <ArrowUpRight
              size={28}
              className="text-violet-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </motion.a>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-4 mb-12"
          variants={containerVariants}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`p-5 rounded-xl border ${accentMap[method.accent]} transition-all group`}
            >
              <div className="mb-3">
                <method.icon size={20} />
              </div>
              <p className="text-xs text-zinc-600 font-medium uppercase tracking-wider mb-1">
                {method.label}
              </p>
              <p className="text-sm text-white font-semibold">{method.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Social */}
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          <span className="text-xs text-zinc-600 uppercase tracking-widest">Redes</span>
          <span className="h-[1px] flex-1 bg-white/5" />
          <div className="flex gap-3">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-white/8 text-zinc-400 hover:text-white hover:border-violet-500/40 transition-all text-sm font-medium"
                aria-label={social.label}
              >
                <social.Icon size={16} />
                {social.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
