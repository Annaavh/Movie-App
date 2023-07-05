import React, { FC, useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import Loader from "../Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../features/store";

const Home: FC = () => {
  const loading = useAppSelector((state) => state.movies.loading);
  const dispatch = useAppDispatch();
  const movieText: string = "Harry";
  const showText: string = "Friends";
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
