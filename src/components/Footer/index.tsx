import React from 'react';

import { motion } from 'framer-motion';

import {
  Container,
  Data,
  Text,
  Contact,
  Button,
  LinkRRD,
  WhatsAppIcon,
  PhoneIcon,
  EmailIcon,
  ContactData,
  ContactText,
} from './styles';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import FooterMobile from '../FooterMobile';

const Footer: React.FC = () => {
  const number = '+5571999087283';
  const WhatsApp = `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}`;
  const InstagramLink = 'https://www.instagram.com/construtorapegaso';

  const { width } = useWindowDimensions();

  const footerOptions = [
    {
      nome: 'WhatsApp',
      info: '(71) 9 9908 - 7283',
      linkExist: false,
      link: WhatsApp,
      icon: <WhatsAppIcon />,
      duration: 0.5,
    },
    {
      nome: 'Instagram',
      info: 'construtorapegaso',
      linkExist: false,
      link: InstagramLink,
      icon: <PhoneIcon />,
      duration: 0.7,
    },
    {
      nome: 'E-mail',
      info: 'pegasoengenharia@outlook.com',
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
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
            >
              <Text>© 2024 - Construtora Pegaso</Text>
            </motion.div>
          </Data>

          <Contact>
            {footerOptions.map(option => (
              <React.Fragment key={option.nome}>
                {option.link === '/contato' ? (
                  <LinkRRD to="/contato">
                    <Button
                      href="#"
                      target="blank"
                      initial={{ y: 50 }}
                      animate={{ y: 0 }}
                      transition={{ duration: option.duration }}
                    >
                      {option.icon}
                      <ContactData>
                        <ContactText>{option.info}</ContactText>
                      </ContactData>
                    </Button>
                  </LinkRRD>
                ) : (
                  <Button
                    href={option.link}
                    target="blank"
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
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
