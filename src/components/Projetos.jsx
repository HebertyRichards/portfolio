function Projetos() {
  return (
    <>
      <div className="projects">
        <h2>Projetos realizados</h2>
        <div className="info-projects">
          <img src="./projeto1.png" alt="Web Barber Shop"></img>
          <div className="project-info">
            <h2>Web Barber Shop</h2>
            <p>
              Site de agendamento de barbearia, onde o cliente só irá agendar o
              serviço após se cadastrar e logar na plataforma, terá uma API que
              irá direcionar pro whatsapp em caso de compra de serviços ou para
              obter mais informações (EM DESENVOLVIMENTO)
            </p>
            <button>HTML</button>
            <button>CSS</button>
            <button>React.js</button>
            <button>Node.js</button>
            <button>Express.js</button>
            <button>MySQL</button>
            <div className="link-project">
              <a href="">Ver Projeto</a>
            </div>
          </div>
        </div>
        <div className="info-projects">
          <img src="/projeto2.png" alt="Gerar qrcode"></img>
          <div className="project-info">
            <h2>Gerador de QRcode</h2>
            <p>
              Gerador de Qroce de qualuer caractere digitado ou link, é possível
              é possível baixar em pdf o qrcode ou baixar em png
            </p>
            <button>HTML</button>
            <button>CSS</button>
            <button>VueJS</button>
            <div className="link-project">
              <a href="">Ver Projeto</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projetos;
