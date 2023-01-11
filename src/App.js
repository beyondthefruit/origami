import './App.css';
import GlobalStyle from './globalStyles';
import { useState } from 'react';
import Presentation from './presentation';
function App() {
  return (
    <section>
      <GlobalStyle />
      <h1>Origamix</h1>
      <Presentation />
    </section>
  );
}

export default App;
