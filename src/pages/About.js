import React, { useState } from "react";

import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import profile from "../images/profile.jpg";
import pdf from "../images/mv.pdf";
const About = () => {
  const pt = {
    title: "Meu nome é Marcos Vinicius e sou ",
    content: `Moro em São Bernardo do Campo SP, tenho 27 anos, há 2 anos
    descobri minha paixão por programação e decidi migrar de
    carreira, então passei a me dedicar a aprender as tecnologias
    mais atuais para desenvolvimento web, e hoje estou confortavel pra dizer que
    sou um desenvolvedor Web Full-Stack, com foco na MERN
    Stack(MongoDB, Express, React.js, Node.js).`,
    span: "Desenvolvedor Web",
    status: "pt",
  };

  // const en = {
  //   title: `I'm Marcos Vinicius and I'm a `,
  //   content: `I live in São Bernardo do Campo SP, I'm 27 years old, 2 years ago
  //   I discovered my passion for programming and decided to migrate
  //   career, so I started to dedicate myself to learn the technologies
  //   most current for web development, and today I am comfortable to say that
  //   I'm a Full-Stack Web developer, focusing on MERN
  //   Stack (MongoDB, Express, React.js, Node.js).`,
  //   span: "Web Developer",
  //   status: "en",
  // };

  const [description, setDescription] = useState(pt);
  return (
    <>
      <Header page about />
      <section className="about" id="about">
        <div className="max-width">
          <div className="about-content">
            <h2 className="title">Sobre mim</h2>
            <div className="flex">
              <div className="column left">
                <img src={profile} alt="profile" />
              </div>
              <div className="column right">
                {/* <div style={{ marginBottom: "20px" }}>
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
                </div> */}

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

      {/* Services */}
      <section className="services">
        <div className="max-width">
          <h2 className="title1">Meus Serviços</h2>
          <div className="serv-content">
            <div className="card1">
              <div className="box">
                <i className="fas fa-paint-brush"></i>
                <div className="text1">Front-End</div>
                <p>
                  Páginas web atraentes e interativas, com foco no design e
                  experiência do usuário.
                </p>
              </div>
            </div>
            <div className="card1">
              <div className="box">
                <i className="fas fa-cogs"></i>
                <div className="text1">Back-End</div>
                <p>
                  Criação de APIs , Integração com banco de dados entre outros
                  recursos.
                </p>
              </div>
            </div>
            <div className="card1">
              <div className="box">
                <i className="fas fa-mobile-alt"></i>
                <div className="text1">Mobile</div>
                <p>
                  Apps modernos multiplataforma, interativos, com foco no design
                  e experiência do usuário.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skils">
        <div className="max-width ">
          <h2 className="text3">Minhas Habilidades</h2>
          <div className="atributos">
            <h2>Nivel</h2>
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
          padding: "18px 0 13px 0",
          margin: 0,
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
