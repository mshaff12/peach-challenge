import { Grid, Container } from '@mui/material'

interface MovieListProps {
    movies: any[]; // TODO: fix this type from any
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