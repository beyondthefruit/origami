import styled from 'styled-components';
import { device } from '../devices';

export const OrigamisContainer = styled.div`
  width: 100%;
  height: 40vh;
  background-color: #777369;
  /* background-color: #f3f5f7; */
  @media ${device.tablet} {
    width: 50%;
    height: 100vh;
    background-color: #f3f5f7;
  }
`;

export const ExploreIntro = styled.div`
  width: auto;
  height: 2rem;
  font-size: 0.9rem;
  padding: 1rem 0 0 1rem;
  font-style: oblique 5deg;
  @media ${device.mobileM} {
    font-size: 1rem;
  }
  @media ${device.tablet} {
    font-size: 1.3rem;
    height: 5rem;
  }
  @media ${device.laptop} {
    font-size: 1.5rem;
  }
`;

export const OrigamiList = styled.div`
  height: 30vh;

  width: 40%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  /* flex-wrap: wrap; */
  @media ${device.mobileM} {
    height: 35vh;
    width: 30%;
  }
  @media ${device.tablet} {
    height: 75vh;
    width: 80%;
    justify-content: center;
  }
`;

export const OrigamiListItem = styled.a`
  height: 2rem;
  border-radius: 6px;
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0.2rem;
  padding: 0 0 0 0.5rem;
  transition: padding-left 0.8s background-color 0.8s;
  cursor: pointer;

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
    margin: 0.3rem;
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

  &.actived {
    background-color: #d1e9f0;
  }

  &:hover {
    padding-left: 1rem;
    background-color: #b5bbb4;
    font-size: 1.4rem;
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
      padding-left: 4rem;
    }
  }
`;
