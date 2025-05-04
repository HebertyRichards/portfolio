import { motion } from "framer-motion";

function Apresentation() {
  return (
    <>
      <motion.div
        className="menu-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="apresentation">
          <h2 id="h2">
            Transformando ideias em <span>experiências digitais</span>
          </h2>
          <p>
            Desenvolvimento web profissional com foco em performance,
            acessibilidade e design moderno para elevar sua presença online.
          </p>
          <div className="buttons">
            <a id="button-talk" href="#projetos">
              Ver Projetos
            </a>
            <a id="talk" href="#contato">
              Fale Comigo
            </a>
          </div>
        </div>
        <div className="port">
          <img src="./image.png"></img>
        </div>
      </motion.div>
    </>
  );
}

export default Apresentation;
