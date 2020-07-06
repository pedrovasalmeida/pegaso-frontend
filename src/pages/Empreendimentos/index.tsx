import React from "react";

/** Componentes */
import Header from "../../components/Header";
import Projects from "../../components/Projects";

import { Container } from "./styles";

const Empreendimentos: React.FC = () => {
  return (
    <Container>
      <Header />
      <Projects />
    </Container>
  );
};

export default Empreendimentos;
