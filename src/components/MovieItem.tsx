import {
    Card,
    CardActionArea,
    CardMedia
} from "@mui/material";
import { Movie } from "../types";

interface MovieItemProps {
  movie: Movie;
  onClick: () => void;
}

const MovieItem = ({ movie, onClick }: MovieItemProps) => {
  return (
    <Card sx={{ maxWidth: 200 }} onClick={onClick}>
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
