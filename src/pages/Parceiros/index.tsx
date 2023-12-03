import React, { useEffect } from 'react';

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
      duration: 1,
    },
    {
      src: ImgGrupoCBPartner,
      duration: 1.05,
    },
    {
      src: ImgHelusPartner,
      duration: 1.1,
    },
    {
      src: ImgInajaPartner,
      duration: 1.15,
    },
    {
      src: ImgMetrollPartner,
      duration: 1.2,
    },
    {
      src: ImgPupoPartner,
      duration: 1.25,
    },
    {
      src: ImgPetrobrasPartner,
      duration: 1.3,
    },
    {
      src: ImgSantanderPartner,
      duration: 1.35,
    },
    {
      src: ImgUcsalPartner,
      duration: 1.4,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  return (
    <>
      <Container>
        <Title
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Parceiros
        </Title>

        <ParceirosDiv>
          {partners.map(partner => (
            <Parceiro
              key={partner.src}
              src={partner.src}
              alt="Pégaso"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ y: -6, transition: { duration: 0.4 } }}
              transition={{ duration: partner.duration }}
            />
          ))}
        </ParceirosDiv>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default Parceiros;
