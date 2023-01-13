import origamiLogo from '../imgs/origamiLogo.png';
import {
  PresentationContainer,
  WebsiteBanner,
  WebsiteLogo,
  WebsiteTitle,
} from './Presentation.style';

const Presentation = () => {
  return (
    <PresentationContainer>
      <WebsiteBanner>
        <WebsiteTitle>origami</WebsiteTitle>
        <WebsiteLogo src={origamiLogo} alt='origami logo'></WebsiteLogo>
      </WebsiteBanner>
    </PresentationContainer>
  );
};

export default Presentation;
