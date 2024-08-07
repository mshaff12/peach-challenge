import { Card, CardContent, CardMedia, CardActionArea } from "@mui/material";
import { Movie } from "../types";

interface MovieItemProps {
  movie: Movie;
}

const MovieItem = ({ movie }: MovieItemProps) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia />
        <CardContent />
      </CardActionArea>
    </Card>
  );
};

export default MovieItem;
