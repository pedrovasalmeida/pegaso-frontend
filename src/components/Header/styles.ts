import styled from "styled-components";
import { Link } from "react-router-dom";

/** Ícones */
import { FiPlus } from "react-icons/fi";
import { MdEmail, MdPhone } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiHelpCircle } from "react-icons/fi";

interface Props {
  isVisible?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-around;

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 140px;

  background-color: #fdfdfd;
  z-index: 40;

  transition: all 300ms ease-in-out;
`;

export const DivLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 0 0 64px;

  > span {
    height: 100%;
    width: 150px;
  }

  @media (max-width: 1084px) {
    margin: 0 8px 0 0;
  }

  @media (max-width: 360px) {
    > img {
      position: absolute;
      left: 0;
      top: 48px;
      width: 100px;
      height: 100px;
      margin: 0 0 0 16px;
    }
  }
  @media (max-width: 411px) {
    > img {
      position: absolute;
      left: 0;
      top: 18px;
      width: 150px;
      height: 150px;
      margin: 0 0 0 16px;
    }
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  margin: 8px 0 0 0;
`;

export const DivAllContacts = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  width: 88%;
  height: 56px;

  @media (max-width: 1069px) {
    width: 10%;

    > div div {
      display: none;
    }
  }
`;

export const DivContato = styled.div`
  display: flex;

  align-items: center;

  border-bottom: 3px solid rgba(0, 200, 255, 0.8);

  background-color: rgba(0, 0, 0, 0.025);

  border-radius: 8px;

  transition: all 300ms ease-in-out;

  cursor: pointer;

  &:hover {
    transition: all 300ms ease-in-out;

    border-bottom: 3px solid rgba(0, 100, 255, 0.8);
    background-color: rgba(0, 0, 0, 0.05);

    > svg {
      transition: all 300ms ease-in-out;

      color: rgba(0, 0, 0, 1);
    }

    > div span {
      transition: all 300ms ease-in-out;

      color: rgba(0, 0, 0, 1);
    }
    > div p {
      transition: all 300ms ease-in-out;

      color: rgba(0, 0, 0, 1);
    }
  }

  @media (max-width: 1069px) {
    margin: 0 24px 0 0;
  }
`;

export const DivDados = styled.div`
  transition: all 300ms ease-in-out;

  > span {
    transition: all 300ms ease-in-out;

    font-size: 12px;
    text-transform: uppercase;
    margin: 0;

    color: rgba(0, 0, 0, 0.5);
  }

  > p {
    transition: all 300ms ease-in-out;

    line-height: 16px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const DivButtons = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: stretch;

  margin: 0 256px 4px 0;

  transition: all 200ms ease-in-out;

  @media (max-width: 1275px) {
    margin: 0 128px 4px 0;
  }

  @media (max-width: 1069px) {
    margin: 0 64px 4px 0;
  }

  @media (max-width: 925px) {
    margin: 0 32px 4px 0;
  }

  @media (max-width: 897px) {
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

    background: rgba(0, 100, 255, 0.6);

    transition: all 300ms ease-in;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    color: rgba(0, 100, 255, 0.6);
  }

  &:focus {
    outline: 0;
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

  position: absolute;
  right: 24px;
  top: 80px;

  cursor: pointer;

  margin: 0 16px 0 0;

  height: 48px;
  width: 88px;

  transition: all 400ms ease-in-out;

  > span {
    transition: all 400ms ease;

    font-size: 20px;
  }

  @media (max-width: 897px) {
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
  top: ${(props) => (props.isVisible ? "140px" : "-50%")};
  left: 0;

  height: auto;
  width: 100%;

  background-color: #fdfdfd;

  transition: all 300ms ease-in-out;

  z-index: 39;
`;

export const LinkRRD = styled(Link)`
  > button {
    margin: 0 0 0 16px;
  }
`;

export const HorizontalSeparator = styled.div`
  height: 1px;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.1);
`;

export const EmailIcon = styled(MdEmail)`
  font-size: 32px;

  color: rgba(0, 0, 0, 0.5);

  margin: 0 8px;
  transition: all 300ms ease-in-out;
`;

export const WhatsAppIcon = styled(IoLogoWhatsapp)`
  font-size: 32px;

  color: rgba(0, 0, 0, 0.5);

  margin: 0 8px;
  transition: all 300ms ease-in-out;
`;

export const SacIcon = styled(FiHelpCircle)`
  font-size: 32px;

  color: rgba(0, 0, 0, 0.5);

  margin: 0 8px;
  transition: all 300ms ease-in-out;
`;

export const PhoneIcon = styled(MdPhone)`
  font-size: 32px;

  color: rgba(0, 0, 0, 0.5);

  margin: 0 8px;
  transition: all 300ms ease-in-out;
`;
