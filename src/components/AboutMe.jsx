import React from 'react';
import myPhoto from '../assets/myPhoto.png';

const About = () => (
  <div className="homeMobile">
    <div>
      <img src={myPhoto} className="myPhoto" alt="Silvana Ramos" />
    </div>
    <span className="myName">SILVANA RAMOS LESCANO</span>
    <p>Desarrolladora Front-end, con background en administración y contabilidad.</p>
    <p>Encontré en la tecnología un lugar donde puedo estar en aprendizaje constante y desarrollar habilidades como ser autodidacta, el análisis, desarrollo ágil y resolución de problemas con enfoques innovadores.</p> 
    <p>Quiero crear productos digitales que sean soluciones a problemas y situaciones reales y que estos lleguen a impactar en la vida de las personas, seguir aprendiendo herramientas tecnológicas y ser full-stack en el futuro.</p>
  </div>
);

export default About;
