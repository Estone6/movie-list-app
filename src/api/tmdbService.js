import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const tmdbService = {
  fetchMovies: (page = 1) =>
    axios.get(`${BASE_URL}/movie/popular`, {
      params: { api_key: API_KEY, page },
    }),
  searchMovies: (query, page = 1) =>
    axios.get(`${BASE_URL}/search/movie`, {
      params: { api_key: API_KEY, query, page },
    }),
};

export default tmdbService;
