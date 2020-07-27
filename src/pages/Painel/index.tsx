import React, { useState, useEffect, useCallback } from 'react';

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
} from './styles';

import LoginPage from '../../components/Login';

import { useAuth } from '../../context/AuthContext';

interface UserDataFromStorage {
  id: number;
  userLogin: string;
}

const Painel: React.FC = () => {
  const { signOut } = useAuth();

  const [userData, setUserData] = useState<UserDataFromStorage>(() => {
    const data = localStorage.getItem('@ProjPegaso:user');
    const token = localStorage.getItem('@ProjPegaso:token');

    if (data && token) {
      const { id, userLogin } = JSON.parse(data);
      return { id, userLogin };
    }

    return {} as UserDataFromStorage;
  });

  const [isLogged, setIsLogged] = useState(false);
  const [adicionar, setAdicionar] = useState(false);
  const [atualizar, setAtualizar] = useState(false);
  const [remover, setRemover] = useState(true);
  const [listar, setListar] = useState(false);

  const handleComponentRender = useCallback(() => {
    if (userData.id === undefined)
      return (
        <Container>
          <LoginPage />
        </Container>
      );

    return (
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

          <Separator />

          <OpcaoMenu onClick={() => handleDeslogar()}>Sair</OpcaoMenu>
        </LeftMenu>
        <Data></Data>
      </Container>
    );
  }, []);

  const handleDeslogar = useCallback(() => {
    signOut();

    setUserData({} as UserDataFromStorage);

    window.location.reload();
  }, []);

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

  return <>{handleComponentRender()}</>;
};

export default Painel;
