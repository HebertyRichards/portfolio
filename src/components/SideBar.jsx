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
          <a href="">Home</a>
          <a href="#frase-impacto">Sobre</a>
          <a href="#contact">Contato</a>
        </div>
      </nav>
    </>
  );
}

export default SideBar;
