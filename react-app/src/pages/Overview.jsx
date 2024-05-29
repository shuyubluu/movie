import { useState } from "react";
import MovieData from "../components/MovieData";
import ButtonHome from "../components/Button/ButtonHome";
import "./Overview.css";

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

  // 將 movieData 分割成多個片段，每個片段包含 6 部電影
  const dividedMovieData = [];
  for (let i = 0; i < movieData.length; i += 6) {
    dividedMovieData.push(movieData.slice(i, i + 6));
  }

  return (
    <>
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
      <div className="overview-content">
        {dividedMovieData.map((row, rowIndex) => (
          <div key={rowIndex} className="movie-row">
            {row.map((movie, index) => (
              <div key={index} className="movie-container">
                <MovieData
                  src={movie.src}
                  alt={movie.alt}
                  title={movie.title}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Overview;
