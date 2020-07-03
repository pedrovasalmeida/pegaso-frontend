import React from "react";

/** Componentes */
import Header from "../../components/Header";
import MyCarousel from "../../components/Carousel";
import Footer from "../../components/Footer";

import { Container } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <MyCarousel />
      <Footer />
    </Container>
  );
};

export default Main;
