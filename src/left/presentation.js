import origamiLogo from '../imgs/origamiLogo.png';
import origamil from '../imgs/origamil.png';
import {
  PresentationContainer,
  Banner,
  Intro,
  Logo,
  IntroTitle,
  Title,
  IntroTitleSpan,
} from './Presentation.style';

const Presentation = () => {
  return (
    <PresentationContainer>
      <Banner>
        <Title>origami</Title>
        {/* <Logo src={origamiLogo} alt='origami logo'></Logo> */}
        <Logo src={origamil} alt='origami logo'></Logo>
      </Banner>
      <Intro>
        <IntroTitle>
          Discover my <IntroTitleSpan>paper</IntroTitleSpan> creations
        </IntroTitle>
      </Intro>
    </PresentationContainer>
  );
};

export default Presentation;
