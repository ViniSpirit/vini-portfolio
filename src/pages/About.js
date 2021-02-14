import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import profile from "../images/profile.jpg";
import pdf from "../images/mv.pdf";
const About = () => {
  const pt = {
    title: "Oi meu nome é Marcos Vinicius e sou ",
    content: `Moro em São Bernardo do Campo SP, tenho 27 anos, há 2 anos
    descobri minha paixão por programação e decidi migrar de
    carreira, então passei a me dedicar a aprender as tecnologias
    mais atuais para desenvolvimento web, e hoje estou confortavel pra dizer que
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
    most current for web development, and today I am comfortable to say that
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
                  Download CV
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skils">
        <div className="max-width">
          <div className="atributos">
            <h2>Skills Level</h2>
            <div className="tech">
              <p>JavaScript</p>
              <ProgressBar
                style={{ height: "25px" }}
                animated
                now={90}
                label={"90%"}
              />
            </div>
            <div className="tech">
              <p>React.js</p>
              <ProgressBar
                style={{ height: "25px" }}
                animated
                now={90}
                label={"90%"}
              />
            </div>
            <div className="tech">
              <p>HTML</p>
              <ProgressBar
                style={{ height: "25px" }}
                animated
                now={80}
                label={"80%"}
              />
            </div>
            <div className="tech">
              <p>CSS</p>
              <ProgressBar
                style={{ height: "25px" }}
                animated
                now={80}
                label={"80%"}
              />
            </div>
            <div className="tech">
              <p>Node.js</p>
              <ProgressBar
                style={{ height: "25px" }}
                animated
                now={70}
                label={"70%"}
              />
            </div>
            <div className="tech">
              <p>Express</p>
              <ProgressBar
                style={{ height: "25px" }}
                animated
                now={70}
                label={"70%"}
              />
            </div>
            <div className="tech">
              <p>React Native</p>
              <ProgressBar
                style={{ height: "25px" }}
                animated
                variant="warning"
                now={60}
                label={"60%"}
              />
            </div>
            <div className="tech">
              <p>Next.js</p>
              <ProgressBar
                style={{ height: "25px" }}
                animated
                variant="warning"
                now={60}
                label={"60%"}
              />
            </div>
            <div className="tech">
              <p>MongoDB</p>
              <ProgressBar
                style={{ height: "25px" }}
                animated
                variant="warning"
                now={50}
                label={"50%"}
              />
            </div>
            <div className="tech">
              <p>Python</p>
              <ProgressBar
                style={{ height: "25px" }}
                animated
                variant="danger"
                now={40}
                label={"40%"}
              />
            </div>
          </div>
        </div>
      </section>

      <footer
        className="footer"
        style={{
          backgroundColor: "#eee",
          padding: "18px 0 13px 0",
          margin: 0,
          boxShadow: "0 1px 8px 5px rgb(30 60 90 / 20%)",
        }}
      >
        <a
          href="https://github.com/ViniSpirit"
          target="_blank"
          rel="noreferrer"
        >
          <i style={{ color: "#333" }} className="fab fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/marcos-vinicius-75863a74/"
          target="_blank"
          rel="noreferrer"
        >
          <i
            style={{ color: "#333", marginLeft: "30px" }}
            className="fab fa-linkedin"
          ></i>
        </a>
        <a
          href="https://twitter.com/ViniSpiritDev"
          target="_blank"
          rel="noreferrer"
        >
          <i
            style={{ color: "#333", marginLeft: "30px" }}
            className="fab fa-twitter-square"
          ></i>
        </a>
      </footer>
    </>
  );
};

export default About;
