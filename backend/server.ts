import express, { Request, Response } from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/visit", async (req: Request, res: Response) => {
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

app.post("/send-email", async (req: Request, res: Response) => {
  const { nome, email, assunto, mensagem } = req.body;

  if (!nome || !email || !assunto || !mensagem) {
    return res.status(400).json({ error: "Nome, email, assunto e mensagem são obrigatórios." });
  }

  const mailOptions = {
    from: `"Seu Site" <${process.env.EMAIL_USER}>`,
    to: process.env.DEST_EMAIL,
    replyTo: email,
    subject: assunto, 
    text: `Você recebeu um contato:\n\nNome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`,
  };

  try {
    await transport.sendMail(mailOptions);
    res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    res.status(500).json({ error: "Erro ao enviar email." });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
