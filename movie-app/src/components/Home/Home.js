import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import Loader from "../Loader/Loader";

function Home() {
  const loading = useSelector((state) => state.movies.loading);
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);
  return (
    <div>
      {loading && <Loader />}
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}

export default Home;
