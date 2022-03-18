import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import { Settings } from "../../common/apis/settings";

function MovieListing() {
  const movies = useSelector((state) => state.movies.movies);
  const shows = useSelector((state) => state.movies.shows);
  console.log(movies);
  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((shows, index) => {
        return <MovieCard key={index} data={shows} />;
      })
    ) : (
      <div className="shows-error">
        <h3>{shows.error}</h3>
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
