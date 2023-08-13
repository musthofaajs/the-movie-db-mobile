import {Reducer} from 'redux';
import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIE_DETAIL_SUCCESS,
  MovieState,
} from '../types';

const initialState: MovieState = {
  movies: [],
  movieDetail: null,
  featuredMovie: null,
  movieSlider: {
    now_playing: [],
    popular: [],
    upcoming: [],
    top_rated: [],
  },
};

type MovieReducer = Reducer<MovieState, any>;

const movieReducer: MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movieSlider: {
          ...state.movieSlider,
          [action.payload.type]: action.payload.movies,
        },
      };
    case FETCH_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        [action.payload.type]: action.payload.detail,
      };
    default:
      return state;
  }
};

export default movieReducer;
