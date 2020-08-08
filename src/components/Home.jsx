import React, { useState, useEffect } from 'react';
import imgMobile from '../assets/front-mobile.png';
import btnInit from '../assets/initButton.svg';

export const Home = () => {
  const initBtn = () => {
    console.log('Hola mundo');
  };
  return (
    <div className="homeMobile">
      <span>Hola</span>
      <img src={imgMobile} alt="Fondo developer" />
      <button type="button" onClick={initBtn}><img src={btnInit} alt="boton seguir" /></button>
    </div>
  );
};

// class Home extends Component {
//     state = {
//         task: {
//              title: 'my first task',
//              done: true,
//         }
//     }

//     handleClick = () => {
//         const task = this.state.task;
//         task.done = !task.done;
//         this.setState({task});
//     };
//     render() {
//         return (
//             <div>
//                 <h3>{this.state.task.title}</h3> 
//                 <h1>{this.state.task.done.toString()}</h1>
//                 <button onClick={this.handleClick}>
//                     clickMe!
//                 </button>
//             </div>
//         )
//     }
// }

export default Home;
