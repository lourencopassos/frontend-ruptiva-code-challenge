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

  img {
    border-radius: 8px;
    height: 70%;
  }
`;

export const MovieTitle = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin: 0;
`;

export const MovieInfo = styled.div`
  padding-top: 8px;
  height: 20%;
  width: 100%;
  p {
    margin: 0;
  }
`;
