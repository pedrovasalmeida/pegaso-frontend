import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import {
  Container,
  DivLogo,
  DivButtons,
  Button,
  Separator,
  MenuIcon,
  DivMenu,
  HiddenMenu,
  HorizontalSeparator,
} from "./styles";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    isVisible ? setIsVisible(false) : setIsVisible(true);
  };

  const setWH = () => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    // document.querySelector('.window-size').innerHTML = windowWidth + 'x' + windowHeight;
    let windowSize = document.querySelector(".window-size");
    let screenSize = document.querySelector(".window-size");

    console.log("windowWidth: " + windowWidth);
    console.log("windowHeight: " + windowHeight);
    console.log("screenWidth: " + screenWidth);
    console.log("screenHeight: " + screenHeight);
  };

  useEffect(() => {
    setWH();
    window.addEventListener("resize", () => {
      setWH();
    });
  });

  return (
    <>
      <HiddenMenu isVisible={isVisible}>
        <Link to="/">
          <Button>HOME</Button>
        </Link>

        <HorizontalSeparator />

        <Link to="/quem-somos">
          <Button>QUEM SOMOS</Button>
        </Link>

        <HorizontalSeparator />

        <Link to="/empreendimentos">
          <Button>EMPREENDIMENTOS</Button>
        </Link>

        <HorizontalSeparator />

        <Link to="/portfolio">
          <Button>PORTFÓLIO</Button>
        </Link>

        <HorizontalSeparator />

        <Link to="/corretor">
          <Button>CORRETOR</Button>
        </Link>

        <HorizontalSeparator />

        <Link to="/fale-conosco">
          <Button>FALE CONOSCO</Button>
        </Link>
      </HiddenMenu>

      <Container>
        <DivLogo>
          <span>Logo</span>
        </DivLogo>

        <DivButtons>
          <Link to="/">
            <Button>HOME</Button>
          </Link>

          <Separator />

          <Link to="/quem-somos">
            <Button>QUEM SOMOS</Button>
          </Link>

          <Separator />

          <Link to="/empreendimentos">
            <Button>EMPREENDIMENTOS</Button>
          </Link>

          <Separator />

          <Link to="/portfolio">
            <Button>PORTFÓLIO</Button>
          </Link>

          <Separator />

          <Link to="/corretor">
            <Button>CORRETOR</Button>
          </Link>

          <Separator />

          <Link to="/fale-conosco">
            <Button>FALE CONOSCO</Button>
          </Link>
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
