import {Reducer} from 'redux';
import {FETCH_MOVIES_SUCCESS, MovieState} from '../types';

const initialState: MovieState = {
  movies: [],
};

type MovieReducer = Reducer<MovieState, any>;

const movieReducer: MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
