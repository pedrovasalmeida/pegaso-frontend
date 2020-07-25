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

const MyCarousel = () => {
  const { data } = useAxios<Empreendimentos[]>('/show-all');

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  if (!data) {
    return <p>Carregando...</p>;
  }

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  // const goToIndex = (newIndex: number) => {
  //   if (animating) return;
  //   setActiveIndex(newIndex);
  // };

  const slides = data.map((item) => {
    return (
      <DivCarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <Link to={`/empreendimentos/detalhes/${data[activeIndex].id}`}>
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
            <p>{data[activeIndex].nome}</p>
            <span>{data[activeIndex].descricao_curta}</span>
          </div>
          <DivIcons>
            <LeftArrow onClick={() => previous()} />
            <RightArrow onClick={() => next()} />
          </DivIcons>
        </FloatContent>
        <Link to={`/empreendimentos/detalhes/${data[activeIndex].id}`}>
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
