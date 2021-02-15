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
                <div>
                  <p>Cell</p> (11) 960810791
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
            <div>
              <form>
                <h2>Mande um email</h2>
                <input type="text" placeholder="Nome" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Assunto" required />
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
      </section>
    </>
  );
};

export default Contact;
