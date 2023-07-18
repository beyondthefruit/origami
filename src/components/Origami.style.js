import styled from 'styled-components';
import { device } from '../devices';

export const OrigamiContainer = styled.div`
  width: 108%;
  height: 100vh;
  background-color: #f3f5f7;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media ${device.tablet} {
    width: 50%;
    height: 100vh;
    background-color: #777369;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media ${device.tablet} {
    width: 50%;
  }
`;

export const OrigamiImg = styled.img`
  width: 250px;
  height: 250px;
  border: #777369 solid 2px;
  transition: 0.6s linear;
  box-shadow: 0px 0px 1px 1px #a2a4a4;

  @media ${device.mobileM} {
    width: 275px;
    height: 275px;
  }
  @media ${device.mobileL} {
    width: 250px;
    height: 250px;
  }
  @media ${device.tablet} {
    border: #5c5a57 solid 2px;
    box-shadow: 0px 0px 1px 1px #3b3a38;
    width: 300px;
    height: 300px;
    &:hover {
      scale: 1.15;
    }
  }
  @media ${device.laptop} {
    width: 400px;
    height: 400px;
  }
  @media ${device.laptopL} {
    width: 500px;
    height: 500px;
  }
`;
