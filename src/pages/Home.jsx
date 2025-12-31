import { motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaPython,
  FaReact,
  FaYarn,
  FaMapMarkerAlt,
  FaArrowUp,
  FaSpinner,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiDjango,
  SiVite,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
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
  hover: { scale: 1.05, transition: { duration: 0.25 } },
  tap: { scale: 0.96 },
  glow: {
    filter: [
      "drop-shadow(0 0 4px rgba(59, 130, 246, 0.55))",
      "drop-shadow(0 0 10px rgba(147, 51, 234, 0.7))",
      "drop-shadow(0 0 6px rgba(236, 72, 153, 0.5))",
      "drop-shadow(0 0 4px rgba(59, 130, 246, 0.55))",
    ],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
  loading: { scale: 1, transition: { duration: 0.25 } },
};

const cardVariants = {
  offscreen: { y: 28, opacity: 0, scale: 0.98 },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 16,
      duration: 0.55,
    },
  },
};

const testimonialVariants = {
  offscreen: { opacity: 0, x: -24 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 14,
      duration: 0.55,
    },
  },
};

const particlesInit = async (engine) => {
  await loadFull(engine);
};

export default function Home() {
  const { t } = useTranslation();
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 1600);
  };

  // ✅ CAMBIO: title/company pasan a ser keys (NO strings hardcodeados)
  const experiences = useMemo(
    () => [
      {
        titleKey: "experience_apple_house_title",
        companyKey: "experience_apple_house_company",
        translationKey: "experience_apple_house",
      },
      {
        titleKey: "experience_freelance_title",
        companyKey: "experience_freelance_company",
        translationKey: "experience_freelance",
      },
      {
        titleKey: "experience_movidic_title",
        companyKey: "experience_movidic_company",
        translationKey: "experience_movidic",
      },
      {
        titleKey: "experience_data_tools_title",
        companyKey: "experience_data_tools_company",
        translationKey: "experience_data_tools",
      },
      {
        titleKey: "experience_tech_startup_title",
        companyKey: "experience_tech_startup_company",
        translationKey: "experience_tech_startup",
      },
    ],
    []
  );

  // ✅ CAMBIO: role pasa a ser key para traducirlo
  const testimonials = useMemo(
    () => [
      {
        name: "Ana Pérez",
        roleKey: "testimonial_ana_role",
        translationKey: "testimonial_ana",
      },
      {
        name: "Carlos Gómez",
        roleKey: "testimonial_carlos_role",
        translationKey: "testimonial_carlos",
      },
    ],
    []
  );

  const skills = useMemo(
    () => [
      { name: "HTML", Icon: FaHtml5, hover: "hover:text-orange-500" },
      { name: "CSS", Icon: FaCss3Alt, hover: "hover:text-blue-500" },
      { name: "JavaScript", Icon: FaJs, hover: "hover:text-yellow-500" },
      { name: "Git", Icon: FaGitAlt, hover: "hover:text-orange-600" },
      { name: "Python", Icon: FaPython, hover: "hover:text-yellow-400" },
      { name: "Django", Icon: SiDjango, hover: "hover:text-green-600" },
      { name: "Django REST", Icon: SiDjango, hover: "hover:text-green-600" },
      { name: "React", Icon: FaReact, hover: "hover:text-cyan-500" },
      { name: "Vite", Icon: SiVite, hover: "hover:text-purple-500" },
      { name: "Yarn", Icon: FaYarn, hover: "hover:text-blue-600" },
      { name: "Tailwind", Icon: SiTailwindcss, hover: "hover:text-teal-500" },
      { name: "MySQL", Icon: SiMysql, hover: "hover:text-blue-700" },
      {
        name: "PostgreSQL",
        Icon: SiPostgresql,
        hover: "hover:text-blue-800",
      },
    ],
    []
  );

  // Partículas visibles (también en light mode)
  const particlesOptions = useMemo(
    () => ({
      fullScreen: { enable: false }, // IMPORTANTE: lo ponemos dentro del HERO con altura real
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
    <div className="relative">
      <Helmet>
      <title>DevsGen | Yang Florido Solano – Desarrollador Web</title>
      <meta
        name="description"
        content="DevsGen es la marca personal de Yang Florido Solano, desarrollador web especializado en React, Django y soluciones digitales modernas."
      />

      {/* 🌍 hreflang para SEO multidioma */}
      <link rel="alternate" href="https://devsgen-yang-portfolio.netlify.app/" hreflang="es" />
      <link rel="alternate" href="https://devsgen-yang-portfolio.netlify.app/" hreflang="en" />
      <link rel="alternate" href="https://devsgen-yang-portfolio.netlify.app/" hreflang="x-default" />

      {/* 🔥 Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://devsgen-yang-portfolio.netlify.app/#person",
              "name": "Yang Florido Solano",
              "jobTitle": "Web Developer",
              "url": "https://devsgen-yang-portfolio.netlify.app",
              "image": "https://devsgen-yang-portfolio.netlify.app/foto.jpg",
              "sameAs": [
                "https://github.com/Yangluigie",
                "https://www.linkedin.com/in/yang-florido-a57b512ab/"
              ]
            },
            {
              "@type": "Organization",
              "@id": "https://devsgen-yang-portfolio.netlify.app/#organization",
              "name": "DevsGen",
              "url": "https://devsgen-yang-portfolio.netlify.app",
              "logo": "https://devsgen-yang-portfolio.netlify.app/logo.png",
              "founder": {
                "@id": "https://devsgen-yang-portfolio.netlify.app/#person"
              }
            },
            {
              "@type": "WebSite",
              "@id": "https://devsgen-yang-portfolio.netlify.app/#website",
              "url": "https://devsgen-yang-portfolio.netlify.app",
              "name": "DevsGen",
              "publisher": {
                "@id": "https://devsgen-yang-portfolio.netlify.app/#organization"
              }
            }
          ]
        })}
      </script>
    </Helmet>


      {/* Background global */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-teal-100 to-yellow-100 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 opacity-70" />
        {/* Menos opacidad para NO tapar partículas */}
        <div className="absolute inset-0 bg-white/35 dark:bg-slate-950/35" />
      </div>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
      >
        {/* Particles dentro del hero -> altura garantizada */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute inset-0 z-0"
        />

        <div className="container mx-auto px-4 py-12 md:py-20 text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-7"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              {t("home_title")}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-2xl text-slate-700 dark:text-slate-200 max-w-3xl mx-auto"
            >
              {t("home_description")}
            </motion.p>

            <motion.img
              variants={itemVariants}
              src="/foto.jpg"
              alt="Foto de perfil"
              className="w-36 h-36 md:w-52 md:h-52 rounded-full mx-auto object-cover shadow-xl ring-4 ring-white/60 dark:ring-slate-900/40"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
              loading="eager"
            />

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-2 text-slate-700 dark:text-slate-200"
            >
              <FaMapMarkerAlt className="text-blue-600 dark:text-yellow-400" />
              <span className="text-lg md:text-xl inline-flex items-center gap-2">
                <span>{t("home_location")}</span>
                <span className="inline-flex" aria-hidden="true">
                  <svg
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="20" height="7" fill="#FCD116" />
                    <rect y="7" width="20" height="3.5" fill="#003087" />
                    <rect y="10.5" width="20" height="3.5" fill="#CE1126" />
                  </svg>
                </span>
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center py-3 px-8 rounded-full text-lg font-semibold shadow-md bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  {t("home_see_projects", "Ver proyectos")}
                </Link>
              </motion.div>

              <motion.a
                href="/yangcv.pdf"
                download="Yang_Florido_CV.pdf"
                variants={buttonVariants}
                initial="initial"
                animate={isDownloading ? "loading" : "glow"}
                whileHover={!isDownloading ? "hover" : undefined}
                whileTap={!isDownloading ? "tap" : undefined}
                onClick={handleDownload}
                className="inline-flex items-center justify-center py-3 px-8 rounded-full text-lg font-semibold shadow-md
                           border border-blue-600 text-blue-700 hover:bg-blue-50
                           dark:border-white/60 dark:text-white dark:hover:bg-slate-800/60 transition"
              >
                {isDownloading ? <FaSpinner className="animate-spin mr-2" /> : null}
                {isDownloading ? t("home_downloading", "Downloading...") : t("home_download_cv")}
              </motion.a>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Yangluigie"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-white/70 hover:bg-white shadow-md
                             dark:bg-slate-900/60 dark:hover:bg-slate-900 transition"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <FaGithub className="text-xl text-slate-900 dark:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yang-florido-a57b512ab/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-white/70 hover:bg-white shadow-md
                             dark:bg-slate-900/60 dark:hover:bg-slate-900 transition"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <FaLinkedin className="text-xl text-blue-700 dark:text-blue-400" />
                </a>
              </div>
            </motion.div>

            
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        ref={experienceRef}
        className="py-16 md:py-24 relative"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            {t("home_experience_title")}
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.45 }}
                className="p-6 rounded-xl shadow-lg bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60"
              >
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
                  {t(exp.titleKey)}
                </h3>
                <p className="text-slate-700 dark:text-slate-200 mb-4">
                  {t(exp.companyKey)}
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  {t(exp.translationKey)}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold
                         bg-slate-900 text-white hover:bg-slate-800
                         dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 transition"
            >
              {t("home_cta_projects", "Ver casos y proyectos")}
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            {t("home_testimonials_title")}
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={testimonialVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.45 }}
                className="p-6 rounded-xl shadow-lg bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60"
              >
                <p className="text-slate-700 dark:text-slate-200 mb-4 italic">
                  “{t(testimonial.translationKey)}”
                </p>
                <p className="font-semibold text-blue-700 dark:text-blue-400">
                  {testimonial.name}
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  {t(testimonial.roleKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" ref={skillsRef} className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            {t("home_skills_title")}
          </h2>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => {
              const Icon = skill.Icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.45 }}
                  className="p-4 rounded-xl shadow-lg text-center bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60"
                >
                  <div className="text-4xl mb-2">
                    <Icon
                      className={`text-slate-900 dark:text-white ${skill.hover} transition`}
                    />
                  </div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {skill.name}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    {t("skill_years", {
                      years:
                        skill.name.includes("Django") || skill.name === "Python"
                          ? "3+"
                          : "2+",
                    })}
                  </p>
                </motion.div>
              );
            })}
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
        className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg"
        aria-label="Volver arriba"
        type="button"
      >
        <FaArrowUp />
      </motion.button>
    </div>
  );
}
