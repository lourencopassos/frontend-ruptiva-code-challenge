import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import {
  LoadingContainer,
  DetailModalContainer,
  DetailModalPoster,
  DetailModalInformation,
  DetailModalTrailer,
} from './styles';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { deleteMovie } from '../../utils/api';
import { AxiosRequestConfig } from 'axios';
import { Link, useHistory } from 'react-router-dom';

const App: React.FunctionComponent<any> = (props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const movie = props.movie;

  const history = useHistory();

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJmM2M3OTkxLTc2YmEtNDY5MS04YTFiLWM0OTc4YmEyZWRhYiIsImlhdCI6MTYwMTY1MjEzOCwiZXhwIjoxNjAxNjU3NTM4fQ.ap0HxiiZwBzrMQxQQXLXmZu-vddqf0GKSwBoZUhR4sg';

  useEffect(() => {
    if (movie) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [movie]);

  const deleteMovieFromApp = async (id: string) => {
    await deleteMovie(token as AxiosRequestConfig, id);
    setLoading(true);
    history.replace('./home');
  };

  const details = loading ? (
    <LoadingContainer>
      <Loader type="TailSpin" color="#141414" height={100} width={100} />
    </LoadingContainer>
  ) : (
    <DetailModalContainer>
      <DetailModalPoster>
        <img src={movie && movie.poster} alt={movie && movie.title} />
      </DetailModalPoster>
      <DetailModalInformation>
        <button onClick={() => deleteMovieFromApp(movie.id)}>
          Deletar Filme
        </button>
        <h1>{movie && movie.title}</h1>
        <p>{movie && movie.synopsis}</p>

        <DetailModalTrailer href={movie && movie.trailer}>
          Assistir Trailer
        </DetailModalTrailer>

        <div>
          <p>{movie && movie.genre}</p>
        </div>
      </DetailModalInformation>
    </DetailModalContainer>
  );

  return (
    <Modal
      visible={props.visible}
      centered
      width={800}
      footer
      onCancel={props.onCancel}
      bodyStyle={{
        height: '500px',
      }}
    >
      {details}
    </Modal>
  );
};

export default App;
