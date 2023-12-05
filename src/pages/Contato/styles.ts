import styled from 'styled-components';
import { shade, lighten } from 'polished';
import { motion } from 'framer-motion';

import { RiMailSendLine } from 'react-icons/ri';
import { MdPhoneInTalk, MdLocationOn, MdMailOutline } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 70px;
`;

export const WrapperMapsAndForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-left: 16px;

  img {
    border-radius: 8px;
    cursor: pointer;
  }

  @media only screen and (max-width: 1368px) {
    flex-direction: column;
  }
`;

export const GoogleMapsDiv = styled(motion.div)`
  width: 100vw;
  max-width: 960px;
  height: 480px;

  margin-right: 100px;

  @media only screen and (max-width: 1365px) {
    width: 100%;
    margin-right: 0;
    margin-top: 5px;
  }
`;

interface MapMarkerProps {
  lat?: any;
  lng?: any;
}

export const MapMarker = styled.div<MapMarkerProps>`
  display: flex;
  position: absolute;
  transform: translate(-50%, -100%);

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 50%;

    width: 20px;
    height: 20px;

    border: 2px solid ${props => props.theme.colors.light.darkBlue};
    user-select: none;
    transform: translate(-50%, -100%);

    border-radius: 50% 50% 50% 0;
    background: #ff4d4d;
    transform: rotate(-45deg);
    margin: -20px 0 0 -20px;
  }

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transform: translate(-175%, -180%);
    background: ${props => props.theme.colors.light.darkBlue};

    filter: drop-shadow(0 17px 3px rgba(0, 0, 0, 0.4));
  }
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 10px;

  width: 40rem;
  height: 100%;

  transition: all 1000ms ease-in-out;

  > span {
    width: 80%;
    font-size: 16px;
    margin-bottom: 4px;
  }

  @media only screen and (max-width: 680px) {
    width: 100%;
    padding: 10px;
  }
`;

export const Title = styled(motion.p)`
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;

  margin-bottom: 8px;
`;

export const Text = styled(motion.span)`
  display: flex;
  max-width: 100%;
  align-items: center;
`;

export const Form = styled.form`
  position: relative;
`;

export const Input = styled(motion.input)`
  position: relative;

  width: 80%;
  height: 40px;

  font-size: 18px;

  color: ${props => shade(0.6, props.theme.colors.light.lightBlue)};
  background: #f2f2f2;

  border: 1px solid ${shade(0.4, '#f2f2f2')};
  border-radius: 4px;

  margin: 8px 0;
  padding: 16px;

  transition: color 300ms ease;

  &::placeholder {
    color: ${props => props.theme.colors.light.lightBlue};
  }

  &:focus {
    transition: border 300ms ease;
    border: 1px solid ${props => lighten(0.1, props.theme.colors.light.lightBlue)};
    filter: drop-shadow(
      0px 0px 1px ${props => lighten(0.1, props.theme.colors.light.lightBlue)}
    );
  }

  @media only screen and (max-width: 1365px) {
    width: 100%;
  }
`;

export const InputMessage = styled(motion.textarea)`
  position: relative;

  width: 80%;
  height: 180px;

  resize: none;

  ::-webkit-scrollbar {
    display: none;
  }

  color: ${props => shade(0.6, props.theme.colors.light.lightBlue)};
  font-size: 18px;

  background: #f2f2f2;

  border: 1px solid ${shade(0.4, '#f2f2f2')};
  border-radius: 4px;

  margin-bottom: 2px;
  padding: 12px;
  padding-left: 16px;

  transition: color 300ms ease;

  &::placeholder {
    color: ${props => props.theme.colors.light.lightBlue};
  }

  &:focus {
    transition: border 300ms ease;
    border: 1px solid ${props => lighten(0.2, props.theme.colors.light.lightBlue)};
    filter: drop-shadow(
      0px 0px 1px ${props => lighten(0.1, props.theme.colors.light.lightBlue)}
    );
  }

  @media only screen and (max-width: 1365px) {
    width: 100%;
  }
`;

export const Button = styled(motion.button)`
  position: relative;
  outline: 0;

  width: 80%;
  height: 40px;

  background: ${props => props.theme.colors.light.lightBlue};
  color: #f2f2f2;

  border: 1px solid ${props => props.theme.colors.light.lightBlue};
  border-radius: 4px;

  margin-bottom: 8px;
  padding: 0 16px;

  font-weight: bold;
  font-size: 18px;

  transition: background 300ms ease;

  svg {
    margin: 0 8px 0 0;
  }

  &:focus {
    outline: 0;
  }

  &:hover {
    transition: background 300ms ease;
    background: ${props => lighten(0.1, props.theme.colors.light.lightBlue)};
  }

  @media only screen and (max-width: 1365px) {
    width: 100%;
  }
`;

export const SendIcon = styled(RiMailSendLine)`
  font-size: 20px;
`;

interface StatusMessageProps {
  isError?: boolean;
  isLoading?: boolean;
}

export const StatusMessage = styled.div<StatusMessageProps>`
  position: absolute;

  bottom: -3px;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 80%;
  height: 60px;

  padding-left: 16px;

  background: ${props => {
    if (props.isError) {
      return '#d11d1d';
    }
    if (props.isLoading) {
      return '#f2f2f2';
    }

    return '#28b516';
  }};

  > span {
    color: #f2f2f2;
    font-weight: bold;
  }

  @media only screen and (max-width: 870px) {
    display: flex;
    width: 100%;

    > span {
      font-size: 14px;
    }
  }
`;

export const WrapperContacts = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  max-width: 71vw;

  @media only screen and (max-width: 1368px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    max-width: 100vw;
    width: 100vw;
  }

  @media only screen and (max-height: 816px) {
    margin-bottom: 100px;
  }
`;

export const Adresses = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1368px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 50px;

  @media only screen and (max-width: 1368px) {
    flex-direction: column;
    align-items: center;
    padding-left: 0;
  }
`;

export const ContactTitle = styled(motion.span)`
  color: #333;
  font-weight: bold;
  font-size: 18px;

  &.with-margin-top {
    padding-top: 20px;
  }

  @media only screen and (max-width: 1365px) {
    &.title-with-margin-top {
      margin-top: 10px;
    }
  }
`;

interface InfoProps {
  infoName?: string;
}

export const Contact = styled.div<InfoProps>`
  &.contact-email {
    display: flex;
    flex-direction: column;
  }
`;

export const ContactLink = styled(motion.a)`
  display: flex;
  text-decoration: none;
  color: #333;
  transition: color 300ms ease;

  &:hover {
    color: ${p => p.theme.colors.light.lightBlue};
    text-decoration: none;
  }

  & + a {
    margin-top: 10px;
  }
`;

export const LocationIcon = styled(MdLocationOn)`
  display: flex;
  flex-shrink: 0;
  color: ${props => props.theme.colors.light.lightBlue};
`;

export const PhoneIcon = styled(MdPhoneInTalk)`
  color: ${props => props.theme.colors.light.lightBlue};
`;

export const MailIcon = styled(MdMailOutline)`
  display: flex;
  flex-shrink: 0;
  color: ${props => props.theme.colors.light.lightBlue};
`;

export const ContatoNT = styled(motion.div)``;

export const ContatoText = styled(motion.span)`
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
  }
  &:hover {
    color: ${p => p.theme.colors.light.lightBlue};
  }
`;
