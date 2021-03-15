import { Card } from "react-bootstrap"
import Header from "../components/Header"
import Footer from "../components/Footer"

import img3 from "../images/projects/portfolio/portfolio.jpg"
import img4 from "../images/projects/calculadora/calculadora.jpg"
import img5 from "../images/projects/blog/blog.jpg"
import img6 from "../images/projects/moveit/moveit.jpg"
import img7 from "../images/projects/codeby/codeby.jpg"
import img8 from "../images/projects/login/loginGif.gif"

const Projects = () => {
  return (
    <>
      <Header page projects />
      <section className="projects">
        <div
          className="max-width"
          style={{
            paddingTop: "100px",
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
                <Card.Title>Sobre o Portfólio</Card.Title>
                <Card.Text>
                  <strong>Descrição: </strong>Projeto desenvolvido para divulgar
                  meu trabalho a ideia foi aludir a um site de uma empresa.
                  <br /> <strong>tecnologias: </strong>ReactJS, CSS, NodeJS,
                  Express, React-Bootstrap.
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
                src={img6}
                style={{
                  borderBottom: "1px solid rgba(0,0,0,.125)",
                }}
              />
              <Card.Body>
                <Card.Title>Moveit</Card.Title>
                <Card.Text>
                  <strong>Descrição: </strong>
                  App de desafios para melhorar a saúde de quem passa muitas
                  horas em frente ao computador.
                  <br />
                  <strong>Tecnologias: </strong>NextJS, Context API, TypeScript,
                  CSS.
                </Card.Text>
                <div className="button-links">
                  <form
                    action="https://github.com/ViniSpirit/moveit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="cardBtn" type="submit">
                      Veja no Github
                    </button>
                  </form>
                  <form
                    action="https://moveit-inky-nine.vercel.app/"
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
              <Card.Img
                variant="top"
                src={img8}
                style={{
                  maxHeight: "312px",
                  width: "100%",
                  height: "auto",
                  borderBottom: "1px solid rgba(0,0,0,.125)",
                }}
              />
              <Card.Body>
                <Card.Title>Login/Register System</Card.Title>
                <Card.Text>
                  <strong>Descrição: </strong>
                  Sistema de login e registro básico com senha criptografada
                  salva no banco de dados.
                  <br />
                  <strong>Tecnologias: </strong>NextJS, TypeScript, ContextAPI,
                  Serverless, CSS/Material-UI, MongoDB.
                </Card.Text>
                <div className="button-links">
                  <form
                    action="https://github.com/ViniSpirit/login-register-project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="cardBtn" type="submit">
                      Veja no Github
                    </button>
                  </form>
                  <form
                    action="https://vini-login-project.vercel.app/"
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
              <Card.Img
                variant="top"
                src={img7}
                style={{
                  borderBottom: "1px solid rgba(0,0,0,.125)",
                }}
              />
              <Card.Body>
                <Card.Title>Layout</Card.Title>
                <Card.Text>
                  <strong>Descrição: </strong>
                  Projeto de uma home page agradável e responsivo, usando
                  bastante Flexbox.
                  <br />
                  <strong>Tecnologias: </strong>HTML, CSS.
                </Card.Text>
                <div className="button-links">
                  <form
                    action="https://github.com/ViniSpirit/layout-codeby"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="cardBtn" type="submit">
                      Veja no Github
                    </button>
                  </form>
                  <form
                    action="https://layout-codeby.vercel.app/"
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

            {/* card 5 */}

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
                style={{
                  borderBottom: "1px solid rgba(0,0,0,.125)",
                }}
              />
              <Card.Body>
                <Card.Title>Blog</Card.Title>
                <Card.Text>
                  <strong>Descrição: </strong>
                  Desenvolvi este projeto para testar o poder do NextJS com
                  geração de páginas estáticas e renderização do lado do
                  servidor.
                  <br />
                  <strong>Tecnologias: </strong>NextJS, CSS, NodeJS, Express,
                  MongoDB, Markdown.
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

            {/* card 6 */}
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
                <Card.Text>
                  <strong>Descrição: </strong>Meu primeiro projeto em ReactJS me
                  deu uma boa noção sobre a biblioteca e lógica de programação
                  no geral.
                  <br />
                  <strong>Tecnologias: </strong>ReactJS, CSS.
                </Card.Text>
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
          </div>
        </div>
      </section>
      <Footer color="#333" />
    </>
  )
}

export default Projects
