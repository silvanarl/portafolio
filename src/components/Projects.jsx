import React from 'react';
import mdLinks from '../assets/projects/md-links.png';
import roadtips from '../assets/projects/roadtips.png';
import pokedex from '../assets/projects/pokedex.png';

const Projects = () => (
  <div>
    <span>PROYECTOS</span>
    <div>
      <img src={pokedex} alt="Pokedex" className="" />
      <img src={mdLinks} alt="Md-Links" className="" />
      <img src={roadtips} alt="Roadtips" className="" />
    </div>
  </div>
);
export default Projects;
