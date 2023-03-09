//React
import React from "react";
//Hooks
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//Redux
import { getMovie } from "../../services/movie/movieSlice";
//3rd Party
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";

const MovieDetail = () => {
  //Hooks
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Redux
  const { movieData } = useSelector((state) => state.movie);
  const { detailDesc, title, year, imageUrl } = movieData;
  //States
  const [edit, setEdit] = useState({ isEdit: true });
  //Effects
  useEffect(() => {
    dispatch(getMovie({ id: id }));
  }, []);

  //Handlers
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/movies/${id}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container sx={{ marginTop: "10px", marginBottom: "10px" }} maxWidth="md">
      <Card>
        <CardMedia
          sx={{ maxHeight: 500 }}
          image={imageUrl}
          title="green iguana"
          component="img"
        />
        <CardContent>
          <Typography
            sx={{ textAlign: "center" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            sx={{ textAlign: "center" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {year}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {detailDesc}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={handleDelete} size="small">
            Delete Movie
          </Button>
          <Button
            onClick={
              () =>
                // navigate(`/edit-movie/${id}`, { state: { edit: edit, id: id } })
                navigate(`/edit-movie/${id}`, { state: { edit: edit, id: id } })
              // navigate(`/edit-movie/${id}`, { state: { edit: edit } })
            }
            size="small"
          >
            Edit Movie
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default MovieDetail;
