import React, { useState } from "react"

import { ProgressBar } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "../components/Header"
import profile from "../images/profile.jpg"
import pdf from "../images/mv.pdf"
import Footer from "../components/Footer"
const About = () => {
  const pt = {
    title: "Meu nome é Marcos Vinicius e sou ",
    content: `Moro em São Bernardo do Campo SP, tenho 27 anos, há 2 anos
    descobri minha paixão por programação e decidi migrar de
    carreira, então passei a me dedicar a aprender as tecnologias
    mais atuais do mercado, e hoje 
    sou um desenvolvedor Full-Stack.`,
    span: "Desenvolvedor Web",
    status: "pt",
  }

  const [description] = useState(pt)
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
            <h2>Nível</h2>
            <div className="tech">
              <p>JavaScript</p>
              <ProgressBar
                style={{ height: "25px" }}
                animated
                now={80}
                label={"80%"}
              />
            </div>
            <div className="tech">
              <p>ReactJS</p>
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
              <p>NodeJS</p>
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
              <p>Redux</p>
              <ProgressBar
                style={{ height: "25px" }}
                animated
                variant="warning"
                now={60}
                label={"60%"}
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
              <p>NextJS</p>
              <ProgressBar
                style={{ height: "25px" }}
                animated
                now={80}
                label={"80%"}
              />
            </div>
            <div className="tech">
              <p>TypeScript</p>
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
          </div>
        </div>
      </section>

      <Footer color="#333" />
    </>
  )
}

export default About
