import { useState } from "react";
import MovieList from "./components/MovieList";
import { Movie } from "./types";
import { fetchMovies } from "./services/api";
import MovieSearch from "./components/MovieSearch";
import MovieDetails from "./components/MovieDetails";

const App = () => {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);

  const handleSearch = (query: string) => {
    fetchMovies(query).then((response) => {
      if (response.status === 200) {
        setMovies(response.data.Search);
      } else {
        console.error(response.data.Error); //TODO: Verify this is the response object format
        console.log("test");
      }
    });
  };

  const handleMovieClick = (movieId: string) => {
    setSelectedMovie(movieId);
  };
  
  return (
    <div className="App">
      <MovieSearch onSearch={handleSearch} />
      <MovieList movies={movies} onMovieClick={handleMovieClick} />
      {selectedMovie && (
        <MovieDetails movieId={selectedMovie} /> 
      )}
    </div>
  );
}

export default App;
