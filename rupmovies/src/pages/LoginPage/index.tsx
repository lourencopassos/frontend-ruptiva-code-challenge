import React, { FormEvent } from 'react';
import { Container, FormContainer } from './styles';
import { useForm } from '../../hooks/useForm';
import logo from '../../images/netflix.png';
import { useHistory, Link } from 'react-router-dom';
import { login } from '../../utils/api';

const LoginPage: React.FC = (): JSX.Element => {
  const [form, handleFormChange, resetForm] = useForm({
    email: '',
    password: '',
  });

  let history = useHistory();

  const handleLogin = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    const response = await login(form);
    if (response) {
      localStorage.setItem('token', response.token);
      resetForm();
      history.replace('/home');
    } else {
      alert('Erro ao realizar login, confira os dados');
      resetForm();
    }
  };

  return (
    <Container>
      <FormContainer>
        <div>
          <img src={logo} alt="Rup Movies Logo" />
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
            value={form.password}
            onChange={handleFormChange}
            required
          />
          <div>
            <p>
              Caso você não tenha uma conta, clique{' '}
              <Link to="./signup">aqui</Link>.
            </p>
          </div>
          <button type="submit">Acessar</button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default LoginPage;
