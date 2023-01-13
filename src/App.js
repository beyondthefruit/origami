import './App.css';
import GlobalStyle from './globalStyles';
import { useState } from 'react';
import Presentation from './left/presentation';
import FlyingOrigami from './right/FlyingOrigami';
function App() {
  return (
    <section>
      <GlobalStyle />

      <Presentation />
      <FlyingOrigami />
    </section>
  );
}

export default App;
