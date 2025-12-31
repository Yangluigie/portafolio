// src/pages/Projects.jsx
import { motion } from "framer-motion";
import { useMemo } from "react";
import { FaArrowUp, FaExternalLinkAlt, FaGithub, FaReact } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiTailwindcss, SiVite } from "react-icons/si";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 110, damping: 16 },
  },
};

const cardVariants = {
  offscreen: { y: 24, opacity: 0, scale: 0.98 },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 16, duration: 0.55 },
  },
  hover: { scale: 1.02, transition: { duration: 0.2 } },
};

const particlesInit = async (engine) => {
  await loadFull(engine);
};

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200/60 bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm dark:border-slate-800/60 dark:bg-slate-900/60 dark:text-slate-200">
      {children}
    </span>
  );
}

function ProjectCard({ project, t }) {
  return (
    <motion.article
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      whileHover="hover"
      viewport={{ once: true, amount: 0.35 }}
      className="p-6 rounded-xl shadow-lg bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-sm"
    >
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
        {t(`${project.translationKey}_title`)}
      </h3>

      <p className="mt-2 text-slate-600 dark:text-slate-300">
        {t(`${project.translationKey}_description`)}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.skills.map((skill) => (
          <Badge key={skill.name}>
            <span className="mr-2 inline-flex text-slate-700 dark:text-slate-200">
              {skill.icon}
            </span>
            {skill.name}
          </Badge>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 font-semibold text-white hover:bg-slate-800 transition dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            <FaGithub />
            {t("project_repo", "Repositorio")}
          </a>
        ) : null}

        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-blue-600 px-5 py-2.5 font-semibold text-blue-700 hover:bg-blue-50 transition dark:border-white/70 dark:text-white dark:hover:bg-slate-800/60"
          >
            <FaExternalLinkAlt />
            {t("project_demo", "Demo")}
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { t } = useTranslation();

  // partículas igual que Home
  const particlesOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
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

  const projects = useMemo(
    () => [
      {
        translationKey: "project_apple_house",
        skills: [
          { name: "Django", icon: <SiDjango /> },
          { name: "React", icon: <FaReact /> },
          { name: "PostgreSQL", icon: <SiPostgresql /> },
          { name: "DRF", icon: <SiDjango /> },
        ],
        repo: null,
        demo: null,
      },
      {
        translationKey: "project_virtual_classrooms",
        skills: [
          { name: "Django", icon: <SiDjango /> },
          { name: "React", icon: <FaReact /> },
          { name: "PostgreSQL", icon: <SiPostgresql /> },
        ],
        repo: null,
        demo: null,
      },
      {
        translationKey: "project_pdf_converter",
        skills: [
          { name: "React", icon: <FaReact /> },
          { name: "Vite", icon: <SiVite /> },
          { name: "Tailwind", icon: <SiTailwindcss /> },
          { name: "Django", icon: <SiDjango /> },
        ],
        repo: null,
        demo: "https://pdf-converter-free.netlify.app",
      },
    ],
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Helmet>
        <title>Proyectos | DevsGen – Yang Florido Solano</title>
        <meta
          name="description"
          content="Proyectos desarrollados por DevsGen usando React, Django y tecnologías modernas para clientes reales."
        />
      </Helmet>


      {/* ✅ FONDO BLANCO (sin gradiente) igual al que quieres */}
      <div className="absolute inset-0 z-0 bg-white dark:bg-slate-950" />

      {/* Particles */}
      <Particles
        id="tsparticles-projects"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Contenido */}
      <section id="projects" className="relative z-10 py-16 md:py-24 pt-20">
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
              {t("projects_title")}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-700 dark:text-slate-200 max-w-3xl mx-auto"
            >
              {t("projects_description")}
            </motion.p>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.translationKey} project={project} t={t} />
            ))}
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
