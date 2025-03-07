const ResumeSection = () => {
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
      <div className="custom-container">
        <div className="resume-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
              <i className="las la-briefcase"></i> Resumen
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              Experiencia<span>Laboral</span>
            </h1>
          </div>

          <div className="resume-timeline">
            {[
              {
                date: "abril - noviembre 2024",
                title: "Técnico en Soporte y Mantenimiento de Equipos Computarizados",
                company: "NOTARÍA DE FE PÚBLICA",
              },
              {
                date: "agosto 2023 - enero 2024",
                title: "Técnico en Soporte y Mantenimiento de Sistemas",
                company: "MINISTERIO DE DESARROLLO PRODUCTIVO Y ECONOMIA PLURAL",
              },
              {
                date: "octubre 2022 - febrero 2023",
                title: "Desarrollador de Sistemas Backend y Frontend",
                company: "EMPRESA STRATEGIC BOLIVIA",
              },
              {
                date: "enero - mayo 2022",
                title: "Desarrollador de Sistemas Informáticos",
                company: "CONSULTORIA KERNEL BOLIVIA",
              },
            ].map((job, index) => (
              <div key={index} className="item scroll-animation" data-animation="fade_from_right">
                <span className="date">{job.date}</span>
                <h2>{job.title}</h2>
                <p>{job.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
