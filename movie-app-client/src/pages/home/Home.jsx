import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../../components/cards/MovieCard";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { getAllMovies } from "../../services/movie/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { moviesData } = useSelector((state) => state.movie);
  const { data } = moviesData;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {moviesData?.data?.map((item, index) => {
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
