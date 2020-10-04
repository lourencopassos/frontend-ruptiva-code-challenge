import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Movie } from '../../src/pages/Home';

const baseUrl: string = 'https://rup-movies.herokuapp.com';

export const getMovies = async (token: AxiosRequestConfig) => {
  const axiosConfig = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const response: AxiosResponse = await axios.get(
      `${baseUrl}/movie/all`,
      axiosConfig
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (form: { [index: string]: string }) => {
  try {
    const response = await axios.post(`${baseUrl}/user/signup`, form);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (form: { [index: string]: string }) => {
  try {
    const response = await axios.post(`${baseUrl}/user/login`, form);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetail = async (token: AxiosRequestConfig, id: string) => {
  const axiosConfig = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const response: AxiosResponse = await axios.get(
      `${baseUrl}/movie/${id}`,
      axiosConfig
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteMovie = async (token: AxiosRequestConfig, id: string) => {
  const axiosConfig = {
    headers: {
      Authorization: token,
    },
  };

  try {
    await axios.delete(`${baseUrl}/movie/${id}`, axiosConfig);
  } catch (error) {
    console.log(error);
  }
};

export const addMovie = async (token: AxiosRequestConfig, movie: Movie) => {
  const axiosConfig = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const result = await axios.post(
      `${baseUrl}/movie/create`,
      movie,
      axiosConfig
    );

    return result.data;
  } catch (error) {
    console.log(error);
  }
};
