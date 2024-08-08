import React, { useState } from "react";
import MovieList from "./components/MovieList";
import { Movie } from "./types";
import { fetchMovies } from "./services/api";
import MovieSearch from "./components/MovieSearch";
import MovieDetails from "./components/MovieDetails";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import styles from "./App.module.css";
import MovieFavorites from "./components/MovieFavorites";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [view, setView] = useState<"movies" | "favorites">("movies");

  const handleSearch = (query: string) => {
    fetchMovies(query).then((response) => {
      if (response.status === 200) {
        setMovies(response.data.Search);
      } else {
        console.error(response.data.Error);
      }
    });
  };

  const handleMovieClick = (movieId: string) => {
    setSelectedMovie(movieId);
  };

  const handleAddFavorite = (movie: Movie) => {
    setFavorites([...favorites, movie]);
  };

  const handleRemoveFavorite = (id: string) => {
    setFavorites(favorites.filter((movie) => movie.imdbID !== id));
  };

  const handleViewChange = (newView: "movies" | "favorites") => {
    setView(newView);
    setSelectedMovie(null);
  };

  const isFavorite = (id: string) => {
    return favorites.some((movie) => movie.imdbID === id);
  };

  return (
    <Container className={styles["main-container"]}>
      <AppBar position="static" className={styles["app-bar"]}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            PEACHFLIX
          </Typography>
          <Box className={styles["header-buttons"]}>
            <Button
              variant="contained"
              color={view === "movies" ? "primary" : "inherit"}
              onClick={() => handleViewChange("movies")}
            >
              Movies
            </Button>
            <Button
              variant="contained"
              color={view === "favorites" ? "primary" : "inherit"}
              onClick={() => handleViewChange("favorites")}
            >
              Favorites
            </Button>
          </Box>
          <MovieSearch onSearch={handleSearch} />
        </Toolbar>
      </AppBar>
      {view === "movies" ? (
        <MovieList movies={movies} onMovieClick={handleMovieClick} />
      ) : (
        <MovieFavorites favorites={favorites} onMovieClick={handleMovieClick} />
      )}
      {selectedMovie && (
        <MovieDetails
          movieId={selectedMovie}
          onAddFavorite={handleAddFavorite}
          onRemoveFavorite={handleRemoveFavorite}
          isFavorite={isFavorite(selectedMovie)}
        />
      )}
    </Container>
  );
};

export default App;
