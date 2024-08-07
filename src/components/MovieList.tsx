import { Grid, Container } from '@mui/material'
import { Movie } from '../types';
import MovieItem from './MovieItem';
import { styled } from '@mui/system';

interface MovieListProps {
    movies: Movie[];
    onMovieClick: (movieId: string) => void;
}

const StyledList = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(4),
  }));

const MovieList = ({ movies, onMovieClick }: MovieListProps) => {
    return (
        <StyledList>
            <Grid container spacing={4}>
                {movies.map((movie) => (
                    <Grid key={movie.imdbID} item xs={12} sm={6} md={4} lg={3}>
                        <MovieItem movie={movie} onClick={() => onMovieClick(movie.imdbID)} />
                    </Grid>
                ))}
            </Grid>
        </StyledList>
    );
};

export default MovieList;