import {
  FlyingOrigamiContainer,
  FlyingOrigamiSection,
  OrigamiBtnSection,
  OrigamiColorBtns,
} from './FlyingOrigami.style';
import OrigamiSvg from './Origamisvg';
import colors from '../birdColor';

const FlyingOrigami = () => {
  return (
    <FlyingOrigamiContainer>
      <FlyingOrigamiSection>
        <OrigamiSvg />
      </FlyingOrigamiSection>
      <OrigamiBtnSection>
        {colors.map((color) => {
          const { colorId, colorName, ref } = color;
          return <OrigamiColorBtns key={colorId}>{colorName}</OrigamiColorBtns>;
        })}
      </OrigamiBtnSection>
    </FlyingOrigamiContainer>
  );
};

export default FlyingOrigami;
