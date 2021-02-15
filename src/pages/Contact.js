import React from "react";
import Header from "../components/Header";

const Contact = () => {
  return (
    <>
      <Header page contact />
      <section className="contact">
        <div className="max-width" style={{ paddingTop: "100px" }}>
          <h1 className="contact-title">Contatos</h1>
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
                <p>
                  <p>Cell</p> (11) 960810791
                </p>
              </div>
              <div className="item">
                <i className="fas fa-map-marker-alt"></i>

                <p>
                  <p>Endereço</p>Av. Moinho Fabrini 339, SBC, Brasil
                </p>
              </div>
              <div className="item">
                <i className="far fa-envelope"></i>
                <p>
                  <p>Email</p> marcosvims@gmail.com
                </p>
              </div>
            </div>
            <div>
              <form>
                <h2>Mande um email</h2>
                <input type="text" placeholder="Nome" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Assunto" requirede />
                <textarea
                  cols="30"
                  rows="5"
                  placeholder="Mensagem"
                  required
                ></textarea>
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
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
      </section>
    </>
  );
};

export default Contact;
