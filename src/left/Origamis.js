import {
  ExploreIntro,
  OrigamiList,
  OrigamiListItem,
  OrigamisContainer,
} from './Origamis.style';
import { GiPaperCrane } from 'react-icons/gi';

const Origamis = () => {
  return (
    <OrigamisContainer>
      <ExploreIntro>Explore my designs</ExploreIntro>
      <OrigamiList>
        <OrigamiListItem>
          <GiPaperCrane />
          Bird baby bird
        </OrigamiListItem>
        <OrigamiListItem>
          <GiPaperCrane />
          Bird baby bird
        </OrigamiListItem>
        <OrigamiListItem>
          <GiPaperCrane />
          Bird baby bird
        </OrigamiListItem>
        <OrigamiListItem>
          <GiPaperCrane />
          Bird baby bird
        </OrigamiListItem>
      </OrigamiList>
    </OrigamisContainer>
  );
};

export default Origamis;
