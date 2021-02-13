import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import profile from "../images/profile.jpg";
import pdf from "../images/mv.pdf";
const About = () => {
  const pt = {
    title: "Oi meu nome é Marcos Vinicius e eu sou ",
    content: `Moro em São Bernardo do Campo SP, tenho 27 anos, há 2 anos
    descobri minha paixão por programação e decidi migrar de
    carreira, então passei a me dedicar a aprender as tecnologias
    mais atuais do mercado, e hoje estou confortavel pra dizer que
    sou um desenvolvedor Web Full-Stack, com foco na MERN
    Stack(MongoDB, Express, React.js, Node.js).`,
    span: "Desenvolvedor Web",
    status: "pt",
  };

  const en = {
    title: `I'm Marcos Vinicius and I'm a `,
    content: `I live in São Bernardo do Campo SP, I'm 27 years old, 2 years ago
    I discovered my passion for programming and decided to migrate
    career, so I started to dedicate myself to learn the technologies
    most current in the market, and today I am comfortable to say that
    I'm a Full-Stack Web developer, focusing on MERN
    Stack (MongoDB, Express, React.js, Node.js).`,
    span: "Web Developer",
    status: "en",
  };

  const [description, setDescription] = useState(en);
  return (
    <>
      <Header page about />
      <section className="about" id="about">
        <div className="max-width">
          <div className="about-content">
            <h2 className="title">About me</h2>
            <div className="flex">
              <div className="column left">
                <img src={profile} alt="profile" />
              </div>
              <div className="column right">
                <div style={{ marginBottom: "20px" }}>
                  <button
                    className={`btnTranslate ${
                      description.status === "en" ? "active" : ""
                    }`}
                    onClick={() => setDescription(en)}
                  >
                    EN
                  </button>
                  <button
                    className={`btnTranslate ${
                      description.status === "pt" ? "active" : ""
                    }`}
                    onClick={() => setDescription(pt)}
                  >
                    PT
                  </button>
                </div>

                <div className="text">
                  {description && description.title}
                  <span>{description && description.span}</span>
                </div>

                <p>{description && description.content}</p>
                <a href={pdf} target="_blank" rel="noreferrer">
                  Dowload CV
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {/* <section className="skills" id="skils">
        <div className="max-width">
          <div
            className="atributos"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: "50px 20px",
              alignItems: "center",
            }}
          >
            <div>
              <h2>Nivel de Skills</h2>
            </div>
            <div
              className="skill-set"
              style={{ marginTop: "50px", width: "50%" }}
            >
              <div>
                Javascript
                <ProgressBar striped variant="success" now={100} key={1} />
              </div>
              <div>
                React
                <ProgressBar variant="warning" now={80} key={2} />
              </div>
              HTML
              <ProgressBar striped variant="danger" now={50} key={3} />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default About;
