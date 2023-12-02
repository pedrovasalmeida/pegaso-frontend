import React, { useState, useCallback } from 'react';
import GoogleMapReact from 'google-map-react';

import { Preloader, ThreeDots } from 'react-preloader-icon';
import Footer from '../../components/Footer';

import api from '../../services/api';

import {
  Container,
  WrapperMapsAndForm,
  GoogleMapsDiv,
  MapMarker,
  FormDiv,
  Title,
  Text,
  Form,
  Input,
  InputMessage,
  Button,
  StatusMessage,
  WrapperContacts,
  Adresses,
  Contacts,
  ContactTitle,
  Contact,
  ContactLink,
  SendIcon,
  PhoneIcon,
  MailIcon,
  LocationIcon,
  ContatoNT,
  ContatoText,
} from './styles';
import { emailApi } from '../../services/email';

const { REACT_APP_API_GOOGLE_MAPS } = process.env;
let API_GOOGLE_MAPS: any;

if (REACT_APP_API_GOOGLE_MAPS !== undefined) {
  API_GOOGLE_MAPS = REACT_APP_API_GOOGLE_MAPS;
} else {
  API_GOOGLE_MAPS = 'unknown';
}

const WhatsAppNumber = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
  '+5571999087283',
)}`;

const Contato: React.FC = () => {
  const [inputNome, setInputNome] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputContato, setInputContato] = useState('');
  const [inputMensagem, setInputMensagem] = useState('');

  const [loadingSendEmail, setLoadingSendEmail] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSended, setIsSended] = useState(false);
  const [couldSend, setCouldSend] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const googleMapsOptions = {
    center: { lat: -12.984606816010935, lng: -38.450350821104934 },
    zoom: 13,
  };

  function handleInputValue(type: string, value: string): void {
    switch (type) {
      case 'nome':
        setInputNome(value);
        break;

      case 'email':
        setInputEmail(value);
        break;

      case 'contato':
        setInputContato(value);
        break;

      case 'mensagem':
        setInputMensagem(value);
        break;

      default:
        console.log('default');
    }
  }

  const handleSendEmail = useCallback(
    async (e, nome: string, email: string, contato: string, mensagem: string) => {
      e.preventDefault();

      setLoadingSendEmail(true);

      if (!nome || !email || !contato || !mensagem) {
        setLoadingSendEmail(false);
        setIsError(true);
        setIsSended(false);
        setCouldSend(false);
        setErrorMessage('Preencha todos os campos!');

        setTimeout(() => {
          setLoadingSendEmail(false);
          setIsError(false);
          setIsSended(false);
          setCouldSend(true);
          setErrorMessage('');
        }, 5000);
        return;
      }

      if (!email.match(/.+@.+/)) {
        setLoadingSendEmail(false);
        setIsError(true);
        setIsSended(false);
        setCouldSend(false);
        setErrorMessage('E-mail inválido. Tente novamente!');

        setTimeout(() => {
          setLoadingSendEmail(false);
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
        service_id: 'service_1q2q3q4',
        template_id: '',
        user_id: '',
        template_params: {
          from_name: inputNome,
          contact_email: inputEmail,
          contact_fone: inputContato,
          message: inputMensagem,
        }
      };

      emailApi.post('/send', data)
      .then(() => {
        setLoadingSendEmail(false);
        setIsError(false);
        setIsSended(true);
        setCouldSend(false);
        setTimeout(() => {
          setLoadingSendEmail(false);
          setIsError(false);
          setIsSended(false);
          setCouldSend(true);
        }, 10000);
      })
      .catch(() => {
        setIsError(true);
        setIsSended(false);
        setLoadingSendEmail(false);
        setCouldSend(false);
        setErrorMessage('Ocorreu algum erro com o envio dos dados. Tente novamente!');
        setTimeout(() => {
          setLoadingSendEmail(false);
          setIsError(false);
          setIsSended(false);
          setCouldSend(true);
          setErrorMessage('');
        }, 10000);
      });


      setTimeout(() => {
        setLoadingSendEmail(false);
        setIsError(false);
        setIsSended(true);
        setCouldSend(false);
      }, 1000);

      setTimeout(() => {
        setLoadingSendEmail(false);
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
        <WrapperMapsAndForm>
          <GoogleMapsDiv
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <GoogleMapReact
              bootstrapURLKeys={{
                key: API_GOOGLE_MAPS,
              }}
              defaultCenter={googleMapsOptions.center}
              defaultZoom={googleMapsOptions.zoom}
              center={googleMapsOptions.center}
              zoom={googleMapsOptions.zoom}
            >
              <MapMarker
                lat={googleMapsOptions.center.lat}
                lng={googleMapsOptions.center.lng}
              />
            </GoogleMapReact>
          </GoogleMapsDiv>
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
                onChange={e => handleInputValue('nome', e.target.value)}
                required
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              <Input
                type="email"
                placeholder="E-mail"
                value={inputEmail}
                onChange={e => handleInputValue('email', e.target.value)}
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
                onChange={e => handleInputValue('contato', e.target.value)}
                required
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9 }}
              />

              <InputMessage
                minLength={10}
                placeholder="Mensagem"
                value={inputMensagem}
                onChange={e => handleInputValue('mensagem', e.target.value)}
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
              {loadingSendEmail && (
                <StatusMessage isLoading={loadingSendEmail} isError={false}>
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
        </WrapperMapsAndForm>
        <WrapperContacts>
          <Adresses>
            <ContactTitle
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Endereço
            </ContactTitle>
            <ContactLink
              href="https://www.google.com.br/maps/place/EDF.+Atlanta+Empresarial/@-12.9846262,-38.4525944,17z/data=!4m12!1m6!3m5!1s0x7161b0f7a5364df:0xcf979c0077f7795c!2sEDF.+Atlanta+Empresarial!8m2!3d-12.9846314!4d-38.4504057!3m4!1s0x7161b0f7a5364df:0xcf979c0077f7795c!8m2!3d-12.9846314!4d-38.4504057"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <LocationIcon size={40} />
              <Text>
                R. Doutor Jose Peroba, 297 Edf: Atlanta Empresarial, Sala: 907, Stiep,
                Salvador - BA,
              </Text>
            </ContactLink>

            <ContactTitle
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="with-margin-top"
            >
              Filiais
            </ContactTitle>

            <ContactLink
              href="https://www.google.com.br/maps/place/Condom%C3%ADnio+do+Edif%C3%ADcio+JCPM+Trade+Center/@-8.0894952,-34.8842093,17z/data=!4m8!1m2!2m1!1sJCPM+Trade+Center!3m4!1s0x0:0x33edd5e97ff13d0a!8m2!3d-8.0895004!4d-34.8820203"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <LocationIcon size={40} />
              <Text>
                Av. Antônio de Goes, 60, JCPM Trade Center - 7º andar - Boa Viagem, Recife
                - PE
              </Text>
            </ContactLink>
            <ContactLink
              href="https://www.google.com.br/maps/place/Amadeus+Business+Tower/@-19.9391612,-43.9428591,17z/data=!4m12!1m6!3m5!1s0xa699d76d82ff5f:0x928c468011ccf1ce!2sAmadeus+Business+Tower!8m2!3d-19.9391663!4d-43.9406704!3m4!1s0xa699d76d82ff5f:0x928c468011ccf1ce!8m2!3d-19.9391663!4d-43.9406704"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <LocationIcon size={40} />
              <Text>
                R. Rosa Maria Savassi, 30, Amadeus Business Tower - 16º andar, Belo
                Horizonte - MG
              </Text>
            </ContactLink>
            <ContactLink
              href="https://www.google.com.br/maps/place/Office+Prime+Bel%C3%A9m+-+Escrit%C3%B3rio+virtual/@-1.4499998,-48.4915104,17z/data=!3m1!4b1!4m5!3m4!1s0x92a48e90902dc61b:0xa5e9da611b0efd69!8m2!3d-1.4500052!4d-48.4893217"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <LocationIcon size={40} />
              <Text>
                Travessa Rui Barbosa, 897, Office Prime Business Center, Belém - PA
              </Text>
            </ContactLink>
          </Adresses>
          <Contacts>
            <ContactTitle
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="title-with-margin-top"
            >
              Contato
            </ContactTitle>
            <Contact>
              <ContactLink
                href={WhatsAppNumber}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Text>
                  <PhoneIcon size={40} />
                  (71) 9 9908-7283
                </Text>
              </ContactLink>
            </Contact>
            <ContatoNT
              style={{ cursor: 'default' }}
              className="contact-email"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <ContatoText>
                <MailIcon size={40} />
                pegasoengenharia@outlook.com
              </ContatoText>
            </ContatoNT>
          </Contacts>
        </WrapperContacts>
      </Container>
      <Footer />
    </>
  );
};

export default Contato;
