import React from 'react';

import ReactGA from 'react-ga';
import Footer from '../../components/Footer';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import { Container, Imagem, MyLink } from './styles';

ReactGA.pageview(window.location.pathname + window.location.search);

interface Empreendimentos {
  id: number;
  nome: string;
  descricao_curta: string;
  descricao: string;
  endereco: string;
  banner: string;
  poster: string;
}

const Main: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      {width < 800 ? (
        <Container>
          <MyLink to="/obras">
            <Imagem src="https://i.imgur.com/CVtmdgh.png" alt="Pégaso" />
          </MyLink>
        </Container>
      ) : (
        <Container>
          <MyLink to="/obras">
            <Imagem src="https://i.imgur.com/BVKrDNR.png" alt="Pégaso" />
          </MyLink>
        </Container>
      )}
      <Footer />
    </>
  );
};
export default Main;
