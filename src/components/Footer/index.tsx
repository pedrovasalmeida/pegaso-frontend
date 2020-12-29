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
  LinkRRD,
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
      info: '31 93333333',
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
              <Text>© 2020 por St. James Comunicação</Text>
            </motion.div>
          </Data>

          <Contact>
            {footerOptions.map((option) => (
              <>
                {option.linkExist ? (
                  <LinkRRD to={option.link}>
                    <Button
                      href={WhatsApp}
                      target="blank"
                      animate={{ x: -50 }}
                      transition={{ duration: option.duration }}
                      whileHover={{ translateX: 2 }}
                    >
                      {option.icon}
                      <ContactData>
                        <ContactText>{option.info}</ContactText>
                      </ContactData>
                    </Button>
                  </LinkRRD>
                ) : (
                  <Button
                    href={WhatsApp}
                    target="blank"
                    animate={{ x: -50 }}
                    transition={{ duration: option.duration }}
                    whileHover={{ translateX: 2 }}
                  >
                    {option.icon}
                    <ContactData>
                      <ContactText>{option.info}</ContactText>
                    </ContactData>
                  </Button>
                )}
              </>
            ))}
          </Contact>
        </Container>
      )}
    </>
  );
};

export default Footer;
