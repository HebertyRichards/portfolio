import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

export default function Contato() {
const [formData, setFormData] = useState({
  nome: "",
  email: "",
  assunto: "",
  mensagem: "",
});

const [status, setStatus] = useState(null);

const handleChange = (e) => {
  setFormData(prev => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("https://portfolio-1-3pdy.onrender.com/send-email", {
      nome: formData.nome,
      email: formData.email,
      assunto: formData.assunto,
      mensagem: formData.mensagem,
    });

    setStatus({ success: true, message: response.data.message });
    setFormData({ nome: "", email: "", assunto: "", mensagem: "" }); 
  } catch (error) {
    setStatus({
      success: false,
      message:
        error.response?.data?.error || "Erro ao enviar, tente novamente.",
    });
  }
};

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
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
            <input
            type="text"
            name="nome"
            placeholder="Seu nome completo"
            required
            value={formData.nome}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="seu@email.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
            </div>
            <input
          type="text"
          name="assunto"
          placeholder="Assunto da mensagem"
          required
          value={formData.assunto}
          onChange={handleChange}
        />
        <textarea
          rows="4"
          name="mensagem"
          placeholder="Descreva seu projeto ou dúvida em detalhes"
          required
          value={formData.mensagem}
          onChange={handleChange}
        ></textarea>
        <button type="submit">✈️ Enviar Mensagem</button>
      </form>

      {status && (
        <p style={{ color: status.success ? "green" : "red" }}>{status.message}</p>
      )}
        </div>
      </motion.section>
    </>
  );
}
