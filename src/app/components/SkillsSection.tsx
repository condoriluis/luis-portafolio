import Image from 'next/image'
import { resumen } from "@/src/lib/constants";

const SkillsSection = () => {
  return (
    <section className="skills-area page-section scroll-to-page" id="skills">
      <div className="custom-container">
        <div className="skills-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
              <i className="las la-shapes"></i> Stack Tecnologías
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              Mis <span>Tecnologías</span>
            </h1>
          </div>

          <div className="row skills text-center">
            {resumen.skills.map((category) => (
              <div key={category.name} className="skill-category">

                <div className="row">
                  <span className="col-md-4 theme-btn-work">{category.name}</span>
                </div>

                <div className="row">
                  {category.keywords.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="col-md-2 scroll-animation"
                      data-animation={
                        index % 4 === 0
                          ? "fade_from_left"
                          : index % 4 === 1
                          ? "fade_from_right"
                          : index % 4 === 2
                          ? "fade_from_top"
                          : "fade_from_bottom"
                      }
                    >
                      <div className="skill">
                        <div className="skill-inner">
                          <Image
                            src={skill.image}
                            alt={skill.name}
                            width={50}
                            height={50}
                          />
                        </div>
                        <p className="name">{skill.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
export default SkillsSection;