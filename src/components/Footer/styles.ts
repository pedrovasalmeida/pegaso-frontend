import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';
import { FaWhatsapp } from 'react-icons/fa';
import { MdReportProblem, MdEmail } from 'react-icons/md';
import { SiInstagram } from 'react-icons/si';

import { motion } from 'framer-motion';

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: space-around;

  height: 40px;
  width: 100%;

  border-top: 1px solid rgba(0, 0, 0, 0.1);

  background-color: #fdfdfd;
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
  align-items: center;
  justify-content: center;

  width: auto;
`;

export const Text = styled.span`
  color: #777;
`;

export const Contact = styled(motion.div)`
  display: flex;
  height: 100%;
  width: auto;
`;

export const LinkRRD = styled(Link)`
  text-decoration: none;

  color: #222;

  &:hover {
    color: #222;
    text-decoration: none;
  }
`;

export const Button = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  height: 100%;

  padding: 0 16px;
  margin: 0 8px;

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
    box-shadow: -3px 1px rgba(0, 0, 0, 0.3);
    text-decoration: none;
    color: #222;
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

export const PhoneIcon = styled(SiInstagram)`
  margin: 0 8px 0 0;
  font-size: 32px;
`;

export const SacIcon = styled(MdReportProblem)`
  margin: 0 8px 0 0;
  font-size: 32px;
`;

export const EmailIcon = styled(MdEmail)`
  margin: 0 8px 0 0;
  font-size: 32px;
`;

export const ContactName = styled.span`
  text-transform: uppercase;
  line-height: 4px;
  font-size: 12px;
`;

export const ContactText = styled.span`
  font-family: 'Roboto Slab', serif;
  color: #333;
`;

export const HorizontalSeparator = styled.div`
  width: 48px;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);

  filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 1));
  margin: 6px 0 0 0;
`;
