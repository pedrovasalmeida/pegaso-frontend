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
  HiddenMenuTitle,
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
              initial={{ x: 25, opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              onClick={() => navigateToHome()}
            >
              <img src={Logo} alt="Logo" />
            </DivLogo>

            <DivMenu onClick={() => handleVisible()} isVisible={isVisible}>
              <HiddenMenuTitle
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                isVisible={isVisible}
              >
                {isVisible ? 'Close' : 'Menu'}
                <MenuIcon />
              </HiddenMenuTitle>
            </DivMenu>
          </Container>
        </>
      ) : (
        <Container>
          <DivLogo
            initial={{ x: 100, opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            onClick={() => navigateToHome()}
          >
            <img src={Logo} alt="Logo" />
          </DivLogo>

          <SubContainer>
            <DivButtons
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: -100, opacity: 1 }}
              transition={{ duration: 1, type: 'tween' }}
            >
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
