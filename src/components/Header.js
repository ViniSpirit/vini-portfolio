import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ page, home, about, contact, projects }) => {
  const [burger, setBurger] = useState(false);

  const [hide, setHide] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollCatch);

    function scrollCatch() {
      const scroll = window.scrollY;

      if (scroll >= 50) {
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
      className="toolbar"
      style={hide ? { display: "none" } : { display: "block" }}
    >
      <div className="max-width">
        <div className={`logo ${page ? "color2" : "color1"}`}>
          <Link to="/">
            Portfó<span>lio.</span>
          </Link>
        </div>
        <ul
          className={`menu ${burger ? "active" : ""} ${
            page ? "color2" : "color1"
          }`}
        >
          <li>
            <Link className={home ? "active" : ""} to="/">
              Início
            </Link>
          </li>
          <li>
            <Link className={about ? "active" : ""} to="/about">
              Sobre
            </Link>
          </li>
          <li>
            <Link className={projects ? "active" : ""} to="/projects">
              Projetos
            </Link>
          </li>
          <li>
            <Link className={contact ? "active" : ""} to="/contact">
              Contato
            </Link>
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
