import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createMovie,
  getMovie,
  updateMovie,
} from "../../services/movie/movieSlice";

// import { createMovie } from "../../services/movie/movieSlice";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function AddMovie() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { edit, id } = state;
  const { movieData } = useSelector((state) => state.movie);
  // console.log(state);
  const api = `http://localhost:5000/api/movies/${id}`;
  const [form, setForm] = useState({
    title: "",
    desc: "",
    detailDesc: "",
    year: "",
    imageUrl: "",
    // id: id,
  });

  useEffect(() => {
    dispatch(getMovie({ id: id }));
  }, []);

  // const getData = () => {
  //   fetch(api)
  //     .then((res) => res.json())
  //     .then((data) => setForm(data.data))
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   edit.isEdit && getData();
  // }, []);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(createMovie(form));
  };

  // const handleEdit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     await axios.put(`http://localhost:5000/api/movies/${id}`, form);
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleEdit = () => {
    dispatch(updateMovie({ form: form, id: id }));
    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            // marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {edit?.isEdit ? "UpdateMovie" : "NewMovie"}
          </Typography>
          <Box
            component="form"
            onSubmit={edit?.isEdit ? handleEdit : handleSubmit}
            // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              type="text"
              autoFocus
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="year"
              label="year"
              name="year"
              type="text"
              value={form.year}
              onChange={(e) => setForm({ ...form, year: e.target.value })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="desc"
              label="desc"
              name="desc"
              type="text"
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="detailDesc"
              label="detailDesc"
              name="detailDesc"
              type="text"
              value={form.detailDesc}
              onChange={(e) => setForm({ ...form, detailDesc: e.target.value })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="imageUrl"
              label="imageUrl"
              name="imageUrl"
              type="text"
              value={form.imageUrl}
              onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              {edit.isEdit ? "Update Movie" : "Add Movie"}
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
