import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>('#home');

  const handleScroll = () => {
    const sections = ['#home', '#about', '#resume', '#ability', '#skills', '#portfolio', '#contact'];
    let currentSection = '';
    
    sections.forEach((section) => {
      const element = document.querySelector(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section;
        }
      }
    });
    
    if (currentSection) {
      setActiveSection(currentSection);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ul className="menu scroll-nav d-flex">
      <li>
        <a className={`scroll-to ${activeSection === '#home' ? 'active' : ''}`} href="#home">
          <span>Inicio</span> <i className="las la-home"></i>
        </a>
      </li>
      <li>
        <a className={`scroll-to ${activeSection === '#about' ? 'active' : ''}`} href="#about">
          <span>Acerca</span> <i className="lar la-user"></i>
        </a>
      </li>
      <li>
        <a className={`scroll-to ${activeSection === '#resume' ? 'active' : ''}`} href="#resume">
          <span>Resumen</span> <i className="las la-briefcase"></i>
        </a>
      </li>
      <li>
        <a className={`scroll-to ${activeSection === '#ability' ? 'active' : ''}`} href="#ability">
          <span>Habilidades</span> <i className="las la-stream"></i>
        </a>
      </li>
      <li>
        <a className={`scroll-to ${activeSection === '#skills' ? 'active' : ''}`} href="#skills">
          <span>Tecnologías</span> <i className="las la-shapes"></i>
        </a>
      </li>
      <li>
        <a className={`scroll-to ${activeSection === '#portfolio' ? 'active' : ''}`} href="#portfolio">
          <span>Proyectos</span> <i className="las la-grip-vertical"></i>
        </a>
      </li>
      <li>
        <a className={`scroll-to ${activeSection === '#contact' ? 'active' : ''}`} href="#contact">
          <span>Contacto</span> <i className="las la-envelope"></i>
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
