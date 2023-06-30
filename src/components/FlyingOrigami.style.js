import styled from 'styled-components';
import { device } from '../devices';

export const FlyingOrigamiContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f3f5f7;
  color: black;

  @media ${device.tablet} {
    width: 50%;
  }
`;
export const FlyingOrigamiSection = styled.div`
  height: 50vh;
  display: flex;

  align-items: flex-end;
  justify-content: center;

  @media ${device.mobileM} {
    height: 55vh;
  }
  @media ${device.tablet} {
    height: 70vh;
  }
  @media ${device.laptop} {
    /* height: 70vh; */
    align-items: center;
  }
`;

export const FlyingOrigami = styled.div`
  width: auto;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  background-color: #f3f5f7;
  color: black;
  flex-grow: 1;
  /* without flex-grow, the svg is disapearing */

  @media ${device.mobileM} {
    height: 360px;
  }
  @media ${device.mobileL} {
    height: 360px;
  }
  @media ${device.tablet} {
    height: auto;
  }
`;

export const OrigamiColorSection = styled.div`
  width: auto;
  height: 30vh;

  @media ${device.mobileL} {
    padding-top: 3rem;
  }

  @media ${device.tablet} {
    height: 25vh;
    padding-top: 0;
  }
`;

export const OrigamiAnimationSection = styled.div`
  width: auto;
  display: flex;
`;
export const OrigamiAnimation = styled.button`
  width: 5rem;
  height: auto;

  margin: 0 auto;
  font-size: 1rem;
  font-weight: 150;
  border-radius: 2px;
  box-shadow: 1px 1px 1px 1px #b5bab5;
  /* letter-spacing: 1px; */
`;

export const OrigamiColorTitle = styled.p`
  width: 100%;
  height: auto;
  font-size: 1rem;
  margin: 0.2rem 0;
  text-align: center;
  font-style: oblique;
  clear: both;
  @media ${device.tablet} {
    width: 100%;
    height: 1.5rem;
    text-align: center;
    margin: 0.5rem 0;
    font-size: 1.1rem;
  }
  @media ${device.laptop} {
    font-size: 1.2rem;
  }
`;

export const OrigamiBtnSection = styled.div`
  width: auto;
  height: 15vh;
  display: flex;

  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0.2rem 0.5rem 0.5rem;

  @media ${device.mobileM} {
    height: 13vh;
  }
  @media ${device.mobileL} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  @media ${device.tablet} {
    height: auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
export const OrigamiColorBtns = styled.button`
  width: 5rem;
  height: 1.5rem;
  margin: 0.25rem auto;
  border-radius: 3px;
  background-color: white;
  box-shadow: inset 0px 0px 0px 0px;
  transition: 0.3s linear;
  transition: background-color 0.3s ease-in-out, box-shadow 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 200;
  letter-spacing: 1px;

  @media ${device.mobileM} {
    width: 5rem;
    height: 1.4rem;
    margin: 0.3rem auto;
  }
  @media ${device.mobileL} {
    width: 5rem;
    height: 1.5rem;
    margin: 0.4rem auto;
  }
  @media ${device.tablet} {
    width: 8rem;

    margin: 0.3rem;
    /* margin: 0 15px; */
  }
  @media ${device.laptop} {
    width: 14rem;
    height: 1.5rem;
    margin: 0.4rem 0.5rem;
  }
  @media ${device.laptopL} {
    width: 14rem;
    height: 1.5rem;
    margin: 0.6rem;
  }
  &:hover {
    scale: 1.05;
    letter-spacing: 1px;
    box-shadow: inset 200px 0 0 0;
  }
`;
