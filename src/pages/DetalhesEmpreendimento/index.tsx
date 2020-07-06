import React from "react";

/** Componentes */
import Header from "../../components/Header";
import DetalhesProjeto from "../../components/DetalhesProjeto";

import { Container } from "./styles";

const DetalhesEmpreendimento: React.FC = () => {
  return (
    <Container>
      <Header />
      <DetalhesProjeto />
    </Container>
  );
};

export default DetalhesEmpreendimento;
