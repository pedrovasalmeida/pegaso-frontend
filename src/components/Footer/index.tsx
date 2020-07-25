import React, { useState, useEffect } from 'react';

import {
  Container,
  Data,
  Contact,
  Button,
  ContactIcon,
  ContactData,
  ContactName,
  ContactText,
  HorizontalSeparator,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Data />
      <Contact>
        <Button>
          <ContactIcon />
          <ContactData>
            <ContactName>WhatsApp</ContactName>
            <HorizontalSeparator />
            <ContactText>31 994178556</ContactText>
          </ContactData>
        </Button>

        <Button>
          <ContactIcon />
          <ContactData>
            <ContactName />
            <ContactName>Sac</ContactName>
            <HorizontalSeparator />
            <ContactText>31 994178556</ContactText>
          </ContactData>
        </Button>

        <Button>
          <ContactIcon />
          <ContactData>
            <ContactName>Vendas</ContactName>
            <HorizontalSeparator />
            <ContactText>31 93333333</ContactText>
          </ContactData>
        </Button>
        <Button>
          <ContactIcon />
          <ContactData>
            <ContactName>E-mail</ContactName>
            <HorizontalSeparator />
            <ContactText>contato@pegaso.com.br</ContactText>
          </ContactData>
        </Button>
      </Contact>
    </Container>
  );
};

export default Footer;
