import { useEffect } from "react";
import { useLocation } from "react-hooks";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Si hay un hash (por ejemplo, #projects), desplazar a la sección
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({
          behavior: "smooth", // Desplazamiento suave
          block: "start", // Alinear al inicio de la sección
        });
      }
    } else {
      // Si no hay hash, desplazar a la parte superior
      window.scrollTo({
        top: 0,
        behavior: "instant", // Desplazamiento inmediato
      });
    }
  }, [pathname, hash]); // Ejecutar al cambiar la ruta o hash

  return null; // No renderiza nada
}

export default ScrollToTop;
