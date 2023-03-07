import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
// const movies = useSelector((state) => state.movie)
const { movies } = useSelector((state) => state.movie);
// console.log(movies);
movies.map((item, index) => {
  return(
    console.log(item)
  )
})

  return (
    <div>Home</div>
  )
}

export default Home