import React from "react";
import { Grid, Container } from "@mui/material";
import { styled } from "@mui/system";
import MovieItem from "./MovieItem";
import { Movie } from "../types";

interface FavoritesProps {
  favorites: Movie[];
  onMovieClick: (id: string) => void;
}

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const Favorites = ({ favorites, onMovieClick }: FavoritesProps) => {
  return (
    <StyledContainer>
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
    </StyledContainer>
  );
};

export default Favorites;
