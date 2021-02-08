import React, { useState, useCallback } from 'react';

import { Preloader, ThreeDots } from 'react-preloader-icon';
import GoogleMapReact from 'google-map-react';

import api from '../../services/api';

import Footer from '../../components/Footer';

import LogoForMaps from '../../assets/logo-no-text.png';

import {
  Container,
  ContactDiv,
  Contacts,
  Contact,
  ContactLink,
  SecondLine,
  GoogleMapsDiv,
  Text,
  FormDiv,
  Form,
  Input,
  InputMessage,
  Title,
  Button,
  StatusMessage,
  MapMarker,
  PhoneIcon,
  LocationIcon,
  MailIcon,
  SendIcon,
} from './styles';

const { REACT_APP_API_GOOGLE_MAPS } = process.env;

const Contato: React.FC = () => {
  const [inputNome, setInputNome] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputContato, setInputContato] = useState('');
  const [inputMensagem, setInputMensagem] = useState('');
  const [isError, setIsError] = useState(false);
  /** se está carregando o envio ou não */
  const [isLoading, setIsLoading] = useState(false);
  /** se o email foi enviado ou não */
  const [isSended, setIsSended] = useState(false);
  /** se o email foi enviado ou não */
  const [couldSend, setCouldSend] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  /** Google Map React Props */
  const center = { lat: -12.984606816010935, lng: -38.450350821104934 };
  const zoom = 13;

  const number = '+5571999087283';
  const WhatsApp = `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}`;

  let API_GOOGLE_MAPS: any;

  if (REACT_APP_API_GOOGLE_MAPS !== undefined) {
    API_GOOGLE_MAPS = REACT_APP_API_GOOGLE_MAPS;
  } else {
    API_GOOGLE_MAPS = 'unknown';
  }

  const contactData = [
    {
      name: 'Location',
      icon: <LocationIcon size={40} />,
      text:
        'R. Doutor Jose Peroba, 297 Edf: Atlanta Empresarial, Sala: 907, Stiep, Salvador - BA',
    },
    {
      name: 'Phone',
      icon: <PhoneIcon size={40} />,
      text: '(71) 9 9908-7283 | (71) 3018-5649',
    },
    {
      name: 'Mail',
      icon: <MailIcon size={40} />,
      text: 'pegasoengenharia@outlook.com',
    },
  ];

  const handleInputNome = useCallback((value: string) => {
    setInputNome(value);
  }, []);

  const handleInputEmail = useCallback((value: string) => {
    setInputEmail(value);
  }, []);

  const handleInputContato = useCallback((value: string) => {
    setInputContato(value);
  }, []);

  const handleInputMensagem = useCallback((value: string) => {
    setInputMensagem(value);
  }, []);

  const handleSendEmail = useCallback(
    async (e, nome: string, email: string, contato: string, mensagem: string) => {
      e.preventDefault();

      setIsLoading(true);

      if (!nome || !email || !contato || !mensagem) {
        setIsLoading(false);
        setIsError(true);
        setIsSended(false);
        setCouldSend(false);
        setErrorMessage('Preencha todos os campos!');

        setTimeout(() => {
          setIsLoading(false);
          setIsError(false);
          setIsSended(false);
          setCouldSend(true);
          setErrorMessage('');
        }, 5000);
        return;
      }

      if (!email.match(/.+@.+/)) {
        setIsLoading(false);
        setIsError(true);
        setIsSended(false);
        setCouldSend(false);
        setErrorMessage('E-mail inválido. Tente novamente!');

        setTimeout(() => {
          setIsLoading(false);
          setIsError(false);
          setIsSended(false);
          setCouldSend(true);
          setErrorMessage('');
        }, 5000);
        return;
      }

      setIsError(false);
      setIsSended(false);

      const data = {
        nome,
        email,
        contato,
        mensagem,
      };

      await api
        .post('/send-mail', data)
        .then(() => {
          setIsLoading(false);
          setIsError(false);
          setIsSended(true);
          setCouldSend(false);
          setTimeout(() => {
            setIsLoading(false);
            setIsError(false);
            setIsSended(false);
            setCouldSend(true);
          }, 10000);
        })
        .catch(() => {
          setIsError(true);
          setIsSended(false);
          setIsLoading(false);
          setCouldSend(false);
          setErrorMessage('Ocorreu algum erro com o envio dos dados. Tente novamente!');
          setTimeout(() => {
            setIsLoading(false);
            setIsError(false);
            setIsSended(false);
            setCouldSend(true);
            setErrorMessage('');
          }, 10000);
        });

      setTimeout(() => {
        setIsLoading(false);
        setIsError(false);
        setIsSended(true);
        setCouldSend(false);
      }, 1000);

      setTimeout(() => {
        setIsLoading(false);
        setIsError(false);
        setIsSended(false);
        setCouldSend(true);
      }, 5000);
    },
    [],
  );

  return (
    <>
      <Container>
        <ContactDiv>
          <Contacts>
            <Contact infoName={contactData[0].name}>
              <ContactLink
                href="https://www.google.com.br/maps/place/EDF.+Atlanta+Empresarial/@-12.9846262,-38.4525944,17z/data=!4m12!1m6!3m5!1s0x7161b0f7a5364df:0xcf979c0077f7795c!2sEDF.+Atlanta+Empresarial!8m2!3d-12.9846314!4d-38.4504057!3m4!1s0x7161b0f7a5364df:0xcf979c0077f7795c!8m2!3d-12.9846314!4d-38.4504057"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {contactData[0].icon}
                <Text style={{ fontFamily: 'Roboto' }}>{contactData[0].text}</Text>
              </ContactLink>
            </Contact>

            <SecondLine
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              <Contact>
                <ContactLink
                  href={WhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ x: -50 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {contactData[1].icon}
                  <Text style={{ fontFamily: 'Roboto' }}>{contactData[1].text}</Text>
                </ContactLink>
              </Contact>

              <Contact>
                {contactData[2].icon}
                <Text style={{ fontFamily: 'Roboto' }}>{contactData[2].text}</Text>
              </Contact>
            </SecondLine>
          </Contacts>

          <GoogleMapsDiv
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <GoogleMapReact
              bootstrapURLKeys={{
                key: API_GOOGLE_MAPS,
              }}
              defaultCenter={center}
              defaultZoom={zoom}
              center={center}
              zoom={zoom}
            >
              <MapMarker lat={center.lat} lng={center.lng}>
                <img src={LogoForMaps} alt="Pégaso" />
              </MapMarker>
            </GoogleMapReact>
          </GoogleMapsDiv>
        </ContactDiv>

        <FormDiv>
          <Title initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 0.4 }}>
            Entre em contato
          </Title>
          <Text initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 0.45 }}>
            Para qualquer informação, dúvida ou comentário ligue: (71) 3018-5649 ou
            preencha o fomulário:
          </Text>
          <Form>
            <Input
              type="text"
              placeholder="Nome"
              value={inputNome}
              onChange={e => handleInputNome(e.target.value)}
              required
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            />

            <Input
              type="email"
              placeholder="E-mail"
              value={inputEmail}
              onChange={e => handleInputEmail(e.target.value)}
              required
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7 }}
            />

            <Input
              type="number"
              minLength={10}
              pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
              placeholder="Contato (Tel/Cel)"
              value={inputContato}
              onChange={e => handleInputContato(e.target.value)}
              required
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.9 }}
            />

            <InputMessage
              minLength={10}
              placeholder="Mensagem"
              value={inputMensagem}
              onChange={e => handleInputMensagem(e.target.value)}
              required
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.1 }}
            />

            <Button
              disabled={!couldSend}
              type="submit"
              onClick={e =>
                handleSendEmail(e, inputNome, inputEmail, inputContato, inputMensagem)
              }
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.3 }}
            >
              <SendIcon />
              Enviar
            </Button>
            {isLoading && (
              <StatusMessage isLoading={isLoading} isError={false}>
                <Preloader
                  use={ThreeDots}
                  size={40}
                  strokeWidth={6}
                  strokeColor="#262626"
                  duration={2000}
                />
              </StatusMessage>
            )}
            {isError && (
              <StatusMessage isLoading={false} isError={isError}>
                <span>{errorMessage}</span>
              </StatusMessage>
            )}
            {isSended && (
              <StatusMessage isLoading={false} isError={false}>
                <span>Obrigado por entrar em contato. Responderemos em breve!</span>
              </StatusMessage>
            )}
          </Form>
        </FormDiv>
      </Container>
      <Footer />
    </>
  );
};

export default Contato;
