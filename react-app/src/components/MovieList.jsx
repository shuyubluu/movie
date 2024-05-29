import { useState } from "react";
import PropTypes from "prop-types";
import MovieData from "./MovieData";

function MovieList({ movieData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movieData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movieData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleMovies = () => {
    let visibleMovies = [];
    for (let i = 0; i < 5; i++) {
      visibleMovies.push(movieData[(currentIndex + i) % movieData.length]);
    }
    return visibleMovies;
  };

  return (
    <div className="movie-images-container">
      <button className="prev" onClick={handlePrev}>
        &#10094;
      </button>
      {getVisibleMovies().map((movie, index) => (
        <MovieData key={index} src={movie.src} alt={movie.alt} />
      ))}
      <button className="next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
}

MovieList.propTypes = {
  movieData: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
