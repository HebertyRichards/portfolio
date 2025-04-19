import React from "react";
import Home from "./pages/Home";
import Apresentation from "./components/Apresentation";
import Sobre from "./components/Sobre";
import Projeto from "./components/Projetos";
import Servicos from "./components/Servicos";
import Service from "./components/Service";
import Contato from "./components/Contato";
import Footer from "./pages/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div id="back">
        <Home />
        <Apresentation />
      </div>
      <Sobre />
      <Projeto />
      <Servicos />
      <Service />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
