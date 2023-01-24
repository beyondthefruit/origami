import styled from 'styled-components';
import { device } from '../devices';

export const FlyingOrigamiContainer = styled.div`
  width: 58%;
  height: 100vh;
  background-color: #f3f5f7;
  color: black;

  @media ${device.mobileL} {
    width: 50%;
  }
`;
export const FlyingOrigamiSection = styled.div`
  height: 65vh;
  display: flex;
  /* align-items: center; */
  align-items: flex-end;
  justify-content: center;
  /* justify-content: flex-end; */
  @media ${device.tablet} {
    height: 70vh;
  }
  @media ${device.laptop} {
    height: 75vh;
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
    margin-top: 2rem;
  }
  @media ${device.laptop} {
    /* margin-top: 10rem; */
  }
  @media ${device.laptopL} {
    /* margin-top: 4rem; */
  }
`;

export const OrigamiSvgEl = styled.div`
  /* width: 20px;
  height: 20px; */
`;
export const OrigamiColorSection = styled.div`
  width: auto;
  height: 30vh;

  @media ${device.tablet} {
    height: 25vh;
  }
  /* @media ${device.laptop} {
    height:30vh;
  } */
`;
export const OrigamiColorTitle = styled.p`
  width: 10rem;
  height: auto;
  font-size: 1rem;
  margin: 0.2rem auto;

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
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0.2rem 0.5rem;

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
export const OrigamiColorBtns = styled.button`
  width: 10rem;
  height: 1.5rem;
  margin: 0.3rem auto;
  border: none;
  @media ${device.tablet} {
    width: 8rem;
    height: 1.5rem;
    margin: 0.3rem;
  }
  @media ${device.laptop} {
    width: 14rem;
    height: 1.5rem;
    margin: 0.3rem;
  }
  /* background-color: ${(props) => props.theme.origamiColor}; */
`;
