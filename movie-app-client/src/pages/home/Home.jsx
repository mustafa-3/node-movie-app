//React
import React, { useEffect } from "react";
//Hooks
import { useSelector, useDispatch } from "react-redux";
//Redux
import { getAllMovies } from "../../services/movie/movieSlice";
//3rd Party
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import MovieCard from "../../components/cards/MovieCard";

const Home = () => {
  //Hooks
  const dispatch = useDispatch();

  //Redux
  const { movies } = useSelector((state) => state.movie);
  const { data } = movies;
  // console.log(data);

  //Effects
  useEffect(() => {
    dispatch(getAllMovies());
  }, [data?.length]);

  //Functions
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {movies?.data?.map((item, index) => {
          return (
            <Grid key={index} xs={4}>
              <Item sx={{ display: "flex", justifyContent: "center" }}>
                <MovieCard data={item} />
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Home;
