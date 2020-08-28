import React from 'react';
import myPhoto from '../assets/myPhoto.png';

const About = () => (
  <div id="about" className="homeMobile marginCont">
    <div className="mrg20">
      <p className="textCenter">ACERCA DE MI</p>
    </div>
    <div className="divPhoto flex">
      <img src={myPhoto} className="myPhoto" alt="Silvana Ramos" />
    </div>
    <div>
      <p className="paragraph quicksand">Front-end developer con background en contabilidad.</p>
      <p className="paragraph quicksand">Encontré en la tecnología un lugar donde puedo estar en aprendizaje constante, desarrollarme como autodidacta y trabajar bajo metodologías ágiles. Quiero crear productos digitales que sean soluciones a situaciones reales y que estos lleguen a impactar en la vida de las personas. </p>
    </div>
  </div>
);

export default About;
