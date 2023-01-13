import './App.css';
import GlobalStyle from './globalStyles';
import { useState } from 'react';
import Presentation from './left/presentation';
import FlyingOrigami from './right/FlyingOrigami';
import Origamis from './left/Origamis';
import Origami from './right/Origami';
function App() {
  return (
    <section>
      <GlobalStyle />

      <Presentation />
      <FlyingOrigami />
      <Origamis />
      <Origami />
    </section>
  );
}

export default App;
