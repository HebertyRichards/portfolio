import React from "react";
import Sobre from "./Sobre";
import App from "../App";
import "../App.css";

function SideBar2() {
  return (
    <>
      <nav id="mySection2">
        <div className="container">
          <a id="img-href" href="#"></a>
          <a href="">Início</a>
          <a href="#">Sobre</a>
          <a href="#">Projetos</a>
          <a href="#">Serviços</a>
          <a href="#">Depoimentos</a>
          <a href="#">Contato</a>
          <a id="button-talk" href="">
            Fale Comigo
          </a>
        </div>
      </nav>
    </>
  );
}

export default SideBar2;
