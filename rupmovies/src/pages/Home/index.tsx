import React, { useState, useEffect } from 'react';
import { Container, LoadingContainer, MovieContainer } from './styles';
import Header from '../../components/Header';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import MovieCard from '../../components/MovieCard';
import { getMovies, getMovieDetail } from '../../utils/api';
import { AxiosRequestConfig } from 'axios';

export interface Movie {
  [index: string]: string;
}

const Home: React.FunctionComponent = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [movieDetail, setMovieDetail] = useState<Movie | undefined>(undefined);

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJmM2M3OTkxLTc2YmEtNDY5MS04YTFiLWM0OTc4YmEyZWRhYiIsImlhdCI6MTYwMTY1MjEzOCwiZXhwIjoxNjAxNjU3NTM4fQ.ap0HxiiZwBzrMQxQQXLXmZu-vddqf0GKSwBoZUhR4sg';

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
    fetchMovies(token as AxiosRequestConfig);
  }, [movies]);

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
