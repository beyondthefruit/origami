import origamil from '../imgs/origamil.png';
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
