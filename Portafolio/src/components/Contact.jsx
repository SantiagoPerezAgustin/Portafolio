import { motion } from "framer-motion";
import { MapPin, Phone, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// ─── CONFIGURACIÓN EMAILJS ──────────────────────────────────────────────────
// Completá estos tres valores después de crear tu cuenta en emailjs.com
const EMAILJS_SERVICE_ID  = "service_0rrpg1i";
const EMAILJS_TEMPLATE_ID = "template_d898fvr";
const EMAILJS_PUBLIC_KEY  = "F2-8TPoL0g62szx0t";
// ────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  const contactMethods = [
    { icon: Phone,  label: "Teléfono",  value: "+54 9 3416 56-9839", href: "tel:+5493416569839", accent: "fuchsia" },
    { icon: MapPin, label: "Ubicación", value: "Rosario, Santa Fe",  href: "#",                  accent: "amber"   },
  ];

  const socials = [
    { label: "GitHub",   href: "https://github.com/SantiagoPerezAgustin",                  Icon: Github   },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/santiago-perez-666362282/",     Icon: Linkedin },
  ];

  const accentMap = {
    violet:  "border-violet-500/30  bg-violet-500/5  text-violet-400  hover:border-violet-500/60",
    fuchsia: "border-fuchsia-500/30 bg-fuchsia-500/5 text-fuchsia-400 hover:border-fuchsia-500/60",
    amber:   "border-amber-500/30   bg-amber-500/5   text-amber-400   hover:border-amber-500/60",
  };

  const inputClass =
    "w-full bg-zinc-800/60 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500/50 focus:bg-zinc-800 transition-all";

  const containerVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden:  { opacity: 0, y: 20 },
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
          ¿Tenés un proyecto en mente o buscás un desarrollador? Enviame un mensaje.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* ── Formulario ── */}
          <motion.div variants={itemVariants}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Tu nombre"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="tu@email.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Contame en qué puedo ayudarte..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Botón enviar */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: status === "sending" ? 1 : 1.02, boxShadow: "0 0 24px rgba(139,92,246,0.35)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-violet-900/30 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Enviar mensaje
                  </>
                )}
              </motion.button>

              {/* Feedback */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm"
                >
                  <CheckCircle size={16} />
                  ¡Mensaje enviado! Te respondo a la brevedad.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                >
                  <AlertCircle size={16} />
                  Hubo un error. Escribime directo a santiagus153@gmail.com
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* ── Info ── */}
          <motion.div variants={itemVariants} className="space-y-4">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                whileHover={{ y: -3, scale: 1.01 }}
                className={`flex items-center gap-4 p-4 rounded-xl border ${accentMap[method.accent]} transition-all`}
              >
                <div className="flex-shrink-0">
                  <method.icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-zinc-600 font-medium uppercase tracking-wider">
                    {method.label}
                  </p>
                  <p className="text-sm text-white font-semibold">{method.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social */}
            <div className="pt-4 flex gap-3">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 border border-white/8 text-zinc-400 hover:text-white hover:border-violet-500/40 transition-all text-sm font-medium"
                >
                  <social.Icon size={16} />
                  {social.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
