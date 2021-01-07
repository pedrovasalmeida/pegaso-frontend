import { lighten, shade } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 64px 0 0 0;
`;

interface LeftMenuProps {
  isOpened?: boolean;
  width: number;
}

export const LeftMenu = styled.div<LeftMenuProps>`
  ${(props) =>
    props.width! < 731
      ? css`
          position: absolute;
          left: 0;
          top: 64px;
          transform: translateX(-280px);
          z-index: 999;
        `
      : css`
          z-index: 1;
        `}

  display: flex;
  flex-direction: column;

  min-width: 280px;
  width: auto;
  min-height: calc(100vh - 64px);
  height: 100%;

  padding-top: 20px;

  background-color: #f1f1f1;

  border-right: 1px solid rgba(0, 0, 0, 0.6);

  transition: all 800ms ease-in-out;

  @media only screen and (max-width: 730px) {
    display: flex;

    ${(props) =>
      props.isOpened
        ? css`
            transform: translateX(0);
          `
        : css`
            transform: translateX(-280px);
          `}
  }
`;

export const DadosAdmin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: auto;
  width: 100%;

  padding: 4px 8px;
`;

export const Avatar = styled.div`
  width: 80px;
  height: 80px;

  border-radius: 50%;

  background-color: #324286;
`;

export const Name = styled.span`
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid #000;

  width: 100%;

  > strong {
    font-weight: bold;
  }

  &:not(:first-child) {
    margin-top: 8px;
  }
`;

export const Email = styled.span``;

export const Login = styled.span``;

export const OpcaoMenu = styled.span`
  display: flex;
  align-items: center;

  margin-top: 32px;
  margin-left: 4px;

  font-weight: 500;

  height: 5%;

  padding-left: 10px;
  padding-top: 3px;

  border-radius: 4px;

  cursor: pointer;

  transition: all 300ms ease-in-out;

  &:hover {
    transition: all 300ms ease-in-out;
    color: #324286;
    background: ${lighten(0.5, '#324286')};
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: #fff;

  width: calc(100vw - 280px);
  min-height: calc(100vh - 64px);
  height: auto;

  padding-top: 20px;

  overflow-y: hidden;

  > span {
    align-self: center;
    font-size: 24px;
    margin-top: 16px;
    text-transform: uppercase;
    font-weight: bold;
  }

  @media only screen and (max-width: 730px) {
    padding: 40px 10px 0 10px;
    width: 100vw;
  }
`;

export const Adicionar = styled.div`
  width: 90%;
  height: 85%;
  margin: 16px 0 0 0;

  background-color: rgba(0, 0, 0, 0.8);

  border-radius: 16px;
`;

export const Atualizar = styled.div`
  width: 90%;
  height: 85%;
  margin: 16px 0 0 0;

  background-color: rgba(0, 0, 0, 0.8);

  border-radius: 16px;
`;

export const Remover = styled.div`
  width: 90%;
  height: 85%;
  margin: 16px 0 0 0;

  background-color: rgba(0, 0, 0, 0.8);

  border-radius: 16px;
`;

export const FloatButtonDiv = styled.div`
  position: fixed;
  right: 5px;
  top: 10%;

  display: flex;
  flex-direction: row;

  clip-path: circle(50%);

  background: ${lighten(0.1, '#324286')};

  z-index: 999;

  transition: background 500ms ease-in-out;

  &:hover {
    background: ${shade(0.2, '#324286')};
  }
`;
