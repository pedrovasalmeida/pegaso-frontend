import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 64px;

  overflow: hidden;

  max-width: 100vw;
  height: auto;
  max-height: calc(100vh - 104px);

  @media only screen and (min-width: 1024px) {
    height: calc(100vh - 104px);
  }
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
  position: relative;

  width: 100vw;
  max-height: 1080px;

  margin-bottom: 50px;

  img {
    object-fit: contain;
    object-position: center center;
    height: 100%;
    cursor: pointer;
  }

  @media only screen and (max-height: 721px) {
    max-height: 100%;

    img {
      height: 100%;
    }
  }

  @media only screen and (max-height: 523px) {
    max-height: 300px;

    img {
      height: 300px;
    }
  }

  @media only screen and (max-width: 477px) {
    max-height: 400px;

    img {
      height: 400px;
    }
  }
  @media only screen and (max-width: 365px) {
    max-height: 300px;

    img {
      height: 300px;
    }
  }
`;

export const MyLink = styled(Link)``;
