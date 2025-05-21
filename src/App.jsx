import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme ? JSON.parse(savedTheme) : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
              <Route
                path="/about"
                element={<About isDarkMode={isDarkMode} />}
              />
              <Route
                path="/projects"
                element={<Projects isDarkMode={isDarkMode} />}
              />
              <Route
                path="/contact"
                element={<Contact isDarkMode={isDarkMode} />}
              />
            </Routes>
          </main>
          <Footer isDarkMode={isDarkMode} />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
