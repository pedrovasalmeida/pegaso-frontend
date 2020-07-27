import React, { useState, useCallback } from 'react';

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
  Separator,
  WhiteSpace,
  SendIcon,
} from './styles';

const Contato: React.FC = () => {
  const [inputNome, setInputNome] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputContato, setInputContato] = useState('');
  const [inputMensagem, setInputMensagem] = useState('');

  const handleInputNome = useCallback(
    (value: string) => {
      setInputNome(value);
    },
    [inputNome],
  );

  const handleInputEmail = useCallback(
    (value: string) => {
      setInputEmail(value);
    },
    [inputEmail],
  );

  const handleInputContato = useCallback(
    (value: string) => {
      setInputContato(value);
    },
    [inputContato],
  );

  const handleInputMensagem = useCallback(
    (value: string) => {
      setInputMensagem(value);
    },
    [inputMensagem],
  );

  return (
    <Container>
      <DivDireita>
        <Titulo animate={{ x: 100 }} transition={{ duration: 0.3 }}>
          Informações
        </Titulo>
        <Texto animate={{ x: 100 }} transition={{ duration: 0.5 }}>
          Para qualquer informação, dúvida ou comentário, por favor ligue: (11)
          3456-7890. Ou preencha o fomulário:
        </Texto>

        <Form>
          <Input
            type="text"
            placeholder={'Nome'}
            value={inputNome}
            onChange={(e) => handleInputNome(e.target.value)}
            animate={{ x: 100 }}
            transition={{ duration: 0.7 }}
          />

          <Input
            type="email"
            animate={{ x: 100 }}
            transition={{ duration: 0.9 }}
            placeholder={'E-mail'}
            value={inputEmail}
            onChange={(e) => handleInputEmail(e.target.value)}
          />

          <Input
            animate={{ x: 100 }}
            transition={{ duration: 1.1 }}
            placeholder={'Contato (Tel/Cel)'}
            value={inputContato}
            onChange={(e) => handleInputContato(e.target.value)}
          />

          <InputMessage
            animate={{ x: 100 }}
            transition={{ duration: 1.3 }}
            placeholder={'Mensagem'}
            value={inputMensagem}
            onChange={(e) => handleInputMensagem(e.target.value)}
          />

          <Button
            animate={{ x: 100 }}
            transition={{ duration: 1.5 }}
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <SendIcon />
            Enviar
          </Button>
        </Form>
      </DivDireita>

      <DivEsquerda>
        <Titulo animate={{ x: -100 }} transition={{ duration: 0.3 }}>
          Endereço
        </Titulo>

        <Texto animate={{ x: -100 }} transition={{ duration: 0.5 }}>
          Rua José Antônio Tourinho Dantas, 2410, Cond. Caminho das Águas, Praia
          do Flamengo, Salvador-BA
        </Texto>

        <Texto animate={{ x: -100 }} transition={{ duration: 0.7 }}>
          CEP: 35950-000
        </Texto>

        <WhiteSpace />
        <Titulo animate={{ x: -100 }} transition={{ duration: 0.9 }}>
          Contato
        </Titulo>

        <Texto animate={{ x: -100 }} transition={{ duration: 1.1 }}>
          Tel: (11) 3456-7890
        </Texto>
        <Texto animate={{ x: -100 }} transition={{ duration: 1.3 }}>
          Fax: (11) 3456-7890
        </Texto>
        <Texto animate={{ x: -100 }} transition={{ duration: 1.5 }}>
          WhatsApp: (11) 93456-7890
        </Texto>

        <WhiteSpace />
        <Texto animate={{ x: -100 }} transition={{ duration: 1.7 }}>
          comercial@pegaso.com.br
        </Texto>
        <Texto animate={{ x: -100 }} transition={{ duration: 1.9 }}>
          parceiros@pegaso.com.br
        </Texto>
        <Texto animate={{ x: -100 }} transition={{ duration: 2.1 }}>
          vagas@pegaso.com.br
        </Texto>
      </DivEsquerda>
    </Container>
  );
};

export default Contato;
