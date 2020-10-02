import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

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
