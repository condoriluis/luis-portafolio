import React, { useState } from 'react';

const GlobalColorSettings: React.FC = () => {
  const [activeColor, setActiveColor] = useState<string>('#28e98c');

  const changeColor = (color: string) => {
    document.documentElement.style.setProperty('--primary_color', color);
    setActiveColor(color);
  };

  const toggleSettings = () => {
    document.querySelector('.global-color')?.classList.toggle('active');
  };

  return (
    <div className={`global-color`}>
      <span className="setting-toggle" onClick={toggleSettings}>
        <i className="las la-cog"></i>
      </span>
      <div className="inner">
        <div className="overlay" onClick={toggleSettings}></div>
        <div className="global-color-option">
          <span className="close-settings" onClick={toggleSettings}>
            <i className="las la-times"></i>
          </span>
          <h2>Configuración</h2>
          <div className="global-color-option-inner">
            <p>Colores</p>
            <div className="color-boxed">
              <a
                href="#"
                className={activeColor === '#28e98c' ? 'clr-active' : ''}
                onClick={() => changeColor('#28e98c')}
              ></a>
              <a
                href="#"
                className={activeColor === '#e4af12' ? 'clr-active' : ''}
                onClick={() => changeColor('#e4af12')}
              ></a>
              <a
                href="#"
                className={activeColor === '#fe6f1d' ? 'clr-active' : ''}
                onClick={() => changeColor('#fe6f1d')}
              ></a>
              <a
                href="#"
                className={activeColor === '#14c5fd' ? 'clr-active' : ''}
                onClick={() => changeColor('#14c5fd')}
              ></a>
              <a
                href="#"
                className={activeColor === '#c0c0c0' ? 'clr-active' : ''}
                onClick={() => changeColor('#c0c0c0')}
              ></a>
              <a
                href="#"
                className={activeColor === '#1338f3' ? 'clr-active' : ''}
                onClick={() => changeColor('#1338f3')}
              ></a>
              <a
                href="#"
                className={activeColor === '#f31313' ? 'clr-active' : ''}
                onClick={() => changeColor('#f31313')}
              ></a>
              <a
                href="#"
                className={activeColor === '#ff99cc' ? 'clr-active' : ''}
                onClick={() => changeColor('#ff99cc')}
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalColorSettings;
