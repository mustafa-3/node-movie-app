import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

const MovieDetail = () => {
  const { id } = useParams();

  const [edit, setEdit] = useState({ isEdit: true });
  const [movieData, setMovieData] = useState([]);
  const FEATURED_APİ = `http://localhost:5000/api/movies/${id}`;

  const getData = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData(FEATURED_APİ);
  }, []);

  const { detailDesc, title, year, imageUrl } = movieData;

  const navigate = useNavigate();

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
          <Typography sx={{textAlign:"center"}} gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{textAlign:"center"}} gutterBottom variant="h5" component="div">
            {year}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {detailDesc}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="small">Delete Movie</Button>
          <Button
            onClick={() =>
              navigate(`/add-movie`, { state: { edit: edit, id: id } })
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
