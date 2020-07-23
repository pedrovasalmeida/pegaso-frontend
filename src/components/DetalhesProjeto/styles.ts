import styled from "styled-components";
import { shade } from "polished";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 99vw;
`;

export const Imagem = styled.img`
  height: 700px;
  width: 100%;
  object-fit: cover;
`;

export const Details = styled.div`
  display: flex;
  justify-content: center;
`;

export const Empreendimento = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 16px 0 0 16px;
  margin: 0 0 8px 0;
`;

export const Endereco = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  padding: 16px 0 0 16px;
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 8px 0;
  color: rgba(192, 25, 32, 0.8);
`;

export const Text = styled.span`
  margin: 4px 0;
  font-weight: 300;
`;

export const MoreImages = styled.div`
  position: relative;
  align-self: center;
  width: 66%;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const DivTitlePlanta = styled.div`
  display: flex;
  align-self: center;
  width: 66%;
  margin: 16px 0;

  span {
    color: rgba(192, 25, 32, 1);
    border-bottom: 1px solid ${shade(0.2, `rgba(192, 25, 32, 0.8)`)};
  }
`;

export const Plantas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  flex-wrap: wrap;

  width: 66%;

  background-color: rgba(0, 0, 0, 0.05);

  margin: 8px 0 0 0;
`;

export const OpcaoPlanta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;

  width: 250px;
  height: 400px;
  margin: 8px;

  transition: all 200ms ease-in-out;

  > img {
    margin: 8px 0;
    width: 90%;
    height: 80%;
  }

  span + span {
    font-size: 14px;
  }

  &:hover {
    filter: drop-shadow(0px 8px 16px gray);
    transform: translateY(-4px);
  }
`;

export const TitlePlanta = styled.span`
  color: rgba(192, 25, 32, 0.8);
  font-weight: bold;
  text-transform: uppercase;
`;

export const Localizacao = styled.div`
  display: flex;
  align-self: center;
  width: 66%;

  margin: 8px 0;
`;

export const Maps = styled.div`
  width: 60%;
  height: 500px;

  background-color: rgba(0, 0, 0, 0.2);

  margin: 0 8px 0 0;
`;

export const DetalhesBairro = styled.div`
  width: 40%;
  height: 500px;

  background-color: rgba(0, 0, 0, 0.2);
`;

export const DivCarousel = styled(Carousel)`
  transition: all 400ms ease-in-out;

  margin: 0;
  padding: 0;
`;

export const DivCarouselItem = styled(CarouselItem)`
  height: calc(100vh - 81px);
  transition: all 400ms ease-in-out;
  align-self: center;

  width: 100%;
  height: 500px;

  background-color: #f8f8f8;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media (max-width: 663px) {
      transition: all 300ms ease-in-out;
      object-fit: contain;
    }
  }
`;

export const DivCarouselControl = styled(CarouselControl)`
  display: none;
  background-color: rgba(0, 0, 0, 0.05);
  transition: all 400ms ease-in-out;
`;

export const DivCarouselIndicators = styled(CarouselIndicators)`
  transition: all 400ms ease-in-out;
`;

export const DivCarouselCaption = styled(CarouselCaption)`
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 400ms ease-in-out;
`;

export const LeftArrow = styled(IoIosArrowBack)`
  color: #fff;
  font-size: 32px;

  width: 24px;

  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 8px;

  transition: all 300ms ease-in-out;

  cursor: pointer;

  &:hover {
    color: rgba(192, 25, 32, 1);
  }
`;

export const RightArrow = styled(IoIosArrowForward)`
  color: #fff;
  font-size: 32px;

  width: 24px;

  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 8px;

  transition: all 300ms ease-in-out;

  cursor: pointer;

  &:hover {
    color: rgba(192, 25, 32, 1);
  }
`;

export const FloatDiv = styled.div`
  position: absolute;
  left: 0;
  top: 50%;

  width: 100%;

  padding: 0 16px;

  z-index: 3;

  @media (max-width: 664px) {
    width: 300px;
    height: 101px;

    left: 32px;
    top: 80%;
  }

  @media (max-width: 562px) {
    left: 32px;
    top: 80%;
  }

  @media (max-width: 448px) {
    left: 32px;
    top: 80%;
  }

  @media (max-width: 420px) {
    width: 300px;
    height: 96px;

    left: 32px;
    top: 80%;
  }

  @media (max-width: 414px) {
    width: 300px;
    height: 101px;

    left: 32px;
    top: 80%;
  }

  @media (max-width: 411px) {
    width: 300px;
    height: 101px;

    left: 32px;
    top: 80%;
  }

  @media (max-width: 375px) {
    width: 300px;
    height: 88px;

    left: 32px;
    top: 80%;
  }

  @media (max-width: 360px) {
    width: 300px;
    height: 100px;

    left: 32px;
    top: 80%;
  }

  @media (max-width: 325px) {
    width: 300px;
    height: 100px;

    left: 4px;
    top: 80%;
  }

  @media (max-width: 320px) {
    width: 300px;
    height: 100px;

    left: 8px;
    top: 80%;
  }
`;

export const FloatContent = styled.div`
  display: flex;

  height: 100%;
  flex-direction: column;

  background-color: rgba(0, 0, 0, 0.65);

  > div {
    margin: 16px 16px;
  }

  > div span:first-child {
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-size: 14px;
    color: #fff;
  }

  > div span {
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: #fff;
  }

  > div p {
    margin: 0;
    padding: 0;
    font-size: 32px;
    text-transform: uppercase;
    color: rgba(192, 25, 32, 1);
  }

  @media (max-width: 663px) {
    > div {
      margin: 2px 6px 4px 6px;
    }

    > div span:first-child {
      margin: 0;
      padding: 0;
      text-transform: uppercase;
      font-size: 14px;
      color: #fff;
    }

    > div span {
      margin: 0;
      padding: 0;
      font-size: 14px;

      color: #fff;
    }

    > div p {
      margin: 0;
      padding: 0;
      font-size: 26px;
      text-transform: uppercase;
      color: rgba(192, 25, 32, 1);
    }
  }

  @media (max-width: 414px) {
    > div {
      margin: 2px 6px 4px 6px;
    }

    > div span:first-child {
      margin: 0;
      padding: 0;
      text-transform: uppercase;
      font-size: 14px;
      color: #fff;
    }

    > div span {
      margin: 0;
      padding: 0;
      font-size: 14px;

      color: #fff;
    }

    > div p {
      margin: 0;
      padding: 0;
      font-size: 26px;
      text-transform: uppercase;
      color: rgba(192, 25, 32, 1);
    }
  }

  @media (max-width: 411px) {
    > div {
      margin: 2px 6px 4px 6px;
    }

    > div span:first-child {
      margin: 0;
      padding: 0;
      text-transform: uppercase;
      font-size: 14px;
      color: #fff;
    }

    > div span {
      margin: 0;
      padding: 0;
      font-size: 14px;

      color: #fff;
    }

    > div p {
      margin: 0;
      padding: 0;
      font-size: 26px;
      text-transform: uppercase;
      color: rgba(192, 25, 32, 1);
    }
  }

  @media (max-width: 360px) {
    > div {
      margin: 2px 6px 4px 6px;
    }

    > div span:first-child {
      margin: 0;
      padding: 0;
      text-transform: uppercase;
      font-size: 14px;
      color: #fff;
    }

    > div span {
      margin: 0;
      padding: 0;
      font-size: 14px;

      color: #fff;
    }

    > div p {
      margin: 0;
      padding: 0;
      font-size: 22px;
      text-transform: uppercase;
      color: rgba(192, 25, 32, 1);
    }
  }
`;

export const FloatButton = styled.button`
  width: 100%;

  background-color: rgba(192, 25, 32, 1);

  height: 32px;

  margin: 4px 0 0 0;

  transition: all 300ms ease-in-out;

  &:hover {
    background-color: ${shade(0.4, `rgba(192, 25, 32, 1)`)};
  }

  &:focus {
    outline: 0;
  }

  > span {
    color: #f5f5f5;
  }
`;

export const DivIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
