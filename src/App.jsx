import Home from "./components/Home";
import Apresentation from "./components/Apresentation";
import Sobre from "./components/Sobre";
import Projeto from "./components/Projetos";
import Servicos from "./components/Servicos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import { Email } from "./hooks/Email";
import "./style/App.css";

function App() {
  Email();
  return (
    <>
      <div id="back">
        <Home />
        <Apresentation />
      </div>
        <Sobre />
        <Projeto />
        <Servicos />
        <Contato />
      <Footer />
    </>
  );
}

export default App;
