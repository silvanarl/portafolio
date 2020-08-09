import React from 'react';
import imgMobile from '../assets/front-mobile.png';
import btnInit from '../assets/initButton.svg';

const Home = () => {
  const initBtn = () => {
    console.log('Hola mundo');
  };
  return (
    <div>
      <span>Hola</span>
      <img src={imgMobile} alt="Fondo developer" className="homeBackground" />
      <button type="button" className="initBtn" onClick={initBtn}><img src={btnInit} alt="boton seguir" /></button>
    </div>
  );
};

export default Home;
