import React, { FC, useEffect } from "react";
import "./MovieDetail.scss";
import { useParams } from "react-router";
import { fetchAsyncMoviesOrShowsDetail, removeSelectedMovieOrShow } from "../../features/movies/movieSlice";
import { useAppDispatch, useAppSelector } from "../../features/store";
import { IMovieDetail } from "../../interfaces/movies";

const MovieDetail: FC = () => {
  const { imdbID } = useParams();
  const dispatch = useAppDispatch();
  let data = useAppSelector((state) => state.movies.selectedMoviesOrShowsDetail);

  useEffect(() => {
    dispatch(fetchAsyncMoviesOrShowsDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ?
        <div>...Loading</div> :
        <>
          <div className="section-left">
            <div className="movie-title">{(data as IMovieDetail).Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {(data as IMovieDetail).imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> : {(data as IMovieDetail).imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {(data as IMovieDetail).Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {(data as IMovieDetail).Year}
              </span>
            </div>
            <div className="movie-plot">{(data as IMovieDetail).Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{(data as IMovieDetail).Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{(data as IMovieDetail).Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{(data as IMovieDetail).Genre}</span>
              </div>
              <div>
                <span>Language</span>
                <span>{(data as IMovieDetail).Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{(data as IMovieDetail).Awards}</span>
              </div>
            </div>

          </div>
          <div className="section-right">
            <img src={(data as IMovieDetail).Poster} />
          </div>
        </>
      }
    </div>
  );
}

export default MovieDetail;
