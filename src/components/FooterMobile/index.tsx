import React from 'react';

import {
  Container,
  Data,
  Button,
  WhatsAppIcon,
  InstaIcon,
  EmailIcon,
  ContactName,
  LinkRRD,
} from './styles';

const FooterMobile: React.FC = () => {
  const msg = 'Olá!';
  const number = '+551140028922';
  const WhatsApp = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
    number,
  )}&text=${encodeURIComponent(msg)}`;
  const InstagramLink = 'https://www.instagram.com/pegasoeng/';

  const footerOptions1 = [
    {
      nome: 'WhatsApp',
      info: '(71) 9 9908 - 7283',
      linkExist: false,
      link: WhatsApp,
      icon: <WhatsAppIcon />,
      duration: 0.3,
      modal: false,
    },
    {
      nome: 'Instagram',
      info: 'pegasoeng',
      linkExist: false,
      link: InstagramLink,
      icon: <InstaIcon />,
      duration: 0.7,
    },
    {
      nome: 'E-mail',
      info: 'contato@pegaso.com.br',
      linkExist: true,
      link: '/contato',
      icon: <EmailIcon />,
      duration: 0.9,
      modal: false,
    },
  ];

  return (
    <Container>
      <Data>
        {footerOptions1.map(option => (
          <React.Fragment key={option.nome}>
            {option.link === '/contato' ? (
              <LinkRRD to="/contato">
                <Button
                  target="blank"
                  animate={{ y: 0 }}
                  transition={{ duration: option.duration }}
                  whileHover={{ translateX: 2 }}
                  linkExist={option.linkExist}
                >
                  {option.icon}
                  <ContactName>{option.info}</ContactName>
                </Button>
              </LinkRRD>
            ) : (
              <Button
                href={option.link}
                target="blank"
                animate={{ y: 0 }}
                transition={{ duration: option.duration }}
                whileHover={{ translateX: 2 }}
                linkExist={option.linkExist}
              >
                {option.icon}
                <ContactName>{option.info}</ContactName>
              </Button>
            )}
          </React.Fragment>
        ))}
      </Data>
    </Container>
  );
};

export default FooterMobile;
