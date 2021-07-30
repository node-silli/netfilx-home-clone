import React from "react";
import "../Css/Row.css";

const Row = ({ title, movies, id, changeOverlay, setTrailer }) => {
  return (
    <div className="row_main">
      <h1>{title}</h1>
      <div className="row_horizontal">
        <ul className="row_items_container">
          {movies.map((movie) => (
            <li
              movieName={movie.name}
              onClick={() => {
                changeOverlay(true);
                setTrailer(movie.trailerUrl);
              }}
              className="row_item"
            >
              <img
                className={`row_poster ${id === 0 ? "row_posterLarge" : ""} `}
                src={movie.displayPoster}
                alt={movie.name}
              />
              <span className="title_name">{movie.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Row;
