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
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type MovieDetail = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;

  genres: Genre[];
  genre_ids: number[];
  id: number;

  // original_language: string
  original_title: string;
  overview: string;

  popularity: number;
  poster_path: string;

  // first_air_date: string
  release_date: string;
  revenue: number;
  runtime: number;

  tagline: string;
  title: string;

  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Genre = {
  id: number;
  name: string;
};

export interface MovieSliderState {
  now_playing: Movie[];
  popular: Movie[];
  upcoming: Movie[];
  top_rated: Movie[];
}

export interface MovieState {
  movies: Movie[];
  movieDetail: MovieDetail | null;
  movieSlider: MovieSliderState;
}

export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIE_DETAIL_SUCCESS = 'FETCH_MOVIE_DETAIL_SUCCESS';

interface FetchMoviesSuccessAction {
  type: typeof FETCH_MOVIES_SUCCESS;
  payload: {movies: Movie[]; type: string};
}

export type MovieActionTypes = FetchMoviesSuccessAction;

interface FetchMovieDetailSuccessAction {
  type: typeof FETCH_MOVIE_DETAIL_SUCCESS;
  payload: {movies: Movie[]; type: string};
}

export type MovieDetailActionTypes = FetchMovieDetailSuccessAction;
