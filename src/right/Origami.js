import { OrigamiContainer, OrigamiImg } from './Origami.style';

const Origami = ({ getId, showImg, setShowImg }) => {
  const displayPhoto = () => {};
  return (
    <OrigamiContainer>
      <OrigamiImg src={showImg.photo}></OrigamiImg>;
    </OrigamiContainer>
  );
};

export default Origami;
