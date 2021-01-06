import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 64px 0 0 0;
`;

export const LeftMenu = styled.div`
  display: flex;
  flex-direction: column;

  width: 280px;
  height: calc(100vh - 64px);

  padding-top: 20px;

  background-color: #f1f1f1;

  border-right: 1px solid rgba(0, 0, 0, 0.6);
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

  width: calc(100vw - 280px);
  height: calc(100vh - 64px);

  overflow-y: scroll;

  > span {
    align-self: center;
    font-size: 24px;
    margin: 16px 0 0 0;
    text-transform: uppercase;
    font-weight: bold;
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
