import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");

      // Espera al DOM (importante con lazy/Suspense)
      const scrollToHash = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          // Reintento en el siguiente frame
          requestAnimationFrame(scrollToHash);
        }
      };

      scrollToHash();
    } else {
      window.scrollTo({
        top: 0,
        behavior: "auto", // estándar y consistente
      });
    }
  }, [pathname, hash]);

  return null;
}
