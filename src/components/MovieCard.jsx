import PropTypes from "prop-types";

const MovieCard = ({ title, poster, overview }) => (
  <div className="movie-card">
    <img src={poster} alt={title} />
    <h3>{title}</h3>
    <p>{overview}</p>
  </div>
);

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieCard;
