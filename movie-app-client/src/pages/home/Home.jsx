import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../../components/cards/MovieCard";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { getMovies } from "../../services/movie/movieSlice";

const Home = () => {
  // const movies = useSelector((state) => state.movie)
  // const { movies } = useSelector((state) => state.movie);
  // console.log(movies);
  // movies.map((item, index) => {
  //   return(
  //     console.log(item)
  //   )
  // })

  const dispatch = useDispatch();

  const { movieData } = useSelector((state) => state.movie);
  const { data } = movieData;
  console.log(data);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  //   const [movieData, setMovieData] = useState([]);
  //   const FEATURED_APİ = `http://localhost:5000/api/movies`;

  //   const getData = (API) => {
  //     fetch(API)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setMovieData(data);
  //       })
  //       .catch((err) => console.log(err));
  //   };

  // useEffect(() => {
  //   getData(FEATURED_APİ)

  // }, [])

  //   const { data } = movieData;

  // console.log(data);
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {data?.map((item, index) => {
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
