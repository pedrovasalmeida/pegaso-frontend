import React from 'react';

/** Componentes */
import MyCarousel from '../../components/Carousel';

import { Container } from './styles';

const Main: React.FC = () => {
  console.log(
    'Bem-vindo ao console do Chrome. \nVocê está agora no site da Pegaso! \n*********************** \nUse com cuidado! 😉 \n***********************',
  );

  return (
    <Container>
      <MyCarousel />
    </Container>
  );
};

export default Main;
