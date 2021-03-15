import React, { useState } from "react"
import { Spinner } from "react-bootstrap"
import axios from "axios"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Contact = () => {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [assunto, setAssunto] = useState("")
  const [msg, setMsg] = useState("")
  const [alert, setAlert] = useState("")

  const sendEmail = async (e) => {
    e.preventDefault()

    // const config = {
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // };
    setAlert("carregando")
    const { data } = await axios.post(
      "https://vini-portfolio-backend.herokuapp.com/api/email",
      {
        name: nome,
        from: email,
        title: assunto,
        content: msg,
      }
      // config
    )
    if (data === "enviado") {
      setAlert("enviado")
    } else {
      setAlert("")
    }
  }

  return (
    <>
      <Header page contact />
      <section className="contact">
        <h1 className="contact-title">Contato</h1>
        <div
          className=" contact-width"
          style={{
            marginBottom: "0",
          }}
        >
          <div className="contact-content">
            <div className="contact-info">
              <h2>Entre em Contato</h2>
              <p className="description">
                Para me contratar ou tirar qualquer dúvida sinta-se a vontade
                para entrar em contato pelo Whatsapp ou email responderei assim
                que possível.
              </p>

              <div className="item">
                <i className="fab fa-whatsapp"></i>
                <div>
                  <p>Cell</p> (11) 96081-0791
                </div>
              </div>
              <div className="item">
                <i className="fas fa-map-marker-alt"></i>

                <div>
                  <p>Endereço</p>Av. Moinho Fabrini 339, SBC, Brasil
                </div>
              </div>
              <div className="item">
                <i className="far fa-envelope"></i>
                <div>
                  <p>Email</p> marcosvims@gmail.com
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={sendEmail}>
                <h2>Mande um email</h2>
                <input
                  type="text"
                  placeholder="Nome"
                  value={nome}
                  required
                  onChange={(e) => setNome(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Assunto"
                  value={assunto}
                  required
                  onChange={(e) => setAssunto(e.target.value)}
                />
                <textarea
                  cols="30"
                  rows="5"
                  placeholder="Mensagem"
                  value={msg}
                  required
                  onChange={(e) => setMsg(e.target.value)}
                ></textarea>
                <button type="submit">Enviar</button>
              </form>
              {alert === "carregando" && (
                <Spinner
                  animation="border"
                  role="status"
                  style={{ marginTop: "20px" }}
                >
                  <span className="sr-only">Loading...</span>
                </Spinner>
              )}
              {alert === "enviado" && (
                <div
                  style={{ marginTop: "20px" }}
                  className="alert alert-success"
                  role="alert"
                >
                  Mensagem Enviada *-*
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer color="#333" />
      </section>
    </>
  )
}

export default Contact
