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
  const partners = [
    {
      src: ImgAdvocaciaPartner,
      duration: 0.5,
    },
    {
      src: ImgGrupoCBPartner,
      duration: 0.7,
    },
    {
      src: ImgHelusPartner,
      duration: 0.9,
    },
    {
      src: ImgInajaPartner,
      duration: 1.1,
    },
    {
      src: ImgMetrollPartner,
      duration: 1.3,
    },
    {
      src: ImgPupoPartner,
      duration: 1.5,
    },
    {
      src: ImgPetrobrasPartner,
      duration: 1.7,
    },
    {
      src: ImgSantanderPartner,
      duration: 1.9,
    },
    {
      src: ImgUcsalPartner,
      duration: 2.1,
    },
  ];

  return (
    <>
      <Container>
        <Title>Parceiros</Title>

        <ParceirosDiv>
          {partners.map(partner => (
            <Parceiro
              key={partner.src}
              src={partner.src}
              alt="Pégaso"
              initial={{ x: -150 }}
              animate={{ x: 0 }}
              whileHover={{ y: -6, transition: { duration: 0.4 } }}
              whileTap={{ y: -6, transition: { duration: 0.4 } }}
              transition={{ duration: partner.duration }}
            />
          ))}
        </ParceirosDiv>
      </Container>
      <Footer />
    </>
  );
};

export default Parceiros;
