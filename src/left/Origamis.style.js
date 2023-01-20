import styled from 'styled-components';
import { device } from '../devices';

export const BothContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
export const OrigamisContainer = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #f3f5f7;
`;

export const ExploreIntro = styled.div`
  width: auto;
  height: 5rem;
  font-size: 1.2rem;
  padding: 1rem 0 0 1rem;
  @media ${device.tablet} {
    font-size: 1.3rem;
  }
  @media ${device.laptop} {
    font-size: 1.5rem;
  }
`;

export const OrigamiList = styled.div`
  height: 70vh;
  /* border: grey ridge 1px; */
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

export const OrigamiListItem = styled.a`
  /* border: red ridge 1px; */
  height: 2.5rem;
  /* background-color: none; */
  border-radius: 4px;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0.5rem;
  padding: 0.1rem 0 0 1.5rem;
  transition: padding-left 0.5s background-color 0.5s;
  cursor: pointer;

  /* & {
    background-color: aliceblue;
  } */
  @media ${device.tablet} {
    font-size: 1.7rem;
    height: 3rem;
  }
  @media ${device.laptop} {
    font-size: 2rem;
    height: 3.2rem;
  }

  &:visited {
    background-color: black;
  }

  /* &:hover {
    padding-left: 3rem;
    background-color: #b5bbb4;
    font-size: 2.3rem;
    /* background-color: #86b2c1; 
  } */
`;
