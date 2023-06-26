import origamiLogo from '../imgs/origamiLogo.png';
import origamil from '../imgs/origamil.png';
import devices from '../devices';
import Banner from './Banner';
import {
  PresentationContainer,
  // Banner,
  // Intro,
  // Logo,
  // IntroTitle,
  // Title,
  // IntroTitleSpan,
} from './Presentation.style';
import { BannerTitle } from './Banner.style';

const Presentation = () => {
  return (
    <PresentationContainer>
      <Banner></Banner>
      {/* <BannerTitle>
        <Title>origami</Title> */}
      {/* <Logo src={origamiLogo} alt='origami logo'></Logo> */}
      {/* <Logo src={origamil} alt='origami logo'></Logo>
      </BannerTitle>
      <Intro>
        <IntroTitle>
          Discover my <IntroTitleSpan>paper</IntroTitleSpan> creations
        </IntroTitle>
      </Intro> */}
    </PresentationContainer>
  );
};

export default Presentation;
