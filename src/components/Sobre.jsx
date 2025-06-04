import "../style/App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import skillsData from "../data/skills.json"
import { motion } from "framer-motion";


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
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
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
              experiência no mercado, tenho trabalhado com as tecnologias mais
              modernas para entregar produtos de alta qualidade.
            </p>
            <p id="frase">
              Minha jornada começou com HTML e CSS, mas rapidamente evoluiu para
              o desenvolvimento de aplicações complexas utilizando React e
              Node.js. Acredito que o bom design e a experiência do usuário são
              tão importantes quanto um código bem escrito.
            </p>
            <p id="frase">
              Atualmente, foco em criar soluções web completas, desde o design
              até a implementação, sempre buscando a melhor performance e
              acessibilidade.
            </p>
          </motion.div>

          <motion.div
      className="skills-section"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="skills-title">Minhas habilidades</h2>

      <Swiper
        className="skills-swiper"
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}

        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper.params.navigation) {
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }, 0); 
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          801: {
            slidesPerView: 3,
          },
        }}
      >
        {skillsData.map((skill, index) => (
        <SwiperSlide key={index}>
        <div className="skill-card">
          <img src={skill.imagem} alt={skill.titulo} className="skill-icon" />
          <h3 className="skill-title">{skill.titulo}</h3>
        </div>
      </SwiperSlide>
        ))}
      </Swiper>
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
