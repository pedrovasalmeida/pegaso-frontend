import React, { useState, useCallback } from 'react';

import { Preloader, ThreeDots } from 'react-preloader-icon';
import api from '../../../services/api';

import {
  Container,
  Form,
  Input,
  InputMessage,
  Button,
  DivDireita,
  Titulo,
  Texto,
  DivEsquerda,
  WhiteSpace,
  SendIcon,
  SucessMessage,
  ErrorMessage,
  LoadingMessage,
  DivStateMessages,
} from './styles';

import useWindowDimensions from '../../../hooks/useWindowDimensions';
import Footer from '../../../components/Footer';

const Contato: React.FC = () => {
  const [inputNome, setInputNome] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputContato, setInputContato] = useState('');
  const [inputMensagem, setInputMensagem] = useState('');
  /** se ocorreu um erro ou não */
  const [isError, setIsError] = useState(false);
  /** se está carregando o envio ou não */
  const [isLoading, setIsLoading] = useState(false);
  /** se o email foi enviado ou não */
  const [isSended, setIsSended] = useState(false);
  /** se o email foi enviado ou não */
  const [couldSend, setCouldSend] = useState(true);

  const { width } = useWindowDimensions();

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

        setTimeout(() => {
          setIsLoading(false);
          setIsError(false);
          setIsSended(false);
          setCouldSend(true);
        }, 5000);
        return;
      }

      if (!email.match(/.+@.+/)) {
        setIsLoading(false);
        setIsError(true);
        setIsSended(false);
        setCouldSend(false);

        setTimeout(() => {
          setIsLoading(false);
          setIsError(false);
          setIsSended(false);
          setCouldSend(true);
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
          setTimeout(() => {
            setIsLoading(false);
            setIsError(false);
            setIsSended(false);
            setCouldSend(true);
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
      }, 8000);
    },
    [],
  );

  return (
    <>
      <Container>
        <DivEsquerda>
          <Titulo>Endereço</Titulo>

          <Texto>
            Rua José Antônio Tourinho Dantas, 2410, Cond. Caminho das Águas,
            Praia do Flamengo, Salvador-BA
          </Texto>

          <Texto>CEP: 35950-000</Texto>

          <WhiteSpace />
          <Titulo>Contato</Titulo>

          <Texto>Tel: (11) 3456-7890</Texto>
          <Texto>Fax: (11) 3456-7890</Texto>
          <Texto>WhatsApp: (11) 93456-7890</Texto>

          <WhiteSpace />
          <Texto>comercial@pegaso.com.br</Texto>
          <Texto>parceiros@pegaso.com.br</Texto>
          <Texto>vagas@pegaso.com.br</Texto>

          <DivStateMessages>
            {isLoading && (
              <LoadingMessage>
                <Preloader
                  use={ThreeDots}
                  size={60}
                  strokeWidth={6}
                  strokeColor="#324286"
                  duration={800}
                />
              </LoadingMessage>
            )}

            {isError && (
              <ErrorMessage>
                Algo deu errado. <br />
                Por favor, tente novamente
                <br /> em 5 segundos!
              </ErrorMessage>
            )}

            {isSended && (
              <SucessMessage>
                E-mail enviado com sucesso.
                <br />
                Em breve, entraremos em contato!
              </SucessMessage>
            )}
          </DivStateMessages>
        </DivEsquerda>

        <DivDireita>
          <Titulo animate={{ x: -85 }} transition={{ duration: 0.3 }}>
            Informações
          </Titulo>
          <Texto animate={{ x: -85 }} transition={{ duration: 0.5 }}>
            Para qualquer informação, dúvida ou comentário, por favor ligue:
            (11) 3456-7890. Ou preencha o fomulário:
          </Texto>

          <Form>
            <Input
              type="text"
              placeholder="Nome"
              value={inputNome}
              onChange={(e) => handleInputNome(e.target.value)}
              animate={{ x: -85 }}
              transition={{ duration: 0.7 }}
              required
            />

            <Input
              type="email"
              animate={{ x: -85 }}
              transition={{ duration: 0.9 }}
              placeholder="E-mail"
              value={inputEmail}
              onChange={(e) => handleInputEmail(e.target.value)}
              required
            />

            <Input
              type="number"
              minLength={10}
              pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
              animate={{ x: -85 }}
              transition={{ duration: 1.1 }}
              placeholder="Contato (Tel/Cel)"
              value={inputContato}
              onChange={(e) => handleInputContato(e.target.value)}
              required
            />

            <InputMessage
              animate={{ x: -85 }}
              minLength={10}
              transition={{ duration: 1.3 }}
              placeholder="Mensagem"
              value={inputMensagem}
              onChange={(e) => handleInputMensagem(e.target.value)}
              required
            />

            <Button
              disabled={!couldSend}
              animate={{ x: -85 }}
              transition={{ duration: 1.5 }}
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
          </Form>
        </DivDireita>
      </Container>
      <Footer />
    </>
  );
};

export default Contato;
