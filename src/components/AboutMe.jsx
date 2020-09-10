import React from 'react';
import myPhoto from '../assets/myPhoto.png';

const About = () => (
  <div id="about" className="homeMobile paddCont">
    <div className="mrg20">
      <p className="textCenter">ACERCA DE MI</p>
    </div>
    <div className="flex center aboutDiv">
      <div className="divPhoto">
        <img src={myPhoto} className="myPhoto" alt="Silvana Ramos" />
      </div>
      <div className="contentAbout">
        <p className="paragraph quicksand">Front-end developer con background en contabilidad.</p>
        <p className="paragraph quicksand">Encontré en la tecnología un lugar donde puedo estar en aprendizaje constante, desarrollarme como autodidacta y trabajar bajo metodologías ágiles. Quiero crear productos digitales que sean soluciones a situaciones reales y que estos lleguen a impactar en la vida de las personas. </p>
      </div>
    </div>
  </div>
);

export default About;
