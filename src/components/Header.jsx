import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTranslation } from "react-i18next";

function Header({ isDarkMode, toggleTheme }) {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const glowVariants = {
    initial: { rotate: 0, scale: 1 },
    hover: {
      rotate: 90,
      scale: 1.1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    glow: {
      filter: [
        "drop-shadow(0 0 2px rgba(59, 130, 246, 0.3))",
        "drop-shadow(0 0 8px rgba(59, 130, 246, 1))",
        "drop-shadow(0 0 2px rgba(59, 130, 246, 0.3))",
      ],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const themeButtonVariants = {
    initial: { rotate: 0, scale: 1 },
    animate: {
      rotate: 180,
      scale: [1, 1.2, 1],
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  };

  return (
    <nav
      className={`${
        isDarkMode
          ? "bg-gray-900 bg-opacity-90 backdrop-blur-md text-white"
          : "bg-white bg-opacity-90 backdrop-blur-md text-gray-900"
      } py-4 shadow-lg fixed top-0 w-full z-20`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink
          to="/"
          className="flex items-center space-x-2 text-2xl font-bold tracking-tight"
        >
          <motion.span
            variants={glowVariants}
            initial="initial"
            animate="glow"
            className={`${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            } drop-shadow-md`}
          >
            {t("portfolio_title")}
          </motion.span>
          <motion.div
            variants={glowVariants}
            initial="initial"
            whileHover="hover"
            animate="glow"
            className={`w-7 h-7 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            <ComputerDesktopIcon />
          </motion.div>
        </NavLink>

        <div className="hidden md:flex space-x-8 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors ${
                isActive
                  ? isDarkMode
                    ? "text-blue-400"
                    : "text-blue-600"
                  : isDarkMode
                  ? "hover:text-blue-300"
                  : "hover:text-blue-500"
              }`
            }
          >
            {t("nav_start")}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors ${
                isActive
                  ? isDarkMode
                    ? "text-blue-400"
                    : "text-blue-600"
                  : isDarkMode
                  ? "hover:text-blue-300"
                  : "hover:text-blue-500"
              }`
            }
          >
            {t("nav_about")}
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors ${
                isActive
                  ? isDarkMode
                    ? "text-blue-400"
                    : "text-blue-600"
                  : isDarkMode
                  ? "hover:text-blue-300"
                  : "hover:text-blue-500"
              }`
            }
          >
            {t("nav_projects")}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors ${
                isActive
                  ? isDarkMode
                    ? "text-blue-400"
                    : "text-blue-600"
                  : isDarkMode
                  ? "hover:text-blue-300"
                  : "hover:text-blue-500"
              }`
            }
          >
            {t("nav_contact")}
          </NavLink>
          <motion.button
            variants={themeButtonVariants}
            initial="initial"
            animate={isDarkMode ? "animate" : "initial"}
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              isDarkMode ? "text-yellow-400" : "text-orange-500"
            }`}
          >
            {isDarkMode ? <FiMoon size={24} /> : <FiSun size={24} />}
          </motion.button>
          <select
            onChange={changeLanguage}
            defaultValue={i18n.language}
            className={`p-2 rounded-lg ${
              isDarkMode
                ? "bg-gray-700 text-white"
                : "bg-gray-200 text-gray-900"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <motion.button
            variants={themeButtonVariants}
            initial="initial"
            animate={isDarkMode ? "animate" : "initial"}
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              isDarkMode ? "text-yellow-400" : "text-orange-500"
            }`}
          >
            {isDarkMode ? <FiMoon size={24} /> : <FiSun size={24} />}
          </motion.button>
          <select
            onChange={changeLanguage}
            defaultValue={i18n.language}
            className={`p-2 rounded-lg ${
              isDarkMode
                ? "bg-gray-700 text-white"
                : "bg-gray-200 text-gray-900"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <motion.div
        className={`md:hidden ${
          isDarkMode ? "bg-gray-900 bg-opacity-95" : "bg-white bg-opacity-95"
        } absolute top-full left-0 w-full overflow-hidden`}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors ${
                isActive
                  ? isDarkMode
                    ? "text-blue-400"
                    : "text-blue-600"
                  : isDarkMode
                  ? "hover:text-blue-300"
                  : "hover:text-blue-500"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            {t("nav_start")}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors ${
                isActive
                  ? isDarkMode
                    ? "text-blue-400"
                    : "text-blue-600"
                  : isDarkMode
                  ? "hover:text-blue-300"
                  : "hover:text-blue-500"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            {t("nav_about")}
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors ${
                isActive
                  ? isDarkMode
                    ? "text-blue-400"
                    : "text-blue-600"
                  : isDarkMode
                  ? "hover:text-blue-300"
                  : "hover:text-blue-500"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            {t("nav_projects")}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors ${
                isActive
                  ? isDarkMode
                    ? "text-blue-400"
                    : "text-blue-600"
                  : isDarkMode
                  ? "hover:text-blue-300"
                  : "hover:text-blue-500"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            {t("nav_contact")}
          </NavLink>
        </div>
      </motion.div>
    </nav>
  );
}

export default Header;
