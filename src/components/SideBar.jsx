import Modo from "../utils/Modo";
import "..//style/App.css";

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
          <a href="#home" onClick={closeNav}>
            Início
          </a>
          <a href="#sobre" onClick={closeNav}>
            Sobre
          </a>
          <a href="#projetos" onClick={closeNav}>
            Projetos
          </a>
          <a href="#servicos" onClick={closeNav}>
            Serviços
          </a>
          <a href="#contato" onClick={closeNav}>
            Contato
          </a>
          <a id="button-talk2" href="#contato" onClick={closeNav}>
            Fale Comigo
          </a>
        </div>
      </nav>
    </>
  );
}

export default SideBar;
