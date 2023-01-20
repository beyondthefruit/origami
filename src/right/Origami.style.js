import styled from 'styled-components';
import { device } from '../devices';

export const OrigamiContainer = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #777369;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OrigamiImg = styled.img`
  width: 200px;
  height: 200px;
  border: black ridge 2px;
  transition: 1s;
  &:hover {
    scale: 1.1;
  }

  @media ${device.mobileM} {
    width: 200px;
    height: 200px;
  }
  @media ${device.laptop} {
    width: 400px;
    height: 400px;
  }
`;
