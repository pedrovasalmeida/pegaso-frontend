import React, { useState } from 'react';

import {
  Container,
  Data,
  Button,
  WhatsAppIcon,
  PhoneIcon,
  EmailIcon,
  ContactName,
  LinkRRD,
  Modal,
  CloseIcon,
  TitleModal,
  TextModal,
} from './styles';

const FooterMobile: React.FC = () => {
  const msg = 'Olá!';
  const number = '+551140028922';
  const WhatsApp = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
    number,
  )}&text=${encodeURIComponent(msg)}`;

  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState('');

  const handleModal = (nome: string) => {
    setModal(!modal);
    setTitle(nome);
  };

  const handleClickOutsite = () => {
    setModal(false);
  };

  const footerOptions1 = [
    {
      nome: 'WhatsApp',
      info: '31 93333333',
      linkExist: false,
      link: '/',
      icon: <WhatsAppIcon />,
      duration: 0.3,
      modal: false,
    },
    // {
    //   nome: 'SAC',
    //   info: '31 93333333',
    //   linkExist: false,
    //   link: '/',
    //   icon: <SacIcon />,
    //   duration: 0.5,
    //   modal: true,
    // },
    {
      nome: 'Vendas',
      info: '31 93333333',
      linkExist: false,
      link: '/',
      icon: <PhoneIcon />,
      duration: 0.7,
      modal: true,
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
    <>
      {modal && (
        <Modal>
          <CloseIcon onClick={() => handleClickOutsite()} />
          {title === 'SAC' ? (
            <>
              <TextModal>Dúvidas, reclamações ou sugestões?</TextModal>
              <TitleModal>
                Entre em contato com nosso {title} <span>pelo telefone: </span>
              </TitleModal>
              <TextModal>
                <strong>31 933333333</strong>
              </TextModal>
            </>
          ) : (
            <>
              <TitleModal>
                Para maiores informações sobre
                {title}
              </TitleModal>
              <TextModal>
                Entre em contato pelo telefone: <br />
                <strong>31 933333333</strong>
              </TextModal>
            </>
          )}
        </Modal>
      )}
      <Container>
        <Data>
          {footerOptions1.map((option) => (
            <>
              {option.linkExist ? (
                <LinkRRD to={option.link}>
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
                <>
                  {option.modal ? (
                    <Button
                      animate={{ y: 0 }}
                      transition={{ duration: option.duration }}
                      whileHover={{ translateX: 2 }}
                      onClick={() => handleModal(option.nome)}
                    >
                      {option.icon}
                      <ContactName>{option.info}</ContactName>
                    </Button>
                  ) : (
                    <Button
                      href={WhatsApp}
                      target="blank"
                      animate={{ y: 0 }}
                      transition={{ duration: option.duration }}
                      whileHover={{ translateX: 2 }}
                    >
                      {option.icon}
                      <ContactName>{option.info}</ContactName>
                    </Button>
                  )}
                </>
              )}
            </>
          ))}
        </Data>
      </Container>
    </>
  );
};

export default FooterMobile;
