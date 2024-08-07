import { Grid, Container } from '@mui/material'
import { Movie } from '../types';

interface MovieListProps {
    movies: Movie[]; // TODO: fix this type from any
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