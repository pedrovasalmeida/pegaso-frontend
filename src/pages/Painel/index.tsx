import React, { useState, useCallback, useEffect } from 'react';

/** Hooks */
import { Preloader, ThreeDots } from 'react-preloader-icon';
import { useAuth } from '../../context/AuthContext';
import useWindowDimensions from '../../hooks/useWindowDimensions';

/** Componentes */
import LoginPage from '../../components/Login';
import PainelMobile from '../../components/PainelMobile';
import AdicionarEmp from '../../components/AdicionarEmp';
import RemoverEmp from '../../components/RemoverEmp';
import ListarEmp from '../../components/ListarEmp';
import AtualizarEmp from '../../components/AtualizarEmp';
import api from '../../services/api';

/** Ícones e imagens */

/** Estilos */
import {
  Container,
  LeftMenu,
  DadosAdmin,
  Name,
  OpcaoMenu,
  Separator,
  Data,
} from './styles';

/** Tipos */
interface UserDataFromStorage {
  id: number;
  userLogin: string;
}

interface BlaUser {
  cargo?: string;
}

interface UserApiData {
  id: number;
  login: string;
  email: string;
  avatar: string | null;
  nome: string;
  cargo: string;
}

const Painel: React.FC = () => {
  const { user, signOut } = useAuth();

  const [adicionar, setAdicionar] = useState(false);
  const [atualizar, setAtualizar] = useState(false);
  const [remover, setRemover] = useState(false);
  const [listar, setListar] = useState(true);
  const [loggedUserData, setLoggedUserData] = useState<UserApiData>(
    {} as UserApiData,
  );

  const [userData, setUserData] = useState<UserDataFromStorage>(() => {
    if (user) {
      return user as UserDataFromStorage;
    }
    return {} as UserDataFromStorage;
  });

  const { width } = useWindowDimensions();

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

  const getUserData = useCallback(async () => {
    if (!userData.id) {
      return;
    }

    await api
      .get(`/list-one-user/${userData.id}`)
      .then(res => {
        const loggedUser: UserApiData = res.data.user;

        setLoggedUserData(loggedUser);
      })
      .catch(err => {
        console.log(err);
      });
  }, [userData.id]);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <>
      {!userData.id ? (
        <Container>
          <LoginPage />
        </Container>
      ) : (
        <>
          {width < 910 ? (
            <PainelMobile />
          ) : (
            <Container>
              <LeftMenu>
                <DadosAdmin>
                  {!loggedUserData.nome ? (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '150px',
                      }}
                    >
                      <Preloader
                        use={ThreeDots}
                        size={100}
                        strokeColor="#324286"
                        strokeWidth={6}
                        duration={800}
                      />
                    </div>
                  ) : (
                    <>
                      <Name>
                        <strong>Nome:</strong> <p>{loggedUserData!.nome}</p>
                      </Name>
                      <Separator />
                      <Name>
                        <strong>Email:</strong> <p>{loggedUserData!.email}</p>
                      </Name>
                      <Separator />

                      <Name>
                        <strong>Login:</strong> <p>{loggedUserData!.login}</p>
                      </Name>
                      <Separator />

                      <Name>
                        <strong>Cargo:</strong> <p>{loggedUserData!.cargo}</p>
                      </Name>
                    </>
                  )}
                </DadosAdmin>

                <Separator />

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
                  Adicionar imagens
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
                    <RemoverEmp />
                  </>
                )}
                {atualizar && (
                  <>
                    <AtualizarEmp />
                  </>
                )}
              </Data>
            </Container>
          )}
        </>
      )}
    </>
  );
};

export default Painel;
