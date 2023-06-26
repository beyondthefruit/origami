import { OrigamiContainer, OrigamiImg } from './Origami.style';

const Origami = ({ showImg, setShowImg, isMobile }) => {
  return (
    <OrigamiContainer>
      <OrigamiImg src={showImg}></OrigamiImg>
    </OrigamiContainer>
  );
};

export default Origami;
