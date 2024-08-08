import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../services/api";
import { MovieInfo } from "../types";
import { Container, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

interface MovieDetailsProps {
  movieId: string;
  onAddFavorite: (movie: MovieInfo) => void;
}

const MovieDetails = ({ movieId, onAddFavorite }: MovieDetailsProps) => {
  const [details, setDetails] = useState<MovieInfo | null>(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then((response) => {
      if (response.status === 200) {
        setDetails(response.data);
      } else {
        console.error(response.data.Error);
      }
    });
  }, [movieId]);

  if (!details) {
    return <div>Loading...</div>;
  }

  const StyledContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(4),
  }));
  
  const StyledCard = styled(Card)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }));
  
  const StyledMedia = styled(CardMedia)(() => ({
    width: 200,
    height: 300,
  }));

  return (
    <StyledContainer>
      <StyledCard>
        <StyledMedia image={details.Poster} title={details.Title} />
        <CardContent>
          <Typography variant="h5">{details.Title}</Typography>
          <Typography variant="body2" color="textSecondary">{details.Plot}</Typography>
          <Typography variant="body2">Released: {details.Released}</Typography>
          <Typography variant="body2">Rating: {details.imdbRating}</Typography>
          <Typography variant="body2">Genre: {details.Genre}</Typography>
          <Button variant="contained" color="primary" onClick={() => onAddFavorite(details)}>
            Add to Favorites
          </Button>
        </CardContent>
      </StyledCard>
    </StyledContainer>
  );

};

export default MovieDetails;
