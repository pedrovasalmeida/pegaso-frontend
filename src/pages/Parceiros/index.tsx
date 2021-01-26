import React from 'react';

import Footer from '../../components/Footer';

import { Container, Title, ParceirosDiv, Parceiro } from './styles';

const Parceiros: React.FC = () => {
  return (
    <>
      <Container>
        <Title>Parceiros</Title>

        <ParceirosDiv>
          <Parceiro />
          <Parceiro />
          <Parceiro />
          <Parceiro />
          <Parceiro />
          <Parceiro />
          <Parceiro />
          <Parceiro />
        </ParceirosDiv>
      </Container>
      <Footer />
    </>
  );
};

export default Parceiros;
