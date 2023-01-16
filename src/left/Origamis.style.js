import styled from 'styled-components';

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
`;

export const OrigamiList = styled.div`
  height: 70vh;
  border: grey ridge 1px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

export const OrigamiListItem = styled.a`
  border: red ridge 1px;
  font-size: 1.4rem;
  margin: 0.5rem;
  transition: padding-left 0.5s background-color 0.5s;
  cursor: pointer;

  &:hover {
    padding-left: 1.5rem;
    background-color: #b5bbb4;
    /* background-color: #86b2c1; */
  }
`;
