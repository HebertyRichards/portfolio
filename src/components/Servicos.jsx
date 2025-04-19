import React from "react";

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
    items: [
      "Frontend React",
      "Backend Node.js",
      "APIs RESTful",
      "Bancos de Dados",
    ],
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
    <section className="services-section">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <div className="service-icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <ul>
            {service.items.map((item, idx) => (
              <li key={idx}>• {item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Servicos;
