import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 65px;

  overflow: hidden;

  max-width: 100vw;
  height: auto;
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
  height: 100%;
  max-height: 100vh;

  margin-bottom: 50px;

  img {
    cursor: pointer;
    object-fit: contain;
    aspect-ratio: 16/9;
    height: 100%;
  }

  @media only screen and (min-width: 800px) {
    img {
      aspect-ratio: 16/9;
    }
  }
`;

export const MyLink = styled(Link)``;
