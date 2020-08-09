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
  <div>
    <div className="row">
      <img src={iconHtml} alt="HTML" className="iconBlueKnow" />
      <img src={iconCss} alt="CSS" className="iconBlueKnow" />
    </div>
    <div className="row">
      <img src={iconJs} alt="Javascript" className="iconBlueKnow" />
      <img src={iconNodeJs} alt="Node Js" className="iconBlueKnow" />
    </div>
    <div className="row">
      <img src={iconGit} alt="Git" className="iconBlueKnow" />
      <img src={iconReact} alt="React Js" className="iconBlueKnow" />
    </div>
    <div className="row">
      <img src={iconFirebase} alt="Firebase" className="iconBlueKnow" />
      <img src={iconFigma} alt="Figma" className="iconBlueKnow" />
    </div>
  </div>
);

export default Knowledge;
