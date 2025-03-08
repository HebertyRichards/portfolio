import React from "react";
import Home from "./pages/Home";
import Apresentation from "./components/Apresentation";
import Sobre from "./components/Sobre";
import SliderImage from "./components/SliderImage";
import Skills from "./components/Skills";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import "./App.css";

function App() {
  return (
    <>
      <div id="back">
        <Home />
        <Apresentation />
      </div>
      <Sobre />
      <SliderImage />
      <Skills />
      <Projetos />
      <Contato />
    </>
  );
}

export default App;
