import axios from 'axios';
import {Dispatch} from 'redux';
import {FETCH_MOVIES_SUCCESS, MovieActionTypes} from './types';

const API_KEY = '52b49cd6fd8a546d3890b27ed47fe682';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = () => {
  return async (dispatch: Dispatch<MovieActionTypes>) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/popular`, {
        params: {
          api_key: API_KEY,
        },
      });

      const movies = response.data.results;
      dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: movies,
      });
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
};
