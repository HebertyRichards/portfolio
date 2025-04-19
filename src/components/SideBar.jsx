import React from "react";
import Modo from "./Modo";
import Sobre from "./Sobre";
import Projeto from "./Projetos";
import App from "../App";
import Servicos from "./Servicos";
import Contato from "./Contato";
import "../App.css";

function SideBar() {
  const openNav = () => {
    document.querySelector(".sidebar").style.width = "250px";
  };

  const closeNav = () => {
    document.querySelector(".sidebar").style.width = "0";
  };

  return (
    <>
      <div id="home"></div>
      <nav id="mySection">
        <Modo openNav={openNav} />
        <div className="sidebar" style={{ width: "0" }}>
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            ×
          </a>
          <a href="#home">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
          <a id="button-talk2" href="#contato">
            Fale Comigo
          </a>
        </div>
      </nav>
    </>
  );
}

export default SideBar;
