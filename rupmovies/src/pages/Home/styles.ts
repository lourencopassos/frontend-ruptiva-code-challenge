import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 800px) {
    /* flex-direction: column;
    background-color: #333;
    background-image: none; */
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  div {
    padding: 0 16px;
  }
`;

export const LoadingContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
