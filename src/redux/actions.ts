import axios from 'axios';
import {Dispatch} from 'redux';
import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIE_DETAIL_SUCCESS,
  MovieActionTypes,
  MovieDetailActionTypes,
} from './types';

const API_KEY = '52b49cd6fd8a546d3890b27ed47fe682';
const BASE_URL = 'https://api.themoviedb.org/3';

// Fetch popular movies
export const fetchMovies = (type = 'popular') => {
  return async (dispatch: Dispatch<MovieActionTypes>) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${type}`, {
        params: {
          api_key: API_KEY,
        },
      });

      const movies = response.data.results;
      dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: {movies, type},
      });
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
};

export const fetchMovieDetail = (movieId: number) => {
  return async (dispatch: Dispatch<MovieDetailActionTypes>) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
        params: {
          api_key: API_KEY,
        },
      });

      const movieDetails = response.data;
      dispatch({
        type: FETCH_MOVIE_DETAIL_SUCCESS,
        payload: movieDetails,
      });
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };
};
