import styled from 'styled-components';
import { lighten, shade } from 'polished';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { BiArrowBack } from 'react-icons/bi';

interface EmpImageProps {
  src?: string;
}

interface IContainerProps {
  sliding: number;
  dir: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 99vw;
  width: 100vw;

  overflow-x: hidden;
  overflow-y: hidden;

  padding-top: 64px;

  div.no-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 200px;
    width: 100%;

    span {
      color: ${p => shade(0.3, p.theme.colors.light.lightBlue)};
      font-size: 18px;

      text-align: center;
    }
  }
`;

interface BackgroundProps {
  url: string;
}

export const DivImagemTipo = styled.div<BackgroundProps>`
  position: relative;

  height: calc(100vh - 200px);
  margin-top: 1px;
  margin-bottom: 10px;

  background: url(${p => p.url}) no-repeat center;
  background-size: contain;

  @media only screen and (min-width: 300px) {
    height: 60vh;
    width: 100vw;
    margin-top: 5px;
    margin-left: 1px;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 5px;
  }
`;

export const BackButton = styled.button`
  position: fixed;
  top: 100px;
  left: 5vw;

  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;

  padding: 2px 10px;

  cursor: pointer;
  background-color: #fdfdfd;
  border-radius: 4px;

  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.4));

  transition: all 300ms ease;
  z-index: 10;
  span {
    font-weight: bold;
    font-size: 18px;
  }

  &:hover {
    background-color: ${props => lighten(0.05, props.theme.colors.light.lightBlue)};
    color: #f2f2f2;
  }

  @media only screen and (max-width: 800px) {
    padding: 1px 6px;

    span {
      font-size: 14px;
    }
  }
`;

export const BackIcon = styled(BiArrowBack)`
  font-size: 20px;

  margin: 0 5px;
  margin-left: 0px;
`;

export const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.05);

  @media only screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  width: 45vw;
  min-height: 300px;

  margin-top: 10px;

  padding: 0 15px;

  text-align: justify;

  @media only screen and (max-width: 1100px) {
    width: 90vw;
    min-height: 200px;

    margin-bottom: 10px;
  }
`;

export const Title = styled.span`
  position: relative;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;

  min-width: 220px;
  width: auto;

  margin-bottom: 8px;
  color: ${props => props.theme.colors.light.lightBlue};

  cursor: default;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 2px;

    background: ${p => shade(0.3, p.theme.colors.light.lightBlue)};
    border-radius: 2px;
    margin: auto;

    transition: all 400ms ease-in-out;

    transform-origin: left;
    transform: scaleX(0.05);
    opacity: 0.6;
  }

  &:hover::after {
    transform: scaleX(0.6);
    left: 0;
    opacity: 1;
  }
`;

export const Text = styled.span`
  margin: 4px 0;
  font-weight: 300;
`;

export const MoreImages = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  margin-bottom: 60px;

  span {
    font-size: 14px;
    font-weight: bold;

    margin: 5px 0;
  }
`;

export const MyCarousel = styled(Slider)`
  position: relative;

  width: 100vw;
  max-height: 600px;

  margin-bottom: 50px;

  img {
    object-fit: contain;
    object-position: center center;
    height: 600px;
  }

  @media only screen and (max-height: 721px) {
    max-height: 400px;

    img {
      height: 400px;
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

export const CarouselContainer = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 100vw;
  width: 100vw;

  overflow: hidden;

  cursor: grab;

  transition: transform 1s ease;

  transform: ${props =>
    props.sliding ? `translateX(calc(-100vw * ${props.sliding}))` : `translateX(0%)`};
`;

export const Imagem = styled.img`
  height: 20rem;
`;

export const FloatDiv = styled.div`
  position: absolute;
  left: 48px;
  bottom: 144px;

  height: 128px;
  width: 400px;

  z-index: 3;

  @media (max-width: 664px) {
    width: 300px;
    height: 101px;

    left: 32px;
    top: 60%;
  }

  @media (max-width: 562px) {
    left: 32px;
    top: 60%;
  }

  @media (max-width: 448px) {
    left: 32px;
    top: 60%;
  }

  @media (max-width: 420px) {
    width: 300px;
    height: 96px;

    left: 32px;
    top: 60%;
  }

  @media (max-width: 414px) {
    width: 300px;
    height: 101px;

    left: 32px;
    top: 60%;
  }

  @media (max-width: 411px) {
    width: 300px;
    height: 101px;

    left: 32px;
    top: 60%;
  }

  @media (max-width: 375px) {
    width: 300px;
    height: 88px;

    left: 32px;
    top: 60%;
  }

  @media (max-width: 360px) {
    width: 300px;
    height: 100px;

    left: 32px;
    top: 60%;
  }

  @media (max-width: 325px) {
    width: 300px;
    height: 100px;

    left: 4px;
    top: 60%;
  }

  @media (max-width: 320px) {
    width: 300px;
    height: 100px;

    left: 8px;
    top: 60%;
  }
`;

export const FloatContent = styled.div`
  display: flex;

  height: 100%;
  flex-direction: column;

  background-color: rgba(0, 0, 0, 0.65);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

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
    text-shadow: 0px 0px 2px black;
  }

  > div p {
    margin: 0;
    padding: 0;
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${props => lighten(0.1, props.theme.colors.light.lightBlue)};
    text-shadow: 0px 0px 1px ${props => shade(0.6, props.theme.colors.light.lightBlue)};
  }

  @media (max-width: 663px) {
    > div {
      margin: 2px 6px 4px 6px;
    }

    > div span:first-child {
      font-size: 14px;
    }

    > div span {
      font-size: 14px;
    }

    > div p {
      font-size: 26px;
    }
  }

  @media (max-width: 414px) {
    > div {
      margin: 2px 6px 4px 6px;
    }

    > div span:first-child {
      font-size: 14px;
    }

    > div span {
      font-size: 14px;
    }

    > div p {
      font-size: 26px;
    }
  }

  @media (max-width: 411px) {
    > div {
      margin: 2px 6px 4px 6px;
    }

    > div span:first-child {
      font-size: 14px;
    }

    > div span {
      font-size: 14px;
    }

    > div p {
      font-size: 26px;
    }
  }

  @media (max-width: 360px) {
    > div {
      margin: 2px 6px 4px 6px;
    }

    > div span:first-child {
      font-size: 14px;
    }

    > div span {
      font-size: 14px;
    }

    > div p {
      font-size: 22px;
    }
  }
`;

export const FloatButton = styled.button`
  width: 100%;
  height: 32px;

  background-color: ${props => props.theme.colors.light.lightBlue};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  margin: 4px 0 0 0;

  transition: all 300ms ease-in-out;

  &:hover {
    background-color: ${shade(0.4, `#324286`)};
  }

  &:focus {
    outline: 0;
  }

  > span {
    color: #f5f5f5;
  }
`;

export const DivIcons = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const LeftArrow = styled(IoIosArrowBack)`
  position: absolute;
  left: 2px;
  width: 30px;
  min-height: 100px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);

  font-size: 32px;
  cursor: pointer;

  z-index: 10;
  transition: all 300ms ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

export const RightArrow = styled(IoIosArrowForward)`
  position: absolute;
  right: 2px;
  width: 30px;
  min-height: 100px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);

  font-size: 32px;
  cursor: pointer;

  z-index: 10;
  transition: all 300ms ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;
