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
  EmailIcon,
  ContactData,
  ContactText,
} from './styles';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import FooterMobile from '../FooterMobile';

const Footer: React.FC = () => {
  const msg = 'Olá!';
  const number = '+551140028922';
  const WhatsApp = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
    number,
  )}&text=${encodeURIComponent(msg)}`;

  const { width } = useWindowDimensions();

  const footerOptions = [
    {
      nome: 'WhatsApp',
      info: '31 93333333',
      linkExist: false,
      link: '/contato',
      icon: <WhatsAppIcon />,
      duration: 0.3,
    },
    // {
    //   nome: 'SAC',
    //   info: '31 93333333',
    //   linkExist: false,
    //   link: '/contato',
    //   icon: <SacIcon />,
    //   duration: 0.5,
    // },
    {
      nome: 'Vendas',
      info: '31 32999999',
      linkExist: false,
      link: '/contato',
      icon: <PhoneIcon />,
      duration: 0.7,
    },
    {
      nome: 'E-mail',
      info: 'contato@pegaso.com.br',
      linkExist: true,
      link: '/contato',
      icon: <EmailIcon />,
      duration: 0.9,
    },
  ];

  return (
    <>
      {width < 1280 ? (
        <FooterMobile />
      ) : (
        <Container>
          <Data>
            <motion.div animate={{ x: 50 }} transition={{ duration: 1 }}>
              <Text>© 2020 - St. James Comunicação</Text>
            </motion.div>
          </Data>

          <Contact>
            {footerOptions.map(option => (
              <React.Fragment key={option.nome}>
                {option.linkExist ? (
                  <Button
                    href={WhatsApp}
                    target="blank"
                    animate={{ x: -50 }}
                    transition={{ duration: option.duration }}
                  >
                    {option.icon}
                    <ContactData>
                      <ContactText>{option.info}</ContactText>
                    </ContactData>
                  </Button>
                ) : (
                  <Button
                    href={WhatsApp}
                    target="blank"
                    animate={{ x: -50 }}
                    transition={{ duration: option.duration }}
                  >
                    {option.icon}
                    <ContactData>
                      <ContactText>{option.info}</ContactText>
                    </ContactData>
                  </Button>
                )}
              </React.Fragment>
            ))}
          </Contact>
        </Container>
      )}
    </>
  );
};

export default Footer;
