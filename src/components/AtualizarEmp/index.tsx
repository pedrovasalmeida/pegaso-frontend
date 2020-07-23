import React from "react";
import api from "../../services/api";

import { Container } from "./styles";

interface EmpreendimentoData {
  id: number;
  nome: string;
  descricao_curta: string;
  descricao: string;
  endereco: string;
  banner: string;
  poster: string;
}

const AtualizarEmp: React.FC = () => {
  return <Container></Container>;
};

export default AtualizarEmp;
