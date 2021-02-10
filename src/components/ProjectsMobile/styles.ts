import styled from 'styled-components';
import { lighten, shade } from 'polished';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

interface FullImageProps {
  width: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: auto;

  padding-top: 70px;
`;

export const LinkRRD = styled(Link)``;

export const DivInfos = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: auto;
`;

export const DivTitle = styled(motion.div)`
  display: flex;
  flex-direction: column;

  margin: 0 0 0 16px;

  align-self: center;
`;

export const Subtitle = styled.span`
  position: relative;
  width: auto;

  padding-top: 10px;
  margin-bottom: 40px;

  font-size: 30px;
  font-weight: bold;

  color: #333;

  cursor: default;

  text-transform: uppercase;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;

    width: 100%;
    height: 4px;

    background: ${p => p.theme.colors.light.lightBlue};
    border-radius: 2px;

    margin: auto;

    transition: all 400ms ease;

    transform: scaleX(0.3);
  }

  &:hover::after {
    transform: scaleX(1);
    left: 0;
  }

  @media only screen and (max-width: 458px) {
    font-size: 24px;

    &::after,
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;

      width: 100%;
      height: 4px;

      background: ${p => p.theme.colors.light.lightBlue};
      border-radius: 2px;

      margin: auto;

      transition: all 400ms ease;

      transform: scaleX(0.3);
    }

    &::after {
      bottom: 35px;

      transform: scaleX(0);
      transform-origin: left;
    }

    &:hover::after {
      width: 40%;

      transform: scaleX(1);
      left: 0;
    }

    &:hover::before {
      transform: scaleX(1);
      left: 0;
    }
  }
`;

export const ErrorMessage = styled.span`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: #333;
`;

export const DivProjects = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 0 80px 0;

  height: auto;
`;

export const Project = styled(motion.div)`
  display: flex;

  width: 80vw;
  height: 250px;

  position: relative;

  background-color: ${props => shade(0.1, props.theme.colors.light.darkBlue)};

  border-radius: 4px;

  margin-bottom: 24px;
  padding: 3px;
`;

export const ExternalImage = styled.div`
  width: 189px;
  height: 100%;

  margin: 0 6px 0 0;

  > img {
    border-radius: 4px;
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`;

export const FullImage = styled.div<FullImageProps>`
  width: 100%;
  height: 100%;

  > img {
    width: 100%;
    object-fit: cover;
    height: 100%;

    border-radius: 4px;
  }
`;

export const FloatDiv = styled(motion.div)`
  position: absolute;
  right: 16px;
  top: 48%;

  height: 72px;
  width: 324px;

  z-index: 2;

  @media only screen and (max-width: 585px) {
    display: none;
  }
`;

export const FloatContent = styled.div`
  display: flex;

  height: 100%;
  flex-direction: column;

  background-color: rgba(0, 0, 0, 0.55);

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  > div {
    margin: 4px 0 0 8px;
  }

  > div span {
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: #fff;
  }

  > div p {
    overflow-x: hidden;
    text-overflow: ellipsis;

    margin: 0;
    padding: 0;

    font-size: 24px;
    text-transform: uppercase;

    color: ${props => lighten(0.1, props.theme.colors.light.lightBlue)};
    font-weight: 500;
  }
`;

export const FloatButton = styled.button`
  width: 100%;
  height: 32px;

  background-color: ${props => props.theme.colors.light.lightBlue};

  margin-top: 4px;

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  transition: background-color 300ms ease;
  &:hover {
    background-color: ${props => shade(0.4, props.theme.colors.light.lightBlue)};
  }

  &:focus {
    outline: 0;
  }

  > span {
    color: #f5f5f5;
  }
`;

export const FloatDivMobile = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  height: 70px;

  line-height: 20px;

  text-align: center;

  border-bottom: 2px solid ${props => props.theme.colors.light.lightBlue};
  border-left: 2px solid ${props => props.theme.colors.light.lightBlue};
  border-right: 2px solid ${props => props.theme.colors.light.lightBlue};

  background: rgba(0, 0, 0, 0.55);

  z-index: 2;

  > p {
    font-size: 16px;
    font-weight: bold;

    margin-top: 5px;
    margin-bottom: 0;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    color: #fff;

    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #000;

    @media only screen and (max-width: 490px) {
      margin-left: 6px;
    }
  }

  > p + p {
    font-size: 26px;
    font-weight: bold;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    color: ${props => lighten(0.15, props.theme.colors.light.lightBlue)};

    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #000;

    @media only screen and (max-width: 490px) {
      font-size: 23px;
      margin-left: 6px;
    }
  }
`;
