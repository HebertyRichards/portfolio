import React from "react";
import Modo from "./Modo";
import Sobre from "./Sobre";
import App from "../App";
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
      <nav id="mySection">
        <Modo openNav={openNav} />
        <div className="sidebar" style={{ width: "0" }}>
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            ×
          </a>
          <a href="">Início</a>
          <a href="#">Sobre</a>
          <a href="#">Projetos</a>
          <a href="#">Serviços</a>
          <a href="#">Depoimentos</a>
          <a href="#">Contato</a>
          <a id="button-talk2" href="">
            Fale Comigo
          </a>
        </div>
      </nav>
    </>
  );
}

export default SideBar;
