import styled from 'styled-components';
import { device } from '../devices';

export const OrigamiContainer = styled.div`
  width: 58%;
  height: 100vh;
  background-color: #777369;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.mobileL} {
    width: 50%;
  }
`;

export const OrigamiImg = styled.img`
  width: 170px;
  height: 170px;
  border: #c1c2c2 ridge 2.5px;
  transition: 0.6s linear;
  box-shadow: 2px 2px 6px 2px #a2a4a4;

  @media ${device.mobileM} {
    width: 200px;
    height: 200px;
  }
  @media ${device.mobileL} {
    width: 250px;
    height: 250px;
  }
  @media ${device.tablet} {
    width: 300px;
    height: 300px;
  }
  @media ${device.laptop} {
    width: 400px;
    height: 400px;
  }
  @media ${device.laptopL} {
    width: 500px;
    height: 500px;
  }
  &:hover {
    scale: 1.15;
  }
`;
