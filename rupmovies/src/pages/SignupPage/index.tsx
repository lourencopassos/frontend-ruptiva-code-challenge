import { Button } from 'antd';
import * as React from 'react';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { login, signup } from '../../utils/api';
import { useHistory } from 'react-router-dom';
import { SignupForm, SignupFormHeader } from './styles';

interface IAppProps {}

const SignupPage: React.FunctionComponent<IAppProps> = (props): JSX.Element => {
  const [form, handleFormChange, resetForm] = useForm({
    email: '',
    password: '',
    name: '',
    favourite_genre: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  let history = useHistory();

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(form);
    const token = await signup(form);
    setLoading(true);

    if (token) {
      const loginBody = {
        email: form.email,
        password: form.password,
      };
      const result = await login(loginBody);
      if (result) {
        history.replace('/home');
      }
    }
  };
  return (
    <div>
      <SignupFormHeader>
        <h1> Cadastro Rupmovies</h1>
      </SignupFormHeader>
      <SignupForm onSubmit={handleSignup}>
        <label>Email</label>
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleFormChange}
          required
        />
        <label>Nome</label>
        <input
          placeholder="Nome"
          type="name"
          name="name"
          value={form.name}
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
        <label>Gênero do filme</label>
        <select
          name="favourite_genre"
          value={form.favourite_genre}
          onChange={handleFormChange}
          required
        >
          <option value={undefined}></option>
          <option value="Ação">Ação</option>
          <option value="Drama">Drama</option>
          <option value="Comédia">Comédia</option>
          <option value="Suspense">Suspense</option>
          <option value="Terror">Terror</option>
        </select>
        <Button htmlType="submit" loading={loading}>
          Cadastrar
        </Button>
      </SignupForm>
    </div>
  );
};

export default SignupPage;
