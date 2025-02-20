import React, { useState, useEffect, useRef } from "react";
import "../App.css";

const Sobre = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAppeared(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current && !hasAppeared) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAppeared]);

  return (
    <>
      <section
        ref={sectionRef}
        className={`sobre-container ${isVisible ? "visible" : ""}`}
      >
        <div id="frase-impacto">
          <h3>
            Seu desafio, minha solução: entrego resultados eficazes e
            personalizados com código de qualidade
          </h3>
        </div>
        <div id="sobre-content">
          <h2>Sobre</h2>
          <p>
            Sou Heberty Souza Lima, desenvolvedor web com experiência em
            front-end (React, JavaScript, HTML, CSS) e back-end (Node.js, PHP).
            Gosto de criar soluções práticas e eficientes, e estou sempre em
            busca de novos desafios para expandir minhas habilidades. Meu foco é
            aprender, aplicar meus conhecimentos e contribuir para projetos
            inovadores!
          </p>
        </div>
      </section>
      <h2>Tecnologias</h2>
    </>
  );
};

export default Sobre;
