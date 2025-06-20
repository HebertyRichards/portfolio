const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(
  cors({
    origin: "https://portfolio-three-coral-55.vercel.app/",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/visit", async (req, res) => {
  const userAgent = req.headers["user-agent"];

  const html = `
    <h2>Nova visita no portfólio</h2>
    <p><strong>Navegador:</strong> ${userAgent}</p>
    <p><strong>Horário:</strong> ${new Date().toLocaleString("pt-BR")}</p>
  `;

  try {
    await transport.sendMail({
      from: `"Visita ao Portfólio" <${process.env.EMAIL_USER}>`,
      to: process.env.DEST_EMAIL,
      subject: "Novo visitante no portfólio",
      html,
    });

    res.status(200).json({ message: "Email de visita enviado!" });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    res.status(500).json({ message: "Erro ao enviar o email." });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
