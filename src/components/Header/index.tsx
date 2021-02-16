import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import Logo from '../../assets/logo.png';

import {
  Container,
  SubContainer,
  DivLogo,
  DivButtons,
  Text,
  DivMenu,
  MenuIcon,
  LinkRRD,
  HiddenMenu,
  LinkRRDHiddenMenu,
  Button,
  HorizontalSeparator,
} from './styles';

const Header: React.FC = () => {
  const { width } = useWindowDimensions();
  const location = useLocation();
  const history = useHistory();

  const [isVisible, setIsVisible] = useState(false);

  const menuOptions = [
    { rota: '/', nome: 'HOME' },
    { rota: '/quem-somos', nome: 'QUEM SOMOS' },
    { rota: '/parceiros', nome: 'PARCEIROS' },
    { rota: '/servicos', nome: 'SERVIÇOS PRESTADOS' },
    { rota: '/obras', nome: 'OBRAS REALIZADAS' },
    { rota: '/contato', nome: 'CONTATO' },
  ];

  const handleVisible = () => (isVisible ? setIsVisible(false) : setIsVisible(true));

  const handleOutsideClick = () => {
    setIsVisible(false);
  };

  const navigateToHome = () => {
    history.push('/');
  };

  return (
    <>
      {width < 1235 ? (
        <>
          <HiddenMenu onClick={() => handleOutsideClick()} isVisible={isVisible}>
            {menuOptions.map((option, index) => (
              <React.Fragment key={option.nome}>
                <LinkRRDHiddenMenu
                  to={option.rota}
                  selected={option.rota === location.pathname}
                >
                  <Button>{option.nome}</Button>
                </LinkRRDHiddenMenu>
                {index + 1 !== menuOptions.length && <HorizontalSeparator />}
              </React.Fragment>
            ))}
          </HiddenMenu>
          <Container>
            <DivLogo
              animate={{ x: 25 }}
              transition={{ duration: 1 }}
              onClick={() => navigateToHome()}
            >
              <img src={Logo} alt="Logo" />
            </DivLogo>

            <DivMenu onClick={() => handleVisible()} isVisible={isVisible}>
              <span>{isVisible ? 'Close' : 'Menu'}</span>
              <MenuIcon />
            </DivMenu>
          </Container>
        </>
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
                <LinkRRD
                  key={option.nome}
                  to={option.rota}
                  selected={option.rota === location.pathname}
                >
                  <Text>{option.nome}</Text>
                </LinkRRD>
              ))}
            </DivButtons>
          </SubContainer>
        </Container>
      )}
    </>
  );
};

export default Header;
