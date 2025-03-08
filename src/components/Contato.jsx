import React, { useState } from "react";

function Contato() {
  const [tooltip, setTooltip] = useState("");
  const email = "heberynho@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setTooltip("Copiado!");
    setTimeout(() => setTooltip(""), 2000);
  };

  return (
    <div id="contact">
      <h2>Contato</h2>
      <button
        onClick={copyToClipboard}
        onMouseEnter={() => setTooltip("Clique para copiar")}
        onMouseLeave={() => setTooltip("")}
        className="copy-button"
      >
        {email}
      </button>
      {tooltip && <div className="tooltip-box">{tooltip}</div>}
    </div>
  );
}

export default Contato;
