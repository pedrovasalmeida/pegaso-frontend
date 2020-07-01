import React, { useState } from "react";

import {
  Container,
  Slider,
  FloatDiv,
  FloatContent,
  FloatButton,
  LeftArrow,
  RightArrow,
  DivIcons,
} from "./styles";

const Body: React.FC = () => {
  const places = [
    {
      id: 1,
      url:
        "https://i.pinimg.com/originals/c0/e0/fb/c0e0fbd3ebbd368d5b83e69c61873802.jpg",
    },
    {
      id: 2,
      url:
        "https://i1.wp.com/livewallpaper.info//wp-content/uploads/2016/12/1920x1080-wallpaper-High-Resolution-Download3.jpg?ssl=1",
    },
    {
      id: 3,
      url: "https://i.redd.it/u105ro5rg8o31.jpg",
    },
    {
      id: 4,
      url:
        "https://wallpaperhd.wiki/wp-content/uploads/wallpapers-1920x1080-bird-silhouette-vector-134154-1920x1080.jpg",
    },
    {
      id: 5,
      url:
        "https://i.pinimg.com/originals/8c/c3/d3/8cc3d3b0c19f5ad94cab32de42086688.jpg",
    },
  ];
  const [positionSlider, setPositionSlider] = useState(1);

  const addPos = () => {
    if (positionSlider === places.length)
      return setPositionSlider(places.length);
    setPositionSlider(positionSlider + 1);
  };

  const decPos = () => {
    if (positionSlider < 2) return setPositionSlider(1);
    setPositionSlider(positionSlider - 1);
  };

  let i = 0;
  return (
    <Container>
      <FloatDiv>
        <FloatContent>
          {}
          <div>
            <span>Pronto para morar</span>
            <p>Título {positionSlider}</p>
            <span>Cômodos</span>
          </div>
          <DivIcons>
            <LeftArrow onClick={() => decPos()} />
            <RightArrow onClick={() => addPos()} />
          </DivIcons>
        </FloatContent>
        <FloatButton>
          <span>Clique aqui para conferir</span>
        </FloatButton>
      </FloatDiv>
      <Slider src={places[positionSlider - 1].url} alt="Poster" />
    </Container>
  );
};

export default Body;
