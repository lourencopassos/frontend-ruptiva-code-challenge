import React from 'react';
import { MovieContainer, MovieTitle, MovieInfo } from './styles';
import MovieDetailModal from '../../components/MovieDetailModal';

const MovieCard: React.FunctionComponent<any> = (props): JSX.Element => {
  const movie = props.movie;
  const id = props.id


  return (
    <div>
      <MovieContainer onClick={props.onClick}>
        <img src={props.poster} alt={props.title} />
        <div>
          <MovieTitle>{props.title}</MovieTitle>
          <MovieInfo>
            <p> ★ {props.imdb_score}</p>
            <p>{props.genre}</p>
          </MovieInfo>
        </div>
      </MovieContainer>
      <MovieDetailModal
        visible={props.visible}
        id={id}
        onCancel={props.onCancel}
        movie={movie}
      />
    </div>
  );
};

export default MovieCard;
