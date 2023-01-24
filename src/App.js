import './App.css';
import GlobalStyle from './globalStyles';
import { useState } from 'react';
import Presentation from './left/presentation';
import FlyingOrigami from './right/FlyingOrigami';
import Origamis from './left/Origamis';
import Origami from './right/Origami';
import data from './data';

const image = data[0].photo;
const images = data.map((e) => e.photo);

function App() {
  const [paperData, setPaperData] = useState(data);
  const [showImg, setShowImg] = useState(image);
  console.log(showImg);

  const filterImg = (img) => {
    const displayImg = images.filter((e) => e === img);
    setShowImg(displayImg);
  };

  return (
    <section>
      <GlobalStyle />

      <Presentation />
      <FlyingOrigami />
      <Origamis
        paperData={paperData}
        setPaperData={setPaperData}
        filterImg={filterImg}
      />
      <Origami
        showImg={showImg}
        setShowImg={setShowImg}
        filterImg={filterImg}
      />
    </section>
  );
}

export default App;
