import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

//44:34
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${term}&type=movie`
    );

    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${term}&type=series`
    );

    return response.data;
  }
);

export const fetchAsyncMoviesOrShowsDetail = createAsyncThunk(
  "movies/fetchAsyncMoviesOrShowsDetail",
  async (id) => {
    console.log(id, "id");
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMoviesOrShowsDetail: {},
  loading: false,
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMoviesOrShowsDetail = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      console.log("Pending!");
      return { ...state, loading: true };
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fulfilled!");
      return { ...state, movies: payload, loading: false };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fulfilled!");
      return { ...state, shows: payload, loading: false };
    },
    [fetchAsyncMoviesOrShowsDetail.fulfilled]: (state, { payload }) => {
      console.log("Fulfilled!");
      return { ...state, selectedMoviesOrShowsDetail: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
