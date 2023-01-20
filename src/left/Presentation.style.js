import styled from 'styled-components';
import { device } from '../devices';

export const PresentationContainer = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #777369;
  color: black;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 15vh;
`;

export const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  width: auto;
  margin: 1rem 0 0 1.5rem;
  @media ${device.tablet} {
    font-size: 1.2rem;
  }
  @media ${device.laptop} {
    font-size: 2.3rem;
  }
`;
export const Logo = styled.img`
  width: 32px;
  height: 32px;
  margin: 1rem 1.5rem 0 0;
  @media ${device.tablet} {
    width: 48px;
    height: 48px;
  }
  @media ${device.laptop} {
    width: 56px;
    height: 56px;
  }
`;

export const Intro = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70vh;
  display: flex;
  align-items: center;
`;

export const IntroTitle = styled.h1`
  font-size: 1.6rem;
  padding-left: 0.6rem;

  @media ${device.mobileM} {
    font-size: 1.8rem;
    padding-left: 0.8rem;
  }
  @media ${device.laptop} {
    font-size: 3rem;
    padding-left: 1.5rem;
  }
`;

export const IntroTitleSpan = styled.span`
  color: #f3f5f7;
`;
