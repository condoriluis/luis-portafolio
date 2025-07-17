import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';

const PortfolioSection = () => {
  const projects = [
    {
      imgSrc: "/assets/images/portfolio/tasks.png",
      alt: "Sistema - Gestor de Tareas",
      categories: ["Next.js v15.2.1", "React v19.0.0", "Typescript", "Swagger-ui-react", "Nodemailer"],
      link: "https://gestor-tareas-luis.vercel.app/login",
      github: "https://github.com/condoriluis/gestor-tareas",
      title: "Sistema - Gestor de Tareas"
    },
    {
      imgSrc: "/assets/images/portfolio/instalacion.png",
      alt: "Sistema - Dashboard Dinámico",
      categories: ["PHP v8.3", "Bootstrap v5.2", "AdminLTE v3.1", "Chart JS", "Select2", "Notie"],
      link: "https://youtu.be/P1ZPtxYVO9o?si=4Ftz4eD_EjAroOHr",
      github: "",
      title: "Sistema - Dashboard Dinámico"
    },
    {
      imgSrc: "/assets/images/portfolio/inicio.png",
      alt: "Sistema - Gestor de Archivos",
      categories: ["PHP v8.3", "Bootstrap v5", "Cloudinary", "AWS S3", "Vimeo", "Mailchimp"],
      link: "https://youtu.be/YLk3T5teh_Y?si=O7r2QsBA2PoIPnUc",
      github: "",
      title: "Sistema - Gestor de Archivos"
    },
    {
      imgSrc: "/assets/images/portfolio/landings.png",
      alt: "Sistema - Landing Page Builder",
      categories: ["PHP v8.3", "Bootstrap v5", "CodeMirror", "Notie", "Toastr"],
      link: "https://youtu.be/YJPzgcj320Y?si=KDiHilUaAORkf0WE",
      github: "",
      title: "Sistema - Landing Page Builder"
    },
    {
      imgSrc: "/assets/images/portfolio/login1.jpg",
      alt: "Sistema - Gestión y Registro de Usuarios",
      categories: ["NodeJS v16.20", "VueJS 3", "Vuetify 3", "Google Analytics", "Leaflet"],
      link: "https://youtu.be/CP_NyTHZbPY?si=wNwbM1PxgA_aApjY",
      github: "",
      title: "Sistema - Gestión y Registro de Usuarios"
    },
    {
      imgSrc: "/assets/images/portfolio/inicio-gastos.png",
      alt: "Aplicación Móvil - Control de Gastos",
      categories: ["Flutter v3.27", "Dart v3.6", "Provider", "SQFlite", "Local Auth"],
      link: "#",
      github: "https://github.com/condoriluis/control-de-gastos",
      title: "Aplicación Móvil - Control de Gastos"
    },
    {
      imgSrc: "/assets/images/portfolio/tecno.png",
      alt: "Sistema - Blog para Publicar Información",
      categories: ["PHP v8.3", "Bootstrap v4.6", "Google Analytics", "Facebook Pixel", "Google Tag Manager"],
      link: "https://youtu.be/shC-B24HnXw?si=E6AGWtrI3VM2Nqr_",
      github: "",
      title: "Sistema - Blog para Publicar Información"
    },
    {
      imgSrc: "/assets/images/portfolio/marketplace-home.png",
      alt: "Sistema - Marketplace",
      categories: ["PHP v7.3", "Bootstrap v4.4", "Summernote", "Dropzone", "DataTables"],
      link: "#",
      github: "",
      title: "Sistema - Marketplace"
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const showMoreProjects = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };

  return (
    <section className="portfolio-area page-section scroll-to-page" id="portfolio">
      <div className="custom-container">
        <div className="portfolio-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
              <i className="las la-grip-vertical"></i> portafolio
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              <span>Proyectos </span>Destacados
            </h1>
          </div>

          <div className="row portfolio-items">
            {projects.slice(0, visibleCount).map((project, index) => (
              <div key={index} className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                <div className="portfolio-item portfolio-full">
                  <div className="portfolio-item-inner">
                    <a href={project.imgSrc} data-lightbox="example-1">
                      <img src={project.imgSrc} alt={project.alt} />
                    </a>

                    <ul className="portfolio-categories">
                      {project.categories.map((category, index) => (
                        <li key={index}>
                          <a>{category}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <h2 className="text-white hover:text-gray-200 transition-colors duration-300 text-xl font-medium">
                      {project.title}
                    </h2>
                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                          <FaGithub className="text-white text-xl hover:text-blue-400" />
                        </a>
                      )}
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                        <MdOpenInNew className="text-white text-xl hover:text-blue-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < projects.length && (
            <div className="d-flex justify-content-center mt-3">
              <button className="theme-btn-work show-more-btn" onClick={showMoreProjects}>
                Más Proyectos <i className="las la-angle-down"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
