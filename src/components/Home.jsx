import React from 'react';
import btnInit from '../assets/initButton.svg';

const Home = () => (
  <div id="home" className="homeBackground">
    <div className="column absolute divHome">
      <h1 className="rasa">Silvana Ramos</h1>
      <h2 className="quicksand">front-end developer</h2>
    </div>
    <div className="divInitBtn">
      <a href="#about"><img className="initBtn column" src={btnInit} alt="boton seguir" /></a>
    </div>
  </div>
);

export default Home;
