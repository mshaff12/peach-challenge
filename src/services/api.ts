import axios from 'axios';

const API_KEY = "ea69ae28" // NOTE: Change as needed
const BASE_URL = "http://www.omdbapi.com/"

export const fetchMovies = (query: string) => {
    return axios.get(`${BASE_URL}`, {
      params: {
        s: query,
        apikey: API_KEY,
      },
    });
  };