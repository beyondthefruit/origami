import { useState } from 'react';
import {
  ExploreIntro,
  OrigamiList,
  OrigamiListItem,
  OrigamisContainer,
} from './Origamis.style';
import { GiPaperCrane } from 'react-icons/gi';

const Origamis = ({ filterImg, paperData }) => {
  const [activeId, setActiveId] = useState(1);

  return (
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
