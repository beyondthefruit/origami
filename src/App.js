import './App.css';
import GlobalStyle from './globalStyles';
import { useState } from 'react';
import Presentation from './components/presentation';
import FlyingOrigami from './components/FlyingOrigami';
import Origamis from './components/OrigamisList';
import Origami from './components/Origami';
import data from './data';
import { device } from './devices';
import { MediaQuery, useMediaQuery } from 'react-responsive';

const image = data[0].photo;
const images = data.map((e) => e.photo);

function App() {
  const [paperData, setPaperData] = useState(data);
  const [showImg, setShowImg] = useState(image);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const filterImg = (img) => {
    const displayImg = images.filter((e) => e === img);
    setShowImg(displayImg);
  };

  console.log(device);
  console.log(device.mobileS);

  return (
    <section>
      <GlobalStyle />

      {!isMobile && <Presentation />}

      <FlyingOrigami isMobile={isMobile} />

      {!isMobile && (
        <Origamis
          paperData={paperData}
          setPaperData={setPaperData}
          filterImg={filterImg}
        />
      )}
      <Origami
        showImg={showImg}
        setShowImg={setShowImg}
        filterImg={filterImg}
      />
    </section>
  );
}

export default App;
