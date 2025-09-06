import { resumen } from "@/src/lib/constants/resumen";

const AboutSection = () => {
  return (
    <section className="about-area page-section scroll-to-page" id="about">
      <div className="custom-container">
        <div className="about-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
              <i className="lar la-user"></i> Acerca de mí
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              Todo gran desarrollo comienza con una <span>historia</span>
            </h1>
          </div>
          <p className="scroll-animation" data-animation="fade_from_bottom">
          {resumen.basics.summary}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
