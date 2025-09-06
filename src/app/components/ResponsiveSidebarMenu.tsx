import React, { useState } from 'react';
import { resumen } from "@/src/lib/constants";

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
                <a className="scroll-to" href="#home" onClick={closeSidebar}>
                  <i className="las la-home"></i> <span>Inicio</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#about" onClick={closeSidebar}>
                  <i className="lar la-user"></i> <span>Acerca</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#resume" onClick={closeSidebar}>
                  <i className="las la-briefcase"></i> <span>Resumen</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#ability" onClick={closeSidebar}>
                  <i className="las la-stream"></i> <span>Habilidades</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#skills" onClick={closeSidebar}>
                  <i className="las la-shapes"></i> <span>Tecnologías</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#portfolio" onClick={closeSidebar}>
                  <i className="las la-grip-vertical"></i> <span>Proyectos</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#contact" onClick={closeSidebar}>
                  <i className="las la-envelope"></i> <span>Contacto</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="sidebar-social">
            <p>Redes Sociales</p>
            <ul className="social-links d-flex align-items-center">

              {resumen.basics.profiles.map((profile, index) => (
              <li key={index}>
                <a href={profile.url} target="_blank" rel="noopener noreferrer">
                  {profile.network.toLowerCase() === 'github' && <i className={`lab la-github`} title={profile.network}></i>}
                  {profile.network.toLowerCase() === 'linkedin' && <i className={`lab la-linkedin`} title={profile.network}></i>}
                  {profile.network.toLowerCase() === 'curriculum vitae' && <i className={`las la-file-invoice`} title={profile.network}></i>}
                </a>
              </li>
              ))}
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveSidebarMenu;
