import React from 'react';
import Home from './Home';
import { NavBar, ButtonMenu } from './NavBar';

const App = () => (
  <div>
    <header>
      <ButtonMenu />
      <NavBar />
    </header>
    <main>
      <h1>Hola desde React!</h1>
      <section><Home /></section>
    </main>
    <footer>
    </footer>
  </div>
);

export default App;
