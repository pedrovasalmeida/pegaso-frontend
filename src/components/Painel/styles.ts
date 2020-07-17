import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 140px 0 0 0;
`;

export const LeftMenu = styled.div`
  display: flex;
  flex-direction: column;

  width: 280px;
  height: calc(100vh - 140px);

  background-color: #f1f1f1;

  border-right: 1px solid rgba(0, 0, 0, 0.4);
`;

export const DadosAdmin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100px;

  padding: 8px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 4px 8px;
  }
`;

export const Avatar = styled.div`
  width: 80px;
  height: 80px;

  border-radius: 50%;

  background-color: red;
`;

export const Name = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

export const Login = styled.span`
  margin: 0 0 0 2px;
  font-size: 14px;
`;

export const Permissao = styled.span`
  margin: 0 0 0 2px;
  font-size: 14px;
`;

export const OpcaoMenu = styled.span`
  margin: 16px;
  font-weight: 500;

  cursor: pointer;

  transition: all 200ms ease-in-out;

  &:hover {
    transition: all 200ms ease-in-out;
    transform: translateX(4px);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
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
  height: calc(100vh - 140px);

  background-color: #ccc;

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
