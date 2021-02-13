import React from "react";

import Header from "../components/Header";

const Home = ({ history }) => {
  return (
    <>
      <Header />
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello, my name is</div>
            <div className="text-2">Marcos Vinicius</div>
            <div className="text-3">
              And I'm a <span>Web Developer.</span>
            </div>
          </div>
          <button onClick={() => history.push("/about")} className="btnMain">
            About me
          </button>
        </div>
        <footer className="footer">
          <a
            href="https://github.com/ViniSpirit"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/marcos-vinicius-75863a74/"
            target="_blank"
            rel="noreferrer"
          >
            <i style={{ marginLeft: "30px" }} className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/ViniSpiritDev"
            target="_blank"
            rel="noreferrer"
          >
            <i
              style={{ marginLeft: "30px" }}
              className="fab fa-twitter-square"
            ></i>
          </a>
        </footer>
      </section>
    </>
  );
};

export default Home;