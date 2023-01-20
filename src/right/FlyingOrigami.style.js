import styled from 'styled-components';
import { device } from '../devices';

export const FlyingOrigamiContainer = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #f3f5f7;
  color: black;
`;

export const FlyingOrigami = styled.div`
  width: auto;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 18rem;
  background-color: #f3f5f7;
  color: black;

  @media ${device.mobileM} {
    margin-top: 24rem;
  }
  @media ${device.laptop} {
    margin-top: 10rem;
  }
  @media ${device.laptopL} {
    margin-top: 4rem;
  }
`;

export const OrigamiSvgEl = styled.div`
  /* width: 20px;
  height: 20px; */
`;
