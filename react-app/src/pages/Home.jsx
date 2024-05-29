import { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import ButtonHome from "../components/Button/ButtonHome";
import MovieList from "../components/MovieList";

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

  const [showNowPlaying, setShowNowPlaying] = useState(true);

  const movieData = showNowPlaying ? nowPlayingData : comingSoonData;

  return (
    <>
      <VideoPlayer />
      <div className="button-container">
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
      </div>
      <MovieList movieData={movieData} />
    </>
  );
};

export default Home;
