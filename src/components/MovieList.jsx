import PropTypes from "prop-types";

import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => (
  <div className="movie-list">
    {movies.map((movie) => (
      <MovieCard
        key={movie.id}
        title={movie.title}
        poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        overview={movie.overview}
      />
    ))}
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
