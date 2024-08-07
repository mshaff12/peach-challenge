import { Card, CardContent, CardMedia, CardActionArea } from '@mui/material';

const MovieItem = () => {

    interface MovieItemProps {
        movie: any; //TODO: fix this type from any
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