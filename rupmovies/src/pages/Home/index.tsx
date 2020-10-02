import React, { useState, useEffect } from 'react';
import { Container, LoadingContainer } from './styles';
import Header from '../../components/Header';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import MovieCard from '../../components/MovieCard';
import { getMovies } from '../../utils/api';
import { AxiosRequestConfig } from 'axios';
import MovieDetailModal from '../../components/MovieDetailModal';

export interface Movie {
  [index: string]: string;
}

const Home: React.FunctionComponent = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJmM2M3OTkxLTc2YmEtNDY5MS04YTFiLWM0OTc4YmEyZWRhYiIsImlhdCI6MTYwMTU2OTc3MiwiZXhwIjoxNjAxNTc1MTcyfQ.zmcBP7Ixi5iDfKnDhjmetXAjt7ilWAVlX4XZRglhWeU';

  const fetchMovies = async (token: AxiosRequestConfig) => {
    const result = await getMovies(token);
    (await result) && setMovies(result.movies);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(token as AxiosRequestConfig);
  }, [movies]);

  const render = loading ? (
    <LoadingContainer>
      <Loader type="TailSpin" color="#141414" height={100} width={100} />
    </LoadingContainer>
  ) : (
    <div>
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
            />
          );
        })}
    </div>
  );
  return (
    <Container>
      <Header />
      {render}
      <MovieDetailModal
        visible={visibleModal}
        onCancel={() => setVisibleModal(false)}
      />
    </Container>
  );
};

export default Home;
