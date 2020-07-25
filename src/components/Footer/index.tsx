import React, { useState, useEffect } from 'react';

import {
  Container,
  Data,
  Text,
  Contact,
  Button,
  WhatsAppIcon,
  PhoneIcon,
  SacIcon,
  EmailIcon,
  ContactData,
  ContactName,
  ContactText,
  HorizontalSeparator,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Data>
        <Text>© 2020 por Pegaso</Text>
      </Data>
      <Contact>
        <Button>
          <WhatsAppIcon />
          <ContactData>
            <ContactName>WhatsApp</ContactName>
            <HorizontalSeparator />
            <ContactText>31 994178556</ContactText>
          </ContactData>
        </Button>

        <Button>
          <SacIcon />
          <ContactData>
            <ContactName />
            <ContactName>Sac</ContactName>
            <HorizontalSeparator />
            <ContactText>31 994178556</ContactText>
          </ContactData>
        </Button>

        <Button>
          <PhoneIcon />
          <ContactData>
            <ContactName>Vendas</ContactName>
            <HorizontalSeparator />
            <ContactText>31 93333333</ContactText>
          </ContactData>
        </Button>
        <Button>
          <EmailIcon />
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
