import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';
import { FaWhatsapp } from 'react-icons/fa';
import { MdReportProblem, MdEmail } from 'react-icons/md';
import { TiDelete } from 'react-icons/ti';
import { SiInstagram } from 'react-icons/si';

import { motion } from 'framer-motion';

interface ContactTextProps {
  isBigInfo?: boolean;
}

interface ButtonProps {
  linkExist?: boolean;
}

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 40px;
  width: 100vw;

  background-color: #fdfdfd;

  border-top: 1px solid rgba(0, 0, 0, 0.1);

  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.2));

  z-index: 4;
`;

export const Separator = styled.div`
  height: 32px;
  width: 1px;

  background-color: rgba(0, 0, 0, 0.2);

  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.2));
`;

export const Data = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  color: #777;
`;

export const Contact = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const LinkRRD = styled(Link)`
  text-decoration: none;

  color: #222;

  &:hover {
    color: #222;
    text-decoration: none;
  }
`;

export const Button = styled(motion.a)<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 240px;

  height: auto;

  padding: 0 16px;
  margin: 4px;

  color: #222;

  border-radius: 8px;
  border: 1px solid ${props => shade(0.1, props.theme.colors.light.lightBlue)};
  border-left: 4px solid ${props => shade(0.1, props.theme.colors.light.lightBlue)};
  border-bottom: 4px solid ${props => shade(0.1, props.theme.colors.light.lightBlue)};

  background-color: rgba(0, 0, 0, 0.025);
  text-decoration: none;

  cursor: pointer;

  transition: box-shadow 400ms ease;

  &:hover {
    text-decoration: none;
    transform: translateX(4px);
    box-shadow: -3px 1px rgba(0, 0, 0, 0.3);
    text-decoration: none;
    color: #222;
  }

  @media only screen and (max-width: 979px) {
    span {
      display: none;
    }
  }

  @media only screen and (min-width: 300px) {
    width: 30vw;
  }
`;

export const MotionButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: auto;

  padding: 0 16px;
  margin: 0 16px;

  border-radius: 8px;

  border: 1px solid ${props => shade(0.1, props.theme.colors.light.lightBlue)};
  border-left: 4px solid ${props => shade(0.1, props.theme.colors.light.lightBlue)};
  border-bottom: 4px solid ${props => shade(0.1, props.theme.colors.light.lightBlue)};

  background-color: rgba(0, 0, 0, 0.025);

  cursor: pointer;
`;

export const ContactData = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const WhatsAppIcon = styled(FaWhatsapp)`
  margin: 0 8px 0 0;
  font-size: 32px;
`;

export const InstaIcon = styled(SiInstagram)`
  margin: 0 8px 0 0;
  padding: 1px 0;
  font-size: 32px;
`;

export const SacIcon = styled(MdReportProblem)`
  margin: 0 8px 0 0;
  font-size: 32px;
`;

export const EmailIcon = styled(MdEmail)`
  display: flex;
  flex-shrink: 0;
  margin: 0 8px 0 0;
  font-size: 32px;
`;

export const ContactName = styled.span`
  line-height: 4px;
`;

export const ContactText = styled.span<ContactTextProps>`
  font-size: ${props => (props.isBigInfo ? '12px' : '16px')};
`;

export const HorizontalSeparator = styled.div`
  width: 48px;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);

  filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 1));
  margin: 6px 0 0 0;
`;

export const Modal = styled.div`
  position: absolute;
  top: 10vh;
  left: 2vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 95vw;
  height: auto;

  padding: 16px 16px 32px 16px;

  background-color: #fdfdfd;

  border: 2px solid #333;
  border-radius: 16px;

  filter: drop-shadow(
    -4px 4px 4px ${props => shade(0.4, props.theme.colors.light.lightBlue)}
  );

  z-index: 99;
`;

export const CloseIcon = styled(TiDelete)`
  position: absolute;
  right: 2vw;
  top: 1vh;

  color: ${props => props.theme.colors.light.lightBlue};
  font-size: 32px;

  cursor: pointer;
`;

export const TitleModal = styled.span`
  font-weight: 500;
  font-size: 24px;
  margin: 8px 0;
`;

export const TextModal = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  > strong {
    font-size: 20px;
  }
`;
