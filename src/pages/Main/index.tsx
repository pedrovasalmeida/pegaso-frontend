import React from "react";

/** Componentes */
import Header from "../../components/Header";
import Body from "../../components/Body";

import { Container } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
};

export default Main;
