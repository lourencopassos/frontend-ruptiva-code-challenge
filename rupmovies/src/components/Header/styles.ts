import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #141414;
  height: 86px;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 150px;
  }

  button {
    padding: 5px 30px;
    cursor: pointer;
    background-color: #e50914;
    color: #fff;
    border: none;
    border-radius: 5px;
  }

  @media (max-width: 800px) {
    img {
      width: 100px;
    }

    button {
      padding: 5px 5px;
      cursor: pointer;
    }
  }
`;
