import React, { useState } from "react";
import Sobre from "../../components/Sobre";
import Servicos from "../../components/Servicos";
import Projeto from "../../components/Projetos";
import Contato from "../../components/Contato";
import { motion } from "framer-motion";

function Footer() {
  const [tooltip, setTooltip] = useState("");
  const email = "heberynho@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  };
  return (
    <>
      <footer>
        <div className="rodape">
          <div className="rodape-infos">
            <div className="infos">
              <a id="img-href2" href="#"></a>
              <p>
                Transformando ideias em experiências digitais excepcionais com
                código limpo e design moderno.
              </p>
            </div>
            <div className="infos2">
              <h2>Links Rápidos</h2>
              <a href="#">Início</a>
              <a href="#sobre">Sobre</a>
              <a href="#projetos">Projetos</a>
              <a href="#servicos">Serviços</a>
              <a href="#contato">Contato</a>
            </div>
            <div className="infos3">
              <h2>Serviços</h2>
              <a href="#servicos">Web Design</a>
              <a href="#servicos">Desenvolvimento Web</a>
              <a href="#servicos">Aplicativos Mobile</a>
              <a href="#servicos">SEO & Perfomance</a>
              <a href="#servicos">Consultoria Técnica</a>
              <a href="#servicos">Manutenção & Suporte</a>
            </div>
            <div className="infos4">
              <h2>Contato</h2>
              <button
                onClick={copyEmail}
                onMouseEnter={() => setTooltip("Clique para copiar")}
                onMouseLeave={() => setTooltip("")}
                className="copy-button"
              >
                {email}
              </button>

              {tooltip && <div className="tooltip-box">{tooltip}</div>}
            </div>
          </div>
          <hr></hr>
          <p id="direitos">© 2025 DevHeberty. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
