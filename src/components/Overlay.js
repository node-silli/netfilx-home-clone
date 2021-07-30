import React from "react";
import "../Css/Overlay.css";
import ReactPlayer from "react-player/youtube";
import CloseIcon from "@material-ui/icons/Close";

export default function Overlay({
  changeOverlay,
  selectedTrailer,
  bannerMovie,
}) {
  return (
    <div className="overlay">
      <div className="closeOverlay">
        <CloseIcon
          onClick={() => {
            changeOverlay(false);
          }}
          style={{
            fill: "#fff",
            size: "medium",
            size: "5x",
            cursor: "pointer",
          }}
        />
      </div>
      <ReactPlayer
        className="react_player"
        controls
        url={bannerMovie ? bannerMovie : selectedTrailer}
      />
    </div>
  );
}
