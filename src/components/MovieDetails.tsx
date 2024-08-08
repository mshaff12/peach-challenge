import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../services/api";
import { MovieInfo } from "../types";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import styles from "../App.module.css";

interface MovieDetailsProps {
  movieId: string;
  onAddFavorite: (movie: MovieInfo) => void;
  onRemoveFavorite: (id: string) => void;
  isFavorite: boolean;
}

const MovieDetails = ({
  movieId,
  onAddFavorite,
  onRemoveFavorite,
  isFavorite,
}: MovieDetailsProps) => {
  const [details, setDetails] = useState<MovieInfo | null>(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then((response) => {
      if (response.status === 200) {
        setDetails(response.data);
      } else {
        console.error(response.data.Error);
      }
    });
  }, [movieId]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <Container className={styles["movie-details-container"]}>
      <Card className={styles["movie-details-card"]}>
        <CardMedia
          className={styles["movie-details-media"]}
          image={details.Poster}
          title={details.Title}
        />
        <CardContent>
          <Typography variant="h5">{details.Title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {details.Plot}
          </Typography>
          <Typography variant="body2">Released: {details.Released}</Typography>
          <Typography variant="body2">Rating: {details.imdbRating}</Typography>
          <Typography variant="body2">Genre: {details.Genre}</Typography>
          {isFavorite ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => onRemoveFavorite(details.imdbID)}
            >
              Remove from Favorites
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => onAddFavorite(details)}
            >
              Add to Favorites
            </Button>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default MovieDetails;
