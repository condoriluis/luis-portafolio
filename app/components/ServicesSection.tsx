const ServicesSection = () => {
    return (
      <section className="services-area page-section scroll-to-page" id="services">
        <div className="custom-container">
          <div className="services-content content-width mb-5 mb-lg-0">
            <div className="section-header">
              <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                <i className="las la-tools"></i> Servicios
              </h4>
              <h1 className="scroll-animation" data-animation="fade_from_bottom">
                ¿Qué puedo <span>hacer?</span>
              </h1>
            </div>
  
            <div className="services-table-items">
              <div className="row">
                <div className="col-md-6 scroll-animation" data-animation="fade_from_left">
                  <div className="services-table">
                    <div className="services-table-header">
                      <h4>Desarrollo de Páginas Web y Software</h4>
                    </div>
                    <ul className="feature-lists">
                      <li>Desarrollo con <strong>Laravel, CodeIgniter, Node.js, PHP, MySQL, PostgreSQL</strong></li>
                      <li>Frontend con <strong>Vue.js 3, Vuetify 3, PrimeVue, React, Next.js, JavaScript, Bootstrap 5, AdminLTE</strong></li>
                      <li>Integración con <strong>APIs y servicios externos (Cloudinary, AWS S3, Vimeo, Mailchimp, etc.)</strong></li>
                      <li>Implementación en servidores Linux (Apache)</li>
                      <li>Optimización y seguridad en bases de datos <strong>MySQL, PostgreSQL</strong></li>
                      <li>Desarrollo de aplicaciones móviles con Flutter/Dart</li>
                    </ul>
                  </div>
                </div>
  
                <div className="col-md-6 scroll-animation mt-2 mt-lg-0" data-animation="fade_from_right">
                  <div className="services-table">
                    <div className="services-table-header">
                      <h4>Soporte Técnico y Administración de Sistemas</h4>
                    </div>
                    <ul className="feature-lists">
                      <li>Mantenimiento y optimización de servidores <strong>Linux</strong></li>
                      <li>Gestión de hosting, dominios y bases de datos</li>
                      <li>Implementación de medidas de seguridad y backups</li>
                      <li>Solución de problemas y asistencia técnica</li>
                      <li>Actualización y monitoreo de sistemas</li>
                      <li>Manejo de sistemas operativos <strong>Windows, Linux</strong></li>
                      <li>Implementación de entornos containerizados con <strong>Docker</strong> (orquestación, optimización de imágenes y despliegue)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSection;
  