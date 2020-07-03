import React, { useState, useEffect } from "react";

import {
  Container,
  EmailIcon,
  WhatsAppIcon,
  SacIcon,
  PhoneIcon,
} from "./styles";

const VerticalFooter: React.FC = () => {
  return <div />;
};

const Footer: React.FC = () => {
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
    <Container>
      <div>
        <EmailIcon />
        <div>
          <span>E-mail</span>
          <p>contato@empresa.com.br</p>
        </div>
      </div>
      <div>
        <SacIcon />
        <div>
          <span>SAC</span>
          <p>31 9 9999-9999</p>
        </div>
      </div>

      <div>
        <WhatsAppIcon />
        <div>
          <span>WhatsApp</span>
          <p>31 9 9999-9999</p>
        </div>
      </div>
      <div>
        <PhoneIcon />
        <div>
          <span>Vendas</span>
          <p>31 9 9999-9999</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
