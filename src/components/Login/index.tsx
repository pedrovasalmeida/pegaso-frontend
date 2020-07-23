import React, { useState, useCallback, useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';

import { Link } from 'react-router-dom';

import {
  Container,
  Separator,
  Form,
  LoginIcon,
  SignInIcon,
  CreateAccountIcon,
} from './styles';

interface SignInFormData {
  login: string;
  password: string;
}

const Login: React.FC = () => {
  const [inputLogin, setInputLogin] = useState('');
  const [inputSenha, setInputSenha] = useState('');

  const { signIn } = useContext(AuthContext);

  const handleInputLogin = useCallback(
    (string: string) => {
      setInputLogin(string);
    },
    [inputLogin],
  );

  const handleInputSenha = useCallback(
    (string: string) => {
      setInputSenha(string);
    },
    [inputLogin],
  );

  const handleSubmit = useCallback(
    async (
      data: SignInFormData,
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
      e.preventDefault();

      const { login, password } = data;

      if (login.length < 5) return console.log('Login invalido');
      if (password.length < 5) return console.log('Senha invalida');

      signIn!({ login, password });
    },
    [signIn],
  );

  return (
    <Container>
      <Form>
        <Separator />
        <h1>Faça seu logon</h1>

        <input
          placeholder={'Login'}
          value={inputLogin}
          onChange={(e) => handleInputLogin(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={inputSenha}
          onChange={(e) => handleInputSenha(e.target.value)}
        />

        <button
          type="submit"
          onClick={(e) =>
            handleSubmit({ login: inputLogin, password: inputSenha }, e)
          }
        >
          <SignInIcon />
          Entrar
        </button>

        <Link to="/forgot-password">Esqueci minha senha</Link>
        <Link to="/create-account">
          <CreateAccountIcon />
          Criar conta
        </Link>
        <Separator />
        <span>by Pegaso</span>
      </Form>
    </Container>
  );
};

export default Login;
