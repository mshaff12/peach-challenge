import { useState } from "react";
import MovieList from "./components/MovieList";
import { Movie } from "./types";

const App = () => {

  const [movies, setMovies] = useState<Movie[]>([]); //TODO: fix any type
  
  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
