//React
import * as React from "react";
//Hooks
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
//Redux
import {
  createMovie,
  getMovie,
  updateMovie,
} from "../../services/movie/movieSlice";
//3rd Party
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function AddMovie() {
  //Hooks
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { edit, id } = state;
  const navigate = useNavigate();

  //Redux
  const { movieData } = useSelector((state) => state.movie);

  //States
  const [form, setForm] = useState({
    // title: "",
    // desc: "",
    // detailDesc: "",
    // year: "",
    // imageUrl: "",
    // id: id,
  });
  
  //Effects
  useEffect(() => {
    dispatch(getMovie({ id: id }));
    console.log(movieData);
    setForm({
      title: movieData.title,
      desc: movieData.desc,
      detailDesc: movieData.detailDesc,
      year: movieData.year,
      imageUrl: movieData.imageUrl,
    });
  }, []);

  //Functions
  const theme = createTheme();

  //Handlers
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createMovie(form));
    navigate("/");
  };

  const handleEdit = () => {
    dispatch(updateMovie({ form: form, id: id }));
    navigate("/");
  };

  // const getData = () => {
  //   fetch(api)
  //     .then((res) => res.json())
  //     .then((data) => setForm(data.data))
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   edit.isEdit && getData();
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
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
              type="number"
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
      </Container>
    </ThemeProvider>
  );
}
