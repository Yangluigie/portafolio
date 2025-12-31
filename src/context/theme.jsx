import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);

const STORAGE_KEY = "theme"; // guardaremos: "dark" | "light"

function getSystemPrefersDark() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
}

function readInitialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    // ignore
  }
  return getSystemPrefersDark() ? "dark" : "light";
}

function applyThemeToDocument(theme) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
  // opcional: ayuda a algunos componentes nativos (scrollbar/form controls)
  document.documentElement.style.colorScheme = theme;
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => readInitialTheme());

  // Aplica theme al DOM + persiste
  useEffect(() => {
    applyThemeToDocument(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  // Sync entre pestañas/ventanas
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key !== STORAGE_KEY) return;
      const next = e.newValue;
      if (next === "dark" || next === "light") setThemeState(next);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // Si NO hay tema guardado, seguir cambios del sistema (opcional, pero pro)
  useEffect(() => {
    let hasSavedTheme = false;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      hasSavedTheme = saved === "dark" || saved === "light";
    } catch {
      hasSavedTheme = false;
    }
    if (hasSavedTheme) return;

    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mq) return;

    const handler = (ev) => {
      setThemeState(ev.matches ? "dark" : "light");
    };

    // soporte viejo/nuevo
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  const value = useMemo(() => {
    const isDark = theme === "dark";

    const setTheme = (next) => {
      const normalized = next === "dark" ? "dark" : "light";
      setThemeState(normalized);
    };

    const toggleTheme = () => setThemeState((prev) => (prev === "dark" ? "light" : "dark"));

    return {
      theme,      // "dark" | "light"
      isDark,     // boolean
      setTheme,   // ( "dark" | "light" ) => void
      toggleTheme // () => void
    };
  }, [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme debe usarse dentro de ThemeProvider");
  return ctx;
}
