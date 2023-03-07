import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./services/movie/movieSlice";

export const store = configureStore({
  reducer: {
    movie: movieSlice,
  },
});
