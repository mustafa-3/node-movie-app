import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function MovieCard({ data }) {
  // console.log(data);
  const { title, desc, imageUrl, year, id } = data;
  const [edit, setEdit] = useState({ isEdit: true });

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/movies/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={imageUrl} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={handleDelete} size="small">
          Delete
        </Button>
        <Button size="small" onClick={() => navigate(`/details/${id}`)}>
          Details
        </Button>
        <Button
          size="small"
          onClick={() =>
            // navigate(`/edit-movie/${id}`, { state: { edit: edit, id: id } })
            navigate(`/edit-movie/${id}`, { state: { edit: edit,id:id  } })
            // navigate(`/add-movie/${id}`, { state: { edit: edit } })
          }
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
