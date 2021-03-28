import React, { useState, useCallback, useEffect } from 'react';

/** Hooks */
import { Preloader, ThreeDots } from 'react-preloader-icon';
import { Slant as Hamburger } from 'hamburger-react';
import { useAuth } from '../../context/AuthContext';
import useWindowDimensions from '../../hooks/useWindowDimensions';

/** Componentes */
import LoginPage from '../../components/Login';
import AdicionarEmp from '../../components/AdicionarEmp';
import RemoverEmp from '../../components/RemoverEmp';
import ListarEmp from '../../components/ListarEmp';
import AdicionarImagens from '../../components/AdicionarImagens';
import RemoverImagens from '../../components/RemoverImagens';
import OrdenarProjetos from '../../components/OrdenarProjetos';
import AtualizarEmpreendimento from '../../components/AtualizarEmpreendimento';

import api from '../../services/api';

/** Ícones e imagens */
import logo from '../../assets/logo.png';

/** Estilos */
import {
  Container,
  LeftMenu,
  DadosAdmin,
  Logo,
  Name,
  OpcaoMenu,
  Data,
  FloatButtonDiv,
} from './styles';

/** Tipos */
interface UserDataFromStorage {
  user: any;
  token: string;
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

type ActualPage = string;

const Painel: React.FC = () => {
  const getLocalStoragePage = (): ActualPage => {
    const localStorageActualPage = localStorage.getItem('@ProjPegaso:actualPanelPage');

    if (!localStorageActualPage) {
      return 'adicionar';
    }

    return localStorageActualPage;
  };

  const { user, signOut } = useAuth();

  const [actualPage, setActualPage] = useState<ActualPage>(() => getLocalStoragePage());
  const [adicionar, setAdicionar] = useState(false);
  const [atualizarEmpreendimento, setAtualizarEmpreendimento] = useState(false);
  const [adicionarImagens, setAdicionarImagens] = useState(false);
  const [removerImagens, setRemoverImagens] = useState(false);
  const [ordenarProjetos, setOrdenarProjetos] = useState(false);
  const [remover, setRemover] = useState(false);
  const [listar, setListar] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const [loggedUserData, setLoggedUserData] = useState<UserApiData>({} as UserApiData);
  const [userData, setUserData] = useState<UserDataFromStorage>(() => {
    if (JSON.stringify(user) === '{}') {
      return {} as UserDataFromStorage;
    }
    return { user, token: user.token } as UserDataFromStorage;
  });

  const { width } = useWindowDimensions();

  const handleDeslogar = useCallback(() => {
    signOut();

    setUserData({} as UserDataFromStorage);

    window.location.reload();
  }, [signOut]);

  const handleAdicionar = () => {
    setActualPage('adicionar');
    setAdicionar(true);
    setAtualizarEmpreendimento(false);
    setAdicionarImagens(false);
    setRemoverImagens(false);
    setRemover(false);
    setListar(false);
    setOrdenarProjetos(false);
    setToggleMenu(false);
  };

  const handleAtualizarEmpreendimento = () => {
    setActualPage('atualizar');
    setAdicionar(false);
    setAtualizarEmpreendimento(true);
    setAdicionarImagens(false);
    setRemoverImagens(false);
    setRemover(false);
    setListar(false);
    setOrdenarProjetos(false);
    setToggleMenu(false);
  };

  const handleAtualizar = () => {
    setActualPage('adicionar-imagens');
    setAdicionar(false);
    setAtualizarEmpreendimento(false);
    setAdicionarImagens(true);
    setRemoverImagens(false);
    setRemover(false);
    setListar(false);
    setOrdenarProjetos(false);
    setToggleMenu(false);
  };

  const handleRemoverImagens = () => {
    setActualPage('remover-imagens');
    setAdicionar(false);
    setAtualizarEmpreendimento(false);
    setAdicionarImagens(false);
    setRemoverImagens(true);
    setRemover(false);
    setListar(false);
    setOrdenarProjetos(false);
    setToggleMenu(false);
  };

  const handleRemover = () => {
    setActualPage('remover');
    setAdicionar(false);
    setAtualizarEmpreendimento(false);
    setAdicionarImagens(false);
    setRemoverImagens(false);
    setRemover(true);
    setListar(false);
    setOrdenarProjetos(false);
    setToggleMenu(false);
  };

  const handleListar = () => {
    setActualPage('listar');
    setAdicionar(false);
    setAtualizarEmpreendimento(false);
    setAdicionarImagens(false);
    setRemoverImagens(false);
    setRemover(false);
    setListar(true);
    setOrdenarProjetos(false);
    setToggleMenu(false);
  };

  const handleOrdenarProjetos = () => {
    setActualPage('ordenar');
    setAdicionar(false);
    setAtualizarEmpreendimento(false);
    setAdicionarImagens(false);
    setRemoverImagens(false);
    setRemover(false);
    setListar(false);
    setOrdenarProjetos(true);
    setToggleMenu(false);
  };

  const handleActualPage = useCallback(() => {
    const localStorageActualPage = localStorage.getItem('@ProjPegaso:actualPanelPage');

    if (localStorageActualPage) {
      if (localStorageActualPage === 'adicionar') {
        handleAdicionar();
      }

      if (localStorageActualPage === 'listar') {
        handleListar();
      }

      if (localStorageActualPage === 'atualizar') {
        handleAtualizarEmpreendimento();
      }

      if (localStorageActualPage === 'remover') {
        handleRemover();
      }

      if (localStorageActualPage === 'adicionar-imagens') {
        handleAtualizar();
      }

      if (localStorageActualPage === 'remover-imagens') {
        handleRemoverImagens();
      }

      if (localStorageActualPage === 'ordenar') {
        handleOrdenarProjetos();
      }
    } else {
      handleAdicionar();
    }
  }, []);

  const getUserData = () => {
    const userLocalStorage = localStorage.getItem('@ProjPegaso:user');

    if (!userLocalStorage) {
      return;
    }

    const token = localStorage.getItem('@ProjPegaso:token');

    if (!token) {
      return;
    }

    const parsedUser = JSON.parse(userLocalStorage);

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    api
      .get(`/list-one-user/${parsedUser.id}`, config)
      .then(res => {
        const loggedUser: UserApiData = res.data.user;
        setLoggedUserData(loggedUser);
      })
      .catch(() => {
        localStorage.removeItem('@ProjPegaso:user');
        localStorage.removeItem('@ProjPegaso:token');
        setLoggedUserData({} as UserApiData);
        setUserData({} as UserDataFromStorage);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    localStorage.setItem('@ProjPegaso:actualPanelPage', actualPage);
  }, [actualPage]);

  useEffect(() => {
    handleActualPage();
  }, [handleActualPage]);

  return (
    <>
      {JSON.stringify(userData) === '{}' ? (
        <Container>
          <LoginPage />
        </Container>
      ) : (
        <>
          <Container>
            {width < 731 && (
              <FloatButtonDiv>
                <Hamburger
                  toggled={toggleMenu}
                  toggle={setToggleMenu}
                  size={25}
                  color="#f2f2f2"
                  duration={0.5}
                  easing="ease-in-out"
                />
              </FloatButtonDiv>
            )}

            <LeftMenu width={width} isOpened={toggleMenu}>
              <DadosAdmin>
                {width < 731 && <Logo src={logo} alt="Pégaso" />}

                {!loggedUserData ? (
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
                      strokeColor="#0e6387"
                      strokeWidth={6}
                      duration={800}
                    />
                  </div>
                ) : (
                  <>
                    <Name>
                      <strong>Usuário:</strong> <p>{loggedUserData!.nome}</p>
                    </Name>

                    <Name>
                      <strong>Email:</strong> <p>{loggedUserData!.email}</p>
                    </Name>
                  </>
                )}
              </DadosAdmin>

              <OpcaoMenu selected={adicionar} onClick={() => handleAdicionar()}>
                Adicionar empreendimento
              </OpcaoMenu>

              <OpcaoMenu
                selected={atualizarEmpreendimento}
                onClick={() => handleAtualizarEmpreendimento()}
              >
                Atualizar empreendimento
              </OpcaoMenu>

              <OpcaoMenu selected={remover} onClick={() => handleRemover()}>
                Remover empreendimento
              </OpcaoMenu>

              <OpcaoMenu selected={listar} onClick={() => handleListar()}>
                Listar empreendimentos
              </OpcaoMenu>

              <OpcaoMenu
                selected={ordenarProjetos}
                onClick={() => handleOrdenarProjetos()}
              >
                Ordenar Projetos
              </OpcaoMenu>

              <OpcaoMenu selected={adicionarImagens} onClick={() => handleAtualizar()}>
                Adicionar imagens
              </OpcaoMenu>

              <OpcaoMenu selected={removerImagens} onClick={() => handleRemoverImagens()}>
                Remover imagens
              </OpcaoMenu>

              <OpcaoMenu selected={false} onClick={() => handleDeslogar()}>
                Sair
              </OpcaoMenu>
            </LeftMenu>

            <Data>
              {adicionar && (
                <>
                  <AdicionarEmp />
                </>
              )}
              {atualizarEmpreendimento && (
                <>
                  <AtualizarEmpreendimento />
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
              {adicionarImagens && (
                <>
                  <AdicionarImagens />
                </>
              )}
              {removerImagens && (
                <>
                  <RemoverImagens />
                </>
              )}
              {ordenarProjetos && (
                <>
                  <OrdenarProjetos />
                </>
              )}
            </Data>
          </Container>
          {/* )} */}
        </>
      )}
    </>
  );
};

export default Painel;
