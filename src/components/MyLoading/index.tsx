import React from 'react';

import { Preloader, ThreeDots } from 'react-preloader-icon';

import { Container } from './styles';

const MyLoading: React.FC = () => {
  return (
    <Container>
      <Preloader
        use={ThreeDots}
        size={120}
        strokeWidth={6}
        strokeColor="#0e6387"
        duration={1000}
      />

      <span>Carregando...</span>
    </Container>
  );
};

export default MyLoading;
