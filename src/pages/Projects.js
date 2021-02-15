import React from "react";
import { Card, Carousel } from "react-bootstrap";
import Header from "../components/Header";

import img3 from "../images/projects/portfolio/portfolio.jpg";
import img4 from "../images/projects/calculadora/calculadora.jpg";
import img5 from "../images/projects/blog/blog.jpg";

import proImg from "../images/projects/proshop/proshop.jpg";
import proImg2 from "../images/projects/proshop/proshop2.jpg";

const Projects = () => {
  return (
    <>
      <Header page projects />
      <section className="projects">
        <div
          className="max-width"
          style={{
            paddingTop: "100px",
            borderBottom: "1px solid rgba(0,0,0,.125)",
          }}
        >
          <h1>Meus Projetos</h1>
          <div className="projects-content">
            {/* Card 1 */}
            <Card
              style={{
                width: "100%",
                backgroundColor: "#eee",
                boxShadow: "0 1px 8px 5px rgb(30 60 90 / 20%)",
              }}
            >
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title>Sobre o Portfolio</Card.Title>
                <Card.Text>
                  Projeto desenvolvido em React.js, CSS e Bootstrap.
                </Card.Text>
                <div className="button-links">
                  <form
                    action="https://github.com/ViniSpirit/vini-portfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="cardBtn" type="submit">
                      Veja no Github
                    </button>
                  </form>
                </div>
              </Card.Body>
            </Card>

            {/* Card 2 */}
            <Card
              style={{
                width: "100%",
                backgroundColor: "#eee",
                boxShadow: "0 1px 8px 5px rgb(30 60 90 / 20%)",
              }}
            >
              <Card.Img
                variant="top"
                src={img5}
                style={{ borderBottom: "1px solid rgba(0,0,0,.125)" }}
              />
              <Card.Body>
                <Card.Title>Blog do Vini</Card.Title>
                <Card.Text>
                  Projeto desenvolvido em Next.js, CSS, Node.js e MongoDB.
                </Card.Text>
                <div className="button-links">
                  <form
                    action="https://github.com/ViniSpirit/vini-blog"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="cardBtn" type="submit">
                      Veja no Github
                    </button>
                  </form>
                  <form
                    action="https://vini-blog.vinispirit.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="cardBtn" type="submit">
                      Link do Projeto
                    </button>
                  </form>
                </div>
              </Card.Body>
            </Card>

            {/* Card 3 */}
            <Card
              style={{
                width: "100%",
                backgroundColor: "#eee",
                boxShadow: "0 1px 8px 5px rgb(30 60 90 / 20%)",
              }}
            >
              <Card.Img variant="top" src={img4} />
              <Card.Body>
                <Card.Title>Calculadora</Card.Title>
                <Card.Text>Projeto desenvolvido em React.js e CSS.</Card.Text>
                <div className="button-links">
                  <form
                    action="https://github.com/ViniSpirit/Calculator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="cardBtn" type="submit">
                      Veja no Github
                    </button>
                  </form>
                  <form
                    action="https://vini-calculadora.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="cardBtn" type="submit">
                      Link do Projeto
                    </button>
                  </form>
                </div>
              </Card.Body>
            </Card>

            {/* Card 4 */}
            <Card
              style={{
                width: "100%",
                backgroundColor: "#eee",
                boxShadow: "0 1px 8px 5px rgb(30 60 90 / 20%)",
              }}
            >
              <Carousel>
                <Carousel.Item>
                  <img
                    style={{ borderBottom: "1px solid rgba(0,0,0,.125)" }}
                    className="d-block w-100"
                    src={proImg}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{
                      borderBottom: "1px solid rgba(0,0,0,.125)",
                    }}
                    className="d-block w-100"
                    src={proImg2}
                    alt="First slide"
                  />
                </Carousel.Item>
              </Carousel>
              <Card.Body>
                <Card.Title>Proshop</Card.Title>
                <Card.Text>
                  Projeto desenvolvido em React.js Node.js MongoDB e React
                  Bootstrap.
                </Card.Text>
                <div className="button-links">
                  <form
                    action="https://github.com/ViniSpirit/proshop"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      style={{ marginRight: "20px" }}
                      className="cardBtn"
                      type="submit"
                    >
                      Veja no Github
                    </button>
                    (em produção...)
                  </form>
                </div>
              </Card.Body>
            </Card>
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

export default Projects;
