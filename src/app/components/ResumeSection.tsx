import React, { useState } from 'react';
import { resumen } from '@/src/lib/constants';

const ResumeSection = () => {

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

            {resumen.work.slice(0, visibleCount).map((resume, index) => (
              <div key={index} className={`item scroll-animation`} data-animation="fade_from_bottom">
                <span className="date">{resume.dateWork}</span>
                <h2>{resume.position}</h2>
                <p>{resume.name} - {resume.location}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {resume.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 px-2 py-1 text-black text-xs rounded-full shadow"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            
          </div>

          {visibleCount < resumen.work.length && (
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
