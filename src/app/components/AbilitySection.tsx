import React, { useState } from 'react';
import { resumen } from '@/src/lib/constants';

const AbilitySection = () => {
 
  const [visibleCount, setVisibleCount] = useState(3);

  const showMoreAbilities = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };

  return (
    <section className="ability-area page-section scroll-to-page" id="ability">
      <div className="custom-container">
        <div className="ability-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
              <i className="las la-stream"></i> Habilidades
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              Mis <span>Habilidades</span>
            </h1>
          </div>

          <div className="ability-items">
            {resumen.abilities.slice(0, visibleCount).map((ability, index) => (
              <div key={index} className={`service-item scroll-animation`} data-animation="fade_from_bottom">
                <i className={ability.icon}></i>
                <h2>{ability.title}</h2>
                <p>{ability.description}</p>
              </div>
            ))}
          </div>

          {visibleCount < resumen.abilities.length && (
            <div className="d-flex justify-content-center mt-3">
              <button className="theme-btn-work show-more-btn" onClick={showMoreAbilities}>
                Más Habilidades <i className="las la-angle-down"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AbilitySection;
