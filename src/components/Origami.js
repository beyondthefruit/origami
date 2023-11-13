import { OrigamiContainer, OrigamiImg } from './Origami.style';
import OrigamiListPart from './OrigamisList';
const Origami = ({ showImg, isMobile, paperData, setPaperData, filterImg }) => {
  return (
    <OrigamiContainer>
      {isMobile && (
        <OrigamiListPart
          paperData={paperData}
          setPaperData={setPaperData}
          filterImg={filterImg}
        />
      )}
      <OrigamiImg src={showImg}></OrigamiImg>
    </OrigamiContainer>
  );
};

export default Origami;
