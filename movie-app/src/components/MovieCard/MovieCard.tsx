import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";
import { IMovie } from "../../interfaces/movies";

const MovieCard: FC<IMovie> = ({ Poster, Title, Year, imdbID }) => {
  return (
    <div className="card-item">
      <Link to={`/movie/${imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={Poster} alt={Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{Title}</h4>
              <p>{Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
