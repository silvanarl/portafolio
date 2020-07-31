import React from 'react';
import { render } from 'react-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';

render(
  <div>
    <header>
      <NavBar />
    </header>
    <main>
      <h1>Hola desde React!</h1>
      <Home />
    </main>
    <footer>
    </footer>
  </div>, document.getElementById('root'),
);
