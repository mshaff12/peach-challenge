import { Grid, Container } from '@mui/material'
import MovieItem from './MovieItem';


interface MovieListProps {
    movies: any[]; // TODO: fix this type from any
}

const MovieList = ({ movies }: MovieListProps) => {
    return (
        <Container>
            <Grid>
                <MovieItem />
            </Grid>
        </Container>
    );
};

export default MovieList;