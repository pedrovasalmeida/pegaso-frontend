import styled, { css } from 'styled-components';
import { shade, lighten } from 'polished';

import { MdPhoneInTalk, MdLocationOn, MdMailOutline } from 'react-icons/md';

import { motion } from 'framer-motion';

interface InfoProps {
  infoName?: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
  height: calc(100vh - 104px);

  margin-top: 64px;

  padding: 0 60px;

  background: #f2f2f2;

  @media only screen and (max-width: 1365px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Contact = styled.div<InfoProps>`
  display: flex;
  flex-direction: column;

  margin: 20px 0;
  margin-right: 40px;
`;

export const Text = styled.span`
  font-size: 20px;
`;

export const Map = styled.div``;

export const FormDiv = styled.div`
  width: 40%;
  height: 100%;

  background: green;

  transition: all 1000ms ease-in-out;

  @media only screen and (max-width: 1365px) {
    display: flex;
    width: 50%;
  }
`;

export const Title = styled.div``;

export const Form = styled.div``;

export const Button = styled.div``;

export const StatusMessage = styled.div``;

export const PhoneIcon = styled(MdPhoneInTalk)`
  color: #324286;
`;

export const LocationIcon = styled(MdLocationOn)`
  color: #324286;
`;

export const MailIcon = styled(MdMailOutline)`
  color: #324286;
`;
