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
    history.replace('/home');
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
            // value={form.email}
            // onChange={handleFormChange}
            required
          />
          <div>
            <p>
              Caso você não tenha uma conta, clique <Link to="./">aqui</Link>.
            </p>
          </div>
          <button type="submit">Acessar</button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default LoginPage;
