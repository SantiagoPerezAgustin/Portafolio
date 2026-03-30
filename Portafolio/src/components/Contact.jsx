import { MapPin, Phone, Github, Linkedin, Send, CheckCircle, AlertCircle, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { useInView } from "../hooks/useInView";

// ─── CONFIGURACIÓN EMAILJS ──────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_0rrpg1i";
const EMAILJS_TEMPLATE_ID = "template_d898fvr";
const EMAILJS_PUBLIC_KEY  = "F2-8TPoL0g62szx0t";
// ────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [ref, inView] = useInView();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
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
    { label: "GitHub",   href: "https://github.com/SantiagoPerezAgustin",               Icon: Github   },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/santiago-perez-666362282/", Icon: Linkedin },
  ];

  const accentMap = {
    violet:  "border-violet-500/30  bg-violet-500/5  text-violet-400  hover:border-violet-500/60",
    fuchsia: "border-fuchsia-500/30 bg-fuchsia-500/5 text-fuchsia-400 hover:border-fuchsia-500/60",
    amber:   "border-amber-500/30   bg-amber-500/5   text-amber-400   hover:border-amber-500/60",
  };

  const inputClass = "w-full bg-zinc-800/60 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500/50 focus:bg-zinc-800 transition-all";

  return (
    <section ref={ref} id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <div className={`${inView ? "anim-visible" : "anim-hidden"} flex items-center gap-4 mb-4`}>
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-violet-500">04</span>
          <span className="h-[1px] w-12 bg-violet-500/40" />
          <span className="text-xs font-medium tracking-widest uppercase text-zinc-500">Contacto</span>
        </div>

        <h2 className={`${inView ? "anim-visible delay-1" : "anim-hidden"} text-5xl md:text-6xl font-black text-white mb-4 leading-tight`}>
          Hablemos.
        </h2>

        <p className={`${inView ? "anim-visible delay-2" : "anim-hidden"} text-base text-zinc-500 mb-14 max-w-lg`}>
          ¿Tenés un proyecto en mente o buscás un desarrollador? Enviame un mensaje.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Formulario */}
          <div className={`${inView ? "anim-visible delay-3" : "anim-hidden"}`}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Nombre</label>
                <input type="text" name="from_name" required placeholder="Tu nombre" className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Email</label>
                <input type="email" name="from_email" required placeholder="tu@email.com" className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Mensaje</label>
                <textarea name="message" required rows={5} placeholder="Contame en qué puedo ayudarte..." className={`${inputClass} resize-none`} />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-violet-900/30 disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <><Send size={16} />Enviar mensaje</>
                )}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                  <CheckCircle size={16} />
                  ¡Mensaje enviado! Te respondo a la brevedad.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  <AlertCircle size={16} />
                  Hubo un error. Escribime a santiagus153@gmail.com
                </div>
              )}
            </form>
          </div>

          {/* Info */}
          <div className={`${inView ? "anim-visible delay-4" : "anim-hidden"} space-y-4`}>
            {/* Email CTA */}
            <div className="p-[1.5px] rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-500">
              <a
                href="mailto:santiagus153@gmail.com"
                className="flex items-center justify-between px-6 py-5 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition-colors group"
              >
                <div>
                  <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mb-1">Email directo</p>
                  <p className="text-base font-black text-white">santiagus153@gmail.com</p>
                </div>
                <ArrowUpRight size={22} className="text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className={`flex items-center gap-4 p-4 rounded-xl border ${accentMap[method.accent]} hover:-translate-y-0.5 transition-all duration-200`}
              >
                <method.icon size={18} />
                <div>
                  <p className="text-xs text-zinc-600 font-medium uppercase tracking-wider">{method.label}</p>
                  <p className="text-sm text-white font-semibold">{method.value}</p>
                </div>
              </a>
            ))}

            <div className="flex gap-3 pt-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 border border-white/8 text-zinc-400 hover:text-white hover:border-violet-500/40 hover:-translate-y-0.5 active:scale-95 transition-all text-sm font-medium"
                >
                  <social.Icon size={16} />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
