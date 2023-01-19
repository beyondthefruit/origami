import styled from 'styled-components';

export const PresentationContainer = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #777369;
  color: black;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 15vh;
`;

export const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  width: auto;
  margin: 1rem 0 0 1.5rem;
`;
export const Logo = styled.img`
  width: 32px;
  height: 32px;
  margin: 1rem 1.5rem 0 0;
`;

export const Intro = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70vh;
  display: flex;
  align-items: center;
`;

export const IntroTitle = styled.h1`
  font-size: 3rem;
  padding-left: 1.5rem;
`;

export const IntroTitleSpan = styled.span`
  color: #f3f5f7;
`;
