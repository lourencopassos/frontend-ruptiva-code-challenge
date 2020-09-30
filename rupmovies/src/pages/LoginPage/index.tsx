import React, { FormEvent } from 'react';
import { Container, FormContainer } from './styles';
import { useForm } from '../../hooks/useForm';
import logo from '../../images/netflix.png';
import { useHistory, Link } from 'react-router-dom';

const LoginPage: React.FC = (): JSX.Element => {
  const [form, handleFormChange, resetForm] = useForm({
    email: '',
    password: '',
  });

  let history = useHistory();

  const handleLogin = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    console.log(form);
    // if (response.token) {
    //   localStorage.setItem('token', response.token);
    //   history.replace('/dashboard');
    //   resetForm();
    // } else {
    //   window.alert(response.message);
    // }
  };

  return (
    <Container>
      <FormContainer>
        <div>
          <img src={logo} />
        </div>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleFormChange}
            required
          />
          <label>Senha</label>
          <input
            placeholder="Senha"
            type="password"
            name="password"
            // value={form.email}
            // onChange={handleFormChange}
            required
          />
          <div>
            <p>Caso você não tenha uma conta, clique aqui.</p>
          </div>
          <button type="submit">Acessar</button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default LoginPage;
