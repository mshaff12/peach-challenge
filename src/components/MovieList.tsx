import { Grid, Container } from '@mui/material'
import { Movie } from '../types';

interface MovieListProps {
    movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
    return (
        <Container>
            <Grid>
            </Grid>
        </Container>
    );
};

export default MovieList;