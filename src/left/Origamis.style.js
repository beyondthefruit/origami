import styled from 'styled-components';
import { device } from '../devices';

export const BothContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
export const OrigamisContainer = styled.div`
  width: 42%;
  height: 100vh;
  background-color: #f3f5f7;
  @media ${device.mobileL} {
    width: 50%;
  }
`;

export const ExploreIntro = styled.div`
  width: auto;
  height: 5rem;
  font-size: 0.9rem;
  padding: 1rem 0 0 1rem;
  @media ${device.mobileM} {
    font-size: 1rem;
  }
  @media ${device.tablet} {
    font-size: 1.3rem;
  }
  @media ${device.laptop} {
    font-size: 1.5rem;
  }
`;

export const OrigamiList = styled.div`
  height: 75vh;
  /* border: grey ridge 1px; */
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const OrigamiListItem = styled.a`
  /* border: red ridge 1px; */
  height: 2rem;
  border-radius: 4px;
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0.2rem;
  padding: 0 0 0 0.5rem;
  transition: padding-left 0.5s background-color 0.5s;
  cursor: pointer;

  /* & {
    background-color: aliceblue;
  } */
  @media ${device.mobileM} {
    font-size: 1.5rem;
    margin: 0.2rem;
  }
  @media ${device.mobileL} {
    font-size: 1.6rem;
    margin: 0.5rem;
    padding: 0 0 0 1rem;
  }
  @media ${device.tablet} {
    font-size: 1.7rem;
    height: 3rem;
  }
  @media ${device.tablet} {
    font-size: 1.7rem;
    height: 3rem;
  }
  @media ${device.laptop} {
    font-size: 2rem;
    height: 3.2rem;
  }
  @media ${device.laptopL} {
    font-size: 2.3rem;
    height: 4rem;
    padding-top: 0.4rem;
  }
  /* 
  &:visited {
    background-color: black;
  } */
  &.actived {
    background-color: red;
  }

  &:hover {
    padding-left: 1.5rem;
    background-color: #b5bbb4;
    font-size: 1.5rem;
    background-color: #86b2c1;

    @media ${device.mobileM} {
      padding-left: 1.8rem;
      font-size: 1.6rem;
    }
    @media ${device.mobileL} {
      padding-left: 2rem;
      font-size: 1.7rem;
    }
    @media ${device.tablet} {
      padding-left: 3rem;
      font-size: 2.1rem;
    }
    @media ${device.laptopL} {
      font-size: 2.4rem;
    }
  }
`;
