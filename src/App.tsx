import { useState } from "react";
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
import { styled } from "@mui/system";
import MovieFavorites from "./components/MovieFavorites";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [view, setView] = useState<"movies" | "favorites">("movies");

  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    marginBottom: theme.spacing(4),
  }));

  const HeaderButtons = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(2),
    marginLeft: theme.spacing(2),
  }));

  const MainContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(4),
  }));

  const handleSearch = (query: string) => {
    fetchMovies(query).then((response) => {
      if (response.status === 200) {
        setMovies(response.data.Search);
      } else {
        console.error(response.data.Error); //TODO: Verify this is the response object format
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

  return (
    <MainContainer>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            PEACHFLIX
          </Typography>
          <HeaderButtons>
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
          </HeaderButtons>
          <MovieSearch onSearch={handleSearch} />
        </Toolbar>
      </StyledAppBar>
      {view === "movies" ? (
        <MovieList movies={movies} onMovieClick={handleMovieClick} />
      ) : (
        <MovieFavorites
          favorites={favorites}
          onRemoveFavorite={handleRemoveFavorite}
        />
      )}
      {selectedMovie && <MovieDetails movieId={selectedMovie} onAddFavorite={handleAddFavorite}/>}
    </MainContainer>
  );
};

export default App;
