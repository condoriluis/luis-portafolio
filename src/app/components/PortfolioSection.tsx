import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdOpenInNew, MdPlayCircleFilled } from 'react-icons/md';
import { resumen } from '@/src/lib/constants';

const PortfolioSection = () => {

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
            {resumen.projects.slice(0, visibleCount).map((project, index) => (
              <div key={index} className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                <div className="portfolio-item portfolio-full">
                  <div className="portfolio-item-inner">
                    <a href={project.imgSrc} data-lightbox="example-1">
                      <img src={project.imgSrc} alt={project.alt} />
                    </a>

                    <ul className="portfolio-categories">
                      {project.categories.map((category, idx) => (
                        <li key={idx}>
                          <a>{category}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="d-flex justify-content-between items-center mt-4">
                    <h2 className="text-white hover:text-gray-200 transition-colors duration-300 text-xl font-medium">
                      {project.title}
                    </h2>
                    <div className="d-flex">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="me-2 h5" title="Ir a GitHub">
                          <FaGithub className="text-white text-xl hover:text-blue-400" />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="me-2 h5" title="Visitar">
                          <MdOpenInNew className="text-white text-xl hover:text-blue-400" />
                        </a>
                      )}
                      {project.video && (
                        <a href={project.video} target="_blank" rel="noopener noreferrer" className="h5" title="Ver video">
                          <MdPlayCircleFilled className="text-white text-xl hover:text-blue-400" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-secondary small">
                    {project.description}
                  </p>

                </div>
              </div>
            ))}
          </div>

          {visibleCount < resumen.projects.length && (
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
