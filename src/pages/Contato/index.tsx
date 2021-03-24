import React, { useState, useCallback } from 'react';

import { Preloader, ThreeDots } from 'react-preloader-icon';
import GoogleMapReact from 'google-map-react';

import api from '../../services/api';

import Footer from '../../components/Footer';

import {
  Container,
  ContactDiv,
  Contacts,
  Adresses,
  Contact,
  ContactTitle,
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
      text: '(71) 9 9908-7283',
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
          <GoogleMapsDiv
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
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
              <MapMarker lat={center.lat} lng={center.lng} />
            </GoogleMapReact>
          </GoogleMapsDiv>

          <Contacts>
            <ContactTitle
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Endereço
            </ContactTitle>
            <div className="wrapper">
              <Contact infoName={contactData[0].name}>
                <ContactLink
                  href="https://www.google.com.br/maps/place/EDF.+Atlanta+Empresarial/@-12.9846262,-38.4525944,17z/data=!4m12!1m6!3m5!1s0x7161b0f7a5364df:0xcf979c0077f7795c!2sEDF.+Atlanta+Empresarial!8m2!3d-12.9846314!4d-38.4504057!3m4!1s0x7161b0f7a5364df:0xcf979c0077f7795c!8m2!3d-12.9846314!4d-38.4504057"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {contactData[0].icon}
                  <Text>{contactData[0].text}</Text>
                </ContactLink>
              </Contact>

              <Adresses>
                <ContactTitle
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  Filiais
                </ContactTitle>
                <Contact infoName={contactData[0].name}>
                  <ContactLink
                    href="https://www.google.com.br/maps/place/Condom%C3%ADnio+do+Edif%C3%ADcio+JCPM+Trade+Center/@-8.0894952,-34.8842093,17z/data=!4m8!1m2!2m1!1sJCPM+Trade+Center!3m4!1s0x0:0x33edd5e97ff13d0a!8m2!3d-8.0895004!4d-34.8820203
                    "
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {contactData[0].icon}
                    <Text>
                      Av. Antônio de Goes, 60, JCPM Trade Center - 7º andar - Boa Viagem,
                      Recife - PE
                    </Text>
                  </ContactLink>
                </Contact>
                <Contact infoName={contactData[0].name}>
                  <ContactLink
                    href="https://www.google.com.br/maps/place/Amadeus+Business+Tower/@-19.9391612,-43.9428591,17z/data=!4m12!1m6!3m5!1s0xa699d76d82ff5f:0x928c468011ccf1ce!2sAmadeus+Business+Tower!8m2!3d-19.9391663!4d-43.9406704!3m4!1s0xa699d76d82ff5f:0x928c468011ccf1ce!8m2!3d-19.9391663!4d-43.9406704"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {contactData[0].icon}
                    <Text>
                      R. Rosa Maria Savassi, 30, Amadeus Business Tower - 16º andar, Belo
                      Horizonte - MG
                    </Text>
                  </ContactLink>
                </Contact>
                <Contact infoName={contactData[0].name}>
                  <ContactLink
                    href="https://www.google.com.br/maps/place/Office+Prime+Bel%C3%A9m+-+Escrit%C3%B3rio+virtual/@-1.4499998,-48.4915104,17z/data=!3m1!4b1!4m5!3m4!1s0x92a48e90902dc61b:0xa5e9da611b0efd69!8m2!3d-1.4500052!4d-48.4893217"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {contactData[0].icon}
                    <Text>
                      Travessa Rui Barbosa, 897, Office Prime Business Center, Belém - PA
                    </Text>
                  </ContactLink>
                </Contact>
              </Adresses>
            </div>

            <ContactTitle
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Contato
            </ContactTitle>

            <SecondLine
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <Contact>
                <ContactLink href={WhatsApp} target="_blank" rel="noopener noreferrer">
                  {contactData[1].icon}
                  <Text>{contactData[1].text}</Text>
                </ContactLink>
              </Contact>

              <Contact style={{ cursor: 'default' }}>
                {contactData[2].icon}
                <Text>{contactData[2].text}</Text>
              </Contact>
            </SecondLine>
          </Contacts>
        </ContactDiv>

        <FormDiv>
          <Title
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            Entre em contato
          </Title>
          <Text
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45 }}
          >
            Ligue ou preencha o formulário:
          </Text>
          <Form>
            <Input
              type="text"
              placeholder="Nome"
              value={inputNome}
              onChange={e => handleInputNome(e.target.value)}
              required
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            <Input
              type="email"
              placeholder="E-mail"
              value={inputEmail}
              onChange={e => handleInputEmail(e.target.value)}
              required
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
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
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
            />

            <InputMessage
              minLength={10}
              placeholder="Mensagem"
              value={inputMensagem}
              onChange={e => handleInputMensagem(e.target.value)}
              required
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1 }}
            />

            <Button
              disabled={!couldSend}
              type="submit"
              onClick={e =>
                handleSendEmail(e, inputNome, inputEmail, inputContato, inputMensagem)
              }
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
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
