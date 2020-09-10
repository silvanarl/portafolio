import React from 'react';
import Menu from '../assets/menu.svg';

const buttonToggle = () => {
  document.getElementById('nav').classList.toggle('active');
};

export const ButtonMenu = () => (
  <div className="row end">
    <button type="button" onClick={buttonToggle} className="btn-menu"><img className="icon-menu" src={Menu} alt="menu" /></button>
  </div>
);

export const NavBar = () => (
  <nav id="nav" className="navbar">
    <ul className="ulNav">
      <li><a href="#home" onClick={buttonToggle}>INICIO</a></li>
      <li><a href="#about" onClick={buttonToggle}>SOBRE MI</a></li>
      <li><a href="#knowledge" onClick={buttonToggle}>CONOCIMIENTOS</a></li>
      <li><a href="#skills" onClick={buttonToggle}>HABILIDADES</a></li>
      <li><a href="#projects" onClick={buttonToggle}>PROYECTOS</a></li>
      <li><a href="#contact" onClick={buttonToggle}>CONTACTO</a></li>
    </ul>
  </nav>
);
