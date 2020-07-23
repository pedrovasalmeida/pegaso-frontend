import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 99vw;

  padding: 0 0 0 16px;
`;

export const DivInfos = styled.div`
  display: flex;
  flex-direction: column;

  width: 75vw;
  height: auto;
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: column;

  width: auto;
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: bold;

  margin: 8px 0 4px 0;

  text-transform: uppercase;
`;

export const Subtitle = styled.span`
  font-size: 24px;

  text-transform: uppercase;
  font-weight: bold;

  color: rgba(192, 25, 32, 1);

  margin: 0 0 8px 0;
`;

export const DivProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 95%;
`;

export const Project = styled.div`
  display: flex;
  width: 1220px;
  height: 300px;
  position: relative;

  background-color: rgba(0, 0, 0, 0.4);

  margin: 0 0 8px 0;

  padding: 4px;

  transition: all 200ms ease-in-out;

  cursor: pointer;

  &:hover {
    transition: all 200ms ease-in-out;
    transform: translateX(8px);
    filter: drop-shadow(0px 8px 8px gray);
  }

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
  }
`;

export const FloatDiv = styled.div`
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
    color: rgba(192, 25, 32, 1);
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
