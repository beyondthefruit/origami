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
  // const [index, setIndex] = useState(0);
  const [activeId, setActiveId] = useState(1);

  return (
    // <BothContainer>
    <OrigamisContainer>
      <ExploreIntro>Explore my designs</ExploreIntro>
      <OrigamiList>
        {paperData.map((origami) => {
          const { id, name, icon, photo } = origami;
          return (
            <OrigamiListItem
              key={id}
              onClick={() => {
                filterImg(photo);
                setActiveId(id);
              }}
              className={activeId === id ? 'actived' : ''}
            >
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
