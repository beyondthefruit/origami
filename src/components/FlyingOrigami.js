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

  const updateColor = (c, s) => {
    setOrigamiColor(c);
    setOrigamiStrokeColor(s);
  };

  return (
    <FlyingOrigamiContainer>
      {isMobile && <Banner />}
      <FlyingOrigamiSection>
        <OrigamiSvg
          origamiColor={origamiColor}
          origamiStrokeColor={origamiStrokeColor}
        />
      </FlyingOrigamiSection>
      <OrigamiColorSection>
        <OrigamiColorTitle>Choose your paper</OrigamiColorTitle>
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
