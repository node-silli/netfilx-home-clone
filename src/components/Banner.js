import React, { useEffect, useState } from "react";
import "../Css/Banner.css";
import moviesContainer from "./Movies";

export default function Banner({
  changeOverlay,
  setTrailer,
  selectedTrailer,
  bannerMovie,
  setBannerMovie,
}) {
  const [movie, setMovie] = useState("");
  const [bgMovie, setBgMovie] = useState("");
  const [isTruncated, setTruncated] = useState(false);

  const bannerPlayer = () => {
    setBannerMovie(movie.trailerUrl);
    changeOverlay(true);
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) : str;
  }

  const showFullDes = () => {
    setTruncated(true);
  };
  const showLessDes = () => {
    setTruncated(false);
  };

  useEffect(() => {
    if (movie.description?.length > 150) {
      setTruncated(true);
    } else {
      setTruncated(false);
    }
  }, []);

  useEffect(() => {
    setMovie(
      moviesContainer[0].movies[
        Math.floor(Math.random() * moviesContainer[0].movies?.length - 1 || 0)
      ]
    );
  }, []);

  useEffect(() => {
    setBgMovie(movie?.bigPoster);
  }, [movie]);

  return (
    <div
      style={{
        background: `url(${bgMovie}) `,
      }}
      className="banner_main"
    >
      <div className="banner_contents">
        <div className="banner_title">
          <h2>{movie?.name}</h2>
        </div>
        <div className="banner_buttons">
          <button onClick={bannerPlayer}>Play</button>
          <button
            onClick={() => alert(`| ${movie?.name} | Added to the Playlist`)}
          >
            My List
          </button>
        </div>
        <div className="banner_description">
          {isTruncated ? movie?.description : truncate(movie?.description, 150)}
          {"... "}

          {isTruncated ? (
            <button onClick={showLessDes}>Read Less</button>
          ) : (
            <button onClick={showFullDes}>Read More</button>
          )}
        </div>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}
