import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: auto;

  padding-top: 80px;
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

  align-self: center;

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
  align-items: center;
  align-self: center;

  width: 80vw;
`;

export const Project = styled(motion.div)`
  position: relative;

  display: flex;

  width: 70vw;
  height: 250px;

  background-color: ${shade(0.1, `#324286`)};
  border-radius: 16px;

  margin: 0 0 12px 0;
  padding: 4px;
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
    width: 100%;

    overflow-x: hidden;
    text-overflow: ellipsis;

    margin: 0;
    padding: 0;

    font-size: 24px;

    text-transform: uppercase;

    color: #324286;

    font-weight: 500;
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

export const TestProject = styled.div`
  display: flex;

  width: 60%;
  height: 250px;

  background-color: ${shade(0.1, `#324286`)};
  border-radius: 16px;
`;
