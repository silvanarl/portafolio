import React from 'react';
import mdLinks from '../assets/projects/md-links.png';
import roadtips from '../assets/projects/roadtips.png';
import pokedex from '../assets/projects/pokedex.png';
import cardCredit from '../assets/projects/cardCredit.png';

const Projects = () => (
  <div id="projects">
    <p className="textCenter mrg20">PROYECTOS</p>
    <div className="flex projectsDiv">
      <div className="column project">
        <img src={cardCredit} alt="Tarjeta de Crédito" className="projectImg" />
        <a
          href="https://silvanarl.github.io/LIM012-card-validation/src/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="buttonDemo" type="button">Demo</button>
        </a>
        <a
          href="https://github.com/silvanarl/LIM012-card-validation"
          target="_blank"
          rel="noreferrer"
        >
          <button className="buttonDemo" type="button">Repo</button>
        </a>
      </div>
      <div className="column project">
        <img src={pokedex} alt="Pokedex" className="projectImg" />
        <a
          href="https://github.com/silvanarl/LIM012-data-lovers"
          target="_blank"
          rel="noreferrer"
        >
          <button className="buttonDemo" type="button">Demo</button>
        </a>
        <a
          href="https://silvanarl.github.io/LIM012-data-lovers/src/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="buttonDemo" type="button">Repo</button>
        </a>
      </div>
      <div className="column project">
        <img src={mdLinks} alt="Md-Links" className="projectImg" />
        <a
          href="https://github.com/silvanarl/LIM012-fe-md-links"
          target="_blank"
          rel="noreferrer"
        >
          <button className="buttonDemo" type="button">Repo</button>
        </a>
      </div>
      <div className="column project">
        <img src={roadtips} alt="Roadtips" className="projectImg" />
        <a
          href="https://github.com/silvanarl/LIM012-fe-social-network"
          target="_blank"
          rel="noreferrer"
        >
          <button className="buttonDemo" type="button">Demo</button>
        </a>
        <a
          href="https://silvanarl.github.io/LIM012-fe-social-network/src/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="buttonDemo" type="button">Repo</button>
        </a>
      </div>
    </div>
  </div>
);
export default Projects;
