import React from "react";
import { Grid, Container } from "@mui/material";
import MovieItem from "./MovieItem";
import { Movie } from "../types";
import styles from "../App.module.css";

interface FavoritesProps {
  favorites: Movie[];
  onMovieClick: (id: string) => void;
}

const MovieFavorites = ({ favorites, onMovieClick }: FavoritesProps) => {
  return (
    <Container className={styles["movie-favorites-container"]}>
      <Grid container spacing={4}>
        {favorites.map((movie) => (
          <Grid item key={movie.imdbID} xs={12} sm={6} md={4} lg={3}>
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

export default MovieFavorites;
