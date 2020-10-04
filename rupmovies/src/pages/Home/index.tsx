import React, { useState, useEffect } from 'react';
import { Container, LoadingContainer, MovieContainer } from './styles';
import Header from '../../components/Header';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import MovieCard from '../../components/MovieCard';
import { getMovies, getMovieDetail } from '../../utils/api';
import { AxiosRequestConfig } from 'axios';
import { useHistory } from 'react-router-dom';

export interface Movie {
  [index: string]: string;
}

const Home: React.FunctionComponent = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [movieDetail, setMovieDetail] = useState<Movie | undefined>(undefined);
  const [token, setToken] = useState<string | null>('');

  const history = useHistory();

  const fetchMovies = async (token: AxiosRequestConfig) => {
    const result = await getMovies(token);
    (await result) && setMovies(result.movies);
    setLoading(false);
  };

  const fetchMovieDetails = async (id: string) => {
    const detail = await getMovieDetail(token as AxiosRequestConfig, id);
    setMovieDetail(detail);
  };

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    fetchMovies(token as AxiosRequestConfig);
    if (token === null) {
      alert('Login necessário!');
      history.push('/');
    }
  }, [token, movies, history]);

  const render = loading ? (
    <LoadingContainer>
      <Loader type="TailSpin" color="#141414" height={100} width={100} />
    </LoadingContainer>
  ) : (
    <MovieContainer>
      {movies &&
        movies.map((movie) => {
          return (
            <MovieCard
              poster={movie.poster}
              title={movie.title}
              synopsis={movie.synopsis}
              imdb_score={movie.imdb_score}
              genre={movie.genre}
              key={movie.id}
              id={movie.id}
              visible={visibleModal}
              onClick={() => {
                fetchMovieDetails(movie.id);
                setVisibleModal(true);
              }}
              movie={movieDetail}
              onCancel={() => {
                setVisibleModal(false);
                setMovieDetail(undefined);
              }}
            />
          );
        })}
    </MovieContainer>
  );
  return (
    <Container>
      <Header />
      {render}
    </Container>
  );
};

export default Home;
