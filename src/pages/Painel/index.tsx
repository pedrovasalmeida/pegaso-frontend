import React, { useState } from 'react';

import {
  Container,
  LeftMenu,
  DadosAdmin,
  Avatar,
  Name,
  Login,
  Permissao,
  OpcaoMenu,
  Separator,
  Data,
  Atualizar,
} from './styles';

import Add from '../../components/AdicionarEmp';
import Remove from '../../components/RemoverEmp';
import List from '../../components/ListarEmp';
import LoginPage from '../../components/Login';

const Painel: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [adicionar, setAdicionar] = useState(false);
  const [atualizar, setAtualizar] = useState(false);
  const [remover, setRemover] = useState(true);
  const [listar, setListar] = useState(false);

  const handleLogIn = () => {
    setIsLogged(true);
  };

  const handleLogOff = () => {
    setIsLogged(false);
  };

  const handleAdicionar = () => {
    setAdicionar(true);
    setAtualizar(false);
    setRemover(false);
    setListar(false);
  };

  const handleAtualizar = () => {
    setAdicionar(false);
    setAtualizar(true);
    setRemover(false);
    setListar(false);
  };

  const handleRemover = () => {
    setAdicionar(false);
    setAtualizar(false);
    setRemover(true);
    setListar(false);
  };

  const handleListar = () => {
    setAdicionar(false);
    setAtualizar(false);
    setRemover(false);
    setListar(true);
  };

  return (
    <>
      {!isLogged ? (
        <Container>
          <LoginPage />
        </Container>
      ) : (
        <Container>
          <LeftMenu>
            <DadosAdmin>
              <Avatar />
              <div>
                <Name>Teste</Name>
                <Login>Login: Teste</Login>
                <Permissao>Admin</Permissao>
              </div>
            </DadosAdmin>

            <OpcaoMenu onClick={() => handleAdicionar()}>
              Adicionar empreendimento
            </OpcaoMenu>

            <Separator />

            <OpcaoMenu onClick={() => handleAdicionar()}>
              Adicionar imagens
            </OpcaoMenu>

            <Separator />

            <OpcaoMenu onClick={() => handleRemover()}>
              Remover empreendimento
            </OpcaoMenu>

            <Separator />

            <OpcaoMenu onClick={() => handleAtualizar()}>
              Atualizar empreendimento
            </OpcaoMenu>

            <Separator />

            <OpcaoMenu onClick={() => handleListar()}>
              Listar empreendimentos
            </OpcaoMenu>
          </LeftMenu>
          <Data>
            {adicionar && (
              <>
                <span>Adicionar Empreendimento</span>
                <Add />
              </>
            )}
            {remover && (
              <>
                <span>Remover Empreendimento</span>
                <Remove />
              </>
            )}
            {atualizar && (
              <>
                <span>Atualizar Empreendimento</span>
                <Atualizar />
              </>
            )}
            {listar && (
              <>
                <span>Listar Empreendimentos</span>
                <List />
              </>
            )}
          </Data>
        </Container>
      )}
    </>
  );
};

export default Painel;
