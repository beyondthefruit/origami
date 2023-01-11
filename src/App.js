import './App.css';
import GlobalStyle from './globalStyles';
import { useState } from 'react';
import Presentation from './left/presentation';
import Origami from './right/Origami';
function App() {
  return (
    <section>
      <GlobalStyle />
      <h1>Origamix</h1>
      <Presentation />
      <Origami />
    </section>
  );
}

export default App;
