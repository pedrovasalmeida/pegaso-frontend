import React, { useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import {
  Container,
  SubContainer,
  DivLogo,
  DivButtons,
  Button,
  Separator,
  LinkRRD,
} from './styles';

import Logo from '../../assets/logo.png';

import HeaderMobile from '../HeaderMobile';

const Header: React.FC = () => {
  const { width } = useWindowDimensions();
  const location = useLocation();
  const history = useHistory();

  const menuOptions = [
    { rota: '/', nome: 'HOME' },
    { rota: '/quem-somos', nome: 'QUEM SOMOS' },
    { rota: '/empreendimentos', nome: 'EMPREENDIMENTOS' },
    { rota: '/contato', nome: 'CONTATO' },
    { rota: '/painel', nome: 'PAINEL' },
  ];

  const navigateToHome = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <>
      {width < 996 ? (
        <HeaderMobile />
      ) : (
        <Container>
          <DivLogo
            animate={{ x: 100 }}
            transition={{ duration: 1 }}
            onClick={() => navigateToHome()}
          >
            <img src={Logo} alt="Logo" />
          </DivLogo>

          <SubContainer>
            <DivButtons animate={{ x: -100 }} transition={{ duration: 1 }}>
              {menuOptions.map((option, index) => (
                <>
                  <LinkRRD
                    key={option.nome}
                    to={option.rota}
                    selected={option.rota === location.pathname ? true : false}
                  >
                    <Button
                      selected={
                        option.rota === location.pathname ? true : false
                      }
                    >
                      {option.nome}
                    </Button>
                  </LinkRRD>

                  <Separator />
                </>
              ))}
            </DivButtons>
          </SubContainer>
        </Container>
      )}
    </>
  );
};

export default Header;
