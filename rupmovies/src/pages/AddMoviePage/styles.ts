import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;

  flex-direction: column;

  @media (max-width: 800px) {
    flex-direction: column;
    background-color: #333;
    background-image: none;
  }
`;

export const AddMovieForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    width: 50%;
    font-size: 16px;
    margin: 8px 0;
  }

  input {
    width: 50%;
    margin: 8px 0;
  }

  textarea {
    width: 50%;
    margin: 8px 0;
  }

  select {
    width: 50%;
    margin: 8px 0;
  }

  button {
    margin: 8px;
    padding: 0 8px;
  }
`;

export const AddMovieFormHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
`;
