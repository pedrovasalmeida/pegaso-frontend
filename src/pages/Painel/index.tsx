import React, { useState, useCallback } from 'react';

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

import AdicionarEmp from '../../components/AdicionarEmp';
import AtualizarEmp from '../../components/AtualizarEmp';
import RemoverEmp from '../../components/RemoverEmp';
import ListarEmp from '../../components/ListarEmp';

interface UserDataFromStorage {
  id: number;
  userLogin: string;
}

interface BlaUser {
  cargo?: string;
}

const Painel: React.FC = () => {
  const { user, signOut } = useAuth();

  const [adicionar, setAdicionar] = useState(false);
  const [atualizar, setAtualizar] = useState(false);
  const [remover, setRemover] = useState(true);
  const [listar, setListar] = useState(false);

  const [userData, setUserData] = useState<UserDataFromStorage>(() => {
    if (user) {
      return user as UserDataFromStorage;
    }
    return {} as UserDataFromStorage;
  });

  // const verifyUserData = () => {
  // verificar se usuario do localStorage é válido
  // const user = localStorage.getItem('@ProjPegaso:user');
  // if (user) {
  //   const { id, userLogin } = JSON.parse(user);
  //   console.log(id, userLogin);
  // }
  // const response = await api.get(`/list-one-user/${convertedUser.id}`);
  // if (response.data.user) {
  //   const { id, userLogin } = convertedUser;
  //   setIsLogged(true);
  //   setUserData({ id, userLogin } as UserDataFromStorage);
  //   return;
  // }
  // setIsLogged(false);
  // setUserData({} as UserDataFromStorage);
  // return;
  // };

  const handleDeslogar = useCallback(() => {
    signOut();

    setUserData({} as UserDataFromStorage);

    window.location.reload();
  }, [signOut]);

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
      {!userData.id ? (
        <Container>
          <LoginPage />
        </Container>
      ) : (
        <Container>
          <LeftMenu>
            <DadosAdmin>
              <Avatar />
              <div>
                <Name>{userData.userLogin}</Name>
                <Permissao>{userData.id}</Permissao>
              </div>
            </DadosAdmin>

            <OpcaoMenu onClick={() => handleAdicionar()}>
              Adicionar empreendimento
            </OpcaoMenu>

            <Separator />

            {/* <OpcaoMenu onClick={() => {}}>Adicionar imagens</OpcaoMenu>

            <Separator /> */}

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

          <Data>
            {adicionar && (
              <>
                <AdicionarEmp />
              </>
            )}
            {listar && (
              <>
                <ListarEmp />
              </>
            )}
            {remover && (
              <>
                <span>Remover Empreendimento</span>
              </>
            )}
            {atualizar && (
              <>
                <span>Atualizar Empreendimento</span>
              </>
            )}
          </Data>
        </Container>
      )}
    </>
  );
};

export default Painel;
