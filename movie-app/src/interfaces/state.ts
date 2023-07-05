import { IMovie, IMovieDetail } from "./movies";

export interface IMovies {
  Response?: string,
  Search?: IMovie[],
  totalResults: string,
  error?: string
}

export interface State {
  movies: IMovies | {},
  shows: IMovies | {},
  selectedMoviesOrShowsDetail: IMovieDetail | {},
  loading: boolean,
};

