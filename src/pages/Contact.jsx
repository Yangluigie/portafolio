import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaArrowUp,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaSpinner,
} from "react-icons/fa";
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

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } },
  tap: { scale: 0.95 },
  loading: { scale: 1, transition: { duration: 0.3 } },
};

const particlesInit = async (engine) => {
  await loadFull(engine);
};

function Contact({ isDarkMode }) {
  const { t } = useTranslation();
  const contactRef = useRef(null);
  const isContactInView = useInView(contactRef, {
    once: true,
    margin: "-100px",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    setTimeout(() => {
      console.log("Formulario enviado:", formData);
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div
      className={`relative min-h-screen ${
        isDarkMode ? "text-white" : "text-gray-900"
      }`}
    >
      <Helmet>
        <title>{t("contact_title")} - Yang Florido - Devs Gen</title>
        <meta name="description" content={t("contact_description")} />
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
        id="tsparticles-contact"
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
        id="contact"
        ref={contactRef}
        className="py-16 md:py-24 relative z-10 pt-20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className={`text-4xl md:text-6xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {t("contact_title")}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className={`text-lg md:text-xl ${
                isDarkMode ? "text-gray-200" : "text-gray-700"
              } max-w-3xl mx-auto`}
            >
              {t("contact_description")}
            </motion.p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 max-w-lg mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-left text-sm font-medium ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  } mb-2`}
                >
                  {t("contact_name_label")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode
                      ? "bg-gray-800 text-white border border-gray-700"
                      : "bg-white text-gray-900 border border-gray-300"
                  }`}
                  placeholder={t("contact_name_placeholder")}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={`block text-left text-sm font-medium ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  } mb-2`}
                >
                  {t("contact_email_label")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode
                      ? "bg-gray-800 text-white border border-gray-700"
                      : "bg-white text-gray-900 border border-gray-300"
                  }`}
                  placeholder={t("contact_email_placeholder")}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={`block text-left text-sm font-medium ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  } mb-2`}
                >
                  {t("contact_message_label")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode
                      ? "bg-gray-800 text-white border border-gray-700"
                      : "bg-white text-gray-900 border border-gray-300"
                  }`}
                  placeholder={t("contact_message_placeholder")}
                />
              </div>
              <motion.button
                type="submit"
                variants={buttonVariants}
                initial="initial"
                animate={isSubmitting ? "loading" : "initial"}
                whileHover={!isSubmitting && "hover"}
                whileTap={!isSubmitting && "tap"}
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center py-3 px-6 rounded-full text-lg font-semibold shadow-md transition-colors ${
                  isDarkMode
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    {t("contact_submitting")}
                  </>
                ) : (
                  t("contact_submit_button")
                )}
              </motion.button>
            </form>
            {submitStatus === "success" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-green-500"
              >
                {t("contact_success")}
              </motion.p>
            )}
            {submitStatus === "error" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-red-500"
              >
                {t("contact_error")}
              </motion.p>
            )}
          </motion.div>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 flex justify-center space-x-8"
          >
            <motion.a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className={`${
                isDarkMode
                  ? "text-white hover:text-blue-400"
                  : "text-gray-900 hover:text-blue-600"
              } text-4xl`}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className={`${
                isDarkMode
                  ? "text-white hover:text-blue-400"
                  : "text-gray-900 hover:text-blue-600"
              } text-4xl`}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.1 }}
              className={`${
                isDarkMode
                  ? "text-white hover:text-blue-400"
                  : "text-gray-900 hover:text-blue-600"
              } text-4xl`}
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
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

export default Contact;
