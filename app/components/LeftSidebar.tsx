const LeftSidebar = () => {
    return (
      <div className="left-sidebar">
        <div className="sidebar-header d-flex align-items-center justify-content-between">
          <img src="/assets/images/logo.png" alt="Logo" />
          <span className="designation">Desarrollador de Software</span>
        </div>
        <img className="me" src="/assets/images/me.jpg" alt="Me" />
        <div className="cont-work">
        <span className="theme-btn-work">Disponible para Trabajar</span>
        </div>
        <h2 className="email">luis.condori.dev@gmail.com</h2>
        <h2 className="address">Bolivia, La Paz</h2>
        <p className="copyright">&copy; 2025 Powered By Luis Alberto</p>
        <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
          <li>
            <a href="https://www.linkedin.com/in/luis-alberto80/" target="_blank" rel="noopener noreferrer">
              <i className="lab la-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/condoriluis" target="_blank" rel="noopener noreferrer">
              <i className="lab la-github"></i>
            </a>
          </li>
        </ul>
        <div className="cont-work">
        <a href="mailto:luis.condori.dev@gmail.com" className="theme-btn">
          <i className="las la-envelope"></i> ¡Contáctame!
        </a>
        </div>
      </div>
    );
  };
  
  export default LeftSidebar;
  