import { useEffect } from "react";
import axios from "axios";

export function Email() {
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const registerVisit = async () => {
      try {
        await axios.post(`${API_URL}/visit`, { message: "Visita registrada" });
      } catch (error) {
        console.error("Erro ao registrar visita:", error);
      }
    };

    registerVisit();
  }, [API_URL]);

  return null;
}
