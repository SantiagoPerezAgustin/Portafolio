import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "santiagus153@gmail.com",
      href: "mailto:santiagus153@gmail.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+54 9 3416 56-9839",
      href: "tel:+5493416569839",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Rosario, Santa Fe, Argentina",
      href: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen py-20 px-6 flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Ponte en Contacto
          </h2>
          <p className="text-xl text-slate-400">
            ¿Tienes un proyecto en mente? Me encantaría hablar contigo.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/50 hover:bg-slate-800/70 transition group text-center"
            >
              <div className="inline-block p-4 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition mb-4">
                <method.icon size={32} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {method.label}
              </h3>
              <p className="text-slate-400">{method.value}</p>
            </motion.a>
          ))}
        </motion.div>


        {/* Social Links */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <p className="text-slate-400 mb-8">
            O conecta conmigo en redes sociales:
          </p>
          <div className="flex justify-center gap-6">
            {[
              {
                label: "GitHub",
                href: "https://github.com/SantiagoPerezAgustin",
                Icon: Github,
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/santiago-perez-666362282/",
                Icon: Linkedin,
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-lg bg-slate-800/50 border border-cyan-500/20 flex items-center justify-center text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition"
                aria-label={social.label}
              >
                <social.Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
