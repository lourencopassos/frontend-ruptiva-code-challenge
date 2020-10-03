import styled from 'styled-components';

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailModalContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const DetailModalPoster = styled.div`
  width: 50%;
  padding-right: 10%;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const DetailModalInformation = styled.div`
  width: 50%;

  div {
    display: flex;
    margin-top: 16px;

    p {
      border: 1px solid red;
      color: red;
      padding: 10px;
    }
  }
`;

export const DetailModalTrailer = styled.a`
  margin: 10px 0;
  font-weight: bold;
`;
