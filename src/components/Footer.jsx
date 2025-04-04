import { NavLink } from "react-router-dom";

function Footer({ isDarkMode }) {
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
          © {new Date().getFullYear()} YangDev | All rights reserved.
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
            Start
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
            Projects
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
            Contact
          </NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
