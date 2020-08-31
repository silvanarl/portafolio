import React from 'react';

const Home = () => (
  <div id="home" className="homeBackground">
    <div className="column absolute divHome">
      <h1 className="rasa">Silvana Ramos</h1>
      <h2 className="quicksandTitle quicksand">front-end developer</h2>
    </div>
    <div className="divInitBtn">
      <a href="#about">
        <input type="button" className="initBtn" value="Ver más" />
      </a>
    </div>
  </div>
);

export default Home;
