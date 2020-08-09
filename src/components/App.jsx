import React from 'react';
import Home from './Home';
import TechSkills from './TechSkills';
import { NavBar, ButtonMenu } from './NavBar';

const App = () => (
  <div>
    <header>
      <ButtonMenu />
      <NavBar />
    </header>
    <main>
      <section><Home /></section>
      <section><TechSkills /></section>
    </main>
    <footer>
    </footer>
  </div>
);

export default App;
