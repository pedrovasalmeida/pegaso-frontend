import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  Container,
  SubContainer,
  DivLogo,
  DivButtons,
  Button,
  Separator,
  MenuIcon,
  DivMenu,
  HiddenMenu,
  LinkRRD,
} from './styles';

import Logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  console.log(location.pathname);

  const menuOptions = [
    { rota: '/', nome: 'HOME' },
    { rota: '/quem-somos', nome: 'QUEM SOMOS' },
    { rota: '/empreendimentos', nome: 'EMPREENDIMENTOS' },
    { rota: '/portfolio', nome: 'PORTFÓLIO' },
    { rota: '/contato', nome: 'CONTATO' },
    { rota: '/painel', nome: 'PAINEL' },
  ];

  const handleVisible = () => {
    isVisible ? setIsVisible(false) : setIsVisible(true);
  };

  const handleOutsideClick = () => {
    setIsVisible(false);
  };

  return (
    <>
      {/* <HiddenMenu onClick={() => handleOutsideClick()} isVisible={isVisible}>
        <LinkRRDHiddenMenu to="/">
          <Button>HOME</Button>
        </LinkRRDHiddenMenu>

        <HorizontalSeparator />

        <LinkRRDHiddenMenu to="/quem-somos">
          <Button>QUEM SOMOS</Button>
        </LinkRRDHiddenMenu>

        <HorizontalSeparator />

        <LinkRRDHiddenMenu to="/empreendimentos">
          <Button>EMPREENDIMENTOS</Button>
        </LinkRRDHiddenMenu>

        <HorizontalSeparator />

        <LinkRRDHiddenMenu to="/portfolio">
          <Button>PORTFÓLIO</Button>
        </LinkRRDHiddenMenu>

        <HorizontalSeparator />

        <LinkRRDHiddenMenu to="/corretor">
          <Button>CONTATO</Button>
        </LinkRRDHiddenMenu>

        <HorizontalSeparator />

        <LinkRRDHiddenMenu to="/painel">
          <Button>PAINEL</Button>
        </LinkRRDHiddenMenu>
      </HiddenMenu> */}

      <Container>
        <DivLogo animate={{ x: 100 }} transition={{ duration: 1 }}>
          <img src={Logo} alt="Logo" />
        </DivLogo>

        <SubContainer>
          <DivButtons animate={{ x: -100 }} transition={{ duration: 1 }}>
            {menuOptions.map((option) => (
              <>
                <LinkRRD
                  to={option.rota}
                  selected={option.rota === location.pathname ? true : false}
                >
                  <Button
                    selected={option.rota === location.pathname ? true : false}
                  >
                    {option.nome}
                  </Button>
                </LinkRRD>

                <Separator />
              </>
            ))}
          </DivButtons>
        </SubContainer>

        <DivMenu onClick={() => handleVisible()} isVisible={isVisible}>
          <span>{isVisible ? 'Close' : 'Menu'}</span>
          <MenuIcon />
        </DivMenu>
      </Container>
    </>
  );
};

export default Header;
