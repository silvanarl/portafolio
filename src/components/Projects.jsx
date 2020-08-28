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
        <button className="buttonDemo" type="button">Demo</button>
        <button className="buttonDemo" type="button">Repo</button>
      </div>
      <div className="column project">
        <img src={pokedex} alt="Pokedex" className="projectImg" />
        <button className="buttonDemo" type="button">Demo</button>
        <button className="buttonDemo" type="button">Repo</button>
      </div>
      <div className="column project">
        <img src={mdLinks} alt="Md-Links" className="projectImg" />
        <button className="buttonDemo" type="button">Repo</button>
      </div>
      <div className="column project">
        <img src={roadtips} alt="Roadtips" className="projectImg" />
        <button className="buttonDemo" type="button">Demo</button>
        <button className="buttonDemo" type="button">Repo</button>
      </div>
    </div>
  </div>
);
export default Projects;
