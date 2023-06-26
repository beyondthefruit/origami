import origamiLogo from '../imgs/origamiLogo.png';
import origamil from '../imgs/origamil.png';
import devices from '../devices';
import {
  BannerTitle,
  Intro,
  Logo,
  IntroTitle,
  Title,
  IntroTitleSpan,
  BannerSection,
} from './Banner.style';

const Banner = () => {
  return (
    <BannerSection>
      <BannerTitle>
        <Title>origami</Title>
        {/* <Logo src={origamiLogo} alt='origami logo'></Logo> */}
        <Logo src={origamil} alt='origami logo'></Logo>
      </BannerTitle>
      <Intro>
        <IntroTitle>
          Discover my <IntroTitleSpan>paper</IntroTitleSpan> creations
        </IntroTitle>
      </Intro>
    </BannerSection>
  );
};

export default Banner;
