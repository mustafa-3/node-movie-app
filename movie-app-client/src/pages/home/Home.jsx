import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  // const movies = useSelector((state) => state.movie)
  // const { movies } = useSelector((state) => state.movie);
  // console.log(movies);
  // movies.map((item, index) => {
  //   return(
  //     console.log(item)
  //   )
  // })
  const [movieData, setMovieData] = useState([]);
  const FEATURED_APİ = `http://localhost:5000/api/movies`;

  const getData = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovieData(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData(FEATURED_APİ);
  }, []);

  return <div>Home</div>;
};

export default Home;
