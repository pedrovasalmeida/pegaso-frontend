import React, { useState, useEffect } from "react";

import {
  Container,
  SubContainer,
  DivContato,
  DivAllContacts,
  DivDados,
  DivLogo,
  DivButtons,
  Button,
  Separator,
  MenuIcon,
  DivMenu,
  HiddenMenu,
  LinkRRD,
  HorizontalSeparator,
  EmailIcon,
  WhatsAppIcon,
  SacIcon,
  PhoneIcon,
} from "./styles";

import Logo from "../../assets/logo.png";

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
      <HiddenMenu onClick={() => handleOutsideClick()} isVisible={isVisible}>
        <LinkRRD to="/">
          <Button>HOME</Button>
        </LinkRRD>

        <HorizontalSeparator />

        <LinkRRD to="/quem-somos">
          <Button>QUEM SOMOS</Button>
        </LinkRRD>

        <HorizontalSeparator />

        <LinkRRD to="/empreendimentos">
          <Button>EMPREENDIMENTOS</Button>
        </LinkRRD>

        <HorizontalSeparator />

        <LinkRRD to="/portfolio">
          <Button>PORTFÓLIO</Button>
        </LinkRRD>

        <HorizontalSeparator />

        <LinkRRD to="/corretor">
          <Button>CORRETOR</Button>
        </LinkRRD>

        <HorizontalSeparator />

        <LinkRRD to="/fale-conosco">
          <Button>FALE CONOSCO</Button>
        </LinkRRD>
      </HiddenMenu>

      <Container>
        <DivLogo>
          <img src={Logo} alt="Logo" />
        </DivLogo>

        <SubContainer>
          <DivAllContacts>
            <DivContato>
              <EmailIcon />
              <DivDados>
                <span>E-mail</span>
                <p>contato@empresa.com.br</p>
              </DivDados>
            </DivContato>

            <DivContato>
              <SacIcon />
              <DivDados>
                <span>SAC</span>
                <p>31 9 9999-9999</p>
              </DivDados>
            </DivContato>

            <DivContato>
              <PhoneIcon />
              <DivDados>
                <span>Phone</span>
                <p>31 9 9999-9999</p>
              </DivDados>
            </DivContato>

            <DivContato>
              <WhatsAppIcon />
              <DivDados>
                <span>WhatsApp</span>
                <p>31 9 9999-9999</p>
              </DivDados>
            </DivContato>
          </DivAllContacts>

          <DivButtons>
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

            <LinkRRD to="/portfolio">
              <Button>PORTFÓLIO</Button>
            </LinkRRD>

            <Separator />

            <LinkRRD to="/corretor">
              <Button>CORRETOR</Button>
            </LinkRRD>

            <Separator />

            <LinkRRD to="/fale-conosco">
              <Button>FALE CONOSCO</Button>
            </LinkRRD>
          </DivButtons>
        </SubContainer>

        <DivMenu onClick={() => handleVisible()} isVisible={isVisible}>
          <span>{isVisible ? "Close" : "Menu"}</span>
          <MenuIcon />
        </DivMenu>
      </Container>
    </>
  );
};

export default Header;
