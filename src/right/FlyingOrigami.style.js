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
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
export const OrigamiBtnSection = styled.div`
  width: auto;
  height: 5rem;
`;
export const OrigamiColorBtns = styled.button`
  width: 4rem;
  height: 1rem;
`;
