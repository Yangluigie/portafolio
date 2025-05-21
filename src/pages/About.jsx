import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

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

const cardVariants = {
  offscreen: { y: 50, opacity: 0, scale: 0.95 },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 15, duration: 0.6 },
  },
};

const particlesInit = async (engine) => {
  await loadFull(engine);
};

function About({ isDarkMode }) {
  const { t } = useTranslation();
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });

  return (
    <div
      className={`relative min-h-screen ${
        isDarkMode ? "text-white" : "text-gray-900"
      }`}
    >
      <Helmet>
        <title>{t("about_title")} - Yang Florido - Devs Gen</title>
        <meta name="description" content={t("about_description")} />
      </Helmet>
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
              {t("about_title")}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className={`text-lg md:text-xl ${
                isDarkMode ? "text-gray-200" : "text-gray-700"
              } max-w-3xl mx-auto`}
            >
              {t("about_description")}
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
                {t("about_philosophy_title")}
              </h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                {t("about_philosophy_description")}
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
                {t("about_interests_title")}
              </h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                {t("about_interests_description")}
              </p>
            </motion.div>
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

export default About;
