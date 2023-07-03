import styled from 'styled-components';
import { device } from '../devices';

export const PresentationContainer = styled.div`
  width: 42%;
  height: 100vh;
  color: black;
  @media ${device.mobileL} {
    width: 50%;
  }
  @media ${device.tablet} {
    width: 50%;
  }
`;

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 15vh;
`;
