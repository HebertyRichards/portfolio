import React, { useState, useEffect, useRef } from "react";
import "../App.css";

const Sobre = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);
  const sectionRef = useRef(null);
  const faqData = [
    {
      pergunta: "Quais serviços você oferece?",
      resposta:
        "Desenvolvimento de sites responsivos, landing pages, sistemas web e integrações com banco de dados e automações.",
    },
    {
      pergunta: "Por que contratar meus serviços?",
      resposta:
        "Porque entrego soluções personalizadas com foco em performance, design moderno e atendimento próximo ao cliente.",
    },
    {
      pergunta: "Você também cuida da hospedagem e domínio?",
      resposta:
        "Sim, posso auxiliar no processo de registro de domínio e configuração da hospedagem.",
    },
    {
      pergunta: "Você oferece suporte após a entrega?",
      resposta:
        "Sim! Após a entrega, você tem suporte para ajustes e atualizações, além de opção de manutenção mensal.",
    },
    {
      pergunta: "Em quanto tempo o projeto fica pronto?",
      resposta:
        "Depende da complexidade, mas costumo entregar soluções simples em até 7 dias. Sempre mantenho você informado durante todo o processo",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleResponse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAppeared(true);
        }
      },
      { threshold: 0.3 }
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
        <div className="faq-container">
          <h2 id="h2">Perguntas Frequentes</h2>
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <p className="faq-question" onClick={() => toggleResponse(index)}>
                {item.pergunta}
              </p>
              {openIndex === index && (
                <p className="faq-answer">{item.resposta}</p>
              )}
            </div>
          ))}
        </div>
      </section>
      <h2>Tecnologias</h2>
    </>
  );
};

export default Sobre;
