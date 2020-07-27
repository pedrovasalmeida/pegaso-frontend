import React, { useState } from 'react';

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
            <LinkRRD to="/">
              <Button>HOME</Button>
            </LinkRRD>

            <Separator />

            <LinkRRD to="/quem-somos">
              <Button>QUEM SOMOS</Button>
            </LinkRRD>

            <Separator />

            <LinkRRD to="/empreendimentos">
              <Button>EMPREENDIMENTOS</Button>
            </LinkRRD>

            <Separator />

            {/* <LinkRRD to="/portfolio">
              <Button>PORTFÓLIO</Button>
            </LinkRRD>

            <Separator />

            <LinkRRD to="/corretor">
              <Button>CONTATO</Button>
            </LinkRRD>

            <Separator />

            <LinkRRD to="/painel">
              <Button>PAINEL</Button>
            </LinkRRD> */}
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
