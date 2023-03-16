import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { toastErrorNotify } from "../../utils/ToastNotify";

const initialState = {
  movies: [],
  movie: {},
  loading: false,
};

export const getAllMovies = createAsyncThunk(
  "api/movies",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.get(`http://localhost:5000/api/movies`);
      if (resp.status === 200) {
        // toastSuccessNotify(resp.data.message);
        return resp.data;
      }
    } catch (error) {
      console.log(error);
      // toastErrorNotify(error.response.data.message);
      toastErrorNotify(error.message);
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

export const getMovie = createAsyncThunk(
  "/api/movies/:id",
  async (data, thunkAPI) => {
    const { id } = data;

    try {
      const resp = await axios.get(`http://localhost:5000/api/movies/${id}`);
      if (resp.status === 200) {
        // toastSuccessNotify(resp.data.message);
        // console.log(resp.data.data);
        return resp.data.data;
      }
    } catch (error) {
      toastErrorNotify(error.message);
      return thunkAPI.rejectWithValue("Somethig went wrong");
    }
  }
);

export const createMovie = createAsyncThunk(
  "api/movies",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.post(`http://localhost:5000/api/movies`, data);
      if (resp.status === 200) {
        // toastSuccessNotify(resp.data.message);
        return resp.data.data;
      }
    } catch (error) {
      console.log(error);
      toastErrorNotify(error.message);
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

export const updateMovie = createAsyncThunk(
  "/api/movies/:id",
  async (data, thunkAPI) => {
    const { form, id } = data;
    try {
      const resp = await axios.put(
        `http://localhost:5000/api/movies/${id}`,
        form
      );
      if (resp.status === 200) {
        // toastSuccessNotify(resp.data.message);
        return resp.data;
      }
    } catch (error) {
      toastErrorNotify(error.message);
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

export const deleteMovie = createAsyncThunk(
  "api/movies/:id",
  async (data, thunkAPI) => {
    // const { id, refreshPage } = data;
    const { id } = data;

    try {
      const resp = await axios.delete(`http://localhost:5000/api/movies/${id}`);
      if (resp.status === 200) {
        // toastSuccessNotify(resp.data.message);
        // refreshPage()
        return resp.data.data;
      }
    } catch (error) {
      toastErrorNotify(error.message);
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    // clearMovie: (state) => {
    //   state.movies = [];
    // },
  },
  extraReducers: {
    [getAllMovies.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },
    [getAllMovies.rejected]: (state, action) => {
      state.loading = false;
    },
    [getMovie.fulfilled]: (state, action) => {
      state.movie = action.payload;
    },
    [createMovie.pending]: (state, action) => {
      state.loading = true;
    },
    [createMovie.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },
    [createMovie.rejected]: (state, action) => {
      state.loading = false;
    },
    [deleteMovie.fulfilled]: (state, action) => {
      state.movies = state.movies.data.filter(
        (x) => x.id !== parseInt(action.payload)
      );
      state.loading = false;
    },
    [updateMovie.fulfilled]: (state, action) => {
      const data = (current(state.movies.data));
      state.movies = data.map(movie => {
        if (movie.id === action.payload.id) {
          movie = action.payload;
        }
        return movie;
      });
    },
  },
});

// export const { clearMovie } = movieSlice.actions;

export default movieSlice.reducer;
