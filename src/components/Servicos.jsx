import React from "react";
import Contato from "./Contato";
import { motion } from "framer-motion";

const services = [
  {
    icon: "🖼️",
    title: "Web Design",
    description:
      "Criação de interfaces modernas, responsivas e centradas no usuário que elevam a experiência digital da sua marca.",
    items: ["Design Responsivo", "Prototipagem", "UI/UX Design", "Wireframing"],
  },
  {
    icon: "🧩",
    title: "Desenvolvimento Web",
    description:
      "Desenvolvimento de aplicações web completas, desde landing pages até sistemas complexos com backend robusto.",
    items: ["Front-end", "Back-end", "APIs RESTful", "Bancos de Dados"],
  },
  {
    icon: "📱",
    title: "Aplicativos Mobile",
    description:
      "Desenvolvimento de aplicativos móveis nativos e híbridos para iOS e Android com foco em performance e usabilidade.",
    items: [
      "React Native",
      "UI Responsiva",
      "Integração com APIs",
      "Publicação nas Lojas",
    ],
  },
  {
    icon: "⚙️",
    title: "SEO & Performance",
    description:
      "Otimização de sites para mecanismos de busca e melhoria de performance para carregamento rápido e experiência fluida.",
    items: [
      "Otimização de Velocidade",
      "SEO Técnico",
      "Análise de Métricas",
      "Core Web Vitals",
    ],
  },
  {
    icon: "💡",
    title: "Consultoria Técnica",
    description:
      "Consultoria especializada para empresas que buscam melhorar seus processos de desenvolvimento e qualidade de software.",
    items: [
      "Arquitetura de Software",
      "Code Review",
      "Melhores Práticas",
      "Treinamento de Equipes",
    ],
  },
  {
    icon: "🔧",
    title: "Manutenção & Suporte",
    description:
      "Serviços de manutenção contínua, atualizações de segurança e suporte técnico para aplicações existentes.",
    items: [
      "Correção de Bugs",
      "Atualizações de Segurança",
      "Melhorias Contínuas",
      "Suporte Técnico",
    ],
  },
];

const Servicos = () => {
  return (
    <>
      <div id="servicos"></div>
      <motion.div
        className="services-im"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 id="service-h2">Meus Serviços</h2>
        <p>
          Ofereço soluções completas para transformar suas ideias em realidade
          digital, com foco em qualidade e inovação.
        </p>
      </motion.div>
      <section className="services-section">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.items.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>
      <motion.div
        className="profi-service"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 id="h2-service">Precisa de um Serviço Peronalizado?</h2>
        <p>
          Cada projeto é único e pode exigir uma abordagem específica. Entre em
          contato para discutirmos suas necessidades e criarmos uma solução sob
          medida para o seu negócio.
        </p>
        <a id="button-talk" href="#contato">
          Fale Comigo
        </a>
      </motion.div>
    </>
  );
};

export default Servicos;
