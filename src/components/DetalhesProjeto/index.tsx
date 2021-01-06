import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Preloader, ThreeDots } from 'react-preloader-icon';

import useAxios from '../../hooks/useAxios';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import DetalhesProjetoMobile from '../DetalhesProjetoMobile';

import Footer from '../Footer';

import {
  Container,
  Details,
  Title,
  Empreendimento,
  Text,
  Endereco,
  MoreImages,
  DivCarousel,
  DivCarouselItem,
  DivCarouselControl,
  LeftArrow,
  RightArrow,
  FloatDiv,
  DivIcons,
  DivImagemTipo,
  BackButton,
  BackIcon,
} from './styles';

interface Empreendimentos {
  development: {
    id: number;
    nome: string;
    descricao_curta: string;
    descricao: string;
    endereco: string;
    banner: string;
    poster: string;
  };
  images: {
    id: number;
    id_empreendimento: number;
    imagem: string;
    name: string;
  }[];
}

interface Plantas {
  id: number;
  id_empreendimento: number;
  planta: string;
  name: string;
  descricao: string;
}

const Infos: React.FC = () => {
  const { id } = useParams();
  const history = useHistory();
  const { results } = useAxios(`/show-one/${id}`);

  const { width } = useWindowDimensions();

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  if (!results)
    return (
      <div
        style={{
          display: 'flex',
          marginTop: '60px',
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
      </div>
    );

  const images = results.images.map(item => {
    return (
      <DivCarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <img src={item.imagem} alt={item.name} />
      </DivCarouselItem>
    );
  });

  const imagesLength = results.images.length;

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === imagesLength - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? imagesLength - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  return (
    <>
      {width < 1280 ? (
        <DetalhesProjetoMobile />
      ) : (
        <Container>
          <DivImagemTipo src={results.development.banner}>
            <BackButton onClick={() => history.goBack()}>
              <BackIcon />
              <span>Voltar</span>
            </BackButton>
          </DivImagemTipo>

          <Details>
            <Empreendimento>
              <Title>Empreendimento</Title>
              <Text>{results.development.descricao}</Text>
            </Empreendimento>

            <Endereco>
              <Title>Endereço</Title>
              <Text>{results.development.endereco}</Text>
            </Endereco>
          </Details>

          {imagesLength < 1 ? (
            ''
          ) : (
            <MoreImages>
              <FloatDiv>
                {images}
                <DivIcons>
                  <LeftArrow onClick={() => previous()} />
                  <RightArrow onClick={() => next()} />
                </DivIcons>
              </FloatDiv>

              <DivCarousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                ride="carousel"
              >
                {images}
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
            </MoreImages>
          )}
        </Container>
      )}

      <Footer />
    </>
  );
};

export default Infos;
