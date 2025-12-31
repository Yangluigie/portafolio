// src/components/Footer.jsx
import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../context/theme.jsx";

const linkBase =
  "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-300";

const linkActive = "text-sm font-semibold text-blue-600 dark:text-blue-400";

function FooterLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? linkActive : linkBase)}
    >
      {children}
    </NavLink>
  );
}

export default function Footer() {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="relative z-10 border-t border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {t("footer_copyright", { year })}
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {t("footer_built_with", "Hecho con React + Tailwind.")}
            </p>
          </div>

          {/* Middle nav */}
          <nav
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            aria-label={t("footer_nav_aria", "Enlaces del pie de página")}
          >
            <FooterLink to="/">{t("nav_start")}</FooterLink>
            <FooterLink to="/about">{t("nav_about")}</FooterLink>
            <FooterLink to="/projects">{t("nav_projects")}</FooterLink>
            <FooterLink to="/contact">{t("nav_contact")}</FooterLink>
          </nav>

          {/* Right socials */}
          <div className="flex items-center justify-center gap-3 md:justify-end">
            <a
              href="https://github.com/Yangluigie"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/70 hover:bg-white shadow-sm border border-slate-200/60
                         dark:bg-slate-900/60 dark:hover:bg-slate-900 dark:border-slate-800/60 transition"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub className="text-lg text-slate-900 dark:text-white" />
            </a>

            <a
              href="https://www.linkedin.com/in/yang-florido-a57b512ab/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/70 hover:bg-white shadow-sm border border-slate-200/60
                         dark:bg-slate-900/60 dark:hover:bg-slate-900 dark:border-slate-800/60 transition"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin className="text-lg text-blue-700 dark:text-blue-400" />
            </a>

            {/* Tiny theme hint (opcional, no funcional) */}
            <span className="ml-2 hidden sm:inline-flex items-center text-xs text-slate-500 dark:text-slate-400">
              {isDark ? t("footer_mode_dark", "Dark") : t("footer_mode_light", "Light")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
