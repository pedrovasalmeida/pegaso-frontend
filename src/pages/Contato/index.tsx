import React, { useState, useCallback } from 'react';

import { Preloader, ThreeDots } from 'react-preloader-icon';
import GoogleMapReact from 'google-map-react';

import api from '../../services/api';

import Footer from '../../components/Footer';

import {
  Container,
  ContactDiv,
  Contacts,
  Contact,
  Text,
  FormDiv,
  Form,
  Input,
  InputMessage,
  Title,
  Button,
  StatusMessage,
  PhoneIcon,
  LocationIcon,
  MailIcon,
  SendIcon,
} from './styles';

const SomeComponent = ({ text }: any) => <div>{text}</div>;

const Contato: React.FC = () => {
  const contactData = [
    {
      name: 'Location',
      icon: <LocationIcon size={50} />,
      text: 'Rua Teste, ao lado do Teste, nº 15, Novo Teste, Teste-TE',
    },
    {
      name: 'Phone',
      icon: <PhoneIcon size={50} />,
      text: '(31) 9 9876 - 5432',
    },
    {
      name: 'Mail',
      icon: <MailIcon size={50} />,
      text: 'teste@pegaso.com',
    },
  ];

  const [center, setCenter] = useState({ lat: -12.9778728, lng: -38.4404094 });
  const [zoom, setZoom] = useState(11);
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
    async (
      e,
      nome: string,
      email: string,
      contato: string,
      mensagem: string,
    ) => {
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
        .then((res) => {
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
        .catch((err) => {
          setIsError(true);
          setIsSended(false);
          setIsLoading(false);
          setCouldSend(false);
          setErrorMessage(
            'Ocorreu algum erro com o envio dos dados. Tente novamente!',
          );
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
              {contactData[0].icon}
              <Text>{contactData[0].text}</Text>
            </Contact>

            <div>
              <Contact>
                {contactData[1].icon}
                <Text>{contactData[1].text}</Text>
              </Contact>

              <Contact>
                {contactData[2].icon}
                <Text>{contactData[2].text}</Text>
              </Contact>
            </div>
          </Contacts>

          <div style={{ width: '100%', height: '50vh' }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyDwvVXrmufqKOeHvepsGplig7sX9nHQyFo',
              }}
              defaultCenter={center}
              defaultZoom={zoom}
            >
              <SomeComponent
                lat={-12.9778728}
                lng={-38.4404094}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </ContactDiv>

        <FormDiv>
          <Title>Entre em contato</Title>
          <Text>
            Para qualquer informação, dúvida ou comentário, por favor ligue:
            (11) 3456-7890. Ou preencha o fomulário:
          </Text>
          <Form>
            <Input
              type="text"
              placeholder="Nome"
              value={inputNome}
              onChange={(e) => handleInputNome(e.target.value)}
              required
            />

            <Input
              type="email"
              placeholder="E-mail"
              value={inputEmail}
              onChange={(e) => handleInputEmail(e.target.value)}
              required
            />

            <Input
              type="number"
              minLength={10}
              pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
              placeholder="Contato (Tel/Cel)"
              value={inputContato}
              onChange={(e) => handleInputContato(e.target.value)}
              required
            />

            <InputMessage
              minLength={10}
              placeholder="Mensagem"
              value={inputMensagem}
              onChange={(e) => handleInputMensagem(e.target.value)}
              required
            />

            <Button
              disabled={!couldSend}
              type="submit"
              onClick={(e) =>
                handleSendEmail(
                  e,
                  inputNome,
                  inputEmail,
                  inputContato,
                  inputMensagem,
                )
              }
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
                <span>
                  Obrigado por entrar em contato. Responderemos em breve!
                </span>
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
