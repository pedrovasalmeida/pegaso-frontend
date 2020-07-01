import styled from "styled-components";
import { shade } from "polished";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: calc(100vh - 81px);
  max-height: calc(100vh - 81px);

  margin: 81px 0 0 0;
`;

export const Slider = styled.img`
  display: flex;
  flex-shrink: unset;
  height: calc(100vh - 81px);
  max-width: 100%;

  transition: all 200ms ease;
`;

export const FloatDiv = styled.div`
  position: absolute;
  bottom: 64px;
  left: 48px;
  height: 128px;
  width: 400px;
`;

export const FloatContent = styled.div`
  display: flex;

  height: 100%;

  background-color: rgba(0, 0, 0, 0.65);

  padding: 24px 0 0 24px;

  > div span:first-child {
    color: #c1c1c1;
    text-transform: uppercase;
    margin: 0 0 4px 0;
  }

  > div span {
    color: #fff;
    margin: 4px 0 0 0;
  }

  > div p {
    font-size: 32px;
    color: tomato;
    text-transform: uppercase;
  }
`;

export const FloatButton = styled.button`
  margin: 8px 0 0 0;

  width: 100%;

  background-color: #0096d5;

  height: 32px;

  transition: all 300ms ease-in-out;

  &:hover {
    background-color: ${shade(0.4, `#0096d5`)};
  }

  > span {
    color: #f5f5f5;
  }
`;

export const DivIcons = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  margin: 0 8px 0 0;
`;

export const LeftArrow = styled(IoIosArrowBack)`
  color: #fff;
  font-size: 32px;

  width: 24px;

  transition: all 300ms ease-in-out;

  &:hover {
    color: #0096d5;
  }
`;

export const RightArrow = styled(IoIosArrowForward)`
  color: #fff;
  font-size: 32px;

  width: 24px;

  transition: all 300ms ease-in-out;

  &:hover {
    color: #0096d5;
  }
`;
