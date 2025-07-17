import React, { useState } from 'react';

const AbilitySection = () => {
  const abilities = [
    {
      icon: "las la-code",
      title: "Desarrollo Full Stack",
      description: "Desarrollo de sistemas web con PHP Framework Laravel, CodeIgniter y JavaScript",
      animation: "fade_from_bottom",
    },
    {
      icon: "las la-server",
      title: "APIs RESTful y SDKs",
      description: "Integración con Vimeo, Cloudinary, AWS S3, Mailchimp y más",
      animation: "fade_from_right",
    },
    {
      icon: "las la-shield-alt",
      title: "Seguridad Web",
      description: "Implementación de prepared statements (PDO), prevención de SQL Injection, XSS y CSRF",
      animation: "fade_from_left",
    },
    {
      icon: "lab la-android",
      title: "Desarrollo Móvil con Flutter",
      description: "Creación de aplicaciones móviles en Flutter/Dart con integración de Firebase y SQLite",
      animation: "fade_from_bottom",
    },
    {
      icon: "las la-database",
      title: "Backend con Node.js y Express",
      description: "Desarrollo de APIs RESTful con Express.js, autenticación JWT y base de datos en MySQL",
      animation: "fade_from_right",
    },
    {
      icon: "lab la-vuejs",
      title: "Frontend con Vue.js, Vuetify, Next.js, React",
      description: "Desarrollo de interfaces modernas con Vue.js/Vuetify y React/Next.js, incluyendo gestión de estado (Pinia/Redux) y consumo de APIs REST",
      animation: "fade_from_left",
    },
    {
      icon: "las la-file-code",
      title: "Documentación Técnica de APIs",
      description: "Generación de documentación interactiva con Swagger/OpenAPI para endpoints RESTful",
      animation: "fade_from_right",
    },
  ];

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
            {abilities.slice(0, visibleCount).map((ability, index) => (
              <div key={index} className={`service-item scroll-animation`} data-animation={ability.animation}>
                <i className={ability.icon}></i>
                <h2>{ability.title}</h2>
                <p>{ability.description}</p>
              </div>
            ))}
          </div>

          {visibleCount < abilities.length && (
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
