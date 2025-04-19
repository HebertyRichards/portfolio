import React from "react";
import "../App.css";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 80 },
  { name: "CSS", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 80 },
  { name: "UI/UX Design", level: 85 },
  { name: "MySQL", level: 85 },
  { name: "PHP", level: 70 },
];

const dados = [
  {
    icone: "💻",
    titulo: "Código Limpo",
    descricao:
      "Desenvolvimento com padrões modernos e boas práticas para garantir manutenibilidade.",
  },
  {
    icone: "💡",
    titulo: "Soluções Criativas",
    descricao:
      "Abordagem inovadora para resolver problemas complexos de forma eficiente.",
  },
  {
    icone: "🚀",
    titulo: "Alta Performance",
    descricao:
      "Aplicações otimizadas para carregamento rápido e experiência fluida.",
  },
  {
    icone: "🔁",
    titulo: "Comprometimento",
    descricao:
      "Dedicação total aos projetos, cumprindo prazos e superando expectativas.",
  },
];

const Sobre = () => {
  return (
    <>
      <div id="sobre"></div>
      <motion.div
        className="sobre"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="sobre-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Sobre Mim</h2>
          <p id="sobre-p">
            Conheça um pouco da minha história, habilidades e o que me motiva a
            criar experiências digitais excepcionais.
          </p>
        </motion.div>

        <div className="sobre-mim">
          <motion.div
            className="persona"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Quem sou eu</h2>
            <p id="frase">
              Sou um desenvolvedor web apaixonado por criar soluções digitais
              que combinam funcionalidade e estética. Com mais de 2 anos de
              experiência no mercado...
            </p>
            <p>
              Minha jornada começou com HTML e CSS, mas rapidamente evoluiu...
            </p>
            <p>
              Atualmente, foco em criar soluções web completas, desde o design
              até a implementação...
            </p>
          </motion.div>

          <motion.div
            className="skills-section"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 id="skills-title">Minhas habilidades</h2>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-fill"
                    style={{ width: `${skill.level}%` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="diferencials"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="diferecials-title">O que me Diferencia</h2>
          <div className="cards">
            {dados.map((item, index) => (
              <motion.div
                className="card"
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="icone">{item.icone}</div>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Sobre;
