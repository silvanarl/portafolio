import React from 'react';
import iconProblemSolving from '../assets/softSkills/problemSolving.svg';
import iconSelfTaught from '../assets/softSkills/self-taught.svg';
import iconTeamWork from '../assets/softSkills/teamWork.svg';
import iconUncertainty from '../assets/softSkills/uncertaintyManagement.svg';

const Soft = () => (
  <div id="skills" className="flex column paddCont">
    <div className="mrg20">
      <p className="textCenter">HABILIDADES</p>
    </div>
    <div className="listOfSkills">
      <div className="column divBySkill mrgSoftSkill">
        <img src={iconSelfTaught} alt="Autodidacta" className="softImg" />
        <span className="spanBySkill">AUTODIDACTA</span>
      </div>
      <div className="column divBySkill mrgSoftSkill">
        <img src={iconTeamWork} alt="Trabajo colaborativo" className="softImg" />
        <span className="spanBySkill">TRABAJO COLABORATIVO</span>
      </div>
      <div className="column divBySkill mrgSoftSkill">
        <img src={iconProblemSolving} alt="Resolución de problemas" className="softImg" />
        <span className="spanBySkill">RESOLUCIÓN DE PROBLEMAS</span>
      </div>
      <div className="column divBySkill mrgSoftSkill">
        <img src={iconUncertainty} alt="Manejo de incertidumbre" className="softImg" />
        <span className="spanBySkill">MANEJO DE INCERTIDUMBRE</span>
      </div>
    </div>
  </div>
);

export default Soft;
