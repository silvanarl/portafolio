import React from 'react';
import Menu from '../assets/menu.svg';

// const toggleNav = () => console.log('ok');

export const ButtonMenu = () => {
  const buttonToggle = () => {
    document.getElementById('nav').classList.toggle('active');
  };
  return (
    <div className="row end">
      <div className="end">
        <button type="button" onClick={buttonToggle} className="btn-menu"><img className="icon-menu" src={Menu} alt="menu" /></button>
      </div>
    </div>
  );
};

export const NavBar = () => (
  <nav id="nav">
    <ul>
        <li><a href="#">INICIO</a></li>
        <li><a href="#">SOBRE MI</a></li>
        <li><a href="#">CONOCIMIENTOS</a></li>
        <li><a href="#">HABILIDADES</a></li>
        <li><a href="#">PROYECTOS</a></li>
        <li><a href="#">CONTACTO</a></li>
    </ul>
  </nav>
);
