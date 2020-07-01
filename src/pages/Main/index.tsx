import React from "react";

/** Componentes */
import Header from "../../components/Header";
import Body from "../../components/Body";
import Footer from "../../components/Footer";

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
