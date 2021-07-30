import "./App.css";
import Navbar from "./components/Navbar";
import moviesContainer from "./components/Movies";
import Banner from "./components/Banner";
import Row from "./components/Row";
import { useState } from "react";
import Overlay from "./components/Overlay";

function App() {
  const [isOverlay, setOverlay] = useState(false);
  const [selectedTrailer, setTrailer] = useState("");
  const [bannerMovie, setBannerMovie] = useState("");

  const changeOverlay = (bool) => {
    setOverlay(bool);
  };

  return (
    <div className="app">
      {isOverlay && (
        <Overlay
          bannerMovie={bannerMovie}
          setBannerMovie={setBannerMovie}
          changeOverlay={changeOverlay}
          selectedTrailer={selectedTrailer}
        />
      )}
      <Navbar />
      <Banner
        setTrailer={setTrailer}
        changeOverlay={changeOverlay}
        selectedTrailer={selectedTrailer}
        setBannerMovie={setBannerMovie}
        bannerMovie={bannerMovie}
      />
      {moviesContainer.map((moviesList) => (
        <Row
          setTrailer={setTrailer}
          changeOverlay={changeOverlay}
          title={moviesList.name}
          id={moviesList.id}
          movies={moviesList.movies}
          key={moviesList.id}
        />
      ))}
    </div>
  );
}

export default App;
