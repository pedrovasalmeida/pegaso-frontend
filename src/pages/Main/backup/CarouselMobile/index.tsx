import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Preloader, ThreeDots } from 'react-preloader-icon';
import useAxios from '../../../../hooks/useAxios';

import Footer from '../../../../components/Footer';

import {
  Container,
  DivCarousel,
  DivCarouselItem,
  Imagem,
  DivCarouselControl,
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
  results: Array<Empreendimentos>;
  isLoading?: any;
  isError?: any;
}

const MyCarouselMobile: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const { results }: ResultsProps = useAxios('show-all');

  if (!results)
    return (
      <Container
        style={{
          display: 'flex',
          marginTop: '150px',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Preloader
          use={ThreeDots}
          size={120}
          strokeWidth={6}
          strokeColor="#262626"
          duration={2000}
        />
      </Container>
    );

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === results.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? results.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = results?.map((item: Empreendimentos) => {
    return (
      <DivCarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <Link to={`/obras/detalhes/${results[activeIndex].id}`}>
          <Imagem src={item.banner} alt={item.nome} />
        </Link>
      </DivCarouselItem>
    );
  });

  return (
    <Container>
      <FloatDiv>
        <FloatContent>
          <div>
            <span>Pronto para morar</span>
            <p>{results[activeIndex].nome}</p>
            <span>{results[activeIndex].descricao_curta}</span>
          </div>
          <DivIcons>
            <LeftArrow onClick={() => previous()} />
            <RightArrow onClick={() => next()} />
          </DivIcons>
        </FloatContent>
        <Link to={`/obras/detalhes/${results[activeIndex].id}`}>
          <FloatButton>
            <span>Clique aqui para conferir</span>
          </FloatButton>
        </Link>
      </FloatDiv>

      <DivCarousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        ride="carousel"
      >
        {slides}
        <DivCarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <DivCarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </DivCarousel>

      <Footer />
    </Container>
  );
};

export default MyCarouselMobile;
