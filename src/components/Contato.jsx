import { motion } from "framer-motion";

function Contato() {
  return (
    <>
      <div id="contato"></div>
      <motion.section
        className="contact-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-main">
          <h2 id="contact-h2">Entre em Contato</h2>
          <p>
            Tem um projeto em mente ou quer conversar sobre uma oportunidade?
            Estou à disposição para ajudar a transformar suas ideias em
            realidade.
          </p>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <h2>Vamos conversar</h2>
            <p>
              Preencha o formulário abaixo ou entre em contato diretamente
              através dos canais disponíveis. Estou ansioso para ouvir sobre seu
              projeto!
            </p>

            <div className="social-icons">
              <a
                id="linkedin"
                href="https://www.linkedin.com/in/heberty-lima/"
                target="blank_"
              ></a>
              <a
                id="github"
                href="https://github.com/HebertyRichards"
                target="blank_"
              ></a>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Seu nome completo" required />
              <input type="email" placeholder="seu@email.com" required />
            </div>
            <input type="text" placeholder="Assunto da mensagem" required />
            <textarea
              rows="4"
              placeholder="Descreva seu projeto ou dúvida em detalhes"
              required
            ></textarea>
            <button type="submit">✈️ Enviar Mensagem</button>
          </form>
        </div>
      </motion.section>
    </>
  );
}

export default Contato;
