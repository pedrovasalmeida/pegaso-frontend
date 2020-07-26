import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import {
  Container,
  Data,
  Text,
  Contact,
  Button,
  MotionButton,
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
        <motion.div animate={{ x: 150 }} transition={{ duration: 3 }}>
          <Text>© 2020 por St. James Comunicação</Text>
        </motion.div>
      </Data>

      <Contact animate={{ x: -150 }} transition={{ duration: 3 }}>
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
