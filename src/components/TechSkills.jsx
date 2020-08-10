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
  <div className="flex column">
    <span>CONOCIMIENTOS</span>
    <div className="row divTechSkills">
      <img src={iconHtml} alt="HTML" className="iconBlueKnow" />
      <span className="spanSkills">HTML5</span>
      <img src={iconCss} alt="CSS" className="iconBlueKnow" />
      <span className="spanSkills">CSS3</span>
    </div>
    <div className="row">
      <img src={iconJs} alt="Javascript" className="iconBlueKnow" />
      <span className="spanSkills">JAVASCRIPT</span>
      <img src={iconNodeJs} alt="Node Js" className="iconBlueKnow" />
      <span className="spanSkills">NODEJS</span>
    </div>
    <div className="row">
      <img src={iconGit} alt="Git" className="iconBlueKnow" />
      <span className="spanSkills">GIT</span>
      <img src={iconReact} alt="React Js" className="iconBlueKnow" />
      <span className="spanSkills">REACTJS</span>
    </div>
    <div className="row">
      <img src={iconFirebase} alt="Firebase" className="iconBlueKnow" />
      <span className="spanSkills">FIREBASE</span>
      <img src={iconFigma} alt="Figma" className="iconBlueKnow" />
      <span className="spanSkills">FIGMA</span>
    </div>
  </div>
);

export default Knowledge;
