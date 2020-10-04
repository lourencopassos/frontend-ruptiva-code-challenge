import * as React from 'react';
import Header from '../../components/Header/index';
import { useForm } from '../../hooks/useForm';
import { Container, AddMovieForm, AddMovieFormHeader } from './styles';
import { addMovie } from '../../utils/api';
import { AxiosRequestConfig } from 'axios';
import { Movie } from '../Home';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Button } from 'antd';

const AddMoviePage: React.FunctionComponent = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [form, handleFormChange, resetForm] = useForm({
    title: '',
    synopsis: '',
    imdb_score: '',
    poster: '',
    genre: '',
    trailer: '',
  });
  const [token, setToken] = useState<string | null>('');
  let history = useHistory();
  
  React.useEffect(() => {
    setToken(localStorage.getItem('token'));
    if (token === null) {
      alert('Login necessário!');
      history.push('/');
    }
  }, [token, history]);

  const handleMovieCreation = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = await addMovie(token as AxiosRequestConfig, form as Movie);
    setLoading(true);
    resetForm();

    if (result) {
      history.replace('/home');
    }
  };

  return (
    <Container>
      <Header />
      <div>
        <AddMovieFormHeader>
          <h1>Adicionar filme</h1>
        </AddMovieFormHeader>

        <AddMovieForm onSubmit={handleMovieCreation}>
          <label>Nome do filme</label>
          <input
            placeholder="Nome do filme"
            name="title"
            value={form.title}
            onChange={handleFormChange}
            required
          />
          <label>Sinopse do filme</label>
          <textarea
            placeholder="Sinopse do filme"
            name="synopsis"
            value={form.synopsis}
            onChange={handleFormChange}
            required
            maxLength={255}
          />
          <label>Nota do filme no IMDB</label>
          <input
            placeholder="Nota do filme no IMDB"
            name="imdb_score"
            value={form.imdb_score}
            onChange={handleFormChange}
            required
            type="number"
            min="1"
            max="5"
          />
          <label>Link do pôster do filme</label>
          <input
            placeholder="Link do pôster do filme"
            name="poster"
            value={form.poster}
            onChange={handleFormChange}
            required
          />
          <label>Trailer do filme</label>
          <input
            placeholder="Link do pôster do filme"
            name="trailer"
            value={form.trailer}
            onChange={handleFormChange}
            required
          />
          <label>Gênero do filme</label>
          <select
            name="genre"
            value={form.genre}
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
            Adicionar filme
          </Button>
        </AddMovieForm>
      </div>
    </Container>
  );
};

export default AddMoviePage;
