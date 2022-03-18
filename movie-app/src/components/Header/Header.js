import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import user from "../../images/user.png";
import "./Header.scss";


function Header() {
  const navigate = useNavigate()
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector(state=>state.movies.movies);
  const shows = useSelector(state=>state.movies.shows);
  console.log(movies,"movies")
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === ""){
      return alert("Please enter search term!");
    } 
     else if(movies.Response === "False" || shows.Response === "False") {
      alert("Searched movie or show is not found")
      window.location.reload()
     }

    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("")
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App </Link>
      </div>

      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
            placeholder="Search Movies Or Shows"
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
}

export default Header;
