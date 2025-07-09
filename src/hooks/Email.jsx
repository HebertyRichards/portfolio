import { useEffect } from "react";
import axios from "axios";

export function Email() {
  useEffect(() => {
    axios.post("https://portfolio-1-3pdy.onrender.com/visit")
      .catch((err) => console.error("Erro ao registrar visita:", err));
  }, []);

  return null;
}