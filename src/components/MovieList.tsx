import { Grid, Container } from '@mui/material'
import { Movie } from '../types';
import MovieItem from './MovieItem';

interface MovieListProps {
    movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
    return (
        <Container>
            <Grid>
                {movies.map((movie) => (
                    <Grid key={movie.imdbID} item>
                        <MovieItem movie={movie} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default MovieList;