import { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

/** Components */
import { motion } from 'framer-motion';

/** Ícones */
import { FiPlus, FiHelpCircle } from 'react-icons/fi';
import { MdEmail, MdPhone } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';

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

  cursor: pointer;

  > img {
    height: 64px;
    z-index: 6;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: auto;

  z-index: 15;
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
  border-bottom: 3px solid ${props => props.theme.colors.light.lightBlue};

  padding: 4px 8px;

  background-color: rgba(150, 150, 150, 0.025);

  margin: 0 24px 0 0;

  transition: all 300ms ease-in-out;

  cursor: pointer;

  &:hover {
    transition: all 300ms ease-in-out;

    border-bottom: 3px solid ${props => shade(0.3, props.theme.colors.light.lightBlue)};
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

export const DivButtons = styled(motion.div)`
  display: flex;
  align-items: center;

  width: auto;
`;

export const Text = styled.span`
  font-weight: 500;

  transition: all 300ms ease-in-out;
`;

export const Separator = styled.div`
  margin: 0 8px 8px 8px;

  width: 1px;
  height: 32px;

  background-color: rgba(0, 0, 0, 0.075);
  filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.8));
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

  > svg {
    ${props => (props.isVisible ? 'transform: rotate(45deg);' : '')}
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

  top: ${props => (props.isVisible ? '140px' : '-50%')};
  left: 0;

  height: auto;
  width: 100%;

  background-color: #fdfdfd;

  transition: all 300ms ease-in-out;

  z-index: 39;
`;

export const LinkRRDHiddenMenu = styled(Link)`
  display: flex;
  align-items: center;

  height: 48px;

  margin: 0 16px 0 0;

  text-decoration: none;

  &:focus {
    text-decoration: none;
  }
`;

export const LinkRRD = styled(Link)<RouterProps>`
  display: inline-block;

  color: ${props => (props.selected ? props.theme.colors.light.lightBlue : '#333')};

  height: 64px;

  padding-top: 20px;

  margin: 0 8px;

  &:hover {
    text-decoration: none;
    color: ${props => props.theme.colors.light.lightBlue};
  }

  &:after {
    display: block;
    content: '';

    border-bottom: solid 2px ${props => props.theme.colors.light.lightBlue};

    transform: ${props => (props.selected ? 'scaleX(1)' : 'scaleX(0)')};
    transform-origin: 100% 50%;

    transition: transform 300ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }

  &:focus::before {
    transform: scaleX(1);
  }
`;

export const HorizontalSeparator = styled.div`
  height: 1px;
  width: 100%;

  background-color: #fdfdfd;
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
