import styled from 'styled-components';
import { shade, lighten } from 'polished';

import { RiHeartAddLine, RiKeyLine } from 'react-icons/ri';
import { MdErrorOutline } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { GoSignIn } from 'react-icons/go';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center center;

  height: calc(100vh - 64px);
  width: 100vw;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  align-self: center;
  align-items: center;
  justify-content: center;

  width: 500px;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.01);
  border-right: 2px solid rgba(50, 66, 134, 0.4);
  border-left: 2px solid rgba(50, 66, 134, 0.4);

  h1 {
    margin: 0 0 32px 0;
    color: ${shade(0.6, '#324286')};
    font-size: 32px;
  }

  input {
    position: relative;
    width: 300px;
    height: 56px;

    color: ${shade(0.6, '#324286')};
    font-size: 18px;

    background: #eeeeee;

    border: 2px solid #324286;
    border-radius: 16px;

    margin: 0 0 8px 0;
    padding: 16px;

    transition: all 300ms ease;

    &::placeholder {
      color: ${shade(0.6, '#324286')};
    }

    &:focus {
      transition: all 300ms ease;
      border: 2px solid ${lighten(0.2, `#324286`)};
      filter: drop-shadow(0px 0px 3px ${lighten(0.1, '#324286')});
    }
  }

  button {
    outline: 0;
    width: 300px;
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

    &:hover {
      transition: background 300ms ease;
      background: ${lighten(0.1, `#324286`)};
    }
  }

  a {
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
  }

  span {
    color: rgba(50, 66, 134, 0.6);
    font-size: 12px;
  }

  @media (max-width: 499px) {
    width: auto;
    padding: 0 8px;
  }
`;

export const Separator = styled.div`
  margin: 32px 0;
  width: 50%;

  border-radius: 50%;

  height: 2px;

  background-color: rgba(50, 66, 134, 0.4);
`;

export const Content = styled.div`
  display: flex;
  place-content: center center;
`;

export const LoginIcon = styled(AiOutlineUser)`
  font-size: 18px;
  position: absolute;
  top: 0;
  left: 0;
  color: #000;
`;

export const PasswordIcon = styled(RiKeyLine)`
  font-size: 18px;
`;

export const SignInIcon = styled(GoSignIn)`
  font-size: 18px;
`;

export const CreateAccountIcon = styled(RiHeartAddLine)`
  font-size: 18px;
`;

export const LoginErrorMessage = styled.p`
  /* margin: 8px 0; */

  font-size: 18px;
  color: rgba(192, 25, 32, 1);
`;

export const LoginErrorIcon = styled(MdErrorOutline)`
  font-size: 24px;
  margin: 0 8px;

  color: rgba(192, 25, 32, 1);
`;
