import styled from 'styled-components';
import { device } from '../devices';

export const PresentationContainer = styled.div`
  width: 42%;
  height: 100vh;
  background-color: #777369;
  color: black;
  @media ${device.mobileL} {
    width: 50%;
  }
`;

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 15vh;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  width: auto;
  margin: 1rem 0 0 0.5rem;
  @media ${device.tablet} {
    font-size: 1.7rem;
    margin: 1rem 0 0 1.5rem;
  }
  @media ${device.laptop} {
    font-size: 2.3rem;
  }
`;
export const Logo = styled.img`
  width: 32px;
  height: 32px;
  margin: 0.6rem 0.5rem 0 0;
  transition: 0.5s linear;
  @media ${device.tablet} {
    width: 48px;
    height: 48px;
    margin: 0.8rem 1.5rem 0 0;
  }
  @media ${device.laptop} {
    width: 56px;
    height: 56px;
  }
  &:hover {
    transform: rotate(25deg);
  }
`;

export const Intro = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70vh;
  line-height: 2.2rem;
  align-items: center;
  @media ${device.tablet} {
    line-height: 4rem;
  }
`;

export const IntroTitle = styled.h1`
  font-size: 1.6rem;
  padding-left: 0.6rem;
  /* font-style: oblique 5deg; */

  @media ${device.mobileM} {
    font-size: 1.8rem;
    padding-left: 0.8rem;
  }
  @media ${device.tablet} {
    font-size: 3rem;
    padding-left: 1.5rem;
  }
  @media ${device.laptop} {
    font-size: 3.4rem;
    letter-spacing: 1px;
  }
`;

export const IntroTitleSpan = styled.span`
  color: #f3f5f7;
`;
