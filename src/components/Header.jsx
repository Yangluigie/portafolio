import { useEffect, useMemo, useState, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/theme.jsx";

const navClass =
  "text-lg font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-300";

const navActive = "text-lg font-semibold text-blue-600 dark:text-blue-400";

export default function Header() {
  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { to: "/", label: t("nav_start") },
      { to: "/about", label: t("nav_about") },
      { to: "/projects", label: t("nav_projects") },
      { to: "/contact", label: t("nav_contact") },
    ],
    [t]
  );

  const menuVariants = useMemo(
    () => ({
      closed: { opacity: 0, height: 0, transition: { duration: 0.22 } },
      open: { opacity: 1, height: "auto", transition: { duration: 0.22 } },
    }),
    []
  );

  const glowVariants = useMemo(
    () => ({
      initial: { rotate: 0, scale: 1 },
      hover: { rotate: 90, scale: 1.08, transition: { duration: 0.35 } },
      glow: {
        filter: [
          "drop-shadow(0 0 2px rgba(59, 130, 246, 0.3))",
          "drop-shadow(0 0 8px rgba(59, 130, 246, 1))",
          "drop-shadow(0 0 2px rgba(59, 130, 246, 0.3))",
        ],
        transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
      },
    }),
    []
  );

  // ✅ Cierra el menú móvil cuando cambias de ruta (de verdad)
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // ✅ Cierra con ESC (buena UX)
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const changeLanguage = useCallback(
    (event) => {
      const selectedLanguage = event.target.value;
      i18n.changeLanguage(selectedLanguage);
      localStorage.setItem("language", selectedLanguage);
    },
    [i18n]
  );

  return (
    <nav className="fixed top-0 w-full z-20 border-b border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-950/70 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          className="flex items-center space-x-2 text-2xl font-bold tracking-tight"
          aria-label="Ir al inicio"
        >
          <motion.span
            variants={glowVariants}
            initial="initial"
            animate="glow"
            className="text-blue-600 dark:text-blue-400 drop-shadow-md"
          >
            {t("portfolio_title")}
          </motion.span>

          <motion.div
            variants={glowVariants}
            initial="initial"
            whileHover="hover"
            animate="glow"
            className="w-7 h-7 text-slate-900 dark:text-slate-100"
            aria-hidden="true"
          >
            <ComputerDesktopIcon />
          </motion.div>
        </NavLink>

        {/* Desktop */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? navActive : navClass)}
            >
              {item.label}
            </NavLink>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-orange-500 dark:text-yellow-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition"
            aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            type="button"
          >
            {isDark ? <FiMoon size={22} /> : <FiSun size={22} />}
          </button>

          {/* ✅ value (controlado) en vez de defaultValue */}
          <select
            onChange={changeLanguage}
            value={i18n.language?.split("-")[0]}
            className="p-2 rounded-lg bg-slate-100 text-slate-900 dark:bg-slate-800/60 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Seleccionar idioma"
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-orange-500 dark:text-yellow-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition"
            aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            type="button"
          >
            {isDark ? <FiMoon size={22} /> : <FiSun size={22} />}
          </button>

          <select
            onChange={changeLanguage}
            value={i18n.language?.split("-")[0]}
            className="p-2 rounded-lg bg-slate-100 text-slate-900 dark:bg-slate-800/60 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Seleccionar idioma"
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>

          <button
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Dropdown Mobile */}
      <motion.div
        id="mobile-menu"
        className="md:hidden absolute top-full left-0 w-full overflow-hidden border-b border-slate-200/60 dark:border-slate-800/60 bg-white/95 dark:bg-slate-950/95"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? navActive : navClass)}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
