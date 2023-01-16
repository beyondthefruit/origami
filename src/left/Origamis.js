import { useState } from 'react';
import {
  BothContainer,
  ExploreIntro,
  OrigamiList,
  OrigamiListItem,
  OrigamisContainer,
} from './Origamis.style';
import Origami from '../right/Origami';
import { GiPaperCrane } from 'react-icons/gi';

const Origamis = ({ paperData, setPaperData }) => {
  console.log(paperData);
  return (
    // <BothContainer>
    <OrigamisContainer>
      <ExploreIntro>Explore my designs</ExploreIntro>
      <OrigamiList>
        {paperData.map((origami) => {
          const { id, photo, name, icon } = origami;
          console.log(origami);
          return (
            <OrigamiListItem key={id}>
              {icon} {name}
            </OrigamiListItem>
          );
        })}
      </OrigamiList>
    </OrigamisContainer>
    // </BothContainer>
  );
};

export default Origamis;
