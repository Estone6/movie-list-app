import PropTypes from "prop-types";

const SearchBar = ({ value, onChange, onSubmit }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search movies..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    <button onClick={onSubmit}>Search</button>
  </div>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
