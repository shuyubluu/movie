import { useState, useRef, useEffect } from "react";
import VideoPlayer from "../components/VideoPlayer";
import ButtonHome from "../components/Button/ButtonHome";
import MovieList from "../components/MovieList";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

const Home = () => {
  const nowPlayingData = [
    { src: "/Dune.jpg", alt: "Dune" },
    { src: "/Maleficent.jpg", alt: "Maleficent" },
    { src: "/InsideOut2.jpg", alt: "Inside Out 2" },
    { src: "/FastAndFurious.jpg", alt: "Fast & Furious" },
    { src: "/GranTurismo.jpg", alt: "Gran Turismo" },
    { src: "/Elemental.jpg", alt: "Elemental" },
  ];

  const comingSoonData = [
    { src: "/Coco.jpg", alt: "Coco" },
    { src: "/ToyStory.jpg", alt: "ToyStory" },
    { src: "/FrozeII.jpg", alt: "FrozeII" },
    { src: "/Wish.jpg", alt: "Wish" },
    { src: "/TheIncredibles.jpg", alt: "TheIncredibles" },
    { src: "/Ratatouille.jpg", alt: "Ratatouille" },
  ];

  const navRef = useRef(null); // 创建一个引用以获取导航栏的高度
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navRef.current) {
      const height = navRef.current.offsetHeight; // 获取导航栏的高度
      setNavHeight(height); // 设置导航栏的高度状态值
    }
  }, []);

  const [showNowPlaying, setShowNowPlaying] = useState(true);
  const movieData = showNowPlaying ? nowPlayingData : comingSoonData;
  const bg = useColorModeValue("gray.900", "gray.800");

  return (
    <Box bg={bg} color="white" minHeight="100vh" pt="4rem">
      <Box
        position="relative"
        width="100%"
        height={`calc(100vh - ${navHeight}px)`}
      >
        <VideoPlayer style={{ width: "100%", height: "100%" }} />
      </Box>
      <Flex justify="center" my={4} mb={48} ref={navRef}>
        {" "}
        {/* 将导航栏的ref传递给Flex组件 */}
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
      <MovieList movieData={movieData} />
    </Box>
  );
};

export default Home;
