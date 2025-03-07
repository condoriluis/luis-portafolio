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
          Desde que inicié mi trayectoria como desarrollador de software hace más de 6 años, he trabajado en la creación de sistemas a medida, abarcando backend, frontend y gestión de bases de datos. He colaborado con equipos multidisciplinarios para desarrollar soluciones eficientes y escalables, tanto para empresas como para proyectos personales. Soy una persona analítica y apasionada por la tecnología, en constante aprendizaje para mejorar mis habilidades y crear aplicaciones que aporten valor a los usuarios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
