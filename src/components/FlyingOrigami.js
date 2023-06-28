import {
  FlyingOrigamiContainer,
  FlyingOrigamiSection,
  OrigamiBtnSection,
  OrigamiColorTitle,
  OrigamiColorBtns,
  OrigamiColorSection,
} from './FlyingOrigami.style';
import OrigamiSvg from './Origamisvg';
import colors from '../birdColor';
import { useState } from 'react';
import Banner from './Banner';

const FlyingOrigami = ({ isMobile }) => {
  const [origamiColor, setOrigamiColor] = useState('#E6E8E6');
  const [origamiStrokeColor, setOrigamiStrokeColor] = useState('#808080');
  const [origamiFly, setOrigamiFly] = useState(5);

  const updateColor = (c, s) => {
    setOrigamiColor(c);
    setOrigamiStrokeColor(s);
  };
  console.log('origami fly from flying' + origamiFly);
  return (
    <FlyingOrigamiContainer>
      {isMobile && <Banner />}
      <FlyingOrigamiSection>
        <OrigamiSvg
          origamiColor={origamiColor}
          origamiStrokeColor={origamiStrokeColor}
          origamiFly={origamiFly}
        />
      </FlyingOrigamiSection>
      <OrigamiColorSection>
        <OrigamiColorTitle>Choose your paper</OrigamiColorTitle>
        <button id='go' onClick={() => setOrigamiFly(3)}>
          Click me
        </button>
        <OrigamiBtnSection>
          {colors.map((color) => {
            const { colorId, colorName, ref, stroke } = color;
            return (
              <OrigamiColorBtns
                aria-label='color'
                key={colorId}
                style={{
                  backgroundColor: ref,
                  color: stroke,
                }}
                onClick={() => updateColor(ref, stroke)}
              >
                {colorName}
              </OrigamiColorBtns>
            );
          })}
        </OrigamiBtnSection>
      </OrigamiColorSection>
    </FlyingOrigamiContainer>
  );
};

export default FlyingOrigami;
