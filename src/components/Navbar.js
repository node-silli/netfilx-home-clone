import React, { useEffect, useState } from "react";
import "../Css/Navbar.css";

export default function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return window.removeEventListener("scroll", () => {
      console.log("scroll cancelled");
    });
  });

  return (
    <div className={` navbar_main ${show ? "navbar_black" : null} `}>
      <img
        className="netflix_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        alt=""
      />
      <img
        className="netflix_avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStDWcH1GSWsJ6NsbJ-eF_nLsu8mLnPNczRPQ&usqp=CAU"
        alt=""
      />
    </div>
  );
}
