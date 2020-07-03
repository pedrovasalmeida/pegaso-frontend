import styled from "styled-components";
import { MdEmail, MdPhone } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiHelpCircle } from "react-icons/fi";

export const Container = styled.footer`
  position: fixed;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 56px;

  background-color: #515151;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 16px;

    height: 100%;
    width: 200px;
    padding: 0 16px 0 0;

    border-bottom: 3px solid rgba(0, 200, 255, 0.6);

    transition: all 300ms ease-in-out;

    cursor: pointer;

    &:hover {
      border-bottom: 3px solid rgba(0, 100, 255, 0.6);
    }
  }

  > div div {
    width: 80%;
  }

  > div span {
    font-size: 12px;
    text-transform: uppercase;
    color: #f5f5f5;
  }

  > div p {
    font-size: 14px;
    color: #f5f5f5;
  }

  > div p:not():first-child {
    font-size: 14px;
    color: #f5f5f5;
  }

  @media (max-width: 840px) {
    max-width: auto;
    max-height: auto;

    > div {
      max-width: auto;
      max-height: auto;
      font-size: auto;
    }

    > div span {
      font-size: 10px;
      text-transform: uppercase;
      color: #f5f5f5;
    }

    > div p {
      font-size: 14px;
      color: #f5f5f5;
    }
  }

  @media (max-width: 773px) {
    > div {
      margin: 0;
    }
  }

  @media (max-width: 712px) {
    > div span {
      font-size: 8px;
      text-transform: uppercase;
      color: #f5f5f5;
    }

    > div p {
      font-size: 8px;
      color: #f5f5f5;
    }
  }

  @media (max-width: 562px) {
    display: flex;
    flex-direction: column;
    height: 200px;

    > div {
      height: 50px;
    }

    > div svg {
      font-size: 24px;
    }
  }

  @media (max-width: 514px) {
    > div {
      margin: 0;
    }
  }

  @media (max-width: 434px) {
    display: flex;
    flex-direction: column;
    height: 224px;
  }

  @media (max-width: 414px) {
    display: flex;
    flex-direction: column;
    height: 188px;

    > div {
      height: 48px;
    }

    > div div {
      height: 42px;
    }
  }

  @media (max-width: 411px) {
    display: flex;
    flex-direction: column;
    height: 172px;

    > div {
      height: 42px;
    }

    > div div {
      height: 48px;
    }
  }

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    height: 172px;

    > div div {
      height: 40px;
    }
  }

  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    height: 148px;

    > div {
      height: 37px;

      border-bottom: 2px solid rgba(0, 200, 255, 0.6);

      &:hover {
        border-bottom: 2px solid rgba(0, 100, 255, 0.6);
      }
    }

    > div div {
      height: 40px;
    }
  }
`;

export const EmailIcon = styled(MdEmail)`
  align-self: center;
  justify-self: flex-start;

  font-size: 32px;
  width: 30%;

  color: #f5f5f5;

  margin: 0 4px 0 0;
`;

export const WhatsAppIcon = styled(IoLogoWhatsapp)`
  align-self: center;
  justify-self: flex-start;

  font-size: 32px;
  width: 30%;

  color: #f5f5f5;

  margin: 0 4px 0 0;
`;

export const SacIcon = styled(FiHelpCircle)`
  align-self: center;
  justify-self: flex-start;

  font-size: 32px;
  width: 30%;

  color: #f5f5f5;

  margin: 0 4px 0 0;
`;

export const PhoneIcon = styled(MdPhone)`
  align-self: center;
  justify-self: flex-start;

  font-size: 32px;
  width: 30%;

  color: #f5f5f5;

  margin: 0 4px 0 0;
`;
