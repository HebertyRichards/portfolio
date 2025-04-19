import React, { useState, useEffect, useRef } from "react";
import "../App.css";

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
    icone: "💻", // você pode trocar por ícones reais ou SVGs
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
      <div className="sobre">
        <div className="sobre-info">
          <h2>Sobre Mim</h2>
          <p id="sobre-p">
            Conheça um pouco da minha história, habilidades e o que me motiva a
            criar experiências digitais excepcionais.
          </p>
        </div>
        <div className="sobre-mim">
          <div className="persona">
            <h2>Quem sou eu</h2>
            <p id="frase">
              Sou um desenvolvedor full-stack apaixonado por criar soluções
              digitais que combinam funcionalidade e estética. Com mais de 5
              anos de experiência no mercado, tenho trabalhado com as
              tecnologias mais modernas para entregar produtos de alta
              qualidade.
            </p>
            <p>
              Minha jornada começou com HTML e CSS, mas rapidamente evoluiu para
              o desenvolvimento de aplicações complexas utilizando React,
              TypeScript e Node.js. Acredito que o bom design e a experiência do
              usuário são tão importantes quanto um código bem escrito.
            </p>
            <p>
              Atualmente, foco em criar soluções web completas, desde o design
              até a implementação, sempre buscando a melhor performance e
              acessibilidade.
            </p>
          </div>
          <div className="skills-section">
            <h2 id="skills-title">Minhas habilidades</h2>
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="diferencials">
          <h2 id="diferecials-title">O que me Diferencia</h2>
          <div className="cards">
            {dados.map((item, index) => (
              <div className="card" key={index}>
                <div className="icone">{item.icone}</div>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sobre;
