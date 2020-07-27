import styled from 'styled-components';
import { lighten } from 'polished';

import { MdMemory } from 'react-icons/md';
import { FiChevronsLeft } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center center;

  margin: 64px 0 0 0;

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
  border-right: 2px solid rgba(50, 66, 134, 0.2);
  border-left: 2px solid rgba(50, 66, 134, 0.2);

  h1 {
    margin: 0 0 32px 0;
    color: #181114;
    font-size: 32px;
  }

  input {
    width: 300px;
    height: 56px;

    color: rgba(50, 66, 134, 0.8);
    font-size: 18px;

    background: #eeeeee;

    border: 2px solid #324286;
    border-radius: 16px;

    margin: 0 0 8px 0;
    padding: 16px;

    transition: all 300ms ease;

    &::placeholder {
      color: rgba(50, 66, 134, 0.4);
    }

    &:focus {
      transition: all 300ms ease;
      border: 2px solid ${lighten(0.15, `#324286`)};
      filter: drop-shadow(0px 0px 3px rgba(50, 66, 134, 0.4));
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
    color: rgba(50, 66, 134, 0.4);
    font-size: 12px;
  }
`;

export const Separator = styled.div`
  margin: 32px 0;
  width: 50%;

  border-radius: 50%;

  height: 2px;

  background-color: rgba(50, 66, 134, 0.2);
`;

export const ForgotIcon = styled(MdMemory)`
  font-size: 18px;
`;

export const BackIcon = styled(FiChevronsLeft)`
  font-size: 18px;
`;
