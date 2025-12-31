// src/pages/About.jsx
import { motion } from "framer-motion";
import { useMemo } from "react";
import { FaArrowUp } from "react-icons/fa";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

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

const cardVariants = {
  offscreen: { y: 24, opacity: 0, scale: 0.985 },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 16, duration: 0.55 },
  },
  hover: { scale: 1.015, transition: { duration: 0.2 } },
};

const particlesInit = async (engine) => {
  await loadFull(engine);
};

export default function About() {
  const { t } = useTranslation();

  // Partículas estilo Home (mismas), pero sobre fondo blanco
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

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Helmet>
        <title>Sobre mí | DevsGen – Yang Florido Solano</title>
        <meta
          name="description"
          content="Conoce a Yang Florido Solano, desarrollador web y fundador de DevsGen. Especializado en React, Django y soluciones digitales modernas orientadas a resultados."
        />
      </Helmet>


      {/* ✅ Fondo blanco real (sin degradado) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white dark:bg-slate-950" />
        {/* overlay muy suave para dar “depth” sin teñir */}
        <div className="absolute inset-0 bg-white/40 dark:bg-slate-950/40" />
      </div>

      {/* Particles */}
      <Particles
        id="tsparticles-about"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Contenido */}
      <section id="about" className="relative z-10 py-16 md:py-24 pt-20">
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
              {t("about_title")}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-700 dark:text-slate-200 max-w-3xl mx-auto"
            >
              {t("about_description")}
            </motion.p>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <motion.div
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              viewport={{ once: true, amount: 0.45 }}
              className="p-6 rounded-xl shadow-lg bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
                {t("about_philosophy_title")}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {t("about_philosophy_description")}
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              viewport={{ once: true, amount: 0.45 }}
              className="p-6 rounded-xl shadow-lg bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
                {t("about_interests_title")}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {t("about_interests_description")}
              </p>
            </motion.div>
          </div>
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
