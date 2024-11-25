import { useEffect, useState } from "react";

import tmdbService from "../api/tmdbService";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchMovies = async (searchQuery, pageNumber) => {
    setLoading(true);
    setError(null);
    try {
      const response = searchQuery
        ? await tmdbService.searchMovies(searchQuery, pageNumber)
        : await tmdbService.fetchMovies(pageNumber);
      setMovies((prev) =>
        pageNumber === 1 ? response.data.results : [...prev, ...response.data.results]
      );
    } catch (err) {
      console.error(err);
      setError("Failed to fetch movies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(query, page);
  }, [query, page]);

  const handleSearch = () => {
    setPage(1);
    fetchMovies(query, 1);
  };

  return (
    <div className="container">
      <h1 className="header">Movie List App</h1>
      <SearchBar value={query} onChange={setQuery} onSubmit={handleSearch} />
      {error && <p className="error">{error}</p>}
      <MovieList movies={movies} />
      {loading && <p>Loading...</p>}
      {!loading && movies.length > 0 && (
        <button
          className="load-more-btn"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Home;
