import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ page }) => {
  const [burger, setBurger] = useState(false);

  const [hide, setHide] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollCatch);

    function scrollCatch() {
      const scroll = window.scrollY;

      if (scroll >= 125) {
        setHide(true);
      } else {
        setHide(false);
      }

      console.log(scroll);
    }

    return () => window.removeEventListener("scroll", scrollCatch);
  }, []);

  return (
    <nav
      id={page ? "test" : ""}
      className={`toolbar`}
      style={hide ? { display: "none" } : { display: "block" }}
    >
      <div className="max-width">
        <div className={`logo ${page ? "color2" : "color1"}`}>
          <Link to="/">
            Portfo<span>lio.</span>
          </Link>
        </div>
        <ul
          className={`menu ${burger ? "active" : ""} ${
            page ? "color2" : "color1"
          }`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div
          style={page ? { color: "crimson" } : { color: "#fff" }}
          className={`menu-btn`}
        >
          <i
            onClick={() => setBurger(!burger)}
            className={`${burger ? "active" : ""} fas fa-bars`}
          ></i>
        </div>
      </div>
    </nav>
  );
};

export default Header;
