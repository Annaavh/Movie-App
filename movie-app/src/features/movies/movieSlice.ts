import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { IMovies, State } from "../../interfaces/state";
import { IMovieDetail } from "../../interfaces/movies";


export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term: string): Promise<IMovies> => {
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${term}&type=movie`
    );

    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term: string): Promise<IMovies> => {
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${term}&type=series`
    );

    return response.data;
  }
);

export const fetchAsyncMoviesOrShowsDetail = createAsyncThunk(
  "movies/fetchAsyncMoviesOrShowsDetail",
  async (id: string | undefined): Promise<IMovieDetail> => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState: State = {
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
    [fetchAsyncMovies.pending.type]: (state) => {
      console.log("Pending!");
      return { ...state, loading: true };
    },
    [fetchAsyncMovies.fulfilled.type]: (state, { payload }) => {
      console.log("Fulfilled!");
      return { ...state, movies: payload, loading: false };
    },
    [fetchAsyncMovies.rejected.type]: () => {
      console.log("Rejected!");
    },
    [fetchAsyncShows.fulfilled.type]: (state, { payload }) => {
      console.log("Fulfilled!");
      return { ...state, shows: payload, loading: false };
    },
    [fetchAsyncMoviesOrShowsDetail.fulfilled.type]: (state, { payload }) => {
      console.log("Fulfilled!");
      return { ...state, selectedMoviesOrShowsDetail: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export default movieSlice.reducer;
