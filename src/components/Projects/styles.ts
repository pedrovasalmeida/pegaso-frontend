import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
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

  align-self: flex-end;

  width: auto;
`;

export const Subtitle = styled.span`
  width: auto;
  border-bottom: 8px solid #324286;

  margin: 0 0 32px 0;

  font-size: 40px;
  font-weight: bold;

  color: #333;

  text-transform: uppercase;
`;

export const DivProjects = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  height: auto;
`;

export const Project = styled(motion.div)`
  display: flex;
  width: 1220px;
  height: 250px;
  position: relative;

  background-color: ${shade(0.1, `#324286`)};

  border-radius: 16px;

  margin: 0 0 24px 0;
  padding: 4px;

  @media (max-width: 1393px) {
    width: 1120px;
    height: 300px;
  }

  @media (max-width: 1285px) {
    width: 1020px;
    height: 300px;
  }

  @media (max-width: 1159px) {
    width: 920px;
    height: 300px;
  }

  @media (max-width: 1053px) {
    width: 700px;
    height: 200px;
  }
  @media (max-width: 735px) {
    width: 500px;
    height: 200px;
  }

  @media (max-width: 603px) {
    width: 400px;
    height: 200px;
  }

  @media (max-width: 414px) {
    width: 395px;
    height: 200px;
  }

  @media (max-width: 411px) {
    width: 390px;
    height: 200px;
  }

  @media (max-width: 375px) {
    width: 350px;
    height: 200px;
  }

  @media (max-width: 360px) {
    width: 340px;
    height: 200px;
  }

  @media (max-width: 320px) {
    width: 300px;
    height: 200px;
  }
`;

export const ExternalImage = styled.div`
  width: 189px;
  height: 100%;

  margin: 0 6px 0 0;

  > img {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`;

export const FullImage = styled.div`
  width: 100%;
  height: 100%;

  > img {
    width: 100%;
    object-fit: cover;
    height: 100%;

    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`;

export const FloatDiv = styled(motion.div)`
  position: absolute;
  right: 16px;
  top: 48%;

  height: 72px;
  width: 324px;

  z-index: 2;

  @media (max-width: 1393px) {
    right: 16px;
    top: 40%;

    height: 70px;
    width: 294px;
  }

  @media (max-width: 1285px) {
    right: 16px;
    top: 40%;

    height: 70px;
    width: 294px;
  }

  @media (max-width: 1159px) {
    right: 16px;
    top: 40%;

    height: 70px;
    width: 294px;
  }

  @media (max-width: 1053px) {
    right: 16px;
    top: 40%;

    height: 70px;
    width: 294px;
  }

  @media (max-width: 414px) {
    display: none;
  }

  @media (max-width: 411px) {
    display: none;
  }

  @media (max-width: 375px) {
    display: none;
  }

  @media (max-width: 360px) {
    display: none;
  }

  @media (max-width: 320px) {
    display: none;
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
    margin: 4px 0 0 8px;
  }

  > div span {
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: #fff;
  }

  > div p {
    margin: 0;
    padding: 0;
    font-size: 24px;
    text-transform: uppercase;
    color: #324286;
    font-weight: 500;
  }

  @media (max-width: 1053px) {
    > div span {
      margin: 0;
      padding: 0;
      font-size: 10px;
      color: #fff;
    }

    > div p {
      margin: 0;
      padding: 0;
      line-height: 20px;
      font-size: 24px;
      text-transform: uppercase;
      color: #324286;
    }
  }
`;

export const FloatButton = styled.button`
  width: 100%;
  height: 32px;

  background-color: #324286;

  margin: 4px 0 0 0;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  transition: background-color 300ms ease;
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
