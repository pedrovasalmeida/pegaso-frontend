import React, { useState } from "react";
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
} from "./styles";

const MyCarousel = () => {
  const items = [
    {
      src:
        "https://i.pinimg.com/originals/c0/e0/fb/c0e0fbd3ebbd368d5b83e69c61873802.jpg",
      altText: "Grand Village",
      caption: "Pronto para morar",
      comodos: "Quarto e sala",
    },
    {
      src:
        "https://i1.wp.com/livewallpaper.info//wp-content/uploads/2016/12/1920x1080-wallpaper-High-Resolution-Download3.jpg?ssl=1",
      altText: "LIV",
      caption: "Pronto para morar",
      comodos: "Apartamento completo",
    },
    {
      src: "https://i.redd.it/u105ro5rg8o31.jpg",
      altText: "Tuin",
      caption: "Pronto para morar",
      comodos: "Quarto e sala",
    },
    {
      src:
        "https://wallpaperhd.wiki/wp-content/uploads/wallpapers-1920x1080-bird-silhouette-vector-134154-1920x1080.jpg",
      altText: "Hadouken",
      caption: "Pronto para morar",
      comodos: "Galpão",
    },
    {
      src:
        "https://i.pinimg.com/originals/8c/c3/d3/8cc3d3b0c19f5ad94cab32de42086688.jpg",
      altText: "Kamehamehaaaa",
      caption: "Em construção",
      comodos: "Empresarial",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <DivCarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
      </DivCarouselItem>
    );
  });

  return (
    <Container>
      <FloatDiv>
        <FloatContent>
          <div>
            <span>{items[activeIndex].caption}</span>
            <p>{items[activeIndex].altText}</p>
            <span>{items[activeIndex].comodos}</span>
          </div>
          <DivIcons>
            <LeftArrow onClick={() => previous()} />
            <RightArrow onClick={() => next()} />
          </DivIcons>
        </FloatContent>
        {/* <FloatButton>
          <span>Clique aqui para conferir</span>
        </FloatButton> */}
      </FloatDiv>

      <DivCarousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        ride={"carousel"}
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

{
  /* <Teste id="slider">
        <img
          className="selected"
          id={String(places[0].id)}
          src={places[0].url}
          alt="imagem"
        />

        <img id={String(places[1].id)} src={places[1].url} alt="imagem" />

        <img id={String(places[2].id)} src={places[2].url} alt="imagem" />

        <img id={String(places[3].id)} src={places[3].url} alt="imagem" />

        <img id={String(places[4].id)} src={places[4].url} alt="imagem" />
      </Teste> */
}

{
  /* <MyCarousel accessibility {...settings}>
        <div>
          <img src={places[0].url} alt="imagem" />
        </div>
        <div>
          <img src={places[1].url} alt="imagem" />
        </div>
        <div>
          <img src={places[2].url} alt="imagem" />
        </div>
        <div>
          <img src={places[3].url} alt="imagem" />
        </div>
        <div>
          <img src={places[4].url} alt="imagem" />
        </div>
      </MyCarousel> */
}
