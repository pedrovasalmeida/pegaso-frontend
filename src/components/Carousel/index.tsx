import React, { useState } from 'react';

import {
  Container,
  DivCarousel,
  DivCarouselItem,
  DivCarouselControl,
  FloatDiv,
  FloatContent,
  FloatButton,
  DivIcons,
  LeftArrow,
  RightArrow,
} from './styles';

import { Link } from 'react-router-dom';

import useAxios from '../../hooks/useAxios';

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

const MyCarousel = () => {
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
        }}
      >
        <h1>CARREGANDO</h1>
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
        <Link to={`/empreendimentos/detalhes/${results[activeIndex].id}`}>
          <img src={item.banner} alt={item.nome} />
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
        <Link to={`/empreendimentos/detalhes/${'id'}`}>
          <FloatButton>
            <span>Clique aqui para conferir</span>
          </FloatButton>
        </Link>
      </FloatDiv>
      <DivCarousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        ride={'carousel'}
      >
        {slides}
        <DivCarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <DivCarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </DivCarousel>
    </Container>
  );
};

export default MyCarousel;
