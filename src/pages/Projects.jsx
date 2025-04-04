import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useState } from "react";
import { FaArrowUp, FaReact, FaPython } from "react-icons/fa";
import { SiDjango, SiPostgresql } from "react-icons/si";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Helmet } from "react-helmet-async";

// Variantes para animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
    scale: 0.95,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      duration: 0.6,
    },
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3 },
  },
};

// Variantes para los íconos de habilidades
const skillIconVariants = (xStart, yStart, index) => ({
  hidden: {
    opacity: 0,
    x: xStart, // Usaremos valores relativos en vw más abajo
    y: yStart,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    x: `calc(0.5rem + ${index} * 2vw)`, // Posición final relativa al viewport
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      duration: 0.4,
    },
  },
});

// Función para inicializar las partículas
const particlesInit = async (engine) => {
  await loadFull(engine);
};

// Datos de proyectos con habilidades e íconos asociados
const projects = [
  {
    title: "Store Online Apple House",
    description:
      "An online store for Apple products, built with Django, DRF, and React. Includes MySQL to PostgreSQL migration and payment API integration.",
    link: "https://github.com/yourusername/apple-house",
    skills: [
      { name: "Django", icon: <SiDjango /> },
      { name: "React", icon: <FaReact /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "DRF", icon: <SiDjango /> },
      { name: "Payment APIs", icon: <FaPython /> },
    ],
  },
  {
    title: "Virtual Classrooms - Online Store",
    description:
      "Scalable web application for virtual classrooms with JWT authentication, using Django, React, and Zustand, with a PostgreSQL database.",
    link: "https://github.com/yourusername/virtual-classrooms",
    skills: [
      { name: "Django", icon: <SiDjango /> },
      { name: "React", icon: <FaReact /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "JWT", icon: <FaPython /> },
      { name: "Zustand", icon: <FaReact /> },
    ],
  },
];

function Projects({ isDarkMode }) {
  const projectsRef = useRef(null);
  const isProjectsInView = useInView(projectsRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div
      className={`relative min-h-screen ${
        isDarkMode ? "text-white" : "text-gray-900"
      }`}
    >
      <Helmet>
        <title>Proyectos - Yang Florido - Devs Gen, Desarrollador Web</title>
        <meta
          name="description"
          content="Explora los proyectos de Yang Florido - Devs Gen en React, Django y más. Soluciones web innovadoras."
        />
      </Helmet>
      {/* Fondo animado */}
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

      {/* Partículas */}
      <Particles
        id="tsparticles-projects"
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

      {/* Contenido */}
      <section
        id="projects"
        ref={projectsRef}
        className="py-16 md:py-24 relative z-10 pt-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className={`text-4xl md:text-6xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              My Projects
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className={`text-lg md:text-xl ${
                isDarkMode ? "text-gray-200" : "text-gray-700"
              } max-w-3xl mx-auto`}
            >
              Here are some of the projects I've worked on, showcasing my skills
              in web development and solution design.
            </motion.p>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              const controls = useAnimation();
              const [isIconsVisible, setIsIconsVisible] = useState(false);

              // Controlar la animación según el estado
              const handleAnimation = (state) => {
                setIsIconsVisible(state);
                controls.start(state ? "visible" : "hidden");
              };

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  onHoverStart={() => handleAnimation(true)}
                  onHoverEnd={() => handleAnimation(false)}
                  onTap={() => handleAnimation(!isIconsVisible)}
                  viewport={{ once: true, amount: 0.5 }}
                  className={`${
                    isDarkMode ? "bg-gray-800 bg-opacity-80" : "bg-gray-100"
                  } p-6 rounded-lg shadow-lg relative overflow-hidden`}
                >
                  <h3
                    className={`text-xl font-semibold ${
                      isDarkMode ? "text-blue-400" : "text-blue-600"
                    } mb-2`}
                  >
                    {project.title}
                  </h3>
                  <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                    {project.description}
                  </p>
                  <div className="mt-4 flex items-center flex-wrap gap-2 relative">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block ${
                        isDarkMode
                          ? "text-blue-300 hover:text-blue-400"
                          : "text-blue-500 hover:text-blue-600"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      See Project
                    </a>
                    {/* Contenedor de íconos al lado derecho del enlace */}
                    <div className="flex items-center ml-2 pointer-events-none flex-nowrap">
                      {project.skills.map((skill, skillIndex) => {
                        const positions = [
                          { x: "-10vw", y: "-5vh" }, // Desde arriba-izquierda
                          { x: "10vw", y: "-5vh" }, // Desde arriba-derecha
                          { x: "-10vw", y: "5vh" }, // Desde abajo-izquierda
                          { x: "10vw", y: "5vh" }, // Desde abajo-derecha
                          { x: "0", y: "-10vh" }, // Desde arriba-centro
                        ];
                        const pos = positions[skillIndex % positions.length];

                        return (
                          <motion.div
                            key={skillIndex}
                            variants={skillIconVariants(
                              pos.x,
                              pos.y,
                              skillIndex
                            )}
                            initial="hidden"
                            animate={controls}
                            className={`text-[clamp(1rem,2vw,1.5rem)] ${
                              isDarkMode ? "text-blue-300" : "text-blue-500"
                            } mx-1`}
                            title={skill.name}
                          >
                            {skill.icon}
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Botón Volver Arriba */}
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

export default Projects;
