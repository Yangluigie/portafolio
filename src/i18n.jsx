import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      // Header
      portfolio_title: "DevsGen",
      nav_start: "Inicio",
      nav_about: "Sobre Mí",
      nav_projects: "Proyectos",
      nav_contact: "Contacto",
      // Footer
      footer_copyright: "© {year} YangDev | Todos los derechos reservados",
      // Home
      home_title: "¡Hola ✌️, soy Yang Florido Solano!",
      home_description:
        "Desarrollador web especializado en React y Django, creando experiencias digitales únicas.",
      home_location: "Colombia",
      home_see_projects: "Ver Mis Proyectos",
      home_download_cv: "Descargar CV",
      home_experience_title: "Mi Experiencia",
      home_testimonials_title: "Lo que Dice la Gente",
      home_skills_title: "Mis Habilidades",
      experience_apple_house:
        "Desarrollo de una tienda en línea para productos Apple. Construido con Django, DRF y React. Migración de MySQL a PostgreSQL e integración de APIs de pago.",
      experience_freelance:
        "Desarrollo y escalabilidad de una aplicación web para aulas virtuales, optimizando autenticación con JWT y APIs escalables. Tecnologías: Django, DRF, React, Zustand, base de datos PostgreSQL.",
      experience_movidic:
        "Mantenimiento y soporte de equipos en rack, incluyendo intervenciones preventivas y correctivas. Gestión y optimización de bases de datos relacionales (PostgreSQL/MySQL), incluyendo consultas, creación de esquemas y eliminación de datos según directrices. Gestión de tickets: emisión de resoluciones, aplicación de pagos y cobros coercitivos.",
      experience_data_tools:
        "Gestión y consulta de bases de datos relacionales (PostgreSQL/MySQL), incluyendo creación de consultas, gestión de usuarios y permisos, eliminación de datos y monitoreo con herramientas como pgAdmin y MySQL Workbench. Diseño de tablas y relaciones según requerimientos del negocio.",
      experience_tech_startup:
        "Instalación y mantenimiento de cableado estructurado, soporte preventivo y correctivo de equipos, y administración de contenido web.",
      testimonial_ana:
        '"Yang entregó una tienda en línea excepcional con funcionalidad fluida y un diseño moderno. ¡Altamente recomendado!"',
      testimonial_carlos:
        '"Su experiencia en optimización de bases de datos transformó nuestro flujo de trabajo. ¡Un verdadero profesional!"',
      skill_years: "{years} años",
      // About
      about_title: "Sobre Mí",
      about_description:
        "Soy un apasionado desarrollador web con experiencia en React, Django y bases de datos relacionales. Me especializo en crear soluciones digitales únicas y eficientes, combinando creatividad y tecnología para resolver problemas del mundo real.",
      about_philosophy_title: "Mi Filosofía",
      about_philosophy_description:
        "Creo en el aprendizaje continuo y en construir software que no solo funcione, sino que también sea intuitivo y elegante. Mi objetivo es entregar valor a través de código limpio y experiencias de usuario excepcionales.",
      about_interests_title: "Intereses",
      about_interests_description:
        "Además de programar, disfruto explorando nuevas tecnologías, leyendo sobre desarrollo de software y trabajando en proyectos personales que desafíen mis habilidades.",
      // Projects
      projects_title: "Mis Proyectos",
      projects_description:
        "Aquí están algunos de los proyectos en los que he trabajado, mostrando mis habilidades en desarrollo web y diseño de soluciones.",
      project_apple_house_title: "Tienda Online Apple House",
      project_apple_house_description:
        "Una tienda en línea para productos Apple, construida con Django, DRF y React. Incluye migración de MySQL a PostgreSQL e integración de APIs de pago.",
      project_virtual_classrooms_title: "Aulas Virtuales - Tienda Online",
      project_virtual_classrooms_description:
        "Aplicación web escalable para aulas virtuales con autenticación JWT, usando Django, React y Zustand, con una base de datos PostgreSQL.",
      project_see_project: "Ver Proyecto",
      // Contact
      contact_title: "Contáctame",
      contact_description:
        "¿Interesado en trabajar juntos? ¡Envíame un mensaje y hablemos!",
      contact_name_label: "Nombre",
      contact_email_label: "Correo Electrónico",
      contact_message_label: "Mensaje",
      contact_name_placeholder: "Tu nombre",
      contact_email_placeholder: "tu@correo.com",
      contact_message_placeholder: "Escribe tu mensaje aquí...",
      contact_submit_button: "Enviar Mensaje",
      contact_submitting: "Enviando...",
      contact_success: "¡Mensaje enviado con éxito! Te responderé pronto.",
      contact_error:
        "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.",
    },
  },
  en: {
    translation: {
      // Header
      portfolio_title: "DevsGen",
      nav_start: "Home",
      nav_about: "About Me",
      nav_projects: "Projects",
      nav_contact: "Contact",
      // Footer
      footer_copyright: "© {year} YangDev | All rights reserved",
      // Home
      home_title: "Hi ✌️, I’m Yang Florido Solano!",
      home_description:
        "Web developer specializing in React and Django, creating unique digital experiences.",
      home_location: "Colombia",
      home_see_projects: "See My Projects",
      home_download_cv: "Download CV",
      home_experience_title: "My Experience",
      home_testimonials_title: "What People Say",
      home_skills_title: "My Skills",
      experience_apple_house:
        "Development of an online store for Apple products. Built with Django, DRF, and React. MySQL to PostgreSQL migration and payment API integration.",
      experience_freelance:
        "Development and scalability of a web application for virtual classrooms, optimizing authentication with JWT and scalable APIs. Technologies: Django, DRF, React, Zustand, PostgreSQL database.",
      experience_movidic:
        "Maintenance and support of rack equipment, including preventive and corrective interventions. Management and optimization of relational databases (PostgreSQL/MySQL), including queries, schema creation, and data deletion per guidelines. Ticket management: issuing resolutions, applying payments, and enforcing coercive collections.",
      experience_data_tools:
        "Management and query of relational databases (PostgreSQL/MySQL), including query creation, user and permissions management, data deletion, and monitoring with tools like pgAdmin and MySQL Workbench. Table and relationship design per business requirements.",
      experience_tech_startup:
        "Installation and maintenance of structured cabling, preventive and corrective equipment support, and web content administration.",
      testimonial_ana:
        '"Yang delivered an exceptional online store with seamless functionality and a modern design. Highly recommended!"',
      testimonial_carlos:
        '"His expertise in database optimization transformed our workflow. A true professional!"',
      skill_years: "{years} years",
      // About
      about_title: "About Me",
      about_description:
        "I’m a passionate web developer with experience in React, Django, and relational databases. I specialize in creating unique and efficient digital solutions, combining creativity and technology to solve real-world problems.",
      about_philosophy_title: "My Philosophy",
      about_philosophy_description:
        "I believe in continuous learning and building software that not only works but is also intuitive and elegant. My goal is to deliver value through clean code and exceptional user experiences.",
      about_interests_title: "Interests",
      about_interests_description:
        "Besides programming, I enjoy exploring new technologies, reading about software development, and working on personal projects that challenge my skills.",
      // Projects
      projects_title: "My Projects",
      projects_description:
        "Here are some of the projects I’ve worked on, showcasing my skills in web development and solution design.",
      project_apple_house_title: "Apple House Online Store",
      project_apple_house_description:
        "An online store for Apple products, built with Django, DRF, and React. Includes MySQL to PostgreSQL migration and payment API integration.",
      project_virtual_classrooms_title: "Virtual Classrooms - Online Store",
      project_virtual_classrooms_description:
        "Scalable web application for virtual classrooms with JWT authentication, using Django, React, and Zustand, with a PostgreSQL database.",
      project_see_project: "See Project",
      // Contact
      contact_title: "Contact Me",
      contact_description:
        "Interested in working together? Send me a message and let’s talk!",
      contact_name_label: "Name",
      contact_email_label: "Email",
      contact_message_label: "Message",
      contact_name_placeholder: "Your name",
      contact_email_placeholder: "your@email.com",
      contact_message_placeholder: "Write your message here...",
      contact_submit_button: "Send Message",
      contact_submitting: "Sending...",
      contact_success: "Message sent successfully! I’ll get back to you soon.",
      contact_error:
        "There was an error sending the message. Please try again.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "es", // Idioma por defecto desde localStorage
  interpolation: {
    escapeValue: false, // React ya escapa los valores
  },
});

export default i18n;
