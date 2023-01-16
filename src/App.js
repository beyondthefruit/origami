import './App.css';
import GlobalStyle from './globalStyles';
import { useState } from 'react';
import Presentation from './left/presentation';
import FlyingOrigami from './right/FlyingOrigami';
import Origamis from './left/Origamis';
import Origami from './right/Origami';
import data from './data';

function App() {
  const [paperData, setPaperData] = useState(data);
  return (
    <section>
      <GlobalStyle />

      <Presentation />
      <FlyingOrigami />
      <Origamis paperData={paperData} setPaperData={setPaperData} />
      <Origami />
    </section>
  );
}

export default App;
