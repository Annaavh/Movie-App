import React, { FC } from "react";
import Slider from "react-slick";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import { Settings } from "../../common/apis/settings";
import { useAppSelector } from "../../features/store";
import { IMovie } from "../../interfaces/movies";
import { IMovies } from "../../interfaces/state";

const MovieListing: FC = () => {
  const movies = useAppSelector((state) => state.movies.movies);
  const shows = useAppSelector((state) => state.movies.shows);

  let renderMovies,
    renderShows;

  renderMovies =
    movies && (movies as IMovies).Response === "True" ? (
      (movies as IMovies).Search?.map((movie: IMovie, index: number) => {
        return <MovieCard key={index} {...movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{(movies as IMovies).error}</h3>
      </div>
    );

  renderShows =
    (shows as IMovies).Response === "True" ? (
      (shows as IMovies).Search?.map((shows: IMovie, index: number) => {
        return <MovieCard key={index} {...shows} />;
      })
    ) : (
      <div className="shows-error">
        <h3>{(shows as IMovies).error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
}

export default MovieListing;
