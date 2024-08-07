import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../services/api";
import { MovieDetails } from "../types";

interface MovieDetailsProps {
    movieId: string;
  }

const MovieDetails = ({ movieId }: MovieDetailsProps) => {
    const [details, setDetails] = useState<MovieDetails | null>(null);

    useEffect(() => {
        fetchMovieDetails(movieId).then((response) => {
            if (response.status === 200) {
                setDetails(response.data);
            } else {
                console.error(response.data.Error);
            }
        });
    }, [movieId]);
};

export default MovieDetails;