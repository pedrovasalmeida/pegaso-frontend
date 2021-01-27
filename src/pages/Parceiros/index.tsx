import React from 'react';

import ImgAdvocaciaPartner from '../../assets/partners/advocacia-geral-da-uniao.png';
import ImgGrupoCBPartner from '../../assets/partners/grupo-cb.png';
import ImgHelusPartner from '../../assets/partners/helus.png';
import ImgInajaPartner from '../../assets/partners/inaja.png';
import ImgMetrollPartner from '../../assets/partners/metroll.png';
import ImgPetrobrasPartner from '../../assets/partners/petrobras.png';
import ImgPupoPartner from '../../assets/partners/pupo.png';
import ImgSantanderPartner from '../../assets/partners/santander.png';
import ImgUcsalPartner from '../../assets/partners/ucsal.png';

import Footer from '../../components/Footer';

import { Container, Title, ParceirosDiv, Parceiro } from './styles';

const Parceiros: React.FC = () => {
  return (
    <>
      <Container>
        <Title>Parceiros</Title>

        <ParceirosDiv>
          <Parceiro
            src={ImgAdvocaciaPartner}
            alt="Pégaso"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.4 } }}
            transition={{ duration: 0.5 }}
          />
          <Parceiro
            src={ImgGrupoCBPartner}
            alt="Pégaso"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.4 } }}
            transition={{ duration: 0.7 }}
          />
          <Parceiro
            src={ImgHelusPartner}
            alt="Pégaso"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.4 } }}
            transition={{ duration: 0.9 }}
          />
          <Parceiro
            src={ImgInajaPartner}
            alt="Pégaso"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.4 } }}
            transition={{ duration: 1.1 }}
          />
          <Parceiro
            src={ImgMetrollPartner}
            alt="Pégaso"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.4 } }}
            transition={{ duration: 1.3 }}
          />
          <Parceiro
            src={ImgPetrobrasPartner}
            alt="Pégaso"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.4 } }}
            transition={{ duration: 1.5 }}
          />
          <Parceiro
            src={ImgPupoPartner}
            alt="Pégaso"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.4 } }}
            transition={{ duration: 1.7 }}
          />
          <Parceiro
            src={ImgSantanderPartner}
            alt="Pégaso"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.4 } }}
            transition={{ duration: 1.9 }}
          />
          <Parceiro
            src={ImgUcsalPartner}
            alt="Pégaso"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.4 } }}
            transition={{ duration: 2.1 }}
          />
        </ParceirosDiv>
      </Container>
      <Footer />
    </>
  );
};

export default Parceiros;
