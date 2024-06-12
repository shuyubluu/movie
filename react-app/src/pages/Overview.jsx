import { useState } from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import MovieData from "../components/MovieData";
import ButtonHome from "../components/Button/ButtonHome";

const Overview = () => {
  const nowPlayingData = [
    { src: "/Dune.jpg", alt: "Dune", title: "Dune" },
    { src: "/Maleficent.jpg", alt: "Maleficent", title: "Maleficent" },
    { src: "/InsideOut2.jpg", alt: "Inside Out 2", title: "Inside Out 2" },
    {
      src: "/FastAndFurious.jpg",
      alt: "Fast & Furious",
      title: "Fast & Furious",
    },
    { src: "/GranTurismo.jpg", alt: "Gran Turismo", title: "Gran Turismo" },
    { src: "/Elemental.jpg", alt: "Elemental", title: "Elemental" },
    { src: "/Soul.jpg", alt: "Soul", title: "Soul" },
  ];

  const comingSoonData = [
    { src: "/Coco.jpg", alt: "Coco", title: "Coco" },
    { src: "/ToyStory.jpg", alt: "ToyStory", title: "ToyStory" },
    { src: "/FrozeII.jpg", alt: "FrozeII", title: "FrozeII" },
    { src: "/Wish.jpg", alt: "Wish", title: "Wish" },
    {
      src: "/TheIncredibles.jpg",
      alt: "TheIncredibles",
      title: "TheIncredibles",
    },
    { src: "/Ratatouille.jpg", alt: "Ratatouille", title: "Ratatouille" },
  ];

  const [showNowPlaying, setShowNowPlaying] = useState(true);

  const movieData = showNowPlaying ? nowPlayingData : comingSoonData;

  // 将 movieData 分割成多个片段，每个片段包含 6 部电影
  const dividedMovieData = [];
  for (let i = 0; i < movieData.length; i += 6) {
    dividedMovieData.push(movieData.slice(i, i + 6));
  }

  return (
    <Box mt="100px" p="4">
      {/* 确保内容不被导航栏遮挡 */}
      <Flex justifyContent="center" mb="12">
        <ButtonHome
          onClick={() => setShowNowPlaying(true)}
          active={showNowPlaying}
          label="現正熱映"
        />
        <ButtonHome
          onClick={() => setShowNowPlaying(false)}
          active={!showNowPlaying}
          label="即將上映"
        />
      </Flex>
      <Box mt="12">
        {dividedMovieData.map((row, rowIndex) => (
          <Grid
            key={rowIndex}
            templateColumns="repeat(6, 1fr)"
            gap="6"
            mb="12"
            mt={rowIndex === 0 ? "12" : "0"}
          >
            {row.map((movie, index) => (
              <Flex key={index} direction="column" alignItems="center" mt="12">
                <MovieData
                  src={movie.src}
                  alt={movie.alt}
                  title={movie.title}
                />
                <Text mt="8" textAlign="center">
                  {movie.title}
                </Text>
              </Flex>
            ))}
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default Overview;
