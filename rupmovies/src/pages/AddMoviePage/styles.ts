import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
    background-color: #333;
    background-image: none;
  }
`;