import { useState } from "react";
import PropTypes from "prop-types";
import MovieData from "./MovieData";
import { Flex, Button, Tooltip, Box } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function MovieList({ movieData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

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
    <Flex
      align="center"
      justify="space-between"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <Tooltip label="Previous" hasArrow>
        <Button
          onClick={handlePrev}
          aria-label="Previous"
          opacity={showArrows ? 1 : 0} // 控制箭頭按鈕顯示
          size="XL" // 設置箭頭按鈕的大小為大型（Large）
          leftIcon={<ChevronLeftIcon />}
          variant="ghost" // 設置按鈕樣式為透明背景
          _focus={{ outline: "none" }} // 移除點擊時的外框
          ml={50} // 左邊距
        />
      </Tooltip>
      <Flex flexWrap="wrap" gap="2" justify="center" align="center">
        {getVisibleMovies().map((movie, index) => (
          <MovieData key={index} src={movie.src} alt={movie.alt} />
        ))}
      </Flex>
      <Tooltip label="Next" hasArrow>
        <Button
          onClick={handleNext}
          aria-label="Next"
          opacity={showArrows ? 1 : 0} // 控制箭頭按鈕顯示
          size="XL" // 設置箭頭按鈕的大小為大型（Large）
          rightIcon={<ChevronRightIcon />}
          variant="ghost" // 設置按鈕樣式為透明背景
          _focus={{ outline: "none" }} // 移除點擊時的外框
          mr={50} // 右邊距
        />
      </Tooltip>
    </Flex>
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
