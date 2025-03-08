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
              Plataforma de agendamento para barbearia, permitindo que clientes
              realizem agendamentos sem necessidade de cadastro. O sistema envia
              confirmações por e-mail e WhatsApp, incluindo detalhes do
              agendamento e um link para cancelamento. Além disso, a plataforma
              direciona os clientes para o WhatsApp em caso de compra de
              produtos.
            </p>
            <button>HTML</button>
            <button>CSS</button>
            <button>React.js</button>
            <button>Node.js</button>
            <button>Express.js</button>
            <button>MySQL</button>
            <div className="link-project">
              <a href="https://web-barber-phi.vercel.app" target="_blank">
                Ver Projeto
              </a>
              <a
                href="https://github.com/HebertyRichards/web-barber"
                target="_blank"
              >
                Ver Repositório
              </a>
            </div>
          </div>
        </div>
        <div className="info-projects">
          <img src="/projeto2.png" alt="Gerar qrcode"></img>
          <div className="project-info">
            <h2>Gerador de QRcode</h2>
            <p>
              Gerador de QR Code para qualquer caractere ou link digitado.
              Permite a opção de download do QR Code em formato PDF ou PNG
            </p>
            <button>HTML</button>
            <button>CSS</button>
            <button>VueJS</button>
            <div className="link-project">
              <a
                href="https://hebertyrichards.github.io/Gerador-de-QRCode/"
                target="_blank"
              >
                Ver Projeto
              </a>
              <a
                href="https://github.com/HebertyRichards/Gerador-de-QRCode"
                target="_blank"
              >
                Ver Repositório
              </a>
            </div>
          </div>
        </div>
        <div className="info-projects">
          <img src="/projeto3.png" alt="Site Geek"></img>
          <div className="project-info">
            <h2>Geek-Nine</h2>
            <p>
              Portal de notícias especializado no universo geek, com
              funcionalidades de cadastro e login de usuários, além de um chat
              global para interação em tempo real.
            </p>
            <button>HTML</button>
            <button>CSS</button>
            <button>JavaScript</button>
            <button>JQuery</button>
            <button>PHP</button>
            <button>SQLite</button>
            <div className="link-project">
              <a
                href="https://geeknine-production.up.railway.app"
                target="_blank"
              >
                Ver Projeto
              </a>
              <a
                href="https://github.com/HebertyRichards/GeekNine"
                target="_blank"
              >
                Ver Repositório
              </a>
            </div>
          </div>
        </div>
        <div className="info-projects">
          <img src="/projeto4.png" alt="Projeto Empresarial"></img>
          <div className="project-info">
            <h2>Geek-Solutions</h2>
            <p>
              Desenvolvimento de um site para uma empresa do setor tecnológico,
              incluindo seções institucionais, apresentação de serviços, área de
              contato e um banco de currículos na seção 'Trabalhe Conosco', com
              integração para envio de e-mails
            </p>
            <button>HTML</button>
            <button>CSS</button>
            <button>JavaScript</button>
            <button>JQuery</button>
            <button>PHP</button>
            <button>SQLite</button>
            <div className="link-project">
              <a
                href="https://hebertyrichards.github.io/Geek-Solutions/"
                target="_blank"
              >
                Ver Projeto
              </a>
              <a
                href="https://github.com/HebertyRichards/Geek-Solutions"
                target="_blank"
              >
                Ver Repositório
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projetos;
