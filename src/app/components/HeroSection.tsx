import Image from "next/image";
import { resumen, yearsSinceStart } from "@/src/lib/constants/resumen";

const HeroSection = () => {
  return (
    <section className="hero-section page-section scroll-to-page" id="home">
      <div className="custom-container">
        <div className="hero-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
              <i className="las la-home"></i> Introducción
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              Saludos de <span>{resumen.basics.firstName}</span>, {resumen.basics.label}
            </h1>
          </div>
          <p className="scroll-animation" data-animation="fade_from_bottom">
            {resumen.basics.intro}
          </p>
          <a
            href="#portfolio"
            className="go-to-project-btn scroll-to scroll-animation"
            data-animation="rotate_up"
          >
            <Image src="/assets/images/round-text.png" alt="Rounded text"
              width={140}
              height={140}
            />
            <i className="las la-arrow-down"></i>
          </a>

          <div className="facts d-flex">
            <div className="left scroll-animation" data-animation="fade_from_left">
              <h1>{yearsSinceStart()}+</h1>
              <p>Años de <br />Experiencia</p>
            </div>
            <div className="right scroll-animation" data-animation="fade_from_right">
              <h1>30+</h1>
              <p>Proyectos <br /> completados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
