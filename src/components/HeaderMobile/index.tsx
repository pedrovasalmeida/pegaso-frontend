import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import {
  Container,
  DivLogo,
  Button,
  MenuIcon,
  DivMenu,
  HiddenMenu,
  LinkRRDHiddenMenu,
  HorizontalSeparator,
} from './styles';

import Logo from '../../assets/logo.png';

const HeaderMobile: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const menuOptions = [
    { rota: '/', nome: 'HOME' },
    { rota: '/quem-somos', nome: 'QUEM SOMOS' },
    { rota: '/parceiros', nome: 'PARCEIROS' },
    { rota: '/servicos', nome: 'SERVIÇOS PRESTADOS' },
    { rota: '/empreendimentos', nome: 'EMPREENDIMENTOS' },
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
      <HiddenMenu onClick={() => handleOutsideClick()} isVisible={isVisible}>
        {menuOptions.map(option => (
          <React.Fragment key={option.nome}>
            <LinkRRDHiddenMenu
              to={option.rota}
              selected={option.rota === location.pathname}
            >
              <Button>{option.nome}</Button>
            </LinkRRDHiddenMenu>

            <HorizontalSeparator />
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
  );
};

export default HeaderMobile;
