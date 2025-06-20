import { useEffect } from "react";

export function Email() {  
    useEffect(() => {
        fetch("https://portfolio-txp6.onrender.com/visit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }).catch((err) => console.error("Erro ao registrar visita:", err));
      }, []);
    }