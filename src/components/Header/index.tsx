import React, { useState } from "react";

import {
  Container,
  DivLogo,
  DivButtons,
  Button,
  Separator,
  MenuIcon,
  CloseIcon,
  DivMenu,
  HiddenMenu,
  HorizontalSeparator,
} from "./styles";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    isVisible ? setIsVisible(false) : setIsVisible(true);
  };

  return (
    <>
      <HiddenMenu isVisible={isVisible}>
        <Button>HOME</Button>
        <HorizontalSeparator />
        <Button>QUEM SOMOS</Button>
        <HorizontalSeparator />
        <Button>EMPREENDIMENTOS</Button>
        <HorizontalSeparator />
        <Button>PORTIFÓLIO</Button>
        <HorizontalSeparator />
        <Button>CORRETOR</Button>
        <HorizontalSeparator />
        <Button>FALE CONOSCO</Button>
      </HiddenMenu>
      <Container>
        <DivLogo>
          <span>Logo</span>
        </DivLogo>
        <DivButtons>
          <Button>HOME</Button>
          <Separator />
          <Button>QUEM SOMOS</Button>
          <Separator />
          <Button>EMPREENDIMENTOS</Button>
          <Separator />
          <Button>PORTIFÓLIO</Button>
          <Separator />
          <Button>CORRETOR</Button>
          <Separator />
          <Button>FALE CONOSCO</Button>
        </DivButtons>
        <DivMenu onClick={() => handleVisible()} isVisible={isVisible}>
          <span>{isVisible ? "Close" : "Menu"}</span>
          <MenuIcon />
        </DivMenu>
      </Container>
    </>
  );
};

export default Header;
