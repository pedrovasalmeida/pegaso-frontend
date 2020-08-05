import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import {
  Container,
  SubContainer,
  DivLogo,
  DivButtons,
  Button,
  Separator,
  MenuIcon,
  DivMenu,
  LinkRRD,
  HiddenMenu,
  LinkRRDHiddenMenu,
  HorizontalSeparator,
} from './styles';

import Logo from '../../assets/logo.png';

import HeaderMobile from '../HeaderMobile';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const { width, height } = useWindowDimensions();

  const menuOptions = [
    { rota: '/', nome: 'HOME' },
    { rota: '/quem-somos', nome: 'QUEM SOMOS' },
    { rota: '/empreendimentos', nome: 'EMPREENDIMENTOS' },
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
      {width < 760 ? (
        <HeaderMobile />
      ) : (
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

          <DivMenu onClick={() => handleVisible()} isVisible={isVisible}>
            <span>{isVisible ? 'Close' : 'Menu'}</span>
            <MenuIcon />
          </DivMenu>
        </Container>
      )}
    </>
  );
};

export default Header;
