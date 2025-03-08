import React, { useState } from 'react';

const ResponsiveSidebarMenu: React.FC = () => {
  const [active, setActive] = useState(false);

  const toggleSidebar = () => {
    setActive(!active);
  };
  const closeSidebar = () => {
    setActive(false);
  };
  
  return (
    <>
      <span className="icon-menu" onClick={toggleSidebar}>
        <span className="bar"></span>
        <span className="bar"></span>
      </span>
      
      <div className={`responsive-sidebar-menu ${active ? 'active' : ''}`}>
        <div className="overlay" onClick={closeSidebar}></div>
        <div className="sidebar-menu-inner">
          <div className="menu-wrap">
            <p>Menu</p>
            <ul className="menu scroll-nav-responsive d-flex">
              <li>
                <a className="scroll-to" href="#home">
                  <i className="las la-home"></i> <span>Inicio</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#about">
                  <i className="lar la-user"></i> <span>Acerca</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#resume">
                  <i className="las la-briefcase"></i> <span>Resumen</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#ability">
                  <i className="las la-stream"></i> <span>Habilidades</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#skills">
                  <i className="las la-shapes"></i> <span>Tecnologías</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#portfolio">
                  <i className="las la-grip-vertical"></i> <span>Proyectos</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#contact">
                  <i className="las la-envelope"></i> <span>Contacto</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="sidebar-social">
            <p>Redes Sociales</p>
            <ul className="social-links d-flex align-items-center">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveSidebarMenu;
