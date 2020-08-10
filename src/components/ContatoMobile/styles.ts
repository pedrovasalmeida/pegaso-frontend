import styled from 'styled-components';
import { shade, lighten } from 'polished';

import { RiMailSendLine } from 'react-icons/ri';

import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  min-height: 100vh;

  padding: 70px 0 20px 0;

  background-color: #fdfdfd;
`;

export const DivDireita = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 95vw;

  padding: 0;
`;

export const DivEsquerda = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 0 100px 0;

  width: 95vw;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  align-self: center;
  align-items: center;
  justify-content: center;

  background-color: #fdfdfd;

  margin: 16px 0;
`;

export const Titulo = styled(motion.span)`
  width: auto;
  border-bottom: 8px solid #324286;

  margin: 0 0 32px 0;

  font-size: 40px;
  font-weight: bold;

  color: ${shade(0.6, '#324286')};

  text-transform: uppercase;

  transform: translateX(-100px);
`;

export const Texto = styled(motion.span)`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  text-align: justify;

  width: 95vw;

  font-family: 'Roboto', sans-serif;
  font-weight: 300;
`;

export const Input = styled(motion.input)`
  position: relative;
  width: 90vw;
  height: 56px;

  color: ${shade(0.6, '#324286')};
  font-size: 18px;

  background: #eeeeee;

  border: 2px solid #324286;
  border-radius: 16px;

  margin: 0 0 8px 0;
  padding: 16px;

  transition: color 300ms ease;

  &::placeholder {
    color: ${shade(0, 'rgba(50, 66, 134, 0.6)')};
  }

  &:focus {
    transition: border 300ms ease;
    border: 2px solid ${lighten(0.2, `#324286`)};
    filter: drop-shadow(0px 0px 3px ${lighten(0.1, '#324286')});
  }
`;

export const InputMessage = styled(motion.textarea)`
  position: relative;
  width: 90vw;
  height: 256px;

  resize: none;

  ::-webkit-scrollbar {
    display: none;
  }

  color: ${shade(0.6, '#324286')};
  font-size: 18px;

  background: #eeeeee;

  border: 2px solid #324286;
  border-radius: 16px;

  margin: 0 0 8px 0;
  padding: 16px;

  transition: color 300ms ease;

  &::placeholder {
    color: ${shade(0, 'rgba(50, 66, 134, 0.6)')};
  }

  &:focus {
    transition: border 300ms ease;
    border: 2px solid ${lighten(0.2, `#324286`)};
    filter: drop-shadow(0px 0px 3px ${lighten(0.1, '#324286')});
  }
`;

export const Button = styled(motion.button)`
  outline: 0;
  width: 90vw;
  height: 56px;

  background: #324286;
  color: #fdfdfd;

  border: 2px solid #324286;
  border-radius: 16px;

  margin: 0 0 8px 0;
  padding: 0 16px;

  font-weight: 500;
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
    background: ${lighten(0.1, `#324286`)};
  }
`;

export const Link = styled.a`
  color: #324286;

  align-self: center;

  margin: 8px 0;

  text-decoration: none;

  svg {
    margin: 0 8px 0 0;
  }

  transition: all 200ms ease;

  &:hover {
    color: ${lighten(0.2, `#324286`)};
  }
`;

export const Separator = styled.div`
  width: 20%;
  height: 4px;

  margin: 16px 0;

  background-color: rgba(50, 66, 134, 1);
`;

export const WhiteSpace = styled.div`
  width: 20%;
  height: 4px;

  margin: 16px 0;
`;

export const SendIcon = styled(RiMailSendLine)`
  font-size: 20px;
`;

export const SucessMessage = styled.span`
  color: green;
`;

export const ErrorMessage = styled.span`
  color: red;
`;

export const LoadingMessage = styled.div`
  span {
    color: gray;
  }
`;

export const DivStateMessages = styled.div`
  margin: 0;
`;
