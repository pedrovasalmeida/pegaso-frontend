import styled, { keyframes } from 'styled-components';

import { Preloader } from 'react-preloader-icon';

import { lighten, shade } from 'polished';

interface StatusMessageProps {
  isError: boolean;
}

interface CheckboxProps {
  checked: boolean;
}

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: auto;
  width: calc(100vw - 300px);

  padding: 10px;

  .success {
    background: green;
    color: #fafafa;
    margin-bottom: 5px;
  }

  .error {
    background: ${p => p.theme.colors.light.red};
    color: #fafafa;
    margin-bottom: 5px;
  }

  .Toastify__progress-bar {
    background: ${p => p.theme.colors.light.lightBlue};
  }
`;

export const BackToTop = styled.div`
  position: fixed;
  right: 10px;
  bottom: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  border-radius: 50%;

  background: ${p => p.theme.colors.light.darkBlue};
  z-index: 2;

  cursor: pointer;

  svg {
    color: #fafafa;
    font-weight: bold;
  }
`;

export const RotateDown = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-90deg);
  }
`;

export const RotateUp = keyframes`
  from {
    transform: rotate(-90deg);
  }
  to {
    transform: rotate(0);
  }
`;

export const CheckboxLabel = styled.label`
  width: 300px;
  transition: all 300ms ease;

  font-size: 18px;

  cursor: pointer;

  input {
    display: none;
    margin-right: 10px;
  }

  &.checked {
    svg {
      animation: ${RotateDown} 0.6s normal forwards;
    }
  }

  &.unchecked {
    svg {
      animation: ${RotateUp} 0.6s normal forwards;
    }
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  margin-bottom: 30px;

  &.old-list {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid ${p => p.theme.colors.light.gray};
  }
`;

export const Enterprise = styled.div`
  display: flex;
  margin: 8px 0;

  &:last-child {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 731px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  height: 70px;
  border-radius: 4px;
  margin-right: 5px;
  margin-bottom: 5px;

  @media only screen and (max-width: 731px) {
    height: auto;
    width: 100%;

    max-width: 350px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  max-width: 350px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 100%;

  min-width: 260px;
  max-width: 350px;

  border-radius: 4px;

  background: ${p => p.theme.colors.light.lightBlue};

  transition: background 300ms ease;

  :focus {
    outline: 0;
  }

  :hover {
    background: ${p => shade(0.3, p.theme.colors.light.lightBlue)};
  }

  svg {
    margin: 0 4px;
    color: ${p => p.theme.colors.light.lightWhite};
  }

  span {
    color: ${p => p.theme.colors.light.lightWhite};
    font-weight: bold;
    margin-right: 8px;
  }

  &.send {
    margin-top: 20px;
  }

  &.remove {
    background: ${p => p.theme.colors.light.red};

    margin-top: 5px;
    margin-bottom: 20px;

    svg {
      margin: 0 6px;
      color: ${p => p.theme.colors.light.lightWhite};
    }

    :hover {
      background: ${p => shade(0.4, p.theme.colors.light.red)};
    }
  }
`;

export const LoadingIcon = styled(Preloader)`
  align-self: center;

  margin: 8px 0;
`;
