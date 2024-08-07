import { Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import { Movie } from '../types';

const MovieItem = () => {

    interface MovieItemProps {
        movie: Movie; //TODO: fix this type from any
    }

    const MovieItem = ({ movie }: MovieItemProps) => {
        return (
            <Card>
                <CardActionArea>
                    <CardMedia />
                    <CardContent />
                </CardActionArea>
            </Card>
        );
    };
};

export default MovieItem;