import React from "react";

function Skills() {
  return (
    <>
      <div className="infos">
        <div className="hard">
          <h2>Hard Skills</h2>
          <ul>
            <li>HTML & CSS</li>
            <li>Responsividade</li>
            <li>React.js, Vue.js</li>
            <li>Node.js, Express.js</li>
            <li>PHP, Python</li>
            <li>Banco de Dados(mySQL, MongoDB, SQLite)</li>
          </ul>
        </div>
        <hr></hr>
        <div className="soft">
          <h2>Soft Skills</h2>
          <ul>
            <li>Resolução de Problemas</li>
            <li>Facilidade de adaptação</li>
            <li>Organização</li>
            <li>Capacidade de Aprendizado contínuo</li>
            <li>Atenção aos detalhes</li>
            <li>Comprometimento com qualidade e resultados</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;
