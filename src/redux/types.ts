export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: Date;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieSliderState {
  now_playing: Movie[];
  popular: Movie[];
  upcoming: Movie[];
  top_rated: Movie[];
}

export interface MovieState {
  movies: Movie[];
  movieSlider: MovieSliderState;
}

export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';

interface FetchMoviesSuccessAction {
  type: typeof FETCH_MOVIES_SUCCESS;
  payload: {movies: Movie[]; type: string};
}

export type MovieActionTypes = FetchMoviesSuccessAction;
