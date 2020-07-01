import styled from "styled-components";

/** Ícones */
import { FiPlus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

interface Props {
  isVisible?: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  height: 81px;

  background-color: #e1e1e1;
  z-index: 1;
`;

export const DivLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 72px;
  font-size: 32px;

  margin: 0 0 0 32px;
`;

export const DivButtons = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  margin: 0 256px 4px 0;

  transition: all 200ms ease-in-out;

  @media (max-width: 1069px) {
    margin: 0 128px 4px 0;
  }

  @media (max-width: 925px) {
    margin: 0 64px 4px 0;
  }

  @media (max-width: 855px) {
    display: none;
  }
`;

export const Button = styled.button`
  background: none;
  position: relative;

  color: rgba(0, 0, 0, 1);

  border: none;

  border-radius: 10px;
  box-sizing: border-box;

  height: 50px;

  cursor: pointer;

  transition: all 400ms ease-in-out;

  &::before {
    content: "";
    position: absolute;

    left: -1;
    bottom: 0;

    width: 0px;
    height: 4px;

    border-radius: 16px;

    background: rgba(0, 0, 255, 0.9);

    transition: all 300ms ease-in;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    color: rgba(0, 0, 200, 0.7);
  }
`;

export const Separator = styled.div`
  margin: 0 8px 8px 8px;

  width: 1px;
  height: 32px;

  background-color: rgba(0, 0, 0, 0.15);
`;

export const DivMenu = styled.div<Props>`
  display: none;

  align-self: center;

  cursor: pointer;

  margin: 0 16px 0 0;

  height: 48px;
  width: 88px;

  transition: all 400ms ease-in-out;

  > span {
    transition: all 400ms ease;

    font-size: 20px;
  }

  @media (max-width: 855px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > svg {
    ${(props) => (props.isVisible ? "transform: rotate(45deg);" : "")}
  }
`;

export const MenuIcon = styled(FiPlus)`
  font-size: 32px;

  margin: 0 0 0 8px;

  transition: all 200ms ease-in-out;
`;

export const HiddenMenu = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: absolute;
  top: ${(props) => (props.isVisible ? "81px" : "-50%")};
  left: 0;

  height: auto;
  width: 100%;

  background-color: #e1e1e1;

  transition: all 300ms ease-in-out;

  > button {
    margin: 0 0 0 32px;
  }
`;

export const HorizontalSeparator = styled.div`
  height: 1px;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.2);
`;
