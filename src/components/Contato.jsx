import React, { useState } from "react";

function Contato() {
  return (
    <>
      {" "}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Vamos conversar</h2>
            <p>
              Preencha o formulário abaixo ou entre em contato diretamente
              através dos canais disponíveis. Estou ansioso para ouvir sobre seu
              projeto!
            </p>

            <div className="social-icons">
              <a id="linkedin" href="#"></a>
              <a id="github" href="#"></a>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Seu nome completo" />
              <input type="email" placeholder="seu@email.com" />
            </div>
            <input type="text" placeholder="Assunto da mensagem" />
            <textarea
              rows="4"
              placeholder="Descreva seu projeto ou dúvida em detalhes"
            ></textarea>
            <button type="submit">✈️ Enviar Mensagem</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contato;
