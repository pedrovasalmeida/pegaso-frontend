import { lighten, shade } from 'polished';
import styled, { css } from 'styled-components';

interface LeftMenuProps {
  isOpened?: boolean;
  width: number;
}

interface OpcoesMenuProps {
  selected?: boolean;
}

export const Container = styled.div`
  display: flex;
  margin-top: 64px;
`;

export const LeftMenu = styled.div<LeftMenuProps>`
  ${(props) =>
    props.width! < 731
      ? css`
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;

          min-width: 240px;

          transform: translateX(-280px);
          z-index: 999;
        `
      : css`
          min-width: 280px;
          z-index: 1;
        `}

  display: flex;
  flex-direction: column;

  width: auto;
  min-height: calc(100vh - 64px);
  height: auto;

  padding-top: 20px;

  background: linear-gradient(45deg, ${shade(0.7, '#324286')}, #324286);
  border-right: 1px solid rgba(0, 0, 0, 0.6);

  transition: all 600ms ease-in-out;

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

  margin-bottom: 10px;
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

  border-bottom: 1px solid #f2f2f2;

  width: 100%;

  color: #f2f2f2;

  > strong {
    font-weight: bold;
  }

  &:not(:first-child) {
    margin-top: 8px;
  }
`;

export const Email = styled.span``;

export const Login = styled.span``;

export const OpcaoMenu = styled.span<OpcoesMenuProps>`
  display: flex;
  align-items: center;

  height: 50px;

  margin-top: 8px;
  margin-left: 4px;
  padding-left: 10px;
  padding-top: 3px;

  border-bottom: 1px solid rgba(242, 242, 242, 0.2);
  border-radius: 4px;

  font-weight: bold;
  color: ${(props) =>
    props.selected ? `${shade(0.4, '#324286')}` : '#f2f2f2'};

  ${(props) =>
    props.selected &&
    css`
      background: #f2f2f2;
    `}

  cursor: pointer;

  transition: all 300ms ease-in-out;

  &:hover {
    transition: all 300ms ease-in-out;
    color: ${shade(0.4, '#324286')};
    background: #f2f2f2;
  }
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

export const FloatButtonDiv = styled.div`
  position: fixed;
  right: 5px;
  top: 11%;

  display: flex;
  flex-direction: row;

  clip-path: circle(50%);

  background: ${lighten(0.1, '#324286')};

  z-index: 1;

  transition: background 500ms ease-in-out;

  &:hover {
    background: ${shade(0.2, '#324286')};
  }
`;
