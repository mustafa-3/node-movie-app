import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movieData: [],
};

export const getMovies = createAsyncThunk(
  "api/movies",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.get(`http://localhost:5000/api/movies`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: {
    [getMovies.fulfilled]: (state, action) => {
      state.movieData = action.payload;
    },
  },
});

export default movieSlice.reducer;
