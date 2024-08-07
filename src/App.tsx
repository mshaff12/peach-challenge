import { useState } from "react";
import MovieList from "./components/MovieList";
import { Movie } from "./types";
import { fetchMovies } from "./services/api";
import MovieSearch from "./components/MovieSearch";

const App = () => {

  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = (query: string) => {
    fetchMovies(query).then((response) => {
      if (response.status === 200) {
        setMovies(response.data.Search);
      } else {
        console.error(response.data.Error);
        console.log("test");
      }
    });
  };
  
  return (
    <div className="App">
      <MovieSearch onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
