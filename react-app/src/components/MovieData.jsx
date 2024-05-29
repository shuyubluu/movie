import PropTypes from "prop-types";

function MovieData({ src, alt, title }) {
  return (
    <div className="movie-container">
      <div className="movie-image-container">
        <img className="movie-image" src={src} alt={alt} />
      </div>
      <div className="movie-title">{title}</div>
    </div>
  );
}

MovieData.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieData;
