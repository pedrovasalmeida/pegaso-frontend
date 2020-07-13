import React, { useState } from "react";

import { useParams } from "react-router-dom";

import useAxios from "../../hooks/useAxios";

import {
  Container,
  Imagem,
  Details,
  Title,
  Empreendimento,
  Text,
  Endereco,
  MoreImages,
  DivTitlePlanta,
  Plantas,
  OpcaoPlanta,
  TitlePlanta,
  Localizacao,
  Maps,
  DetalhesBairro,
  DivCarousel,
  DivCarouselItem,
  DivCarouselControl,
  DivCarouselIndicators,
  DivCarouselCaption,
  LeftArrow,
  RightArrow,
  FloatDiv,
  FloatContent,
  FloatButton,
  DivIcons,
} from "./styles";

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
  let { id } = useParams();
  const { data } = useAxios<Empreendimentos>(`/show-one/${id}`);
  const plantas = useAxios<Plantas[]>(`/show-all-plantas/${id}`);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  if (!data)
    return (
      <Container
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>Carregando data...</p>
      </Container>
    );

  const imagesLength = data?.images.length;

  const images = data.images.map((item) => {
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
    <Container>
      <Imagem src={data.development.banner} alt="Imagem" />

      <Details>
        <Empreendimento>
          <Title>Empreendimento</Title>
          <Text>{data.development.descricao}</Text>
        </Empreendimento>

        <Endereco>
          <Title>Endereço</Title>
          <Text>{data.development.endereco}</Text>
        </Endereco>
      </Details>

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
          ride={"carousel"}
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

      {!plantas.data ? (
        ""
      ) : (
        <>
          <DivTitlePlanta>
            <Title>Plantas</Title>
          </DivTitlePlanta>
          <Plantas>
            {plantas.data?.map((item) => (
              <OpcaoPlanta>
                <img src={item.planta} alt={item.name} />
                <TitlePlanta>Opção de planta</TitlePlanta>
                <Text>{item.descricao}</Text>
              </OpcaoPlanta>
            ))}
          </Plantas>
        </>
      )}

      <Localizacao>
        <Maps />
        <DetalhesBairro />
      </Localizacao>
    </Container>
  );
};

export default Infos;
