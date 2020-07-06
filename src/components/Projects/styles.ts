import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 98vw;

  margin: 8px 0 0 16px;
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
`;

export const ExternalImage = styled.div`
  width: 189px;
  height: 100%;

  background-color: red;

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

  background-color: blue;

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

  height: 100px;
  width: 324px;

  z-index: 2;
`;

export const FloatContent = styled.div`
  display: flex;

  height: 100%;
  flex-direction: column;

  background-color: rgba(0, 0, 0, 0.65);

  > div {
    margin: 4px 0 0 8px;
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
