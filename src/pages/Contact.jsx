// src/pages/Contact.jsx
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FaArrowUp, FaLinkedin, FaGithub, FaEnvelope, FaSpinner } from "react-icons/fa";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const FORM_ENDPOINT = "https://formspree.io/f/mrebzkyb";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.22 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 110, damping: 16 },
  },
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.2 } },
  tap: { scale: 0.97 },
  loading: { scale: 1, transition: { duration: 0.2 } },
};

const particlesInit = async (engine) => {
  await loadFull(engine);
};

function InputLabel({ children, htmlFor }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-left text-sm font-medium text-slate-700 dark:text-slate-200 mb-2"
    >
      {children}
    </label>
  );
}

function InputBase(props) {
  return (
    <input
      {...props}
      className={[
        "w-full px-4 py-3 rounded-lg shadow-sm",
        "border border-slate-300/70 dark:border-slate-700/70",
        "bg-white/80 dark:bg-slate-900/60",
        "text-slate-900 dark:text-slate-100",
        "placeholder:text-slate-400 dark:placeholder:text-slate-500",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
        "transition",
      ].join(" ")}
    />
  );
}

function TextareaBase(props) {
  return (
    <textarea
      {...props}
      className={[
        "w-full px-4 py-3 rounded-lg shadow-sm",
        "border border-slate-300/70 dark:border-slate-700/70",
        "bg-white/80 dark:bg-slate-900/60",
        "text-slate-900 dark:text-slate-100",
        "placeholder:text-slate-400 dark:placeholder:text-slate-500",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
        "transition",
      ].join(" ")}
    />
  );
}

export default function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // honeypot: debe quedar vacío
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // "success" | "error" | "invalid" | null
  const [errorDetail, setErrorDetail] = useState(""); // opcional: para debug UX

  const particlesOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      particles: {
        number: { value: 70, density: { enable: true, value_area: 900 } },
        color: { value: ["#2563eb", "#06b6d4", "#a855f7"] },
        shape: { type: "circle" },
        opacity: { value: 0.6 },
        size: { value: 3, random: true },
        move: {
          enable: true,
          speed: 1.1,
          direction: "none",
          random: true,
          outMode: "out",
        },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 110, duration: 0.4 } },
      },
      detectRetina: true,
    }),
    []
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (submitStatus) setSubmitStatus(null);
    if (errorDetail) setErrorDetail("");
  };

  const validate = () => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();
    if (!name || !email || !message) return false;

    // validación básica email para UI
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // honeypot (bots)
    if (formData.company?.trim()) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "", company: "" });
      return;
    }

    if (!validate()) {
      setSubmitStatus("invalid");
      return;
    }

    if (!FORM_ENDPOINT) {
      console.error("Missing FORM_ENDPOINT");
      setSubmitStatus("error");
      setErrorDetail("Missing Formspree endpoint");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorDetail("");

    try {
      // ✅ FormData = compatibilidad máxima con Formspree + reCAPTCHA
      const fd = new FormData();
      fd.append("name", formData.name.trim());
      fd.append("email", formData.email.trim());
      fd.append("message", formData.message.trim());

      // Opcionales (si quieres personalizar):
      // fd.append("_subject", "Nuevo mensaje desde el portafolio");
      // fd.append("_replyto", formData.email.trim());

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });

      // Siempre intentamos leer JSON si existe
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        const detail =
          data?.errors?.[0]?.message ||
          data?.error ||
          `HTTP ${res.status}`;
        console.error("Formspree error:", res.status, data);
        setSubmitStatus("error");
        setErrorDetail(detail);
        return;
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "", company: "" });
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
      setErrorDetail("Network error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Helmet>
        <title>Contacto | DevsGen – Yang Florido Solano</title>
        <meta
          name="description"
          content="Contacta a Yang Florido Solano de DevsGen para proyectos de desarrollo web, aplicaciones modernas con React y Django, o colaboraciones profesionales."
        />
      </Helmet>


      {/* ✅ Fondo blanco real */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white dark:bg-slate-950" />
        <div className="absolute inset-0 bg-white/40 dark:bg-slate-950/40" />
      </div>

      {/* ✅ Particles */}
      <Particles
        id="tsparticles-contact"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <section id="contact" className="relative z-10 py-16 md:py-24 pt-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-6"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white"
            >
              {t("contact_title")}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-700 dark:text-slate-200 max-w-3xl mx-auto"
            >
              {t("contact_description")}
            </motion.p>
          </motion.div>

          {/* Card */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 max-w-xl mx-auto"
          >
            <div className="p-6 md:p-8 rounded-2xl shadow-lg bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-sm">
              {/* Nota: Formspree reCAPTCHA a veces se inyecta/valida server-side.
                  Con FormData y Accept JSON, es el flujo más estable. */}
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <InputLabel htmlFor="name">{t("contact_name_label")}</InputLabel>
                  <InputBase
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t("contact_name_placeholder")}
                    autoComplete="name"
                  />
                </div>

                <div>
                  <InputLabel htmlFor="email">{t("contact_email_label")}</InputLabel>
                  <InputBase
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t("contact_email_placeholder")}
                    autoComplete="email"
                    inputMode="email"
                  />
                </div>

                <div>
                  <InputLabel htmlFor="message">{t("contact_message_label")}</InputLabel>
                  <TextareaBase
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder={t("contact_message_placeholder")}
                  />
                </div>

                <motion.button
                  type="submit"
                  variants={buttonVariants}
                  initial="initial"
                  animate={isSubmitting ? "loading" : "initial"}
                  whileHover={!isSubmitting ? "hover" : undefined}
                  whileTap={!isSubmitting ? "tap" : undefined}
                  disabled={isSubmitting}
                  className={[
                    "w-full flex items-center justify-center gap-2",
                    "py-3 px-6 rounded-full text-lg font-semibold shadow-md transition",
                    "bg-blue-600 text-white hover:bg-blue-700",
                    "disabled:opacity-70 disabled:cursor-not-allowed",
                  ].join(" ")}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      {t("contact_submitting")}
                    </>
                  ) : (
                    t("contact_submit_button")
                  )}
                </motion.button>

                {submitStatus === "success" ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-600 dark:text-green-400 text-sm text-center"
                  >
                    {t("contact_success")}
                  </motion.p>
                ) : null}

                {submitStatus === "invalid" ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-600 dark:text-red-400 text-sm text-center"
                  >
                    {t("contact_error")}
                  </motion.p>
                ) : null}

                {submitStatus === "error" ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-600 dark:text-red-400 text-sm text-center"
                  >
                    {t("contact_error")}
                    {errorDetail ? (
                      <span className="block mt-1 text-xs opacity-80">
                        {errorDetail}
                      </span>
                    ) : null}
                  </motion.p>
                ) : null}
              </form>

              {/* Social */}
              <div className="mt-8 flex items-center justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/yang-florido-a57b512ab/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-white/70 hover:bg-white shadow-md transition
                             dark:bg-slate-900/60 dark:hover:bg-slate-900"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <FaLinkedin className="text-2xl text-blue-700 dark:text-blue-400" />
                </a>

                <a
                  href="https://github.com/Yangluigie"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-white/70 hover:bg-white shadow-md transition
                             dark:bg-slate-900/60 dark:hover:bg-slate-900"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <FaGithub className="text-2xl text-slate-900 dark:text-white" />
                </a>

                <a
                  href="mailto:yangluigieflorido@gmail.com"
                  className="p-3 rounded-full bg-white/70 hover:bg-white shadow-md transition
                             dark:bg-slate-900/60 dark:hover:bg-slate-900"
                  aria-label="Email"
                  title="Email"
                >
                  <FaEnvelope className="text-2xl text-blue-700 dark:text-blue-400" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to top */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg z-20"
        aria-label="Volver arriba"
        type="button"
      >
        <FaArrowUp />
      </motion.button>
    </div>
  );
}
