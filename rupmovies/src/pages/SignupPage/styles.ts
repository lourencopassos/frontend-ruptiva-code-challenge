import styled from 'styled-components';

export const SignupFormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SignupForm = styled.form`
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

export const SignupFormHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
`;