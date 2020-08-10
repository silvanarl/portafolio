import React from 'react';
import btnInit from '../assets/initButton.svg';

const Home = () => {
  const initBtn = () => {
    console.log('Hola mundo');
  };
  return (
    <div className="homeBackground">
      <div className="column absolute">
        <h1 className="rasa">Hola, soy Silvana</h1>
        <h2 className="quicksand">front-end developer</h2>
      </div>
      <div className="divInitBtn column">
        <button type="button" className="initBtn" onClick={initBtn}><img src={btnInit} alt="boton seguir" /></button>
      </div>
    </div>
  );
};

export default Home;
