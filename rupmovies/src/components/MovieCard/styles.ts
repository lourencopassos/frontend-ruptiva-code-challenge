import styled from 'styled-components';

export const MovieContainer = styled.div`
  padding: 8px 0;
  margin-top: 32px;
  width: 300px;
  height: 425px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05), 0 8px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  font-size: 16px;
  cursor: pointer;

  img {
    border-radius: 8px;
    height: 70%;
  }
`;

export const MovieTitle = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin: 16px 0 0 0;
`;

export const MovieInfo = styled.div`
  display: flex;
  justify-content: center;
  height: 20%;
  width: 100%;
  p {
    padding: 0 8px;
  }
`;
