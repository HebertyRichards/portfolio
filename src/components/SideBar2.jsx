import React from "react";
import Sobre from "./Sobre";
import App from "../App";
import Projeto from "./Projetos";
import Servicos from "./Servicos";
import Contato from "./Contato";
import "../App.css";

function SideBar2() {
  return (
    <>
      <div id="home"></div>
      <nav id="mySection2">
        <div className="container">
          <a id="img-href" href="#"></a>
          <a href="#home">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
          <a id="button-talk" href="#contato">
            Fale Comigo
          </a>
        </div>
      </nav>
    </>
  );
}

export default SideBar2;
