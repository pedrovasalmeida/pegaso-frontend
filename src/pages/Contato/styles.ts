import styled from 'styled-components';
import { shade, lighten } from 'polished';

import { MdPhoneInTalk, MdLocationOn, MdMailOutline } from 'react-icons/md';
import { RiMailSendLine } from 'react-icons/ri';

import { motion } from 'framer-motion';

interface StatusMessageProps {
  isError?: boolean;
  isLoading?: boolean;
}

interface InfoProps {
  infoName?: string;
}

interface MapMarkerProps {
  lat?: any;
  lng?: any;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
  height: calc(100vh - 104px);

  margin-top: 64px;
  overflow: hidden;
  padding: 5px 60px;

  @media only screen and (max-width: 1365px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: auto;
    padding: 5px 60px;

    margin-bottom: 50px;
  }

  @media only screen and (max-width: 870px) {
    padding: 5px 0;
  }
`;

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  height: 100%;

  transition: all 1000ms ease-in-out;

  @media only screen and (max-width: 1365px) {
    display: flex;
    width: 50%;

    margin-top: 8px;
    margin-bottom: 24px;
  }

  @media only screen and (max-width: 1365px) {
    width: 80%;
  }

  @media only screen and (max-width: 870px) {
    width: 90%;
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;

  div.wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100vw;
    width: 95vw;
  }

  @media only screen and (max-width: 1328px) {
    div.wrapper {
      flex-direction: column;
    }
  }
`;

export const Adresses = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1328px) {
    margin-top: -30px;
  }
`;

export const ContactTitle = styled(motion.span)`
  color: #333;
  font-weight: bold;
  font-size: 18px;
  margin-top: 5px;
`;

export const Contact = styled.div<InfoProps>`
  display: flex;
  align-items: center;

  margin: 20px 0;
  margin-right: 40px;

  transition: color 300ms ease;

  &:hover {
    color: ${props => props.theme.colors.light.lightBlue};
  }

  svg {
    margin-right: 10px;
  }

  a {
    align-items: center;
  }

  @media only screen and (max-width: 870px) {
    margin-right: 4px;
  }
`;

export const ContactLink = styled(motion.a)`
  display: flex;

  color: #333;
  width: 100%;

  font-family: 'Roboto Slab', serif;

  transition: color 300ms ease;

  span {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
  }

  &:hover {
    text-decoration: none;
    color: ${props => props.theme.colors.light.lightBlue};
  }
`;

export const SecondLine = styled(motion.div)`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 898px) {
    flex-direction: column;
  }
`;

export const GoogleMapsDiv = styled(motion.div)`
  width: 100%;
  height: 48vh;

  margin-top: 20px;
`;

export const Text = styled(motion.span)`
  font-family: 'Roboto Slab', serif;

  font-size: 18px;
  width: auto;
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 10px;

  width: 40%;
  height: 100%;

  transition: all 1000ms ease-in-out;

  > span {
    width: 80%;
    font-size: 16px;
    margin-bottom: 4px;
  }

  @media only screen and (max-width: 1365px) {
    display: flex;
    width: 80%;
  }

  @media only screen and (max-width: 870px) {
    width: 90%;
  }
`;

export const Title = styled(motion.p)`
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;

  margin-bottom: 8px;
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

export const PhoneIcon = styled(MdPhoneInTalk)`
  color: ${props => props.theme.colors.light.lightBlue};
`;

export const LocationIcon = styled(MdLocationOn)`
  display: flex;
  flex-shrink: 0;
  color: ${props => props.theme.colors.light.lightBlue};
`;

export const MailIcon = styled(MdMailOutline)`
  display: flex;
  flex-shrink: 0;
  color: ${props => props.theme.colors.light.lightBlue};
`;

export const SendIcon = styled(RiMailSendLine)`
  font-size: 20px;
`;
