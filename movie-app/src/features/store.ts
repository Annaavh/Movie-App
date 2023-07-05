import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
    }
});

type DispatchFunc = () => AppDispatch;
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector