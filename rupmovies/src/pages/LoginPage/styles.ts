import styled from 'styled-components';
import background from '../../images/background.jpg';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${background});

  @media (max-width: 800px) {
    flex-direction: column;
    background-color: #333;
    background-image: none;
  }
`;

export const FormContainer = styled.div`
  height: 50%;
  width: 40%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(0, 0, 0, 0.6);

  div {
    display: flex;
    justify-content: center;
  }

  img {
    width: 30%;
    margin-bottom: 32px;
  }

  label {
    color: #f5f5f5;
    font-size: 16px;
  }

  p {
    padding: 15px 0;
    color: #f5f5f5;
    font-size: 14px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  input {
    margin: 8px 0;
    width: 80%;
    background-color: #333;
    border: none;
    padding: 10px;
    color: white;
  }

  button {
    margin-top: 15px;
    cursor: pointer;
    background-color: #e50914;
    color: #fff;
    border: none;
    width: 200px;
    height: 30px;
    border-radius: 5px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  width: img {
    width: 20%;
  }
`;
