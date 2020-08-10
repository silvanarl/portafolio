import React from 'react';
import Home from './Home';
import About from './AboutMe';
import TechSkills from './TechSkills';
import SoftSkills from './SoftSkills';
import Projects from './Projects';
import Contact from './Contact';
import { NavBar, ButtonMenu } from './NavBar';

const App = () => (
  <div>
    <header className="div-btn-menu">
      <ButtonMenu />
      <NavBar />
    </header>
    <main>
      <section><Home /></section>
      <section><About /></section>
      <section><TechSkills /></section>
      <section><SoftSkills /></section>
      <section><Projects /></section>
      {/* <section><Contact /></section> */}
    </main>
    <footer>
    </footer>
  </div>
);

export default App;
