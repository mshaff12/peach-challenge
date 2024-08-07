import { Card, CardContent, CardMedia, CardActionArea, Typography } from "@mui/material";
import { Movie } from "../types";

interface MovieItemProps {
  movie: Movie;
}

const MovieItem = ({ movie }: MovieItemProps) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
            image={movie.Poster}
            title={movie.Title}    
        />
        <CardContent>
        <Typography variant="h5">{movie.Title}</Typography>
        <Typography variant="body2">{movie.Year}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieItem;
