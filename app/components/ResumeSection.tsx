import React, { useState } from 'react';

const ResumeSection = () => {
  const resumes = [
    {
      date: "abril - noviembre 2024",
      title: "Técnico en Soporte y Mantenimiento de Equipos Computarizados",
      company: "NOTARÍA DE FE PÚBLICA",
      animation: "fade_from_bottom",
    },
    {
      date: "agosto 2023 - enero 2024",
      title: "Técnico en Soporte y Mantenimiento de Sistemas",
      company: "MINISTERIO DE DESARROLLO PRODUCTIVO Y ECONOMIA PLURAL",
      animation: "fade_from_right",
    },
    {
      date: "octubre 2022 - febrero 2023",
      title: "Desarrollador de Sistemas Backend y Frontend",
      company: "EMPRESA STRATEGIC BOLIVIA",
      animation: "fade_from_left",
    },
    {
      date: "enero - mayo 2022",
      title: "Desarrollador de Sistemas Informáticos",
      company: "CONSULTORIA KERNEL BOLIVIA",
      animation: "fade_from_bottom",
    },
    {
      date: "enero - julio 2021",
      title: "Práctica Profesional (Pasantia)",
      company: "MINISTERIO DE DESARROLLO PRODUCTIVO Y ECONOMIA PLURAL",
      animation: "fade_from_right",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);
  
  const showMoreResumes = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };
  
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
      <div className="custom-container">
        <div className="resume-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
              <i className="las la-briefcase"></i> Resumen
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              Experiencia <span>Laboral</span>
            </h1>
          </div>

          <div className="resume-timeline">

            {resumes.slice(0, visibleCount).map((resume, index) => (
              <div key={index} className={`item scroll-animation`} data-animation={resume.animation}>
                <span className="date">{resume.date}</span>
                <h2>{resume.title}</h2>
                <p>{resume.company}</p>
              </div>
            ))}
            
          </div>

          {visibleCount < resumes.length && (
            <div className="d-flex justify-content-center mt-3">
              <button className="theme-btn-work show-more-btn" onClick={showMoreResumes}>
                Más Experiencias <i className="las la-angle-down"></i>
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
