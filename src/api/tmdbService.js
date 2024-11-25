import axios from "axios";

const API_KEY = "b89c6e3d58d5284e882d0d130de437b9";
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
