import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

/** Ícones */
import { FiPlus } from 'react-icons/fi';
import { MdEmail, MdPhone } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FiHelpCircle } from 'react-icons/fi';

import { motion } from 'framer-motion';

interface Props {
  isVisible?: boolean;
}

interface RouterProps {
  selected?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 64px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fdfdfd;

  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.2));

  z-index: 40;

  transition: all 300ms ease-in-out;
`;

export const DivLogo = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    z-index: 6;
  }
`;

export const DivAllContacts = styled.div`
  display: flex;

  align-items: center;

  width: 88%;
  height: 56px;
`;

export const DivContato = styled.div`
  display: flex;

  border-radius: 8px;
  border-bottom: 3px solid #324286;

  padding: 4px 8px;

  background-color: rgba(150, 150, 150, 0.025);

  margin: 0 24px 0 0;

  transition: all 300ms ease-in-out;

  cursor: pointer;

  &:hover {
    transition: all 300ms ease-in-out;

    border-bottom: 3px solid ${shade(0.3, `#324286`)};
    background-color: rgba(150, 150, 150, 0.1);

    transform: translateX(8px);

    filter: drop-shadow(0px 0px 16px rgba(150, 150, 150, 0.1));

    > svg {
      transition: all 300ms ease-in-out;
    }

    > div span {
      transition: all 300ms ease-in-out;
    }
    > div p {
      transition: all 300ms ease-in-out;
    }
  }

  /* @media (max-width: 1069px) {
    margin: 0 24px 0 0;
  } */
`;

export const DivDados = styled.div`
  transition: all 300ms ease-in-out;

  > span {
    transition: all 300ms ease-in-out;

    font-size: 12px;
    text-transform: uppercase;
    margin: 0;

    color: #d0c8cb;
  }

  > p {
    transition: all 300ms ease-in-out;

    line-height: 16px;
    font-size: 14px;
    color: #d0c8cb;
  }
`;

export const Button = styled.button<RouterProps>`
  background-color: transparent;

  color: ${(props) => (props.selected ? '#324286' : '#333')};

  font-weight: 500;

  transition: all 300ms ease-in-out;

  &:focus {
    outline: 0;
    text-decoration: none;
    transition: all 300ms ease-in-out;
  }

  &:hover {
    transition: all 300ms ease-in-out;
    color: #324286;
  }
`;

export const DivMenu = styled.div<Props>`
  display: flex;

  position: absolute;
  right: 0;
  top: 2vh;

  cursor: pointer;

  margin: 0 16px 0 0;

  height: 48px;
  width: 88px;

  transition: all 400ms ease-in-out;

  > span {
    transition: all 400ms ease;

    font-size: 20px;
  }

  > svg {
    ${(props) => (props.isVisible ? 'transform: rotate(45deg);' : '')}
  }

  z-index: 16;
`;

export const MenuIcon = styled(FiPlus)`
  font-size: 32px;

  margin: 0 0 0 8px;

  transition: all 200ms ease-in-out;
`;

export const HiddenMenu = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  position: fixed;

  top: ${(props) => (props.isVisible ? '64px' : '-50%')};
  left: 0;

  height: auto;
  width: 100%;

  background-color: #fdfdfd;

  transition: all 300ms ease-in-out;

  z-index: 39;
`;

export const LinkRRDHiddenMenu = styled(Link)<RouterProps>`
  position: relative;
  background: none;

  color: #fdfdfd;

  border: none;
  box-sizing: border-box;

  height: auto;

  margin: 8px 8px;

  cursor: pointer;

  transition: all 400ms ease-in-out;

  &::before {
    content: '';
    position: absolute;

    left: -1;
    bottom: 0;

    width: ${(props) => (props.selected ? '100%' : 0)};
    height: 2px;

    background: #324286;

    transition: all 300ms ease-in;
  }

  &:hover::before {
    width: 100%;
  }

  &focus::before {
    width: 100%;
  }

  &:hover {
    color: ${shade(0.1, `#324286`)};
    transform: translateX(2px);
  }
`;

export const HorizontalSeparator = styled.div`
  height: 1px;
  width: 95%;
  align-self: center;

  background-color: rgba(0, 0, 0, 0.1);
`;

export const EmailIcon = styled(MdEmail)`
  font-size: 32px;

  color: #fdfdfd;

  margin: 0 8px;
  transition: all 300ms ease-in-out;
`;

export const WhatsAppIcon = styled(IoLogoWhatsapp)`
  font-size: 32px;

  color: #fdfdfd;

  margin: 0 8px;
  transition: all 300ms ease-in-out;
`;

export const SacIcon = styled(FiHelpCircle)`
  font-size: 32px;

  color: #fdfdfd;

  margin: 0 8px;
  transition: all 300ms ease-in-out;
`;

export const PhoneIcon = styled(MdPhone)`
  font-size: 32px;

  color: #fdfdfd;

  margin: 0 8px;
  transition: all 300ms ease-in-out;
`;
