import {
  ExploreIntro,
  OrigamiList,
  OrigamiListItem,
  OrigamisContainer,
} from './Origamis.style';

const Origamis = () => {
  return (
    <OrigamisContainer>
      <ExploreIntro>Explore my designs</ExploreIntro>
      <OrigamiList>
        <OrigamiListItem>Bird baby bird</OrigamiListItem>
        <OrigamiListItem>Bird baby bird</OrigamiListItem>
        <OrigamiListItem>Bird baby bird</OrigamiListItem>
        <OrigamiListItem>Bird baby bird</OrigamiListItem>
      </OrigamiList>
    </OrigamisContainer>
  );
};

export default Origamis;
