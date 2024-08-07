import {
    Card,
    CardActionArea,
    CardMedia
} from "@mui/material";
import { Movie } from "../types";

interface MovieItemProps {
  movie: Movie;
}

const MovieItem = ({ movie }: MovieItemProps) => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: 300 }}
          image={movie.Poster}
        />
      </CardActionArea>
    </Card>
  );
};

export default MovieItem;
