import { OrigamiContainer, OrigamiImg } from './Origami.style';

const Origami = ({ showImg, setShowImg }) => {
  return (
    <OrigamiContainer>
      <OrigamiImg src={showImg}></OrigamiImg>
    </OrigamiContainer>
  );
};

export default Origami;
