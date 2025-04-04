import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
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
};

// Función para inicializar las partículas
const particlesInit = async (engine) => {
  await loadFull(engine);
};

function About({ isDarkMode }) {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });

  return (
    <div
      className={`relative min-h-screen ${
        isDarkMode ? "text-white" : "text-gray-900"
      }`}
    >
      {/* SEO Dinámico */}
      <Helmet>
        <title>Sobre Mí - Yang Florido - Devs Gen, Desarrollador Web</title>
        <meta
          name="description"
          content="Conoce a Yang Florido - Devs Gen, experto en React, Django y bases de datos para soluciones web únicas."
        />
      </Helmet>

      {/* Fondo y partículas */}
      {/* Fondo animado */}
      <div
        className={`absolute inset-0 h-full min-h-screen ${
          isDarkMode
            ? "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-gradient bg-[length:200%_200%]"
            : "bg-gradient-to-br from-blue-100 via-teal-100 to-yellow-100 animate-gradient bg-[length:200%_200%]"
        }`}
      ></div>
      <div
        className={`absolute inset-0 h-full min-h-screen ${
          isDarkMode ? "bg-gray-900 bg-opacity-50" : "bg-white bg-opacity-50"
        }`}
      ></div>

      {/* Partículas */}
      <Particles
        id="tsparticles-about"
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
        id="about"
        ref={aboutRef}
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
              About Me
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className={`text-lg md:text-xl ${
                isDarkMode ? "text-gray-200" : "text-gray-700"
              } max-w-3xl mx-auto`}
            >
              I'm a passionate web developer with experience in React, Django,
              and relational databases. I specialize in creating unique and
              efficient digital solutions, combining creativity and technology
              to solve real-world problems.
            </motion.p>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <motion.div
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
                My Philosophy
              </h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                I believe in continuous learning and building software that not
                only works, but is also intuitive and elegant. My goal is to
                deliver value through clean code and exceptional user
                experiences.
              </p>
            </motion.div>
            <motion.div
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
                Interests
              </h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                In addition to programming, I enjoy exploring new technologies,
                reading about software development, and working on personal
                projects that challenge my skills.
              </p>
            </motion.div>
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

export default About;
