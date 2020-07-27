import React from 'react';

import { motion } from 'framer-motion';

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
  const msg = 'Olá!';
  const number = '+551140028922';
  const WhatsApp = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
    number,
  )}&text=${encodeURIComponent(msg)}`;

  return (
    <Container>
      <Data>
        <motion.div animate={{ x: 150 }} transition={{ duration: 1 }}>
          <Text>© 2020 por St. James Comunicação</Text>
        </motion.div>
      </Data>

      <Contact>
        <Button
          href={WhatsApp}
          target="blank"
          animate={{ x: -150 }}
          transition={{ duration: 0.5 }}
          whileHover={{ translateX: 2 }}
        >
          <WhatsAppIcon />
          <ContactData>
            <ContactName>WhatsApp</ContactName>
            <HorizontalSeparator />
            <ContactText>31 994178556</ContactText>
          </ContactData>
        </Button>

        <Button
          animate={{ x: -150 }}
          transition={{ duration: 0.7 }}
          whileHover={{ translateX: 2 }}
        >
          <SacIcon />
          <ContactData>
            <ContactName />
            <ContactName>Sac</ContactName>
            <HorizontalSeparator />
            <ContactText>31 994178556</ContactText>
          </ContactData>
        </Button>

        <Button
          animate={{ x: -150 }}
          transition={{ duration: 1 }}
          whileHover={{ translateX: 2 }}
        >
          <PhoneIcon />
          <ContactData>
            <ContactName>Vendas</ContactName>
            <HorizontalSeparator />
            <ContactText>31 93333333</ContactText>
          </ContactData>
        </Button>

        <Button
          animate={{ x: -150 }}
          transition={{ duration: 1.3 }}
          whileHover={{ translateX: 2 }}
        >
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
