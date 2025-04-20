import React, { useEffect, useState } from "react";
import projectsData from "../data/projects.json";
import { motion } from "framer-motion";

const Projeto = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <>
      <div id="projetos"></div>
      <motion.section
        className="projects-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 id="proj">Meus Projetos</h2>
        <p id="proj2">
          Uma seleção dos meus trabalhos mais recentes e relevantes,
          demonstrando minhas habilidades e experiência.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                src={project.imagem}
                alt={project.titulo}
                className="project-image"
              />
              <div className="project-content">
                <h3>{project.titulo}</h3>
                <p>{project.descricao}</p>
                <div className="project-languages">
                  {project.linguagens.map((lang, index) => (
                    <span key={index} className="language-tag">
                      {lang}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.repositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repositório
                  </a>
                  <a
                    href={project.hospedagem}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Projeto;
