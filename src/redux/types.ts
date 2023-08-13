export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export interface MovieState {
  movies: Movie[];
}

export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';

interface FetchMoviesSuccessAction {
  type: typeof FETCH_MOVIES_SUCCESS;
  payload: Movie[];
}

export type MovieActionTypes = FetchMoviesSuccessAction;
