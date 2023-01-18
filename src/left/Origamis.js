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

const Origamis = ({ filterImg, paperData, setPaperData, getId }) => {
  return (
    // <BothContainer>
    <OrigamisContainer>
      <ExploreIntro>Explore my designs</ExploreIntro>
      <OrigamiList>
        {paperData.map((origami) => {
          // console.log(origami);
          const { id, name, icon, photo } = origami;
          return (
            // <OrigamiListItem key={id} onClick={() => getId(origami.id)}>
            //   {icon} {name}
            <OrigamiListItem key={id} onClick={() => filterImg(photo)}>
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
