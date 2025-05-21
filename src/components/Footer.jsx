import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer({ isDarkMode }) {
  const { t } = useTranslation();

  return (
    <footer
      className={`py-6 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-700"
      } relative z-10`}
    >
      <div className="container mx-auto px-4 text-center">
        <p
          className={`text-sm ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {t("footer_copyright", { year: new Date().getFullYear() })}
        </p>
        <div className="mt-2 space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm transition-colors ${
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
            to="/projects"
            className={({ isActive }) =>
              `text-sm transition-colors ${
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
              `text-sm transition-colors ${
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
