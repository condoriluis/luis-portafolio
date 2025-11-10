import { resumen } from "@/src/lib/constants";

const ContactSection = () => {
    return (
      <section className="contact-area page-section scroll-to-page" id="contact">
        <div className="custom-container">
          <div className="contact-content content-width">
            <div className="section-header">
              <h4 className="subtitle scroll-animation" data-animation="fade_from_right">
                <i className="las la-envelope"></i> contacto
              </h4>
              <h1 className="scroll-animation" data-animation="fade_from_bottom">
                ¡Contáctame para <span>Trabajar!</span>
              </h1>
            </div>
            <h3 className="scroll-animation" data-animation="fade_from_bottom">
              {resumen.basics.email}<br />
            </h3>
  
            <div className="contact-form scroll-animation" data-animation="fade_from_top">
              <div className="row">
                <div className="col-md-6">
                  <div className="input-group">
                    <label htmlFor="full-name">Nombre Completo <sup>*</sup></label>
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      placeholder={`${resumen.basics.firstName} ${resumen.basics.middleName} ${resumen.basics.lastName}`}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group">
                    <label htmlFor="phone-number">Teléfono <sup>*</sup></label>
                    <input
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      placeholder={resumen.basics.phone}
                      readOnly
                      onClick={() => window.open(`https://wa.me/${resumen.basics.phone}?text=Hola,%20${resumen.basics.firstName}%20${resumen.basics.middleName}`, '_blank')}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                </div>
  
                <div className="col-md-12">
                  <div className="input-group submit-btn-wrap">
                    <a href={`mailto:${resumen.basics.email}`} className="theme-btn">
                      Contactar
                    </a>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  