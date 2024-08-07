import { useState } from "react";
import MovieList from "./components/MovieList";

const App = () => {

  const [movies, setMovies] = useState<any[]>([]); //TODO: fix any type
  
  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
