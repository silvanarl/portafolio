import React from 'react';
import iconReact from '../assets/techSkills/blue-react.svg';
import iconCss from '../assets/techSkills/blue-css.svg';
import iconHtml from '../assets/techSkills/blue-html.svg';
import iconJs from '../assets/techSkills/blue-js.svg';
import iconFigma from '../assets/techSkills/blue-figma.svg';
import iconGit from '../assets/techSkills/blue-git.svg';
import iconFirebase from '../assets/techSkills/blue-firebase.svg';
import iconNodeJs from '../assets/techSkills/blue-node.svg';

const Knowledge = () => (
  <div id="knowledge" className="flex column marginCont">
    <p className="textCenter mrg20">CONOCIMIENTOS</p>
    <div className="divTechSkills">
      <div className="column divBySkill mrgnTechSkill">
        <img src={iconHtml} alt="HTML" className="iconBlueKnow" />
        <span className="spanBySkill">HTML5</span>
      </div>
      <div className="column divBySkill mrgnTechSkill">
        <img src={iconCss} alt="CSS" className="iconBlueKnow" />
        <span className="spanBySkill">CSS3</span>
      </div>
      <div className="column divBySkill mrgnTechSkill">
        <img src={iconJs} alt="Javascript" className="iconBlueKnow" />
        <span className="spanBySkill">JAVASCRIPT</span>
      </div>
      <div className="column divBySkill mrgnTechSkill">
        <img src={iconNodeJs} alt="Node Js" className="iconBlueKnow" />
        <span className="spanBySkill">NODEJS</span>
      </div>
      <div className="column divBySkill mrgnTechSkill">
        <img src={iconGit} alt="Git" className="iconBlueKnow" />
        <span className="spanBySkill">GIT</span>
      </div>
      <div className="column divBySkill mrgnTechSkill">
        <img src={iconReact} alt="React Js" className="iconBlueKnow" />
        <span className="spanBySkill">REACTJS</span>
      </div>
      <div className="column divBySkill mrgnTechSkill">
        <img src={iconFirebase} alt="Firebase" className="iconBlueKnow" />
        <span className="spanBySkill">FIREBASE</span>
      </div>
      <div className="column divBySkill mrgnTechSkill">
        <img src={iconFigma} alt="Figma" className="iconBlueKnow" />
        <span className="spanBySkill">FIGMA</span>
      </div>
    </div>
  </div>
);

export default Knowledge;
