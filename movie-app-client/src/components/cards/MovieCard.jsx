//React
import * as React from "react";
//Hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
//Redux
import { deleteMovie } from "../../services/movie/movieSlice";
//3rd Party
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MovieCard({ data }) {
  //Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //States
  const [edit, setEdit] = useState({ isEdit: true });
  const { title, desc, imageUrl, id } = data;

  const refreshPage = () => {
    window.location.reload(true);
  };

  //Handlers
  const handleDelete = async () => {
    dispatch(deleteMovie({ id: id, refreshPage: refreshPage }));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component={"img"}
        sx={{ height: 140 }}
        image={imageUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button type="button" onClick={handleDelete} size="small">
          Delete
        </Button>
        <Button
          type="button"
          size="small"
          onClick={() => navigate(`/details/${id}`)}
        >
          Details
        </Button>
        <Button
          type="button"
          size="small"
          onClick={() =>
            navigate(`/edit-movie/${id}`, { state: { edit: edit, id: id } })
          }
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
