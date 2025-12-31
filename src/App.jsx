import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./layouts/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader"; // ✅ Loader PRO

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center rounded-2xl border border-slate-200/60 bg-white/70 p-8 shadow-lg backdrop-blur-sm dark:border-slate-800/60 dark:bg-slate-900/60">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">404</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Página no encontrada.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold
                       bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Ir al inicio
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold
                       border border-slate-300/70 text-slate-900 hover:bg-slate-100 transition
                       dark:border-slate-700/70 dark:text-white dark:hover:bg-slate-800/60"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
