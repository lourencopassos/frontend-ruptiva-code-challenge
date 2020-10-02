import React from 'react';
import { MovieContainer, MovieTitle, MovieInfo } from './styles';
import { useEffect, useState } from 'react';
import { Movie } from '../../pages/Home';

const MovieCard: React.FunctionComponent<Movie> = (props): JSX.Element => {
  return (
    <MovieContainer>
      <img src={props.poster} alt={props.title} />
      <div>
        <MovieTitle>{props.title}</MovieTitle>
        <MovieInfo>
          <p> ★ {props.imdb_score}</p>
          <p>{props.genre}</p>
        </MovieInfo>
      </div>
    </MovieContainer>
  );
};

export default MovieCard;
