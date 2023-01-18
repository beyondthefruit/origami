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
  const [showImg, setShowImg] = useState(data);

  const getId = (id) => {
    console.log(id);
    // let banane = showImg.filter((bloc) => bloc.id === id);
    // console.log(banane);
    // console.log(banane.photo);
    let banane = showImg.filter((bloc) => {
      if (bloc.id === id) {
        console.log(bloc);
      }
    });
    setShowImg(banane);
    // console.log(banane);
    // console.log(banane.photo);
  };

  return (
    <section>
      <GlobalStyle />

      <Presentation />
      <FlyingOrigami />
      <Origamis
        paperData={paperData}
        setPaperData={setPaperData}
        getId={getId}
      />
      <Origami getId={getId} showImg={showImg} setShowImg={setShowImg} />
    </section>
  );
}

export default App;
