import { Grid, Container } from "@mui/material";
import { Movie } from "../types";
import MovieItem from "./MovieItem";
import styles from "../App.module.css";

interface MovieListProps {
  movies: Movie[];
  onMovieClick: (movieId: string) => void;
}

const MovieList = ({ movies, onMovieClick }: MovieListProps) => {
  return (
    <Container className={styles["movie-list"]}>
      <Grid container spacing={4}>
        {movies.map((movie) => (
          <Grid key={movie.imdbID} item xs={12} sm={6} md={4} lg={3}>
            <MovieItem
              movie={movie}
              onClick={() => onMovieClick(movie.imdbID)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MovieList;
