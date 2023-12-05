import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 65px;

  position: relative;

  overflow: hidden;

  max-width: 100vw;
  height: calc(100vh - 104px);
  max-height: calc(100vh - 104px);
`;

export const Imagem = styled.img`
  max-height: calc(100vh - 104px);
  object-fit: cover;

  cursor: pointer;

  @media only screen and (min-width: 1500px) {
    object-fit: contain;
  }

  @media only screen and (max-width: 1122px) {
    object-fit: fill;
  }
`;

export const MyCarousel = styled(Slider)`
  display: block;
  position: relative;

  width: 100vw;
  height: calc(100vh - 104px);
  max-height: calc(100vh - 104px);

  img {
    cursor: pointer;
    object-fit: contain;
    aspect-ratio: 9/16;
    width: 100%;
  }

  @media only screen and (min-width: 800px) {    
    img {
      cursor: pointer;
      aspect-ratio: 16/9;
      height: calc(100vh - 104px);
    }
  }

  @media only screen and (min-width: 1920px) {    
    img {
      cursor: pointer;
      object-fit: contain;
      aspect-ratio: 16/9;
      width: 100vw;
      height: calc(100vh - 104px);
    }
  }
`;

export const MyLink = styled(Link)``;
