import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSwipeable } from 'react-swipeable';

import { Preloader, ThreeDots } from 'react-preloader-icon';
import useAxios from '../../hooks/useAxios';

import Footer from '../../components/Footer';

import {
  Carousel,
  Container,
  Imagem,
  FloatDiv,
  FloatContent,
  FloatButton,
  DivIcons,
  LeftArrow,
  RightArrow,
} from './styles';

interface Empreendimentos {
  id: number;
  nome: string;
  descricao_curta: string;
  descricao: string;
  endereco: string;
  banner: string;
  poster: string;
}

interface ResultsProps {
  results: Empreendimentos[];
  isLoading?: any;
  isError?: any;
}

const CarouselDenner: React.FC = () => {
  const [sliding, setSliding] = useState(0);
  const [dir] = useState('NEXT');

  const { results }: ResultsProps = useAxios('show-all');

  const handleNext = useCallback(() => {
    if (sliding !== results.length - 1) {
      setSliding(sliding + 1);
    } else {
      setSliding(0);
    }
  }, [sliding, setSliding, results]);

  const handleBack = useCallback(() => {
    if (sliding !== 0) {
      setSliding(sliding - 1);
    } else {
      setSliding(results.length - 1);
    }
  }, [sliding, setSliding, results]);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handleBack(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  if (!results) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '95vh',
        }}
      >
        <Preloader
          use={ThreeDots}
          size={120}
          strokeWidth={6}
          strokeColor="#262626"
          duration={2000}
        />
      </div>
    );
  }
  return (
    <>
      <Carousel {...handlers} style={{ cursor: 'grab' }}>
        {results.map(item => (
          <Container key={item.id} sliding={sliding} dir={dir}>
            <Imagem src={item.banner} alt={item.nome} />
          </Container>
        ))}

        <FloatDiv>
          <FloatContent>
            <div>
              <span>Pronto para morar</span>
              <p>{results[sliding].nome}</p>
              <span>{results[sliding].descricao_curta}</span>
            </div>
            <DivIcons>
              <LeftArrow onClick={() => handleBack()} />
              <RightArrow onClick={() => handleNext()} />
            </DivIcons>
          </FloatContent>
          <Link to={`/empreendimentos/detalhes/${results[sliding].id}`}>
            <FloatButton>
              <span>Clique aqui para conferir</span>
            </FloatButton>
          </Link>
        </FloatDiv>
      </Carousel>
      <Footer />
    </>
  );
};
export default CarouselDenner;
