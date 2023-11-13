import { useState } from 'react';
import {
  ExploreIntro,
  OrigamiList,
  OrigamiListItem,
  OrigamisContainer,
} from './OrigamisList.style';

const OrigamiListPart = ({ filterImg, paperData }) => {
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
  );
};

export default OrigamiListPart;
