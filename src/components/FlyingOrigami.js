import {
  FlyingOrigamiContainer,
  FlyingOrigamiSection,
  OrigamiBtnSection,
  OrigamiColorTitle,
  OrigamiColorBtns,
  OrigamiColorSection,
  OrigamiAnimation,
  OrigamiColorBtnsSpan,
  OrigamiAnimationSection,
} from './FlyingOrigami.style';
import OrigamiSvg from './Origamisvg';
import colors from '../birdColor';
import { useState } from 'react';
import Banner from './Banner';

const FlyingOrigami = ({ isMobile }) => {
  const [origamiColor, setOrigamiColor] = useState('#a0a6a0');
  const [origamiStrokeColor, setOrigamiStrokeColor] = useState('#0B0A0A');
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
        <OrigamiAnimationSection>
          <OrigamiAnimation id='animation' onClick={() => setOrigamiFly(3)}>
            Fly me
          </OrigamiAnimation>
        </OrigamiAnimationSection>
        <OrigamiColorTitle>Choose your paper</OrigamiColorTitle>

        <OrigamiBtnSection>
          {colors.map((color) => {
            const { colorId, colorName, ref, stroke } = color;
            return (
              <OrigamiColorBtns
                aria-label='color'
                key={colorId}
                style={{
                  // backgroundColor: ref,
                  border: `2px solid ${ref}`,
                  color: ref,
                  // boxShadow: `50px 0 0 0 #fff`,
                  // boxShadow: `200px 0 0 0 ${ref}`,
                }}
                onClick={() => updateColor(ref, stroke)}
              >
                {colorName}
                {/* <OrigamiColorBtnsSpan
                  style={{
                    backgroundColor: ref,
                    color: stroke,
                    // boxShadow: `50px 0 0 0 #fff`,
                    // boxShadow: `200px 0 0 0 ${ref}`,
                  }}
                >
                  {colorName}
                </OrigamiColorBtnsSpan> */}
                {/* <p
                  style={{
                    color: stroke,
                  }}
                >
                  {colorName}
                </p> */}
              </OrigamiColorBtns>
            );
          })}
        </OrigamiBtnSection>
      </OrigamiColorSection>
    </FlyingOrigamiContainer>
  );
};

export default FlyingOrigami;
