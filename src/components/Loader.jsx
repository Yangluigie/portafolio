// src/components/Loader.jsx
import { motion } from "framer-motion";
import { useMemo } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const particlesInit = async (engine) => {
  await loadFull(engine);
};

export default function Loader() {
  const particlesOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      particles: {
        number: { value: 55, density: { enable: true, value_area: 900 } },
        color: { value: ["#2563eb", "#06b6d4", "#a855f7"] },
        shape: { type: "circle" },
        opacity: { value: 0.55 },
        size: { value: 3, random: true },
        move: {
          enable: true,
          speed: 1.1,
          direction: "none",
          random: true,
          outMode: "out",
        },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 110, duration: 0.4 } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Particles */}
      <Particles
        id="tsparticles-loader"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Glow background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-40 bg-blue-500 dark:opacity-30" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-35 bg-fuchsia-500 dark:opacity-25" />
        <div className="absolute inset-0 bg-white/35 dark:bg-slate-950/35" />
      </div>

      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 px-6 text-center">
          {/* “Orb” pseudo-3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="relative h-32 w-32"
            style={{ perspective: 900 }}
          >
            {/* base orb */}
            <motion.div
              animate={{
                rotateX: [10, 18, 10],
                rotateY: [0, 180, 360],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full"
              style={{
                transformStyle: "preserve-3d",
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,.75), rgba(59,130,246,.35) 35%, rgba(168,85,247,.25) 60%, rgba(0,0,0,0) 75%)",
                boxShadow:
                  "0 0 40px rgba(59,130,246,.35), 0 0 70px rgba(168,85,247,.25)",
              }}
            />

            {/* ring */}
            <motion.div
              animate={{ rotateZ: 360 }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                border: "2px solid rgba(59,130,246,.35)",
                filter: "drop-shadow(0 0 14px rgba(59,130,246,.35))",
                transform: "translateZ(12px)",
              }}
            />

            {/* small orbit dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div
                className="absolute left-1/2 top-1/2 h-3 w-3 rounded-full"
                style={{
                  transform: "translate(-50%, -50%) translateX(62px)",
                  background: "rgba(34,211,238,.9)",
                  boxShadow: "0 0 18px rgba(34,211,238,.65)",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Text + shimmer bar */}
          <div className="w-full max-w-sm">
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.35 }}
              className="text-xl md:text-2xl font-bold"
            >
              Cargando experiencia…
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.35 }}
              className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-300"
            >
              Preparando contenido y animaciones.
            </motion.p>

            <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-slate-200/70 dark:bg-slate-800/60">
              <motion.div
                className="h-full w-1/3 rounded-full"
                animate={{ x: ["-120%", "320%"] }}
                transition={{ duration: 1.15, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background:
                    "linear-gradient(90deg, rgba(59,130,246,.15), rgba(59,130,246,.9), rgba(168,85,247,.85), rgba(59,130,246,.15))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
