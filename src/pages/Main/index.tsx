import React from "react";

/** Componentes */
import Header from "../../components/Header";
import MyCarousel from "../../components/Carousel";

import { Container } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <MyCarousel />
    </Container>
  );
};

export default Main;
