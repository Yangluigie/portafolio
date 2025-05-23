import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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

// Variantes para animaciones (sin cambios)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } },
  tap: { scale: 0.95 },
  glow: {
    filter: [
      "drop-shadow(0 0 4px rgba(59, 130, 246, 0.6))",
      "drop-shadow(0 0 12px rgba(147, 51, 234, 0.8))",
      "drop-shadow(0 0 8px rgba(236, 72, 153, 0.6))",
      "drop-shadow(0 0 4px rgba(59, 130, 246, 0.6))",
    ],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
  loading: { scale: 1, transition: { duration: 0.3 } },
};

const cardVariants = {
  offscreen: { y: 50, opacity: 0, scale: 0.95 },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 15, duration: 0.6 },
  },
};

const testimonials = [
  {
    name: "Ana Pérez",
    role: "Cliente - Apple House",
    translationKey: "testimonial_ana",
  },
  {
    name: "Carlos Gómez",
    role: "Colaborador - MOVIDIC",
    translationKey: "testimonial_carlos",
  },
];

const testimonialVariants = {
  offscreen: { opacity: 0, x: -30 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.6 },
  },
};

const particlesInit = async (engine) => {
  await loadFull(engine);
};

function Home({ isDarkMode }) {
  const { t } = useTranslation();
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const isExperienceInView = useInView(experienceRef, {
    once: true,
    margin: "-100px",
  });
  const isSkillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 2000);
  };

  const experiences = [
    {
      title: t("experience_apple_house_title", "Full Stack Developer"),
      company: "Freelance - Apple House | 2025 - Present",
      translationKey: "experience_apple_house",
    },
    {
      title: t("experience_freelance_title", "Full Stack Developer"),
      company: "Freelance - Return to Freedom Foundation | 2025 - Present",
      translationKey: "experience_freelance",
    },
    {
      title: t("experience_movidic_title", "IT Systems Analyst"),
      company:
        "Cundinamarca Digital Mobility Temporary Union – MOVIDIC (Cundinamarca Transit) | 2023 - Present",
      translationKey: "experience_movidic",
    },
    {
      title: t("experience_data_tools_title", "IT Support Technician"),
      company: "Data Tools S.A. (Transito de Cundinamarca) | 2022 - 2023",
      translationKey: "experience_data_tools",
    },
    {
      title: t(
        "experience_tech_startup_title",
        "Structured Cabling and Support Technician"
      ),
      company: "Tech Startup | 2014 - 2015",
      translationKey: "experience_tech_startup",
    },
  ];

  const skills = [
    {
      name: "HTML",
      icon: (
        <FaHtml5
          className={`${
            isDarkMode ? "text-white" : "text-gray-900"
          } hover:text-orange-500 cursor-pointer`}
        />
      ),
    },
    {
      name: "CSS",
      icon: (
        <FaCss3Alt
          className={`${
            isDarkMode ? "text-white" : "text-gray-900"
          } hover:text-blue-500 cursor-pointer`}
        />
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <FaJs
          className={`${
            isDarkMode ? "text-white" : "text-gray-900"
          } hover:text-yellow-500 cursor-pointer`}
        />
      ),
    },
    {
      name: "Git",
      icon: (
        <FaGitAlt
          className={`${
            isDarkMode ? "text-white" : "text-gray-900"
          } hover:text-orange-600 cursor-pointer`}
        />
      ),
    },
    {
      name: "Python",
      icon: (
        <FaPython
          className={`${
            isDarkMode ? "text-white" : "text-gray-900"
          } hover:text-yellow-400 cursor-pointer`}
        />
      ),
    },
    {
      name: "Django",
      icon: (
        <SiDjango
          className={`${
            isDarkMode ? "text-white" : "text-gray-900"
          } hover:text-green-600 cursor-pointer`}
        />
      ),
    },
    {
      name: "Django REST",
      icon: (
        <SiDjango
          className={`${
            isDarkMode ? "text-white" : "text-gray-900"
          } hover:text-green-600 cursor-pointer`}
        />
      ),
    },
    {
      name: "React",
      icon: (
        <FaReact
          className={`${
            isDarkMode ? "text-white" : "text-gray-900"
          } hover:text-cyan-500 cursor-pointer`}
        />
      ),
    },
    {
      name: "Vite",
      icon: (
        <SiVite
          className={`${
            isDarkMode ? "text-white" : "text-gray-900"
          } hover:text-purple-500 cursor-pointer`}
        />
      ),
    },
    {
      name: "Yarn",
      icon: (
        <FaYarn
          className={`${
            isDarkMode ? "text-white" : "text-gray-900"
          } hover:text-blue-600 cursor-pointer`}
        />
      ),
    },
    {
      name: "Tailwind",
      icon: (
        <SiTailwindcss
          className={`${
            isDarkMode ? "text-white" : "text-gray-900"
          } hover:text-teal-500 cursor-pointer`}
        />
      ),
    },
    {
      name: "MySQL",
      icon: (
        <SiMysql
          className={`${
            isDarkMode ? "text-white" : "text-gray-900"
          } hover:text-blue-700 cursor-pointer`}
        />
      ),
    },
    {
      name: "PostgreSQL",
      icon: (
        <SiPostgresql
          className={`${
            isDarkMode ? "text-white" : "text-gray-900"
          } hover:text-blue-800 cursor-pointer`}
        />
      ),
    },
  ];

  return (
    <div className={`relative ${isDarkMode ? "text-white" : "text-gray-900"}`}>
      <Helmet>
        <title>{t("home_title")}</title>
        <meta name="description" content={t("home_description")} />
      </Helmet>
      <div
        className={`absolute inset-0 ${
          isDarkMode
            ? "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-gradient bg-[length:200%_200%]"
            : "bg-gradient-to-br from-blue-100 via-teal-100 to-yellow-100 animate-gradient bg-[length:200%_200%]"
        } min-h-full`}
      ></div>
      <div
        className={`absolute inset-0 ${
          isDarkMode ? "bg-gray-900 bg-opacity-50" : "bg-white bg-opacity-50"
        } min-h-full`}
      ></div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: isDarkMode ? "#ffffff" : "#3b82f6" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              outMode: "out",
            },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
        }}
        className="absolute inset-0 z-0"
      />
      <div
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="container mx-auto py-12 md:py-20 text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className={`text-4xl md:text-6xl lg:text-7xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              } tracking-tight`}
            >
              {t("home_title")}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className={`text-lg md:text-2xl ${
                isDarkMode ? "text-gray-200" : "text-gray-700"
              } max-w-2xl mx-auto`}
            >
              {t("home_description")}
            </motion.p>
            <motion.img
              variants={itemVariants}
              src="/foto.jpg"
              alt="profile photo"
              className="w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto object-cover shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 120, delay: 0.6 }}
            />
            <motion.div
              variants={itemVariants}
              className={`flex items-center justify-center space-x-2 ${
                isDarkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              <FaMapMarkerAlt
                className={isDarkMode ? "text-yellow-400" : "text-blue-600"}
              />
              <span className="text-lg md:text-xl flex items-center space-x-2">
                <span>{t("home_location")}</span>
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
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-4"
            >
              <motion.a
                href="/projects"
                variants={buttonVariants}
                initial="initial"
                animate="glow"
                whileHover="hover"
                whileTap="tap"
                className={`inline-block ${
                  isDarkMode
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                } py-3 px-8 rounded-full text-lg font-semibold transition-colors shadow-md`}
              >
                {t("home_see_projects")}
              </motion.a>
              <motion.a
                href="/yangcv.pdf"
                download="Yang_Florido_CV.pdf"
                variants={buttonVariants}
                initial="initial"
                animate={isDownloading ? "loading" : "glow"}
                whileHover={!isDownloading && "hover"}
                whileTap={!isDownloading && "tap"}
                onClick={handleDownload}
                className={`inline-block flex items-center justify-center ${
                  isDarkMode
                    ? "bg-transparent border border-white text-white hover:bg-gray-700"
                    : "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50"
                } py-3 px-8 rounded-full text-lg font-semibold transition-colors shadow-md`}
              >
                {isDownloading ? (
                  <FaSpinner className="animate-spin mr-2" />
                ) : null}
                {isDownloading ? "Downloading..." : t("home_download_cv")}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <section
        id="experience"
        ref={experienceRef}
        className="py-16 md:py-24 relative z-10"
      >
        <div className="container mx-auto px-4">
          <h2
            className={`text-3xl md:text-5xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-900"
            } text-center mb-12`}
          >
            {t("home_experience_title")}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                className={`${
                  isDarkMode ? "bg-gray-800 bg-opacity-80" : "bg-gray-100"
                } p-6 rounded-lg shadow-lg`}
              >
                <h3
                  className={`text-xl font-semibold ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  } mb-2`}
                >
                  {exp.title}
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  } mb-4`}
                >
                  {exp.company}
                </p>
                <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                  {t(exp.translationKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4">
          <h2
            className={`text-3xl md:text-5xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-900"
            } text-center mb-12`}
          >
            {t("home_testimonials_title")}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={testimonialVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                className={`${
                  isDarkMode ? "bg-gray-800 bg-opacity-80" : "bg-gray-100"
                } p-6 rounded-lg shadow-lg`}
              >
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  } mb-4 italic`}
                >
                  "{t(testimonial.translationKey)}"
                </p>
                <p
                  className={`font-semibold ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {testimonial.name}
                </p>
                <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                  {testimonial.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="skills"
        ref={skillsRef}
        className="py-16 md:py-24 relative z-10"
      >
        <div className="container mx-auto px-4">
          <h2
            className={`text-3xl md:text-5xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-900"
            } text-center mb-12`}
          >
            {t("home_skills_title")}
          </h2>
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                className={`${
                  isDarkMode ? "bg-gray-800 bg-opacity-80" : "bg-gray-100"
                } p-4 rounded-lg shadow-lg text-center`}
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p
                  className={`font-semibold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {skill.name}
                </p>
                <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                  {t("skill_years", {
                    years:
                      skill.name.includes("Django") || skill.name === "Python"
                        ? "3+"
                        : "2+",
                  })}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 p-3 rounded-full ${
          isDarkMode ? "bg-blue-600 text-white" : "bg-blue-500 text-white"
        } shadow-lg z-20`}
      >
        <FaArrowUp />
      </motion.button>
    </div>
  );
}

export default Home;
