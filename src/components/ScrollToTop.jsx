import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Si hay un hash (por ejemplo, #projects), desplazar a la sección
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // Si no hay hash, desplazar a la parte superior
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [pathname, hash]); // Dependencias: pathname y hash

  return null;
}

export default ScrollToTop;
