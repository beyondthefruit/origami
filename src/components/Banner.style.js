import styled from 'styled-components';
import { device } from '../devices';

export const BannerSection = styled.div`
  height: 20vh;
  background-color: #777369;
  color: black;

  @media ${device.tablet} {
    height: 100vh;
  }
`;
export const BannerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 7vh;
  padding: 0.3rem 0 0.5rem;
  @media ${device.tablet} {
    height: 15vh;
  }
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  width: auto;
  margin: 1rem 0 0 0.5rem;
  @media ${device.mobileM} {
    letter-spacing: 1px;
  }
  @media ${device.tablet} {
    font-size: 1.7rem;
    margin: 1rem 0 0 1.5rem;
  }
  @media ${device.laptop} {
    font-size: 2.3rem;
    letter-spacing: 2px;
  }
`;
export const Logo = styled.img`
  width: 32px;
  height: 32px;
  margin: 0.6rem 0.5rem 0 0;
  transition: 0.4s linear;
  color: black;
  fill: black;
  @media ${device.tablet} {
    width: 48px;
    height: 48px;
    margin: 0.8rem 1.5rem 0 0;
    cursor: pointer;
  }
  @media ${device.laptop} {
    width: 56px;
    height: 56px;
  }
  &:hover {
    transform: rotate(360deg);
  }
`;

export const Intro = styled.div`
  display: flex;
  justify-content: space-between;
  height: 6vh;
  /* align-items: flex-end; */

  @media ${device.mobileM} {
    height: 6vh;
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    height: 70vh;
    line-height: 2.2rem;
    align-items: center;
    line-height: 4rem;
  }
`;
export const IntroTitle = styled.h1`
  font-size: 1.3rem;
  padding-left: 0.6rem;
  font-style: oblique 3deg;

  @media ${device.mobileS} {
    font-size: 1.4rem;
  }
  @media ${device.mobileM} {
    font-size: 1.7rem;
    padding: 0 0.2rem 1rem 0.8rem;
  }
  @media ${device.tablet} {
    font-size: 2.7rem;
    padding-left: 1.5rem;
    margin-right: 0.3rem;
  }
  @media ${device.laptop} {
    font-size: 3.4rem;
    letter-spacing: 1px;
  }
`;

export const IntroTitleSpan = styled.span`
  color: #f3f5f7;
`;
