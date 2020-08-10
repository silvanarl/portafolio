import React from 'react';
import iconProblemSolving from '../assets/softSkills/problemSolving.svg';
import iconSelfTaught from '../assets/softSkills/self-taught.svg';
import iconTeamWork from '../assets/softSkills/teamWork.svg';
import iconUncertainty from '../assets/softSkills/uncertaintyManagement.svg';

const Soft = () => (
  <div>
    <span>HABILIDADES</span>
    <img src={iconSelfTaught} alt="Autodidacta" className="" />
    <span className="spanSkills">AUTODIDACTA</span>
    <img src={iconTeamWork} alt="Trabajo colaborativo" className="" />
    <span className="spanSkills">TRABAJO COLABORATIVO</span>
    <img src={iconProblemSolving} alt="Resolución de problemas" className="" />
    <span className="spanSkills">RESOLUCIÓN DE PROBLEMAS</span>
    <img src={iconUncertainty} alt="Manejo de incertidumbre" className="" />
    <span className="spanSkills">MANEJO DE INCERTIDUMBRE</span>
  </div>
);

export default Soft;
