import { Card, CardActionArea, CardMedia } from "@mui/material";
import { Movie } from "../types";
import styles from '../App.module.css';

interface MovieItemProps {
  movie: Movie;
  onClick: () => void;
}

const MovieItem = ({ movie, onClick }: MovieItemProps) => {
  return (
    <Card className={styles['movie-item-card']} onClick={onClick}>
      <CardActionArea>
        <CardMedia className={styles['movie-item-media']} image={movie.Poster} />
      </CardActionArea>
    </Card>
  );
};

export default MovieItem;
