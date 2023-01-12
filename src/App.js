import './App.css';
import GlobalStyle from './globalStyles';
import { useState } from 'react';
import Presentation from './left/presentation';
import Origamis from './right/Origamis';
function App() {
  return (
    <section>
      <GlobalStyle />

      <Presentation />
      <Origamis />
    </section>
  );
}

export default App;
